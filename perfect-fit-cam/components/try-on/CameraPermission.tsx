import { Camera, ShieldCheck, AlertCircle } from 'lucide-react';
import type { CameraState } from '@pf/types/face-validation';

interface CameraPermissionProps {
  cameraState: CameraState;
  error: string | null;
  onRequestCamera: () => void;
}

export function CameraPermission({ cameraState, error, onRequestCamera }: CameraPermissionProps) {
  return (
    <div className="min-h-screen bg-[#F3F0E7] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center animate-fadeIn">
        <div className="mx-auto w-24 h-24 rounded-full bg-[hsl(199,89%,96%)] flex items-center justify-center mb-8">
          {cameraState === 'denied' || cameraState === 'error' ? (
            <AlertCircle className="w-12 h-12 text-red-500" />
          ) : (
            <Camera className="w-12 h-12 text-[hsl(199,89%,48%)]" />
          )}
        </div>

        <h1 className="text-2xl font-semibold text-[#1F1F1F] mb-3">
          {cameraState === 'denied'
            ? 'Camera Access Required'
            : cameraState === 'error'
              ? 'Camera Error'
              : 'Virtual Try-On'}
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          {cameraState === 'denied' || cameraState === 'error'
            ? error
            : 'To provide accurate glasses fitting and PD measurement, we need access to your camera. Your privacy is protected - no images are stored or transmitted.'}
        </p>

        {cameraState === 'requesting' && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span>Secure & Private</span>
          </div>
        )}

        <button
          type="button"
          onClick={onRequestCamera}
          className="bg-black text-white border-none px-10 py-3 text-base font-semibold rounded-[50px] cursor-pointer transition-all hover:bg-gray-800 w-full max-w-xs"
        >
          {cameraState === 'denied' || cameraState === 'error'
            ? 'Try Again'
            : 'Enable Camera'}
        </button>

        {cameraState === 'denied' && (
          <p className="mt-6 text-sm text-gray-600">
            Click the camera icon in your browser's address bar to allow access.
          </p>
        )}
      </div>
    </div>
  );
}