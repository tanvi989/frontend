import type { FaceLandmarks } from '@/types/face-validation';

/** Passport-style aspect ratio (width : height) e.g. 35mm : 45mm */
export const PASSPORT_ASPECT = 35 / 45; // width / height

export interface PassportCropResult {
  croppedDataUrl: string;
  cropRect: { fullWidth: number; fullHeight: number; sx: number; sy: number; sw: number; sh: number };
}

/**
 * Crop image to passport-style region: face-centered using eyes/bridge, fixed aspect ratio.
 * Uses landmarks (normalized 0-1) to place crop so eyes/face are aligned for frame overlay.
 */
export function cropToPassportStyle(
  imageDataUrl: string,
  landmarks: FaceLandmarks
): Promise<PassportCropResult | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const centerX = ((landmarks.leftEye.x + landmarks.rightEye.x) / 2) * w;
      const centerY = ((landmarks.leftEye.y + landmarks.rightEye.y) / 2) * h;
      const eyeDistPx = Math.hypot(
        (landmarks.rightEye.x - landmarks.leftEye.x) * w,
        (landmarks.rightEye.y - landmarks.leftEye.y) * h
      );
      const faceWidthPx = Math.abs((landmarks.faceRight.x - landmarks.faceLeft.x) * w) || eyeDistPx * 1.8;
      /* Less tight crop: larger multipliers so more context (head/shoulders) is included */
      const cropW = Math.max(faceWidthPx * 2.4, eyeDistPx * 4);
      const cropH = cropW / PASSPORT_ASPECT;
      let sx = centerX - cropW / 2;
      let sy = centerY - cropH * 0.38;
      sx = Math.max(0, Math.min(sx, w - cropW));
      sy = Math.max(0, Math.min(sy, h - cropH));
      const sw = Math.min(cropW, w - sx);
      const sh = Math.min(cropH, h - sy);
      if (sw <= 0 || sh <= 0) {
        resolve(null);
        return;
      }
      const canvas = document.createElement('canvas');
      const maxOut = 1200;
      const scale = Math.min(1, maxOut / Math.max(sw, sh));
      canvas.width = Math.round(sw * scale);
      canvas.height = Math.round(sh * scale);
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(null);
        return;
      }
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
      resolve({
        croppedDataUrl,
        cropRect: { fullWidth: w, fullHeight: h, sx, sy, sw, sh },
      });
    };
    img.onerror = () => resolve(null);
    img.src = imageDataUrl;
  });
}
