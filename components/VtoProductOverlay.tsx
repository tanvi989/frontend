import React, { useState, useEffect, useRef } from 'react';
import type { CapturedData, FaceLandmarks } from '@/types/face-validation';
import { parseDimensionsString } from '@/utils/frameDimensions';
import { getVtoImageUrl } from '@/api/retailerApis';
import { computeFrameOverlayTransform } from '@/utils/frameOverlayTransform';

/** Defaults matching FramesTab so /glasses matches VTO when no adjustments saved */
const DEFAULT_FRAME_ADJUSTMENTS = { offsetX: -14, offsetY: -23, scaleAdjust: 1.3, rotationAdjust: 0 };

/** Convert landmark 0-1 from full image to 0-1 in cropped image using cropRect */
function landmarkFullToCropped(
  nx: number,
  ny: number,
  r: { fullWidth: number; fullHeight: number; sx: number; sy: number; sw: number; sh: number }
): { x: number; y: number } {
  const nxc = (nx * r.fullWidth - r.sx) / r.sw;
  const nyc = (ny * r.fullHeight - r.sy) / r.sh;
  return { x: Math.max(0, Math.min(1, nxc)), y: Math.max(0, Math.min(1, nyc)) };
}

function landmarksToCropped(lm: FaceLandmarks, cropRect: NonNullable<CapturedData['cropRect']>): FaceLandmarks {
  const pt = (nx: number, ny: number) => landmarkFullToCropped(nx, ny, cropRect);
  const bridge = (lm as FaceLandmarks & { bridge?: { x: number; y: number; z: number } }).bridge;
  const withZ = (x: number, y: number, z: number) => ({ ...pt(x, y), z });
  return {
    leftEye: withZ(lm.leftEye.x, lm.leftEye.y, lm.leftEye.z),
    rightEye: withZ(lm.rightEye.x, lm.rightEye.y, lm.rightEye.z),
    noseTip: withZ(lm.noseTip.x, lm.noseTip.y, lm.noseTip.z),
    leftEar: withZ(lm.leftEar.x, lm.leftEar.y, lm.leftEar.z),
    rightEar: withZ(lm.rightEar.x, lm.rightEar.y, lm.rightEar.z),
    chin: withZ(lm.chin.x, lm.chin.y, lm.chin.z),
    forehead: withZ(lm.forehead.x, lm.forehead.y, lm.forehead.z),
    leftEyeUpper: withZ(lm.leftEyeUpper.x, lm.leftEyeUpper.y, lm.leftEyeUpper.z),
    leftEyeLower: withZ(lm.leftEyeLower.x, lm.leftEyeLower.y, lm.leftEyeLower.z),
    rightEyeUpper: withZ(lm.rightEyeUpper.x, lm.rightEyeUpper.y, lm.rightEyeUpper.z),
    rightEyeLower: withZ(lm.rightEyeLower.x, lm.rightEyeLower.y, lm.rightEyeLower.z),
    faceLeft: withZ(lm.faceLeft.x, lm.faceLeft.y, lm.faceLeft.z),
    faceRight: withZ(lm.faceRight.x, lm.faceRight.y, lm.faceRight.z),
    ...(bridge ? { bridge: { x: pt(bridge.x, bridge.y).x, y: pt(bridge.x, bridge.y).y, z: bridge.z } } : {}),
  } as FaceLandmarks;
}

interface VtoProductOverlayProps {
  captureSession: CapturedData;
  productSkuid: string;
  productDimensions?: string;
  productName: string;
  /** When true, hide the small frame thumbnail (e.g. for product page preview box) */
  compact?: boolean;
}

/**
 * VTO Product Overlay - Uses cropped image on /glasses when saved from VTO; frame alignment from VTO is preserved.
 * Only the frame is swapped per product (each product's frame width/size); same position/rotation as you aligned in VTO.
 */
export function VtoProductOverlay({
  captureSession,
  productSkuid,
  productDimensions,
  productName,
  compact = false,
}: VtoProductOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [frameError, setFrameError] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [imageNaturalSize, setImageNaturalSize] = useState({ width: 0, height: 0 });

  const vtoImageUrl = getVtoImageUrl(productSkuid);
  const savedAdj = captureSession.frameAdjustments ?? DEFAULT_FRAME_ADJUSTMENTS;
  // On /glasses we use object-contain; pixel offsets from VTO (object-cover) would misalign. Use 0,0 so frame aligns on eyes.
  const adj = { ...savedAdj, offsetX: 0, offsetY: 0 };

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleImageLoad = () => {
    if (imgRef.current) {
      setImageNaturalSize({
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      });
    }
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize((prev) => (rect.width !== prev.width || rect.height !== prev.height ? { width: rect.width, height: rect.height } : prev));
    }
  };

  const getFrameStyle = (): React.CSSProperties => {
    const { landmarks, measurements, cropRect } = captureSession;
    if (!landmarks || !(landmarks as FaceLandmarks).leftEye || !(landmarks as FaceLandmarks).rightEye) {
      return { left: '50%', top: '45%', transform: 'translate(-50%, -50%) scale(0.38)' };
    }
    const lm = landmarks as FaceLandmarks;
    // When we display the cropped image, landmarks must be in 0-1 of the cropped image
    const landmarksForImage = cropRect ? landmarksToCropped(lm, cropRect) : lm;
    const faceWidthMm = measurements?.face_width ?? 0;
    const naturalSize = { width: imageNaturalSize.width || 640, height: imageNaturalSize.height || 480 };
    if (containerSize.width === 0 || containerSize.height === 0 || faceWidthMm <= 0) {
      return { left: '50%', top: '45%', transform: 'translate(-50%, -50%) scale(0.38)' };
    }
    const dims = parseDimensionsString(productDimensions);
    const transform = computeFrameOverlayTransform(
      dims.width,
      dims.lensHeight,
      landmarksForImage,
      faceWidthMm,
      containerSize,
      naturalSize,
      true // object-contain so image fits without over-zoom; frame position matches
    );
    if (!transform) {
      return { left: '50%', top: '45%', transform: 'translate(-50%, -50%) scale(0.38)' };
    }
    const displayX = transform.midX + adj.offsetX;
    const displayY = transform.midY + adj.offsetY;
    const finalScale = transform.scaleFactor * adj.scaleAdjust;
    const finalRotation = transform.angleRad + (adj.rotationAdjust * Math.PI) / 180;
    return {
      position: 'absolute' as const,
      left: `${displayX}px`,
      top: `${displayY}px`,
      transform: `translate(-50%, -50%) rotate(${finalRotation}rad) scale(${finalScale})`,
      transformOrigin: 'center center',
    };
  };

  const frameStyle = getFrameStyle();

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-gray-100">
      <img
        ref={imgRef}
        src={captureSession.processedImageDataUrl}
        alt="Your fit"
        className="w-full h-full object-contain object-center"
        onLoad={handleImageLoad}
      />
      {!frameError && (
        <img
          src={vtoImageUrl}
          alt={productName}
          className="absolute pointer-events-none"
          style={{
            ...frameStyle,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
            opacity: frameLoaded ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
          }}
          onLoad={() => setFrameLoaded(true)}
          onError={() => setFrameError(true)}
        />
      )}
      {!compact && (
        <div className="absolute bottom-2 right-2 w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden z-10">
          <img
            src={vtoImageUrl}
            alt={productName}
            className="w-full h-full object-contain p-1"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      )}
    </div>
  );
}

export default VtoProductOverlay;
