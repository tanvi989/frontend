import { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCamera } from '@pf/hooks/useCamera';
import { useFaceDetection } from '@pf/hooks/useFaceDetection';
import { useCaptureData } from '@pf/context/CaptureContext';
import { useVoiceGuidance } from '@pf/hooks/useVoiceGuidance';
import { CameraPermission } from './CameraPermission';
import { FaceGuideOverlay } from './FaceGuideOverlay';
import { ChevronLeft, X, Camera, RotateCcw, Volume2, Glasses } from 'lucide-react';
import { detectGlasses, removeGlasses, detectLandmarks } from '@pf/services/glassesApi';
import { toast } from 'sonner';

interface CaptureCameraProps {
  onBack?: () => void;
  onClose?: () => void;
}

export function CaptureCamera({ onBack, onClose }: CaptureCameraProps = {}) {
  const navigate = useNavigate();
  const { cameraState, error, videoRef, streamRef, requestCamera, stopCamera } = useCamera();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoSize, setVideoSize] = useState({ width: 1280, height: 720 });
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [isCapturing, setIsCapturing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const { setCapturedData } = useCaptureData();
  const { speakGuidance, speak, cancel: cancelVoice, currentMessage } = useVoiceGuidance({ enabled: true, debounceMs: 3000 });

  const faceValidationState = useFaceDetection({
    videoRef,
    canvasRef,
    isActive: cameraState === 'granted' && !isCapturing && !isProcessing,
  });

  // All checks passed - just face validation now
  const allChecksPassed = faceValidationState.allChecksPassed;

  // Voice guidance for face positioning
  useEffect(() => {
    if (cameraState === 'granted' && !isCapturing && !isProcessing && faceValidationState.faceDetected) {
      if (!allChecksPassed) {
        speakGuidance(faceValidationState.validationChecks);
      }
    }
  }, [
    cameraState,
    isCapturing,
    isProcessing,
    faceValidationState.faceDetected,
    allChecksPassed,
    faceValidationState.validationChecks,
    speakGuidance,
  ]);

  // Cancel voice when capturing starts
  useEffect(() => {
    if (isCapturing || isProcessing) {
      cancelVoice();
    }
  }, [isCapturing, isProcessing, cancelVoice]);

  // Attach stream to video element when both are available
  useEffect(() => {
    const video = videoRef.current;
    const stream = streamRef.current;
    
    if (video && stream && cameraState === 'granted') {
      video.srcObject = stream;
      video.play().catch(console.error);
    }
  }, [videoRef, streamRef, cameraState]);

  // Track video dimensions
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoSize({
        width: video.videoWidth,
        height: video.videoHeight,
      });
    };

    if (video.videoWidth > 0) {
      setVideoSize({ width: video.videoWidth, height: video.videoHeight });
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoRef, cameraState]);

  // Capture and process image
  const captureAndProcess = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !faceValidationState.landmarks) return;

    setIsProcessing(true);
    
    try {
      // Capture image from video
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      if (facingMode === 'user') {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(video, 0, 0);

      const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);

      speak('You can relax now. Image captured.');

      // Step 1: Detect glasses
      setProcessingStep('Detecting glasses...');
      const detectResult = await detectGlasses(imageDataUrl);
      
      let processedImageDataUrl = imageDataUrl;
      let glassesDetected = false;

      // Step 2: Remove glasses if detected
      if (detectResult.success && detectResult.glasses_detected) {
        glassesDetected = true;
        setProcessingStep('Removing glasses...');
        const removeResult = await removeGlasses(imageDataUrl);
        if (removeResult.success && removeResult.edited_image_base64) {
          processedImageDataUrl = `data:image/png;base64,${removeResult.edited_image_base64}`;
        }
      }

      // Step 3: Get measurements from API
      setProcessingStep('Measuring face dimensions...');
      const measureResult = await detectLandmarks(processedImageDataUrl);

      if (!measureResult.success || !measureResult.landmarks?.mm) {
        throw new Error('Failed to get measurements');
      }

      // Save data and navigate - include full API landmarks response
      setCapturedData({
        imageDataUrl,
        processedImageDataUrl,
        glassesDetected,
        landmarks: faceValidationState.landmarks,
        measurements: measureResult.landmarks.mm,
        faceShape: measureResult.landmarks.face_shape,
        apiResponse: measureResult,
        timestamp: Date.now(),
      });

      navigate('/perfect-fit/results');
    } catch (err) {
      console.error('Processing error:', err);
      toast.error('Failed to process image. Please try again.');
      setIsCapturing(false);
      setIsProcessing(false);
    }
  }, [videoRef, faceValidationState.landmarks, setCapturedData, navigate, speak, facingMode]);

  // MFit-style: capture immediately when all checks pass (no countdown)
  useEffect(() => {
    if (allChecksPassed && !isCapturing && !isProcessing && faceValidationState.landmarks) {
      setIsCapturing(true);
      captureAndProcess();
    }
  }, [allChecksPassed, isCapturing, isProcessing, faceValidationState.landmarks, captureAndProcess]);

  const handleRequestCamera = useCallback(() => {
    requestCamera(facingMode);
  }, [requestCamera, facingMode]);

  const switchCamera = useCallback(() => {
    const next = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(next);
    stopCamera();
    requestCamera(next);
  }, [facingMode, stopCamera, requestCamera]);

  if (cameraState !== 'granted') {
    return (
      <CameraPermission
        cameraState={cameraState}
        error={error}
        onRequestCamera={handleRequestCamera}
      />
    );
  }

  return (
    <div className="h-screen w-screen bg-black relative overflow-hidden" ref={containerRef}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style={{
          transform: facingMode === 'user' ? 'scaleX(-1)' : 'none',
          opacity: isProcessing ? 0.2 : 1,
        }}
      />
      <canvas ref={canvasRef} className="hidden" />

      <FaceGuideOverlay
        isValid={allChecksPassed}
        faceDetected={faceValidationState.faceDetected}
        validationChecks={faceValidationState.validationChecks}
        showValidationChecklist={false}
      />

      {/* Voice prompt bar – same as MFit */}
      {currentMessage && !isProcessing && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-6 py-2 rounded-full text-white flex items-center gap-3 z-20 pointer-events-none">
          <Volume2 className="w-4 h-4 text-[hsl(199,89%,48%)] animate-pulse" />
          <span className="text-xs font-bold tracking-wide uppercase">{currentMessage}</span>
        </div>
      )}

      {/* Back button – same as MFit */}
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="absolute top-4 left-4 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-30 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Close (X) – same as MFit */}
      <button
        type="button"
        onClick={onClose ?? (() => navigate('/'))}
        className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white z-30"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Bottom controls – same as MFit */}
      {!isProcessing && (
        <>
          <button
            type="button"
            onClick={switchCamera}
            className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-30 border border-white/20"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => { if (faceValidationState.faceDetected && !isCapturing) { setIsCapturing(true); captureAndProcess(); } }}
            disabled={!faceValidationState.faceDetected || isCapturing}
            className="absolute bottom-4 right-4 bg-[hsl(199,89%,48%)] text-white px-8 py-3 rounded-full font-black tracking-widest shadow-2xl hover:scale-105 transition-all z-30 disabled:bg-gray-600 border border-white/20 flex items-center gap-2 italic"
          >
            <Camera className="w-5 h-5" /> SNAP
          </button>
        </>
      )}

      {/* After capture: eyewear-themed message + loader */}
      {isProcessing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          {/* Main message */}
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-center px-6 mb-2 max-w-md">
            You can relax — we're finding your perfect frame fit.
          </p>
          <p className="text-white/80 text-sm sm:text-base text-center px-6 mb-10">
            Analyzing your face shape and measurements for the best eyewear match.
          </p>

          {/* Eyewear-style loader: ring + glasses icon */}
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Outer spinning ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-white/20"
                aria-hidden
              />
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-white border-r-white/60 animate-spin"
                style={{ animationDuration: '0.9s' }}
                aria-hidden
              />
              {/* Inner glow ring */}
              <div
                className="absolute inset-2 rounded-full border border-white/30"
                aria-hidden
              />
              <Glasses className="w-10 h-10 text-white/95 drop-shadow-lg" strokeWidth={1.5} />
            </div>
            <p className="text-white/90 text-xs font-medium uppercase tracking-[0.2em]">
              {processingStep}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
