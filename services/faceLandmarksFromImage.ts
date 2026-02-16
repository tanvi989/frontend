/**
 * Run MediaPipe Face Mesh on a static image to get eye/pupil landmarks (iris 468/473).
 * Used by the Align button so the frame is positioned using the exact same image we display.
 */
import type { FaceLandmarks } from '@/types/face-validation';
import { MEDIAPIPE_IRIS_INDICES } from '@/hooks/useFaceDetection';

const LANDMARK_INDICES = {
  leftEye: MEDIAPIPE_IRIS_INDICES.leftIris,
  rightEye: MEDIAPIPE_IRIS_INDICES.rightIris,
  noseTip: 1,
  leftEar: 234,
  rightEar: 454,
  chin: 152,
  forehead: 10,
  leftEyeUpper: 159,
  leftEyeLower: 145,
  rightEyeUpper: 386,
  rightEyeLower: 374,
  faceLeft: 234,
  faceRight: 454,
};

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.crossOrigin = 'anonymous';
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function extractLandmarks(lm: Array<{ x: number; y: number; z: number }>): FaceLandmarks {
  const get = (i: number) => {
    const p = lm[i];
    return { x: p?.x ?? 0, y: p?.y ?? 0, z: p?.z ?? 0 };
  };
  return {
    leftEye: get(LANDMARK_INDICES.leftEye),
    rightEye: get(LANDMARK_INDICES.rightEye),
    noseTip: get(LANDMARK_INDICES.noseTip),
    leftEar: get(LANDMARK_INDICES.leftEar),
    rightEar: get(LANDMARK_INDICES.rightEar),
    chin: get(LANDMARK_INDICES.chin),
    forehead: get(LANDMARK_INDICES.forehead),
    leftEyeUpper: get(LANDMARK_INDICES.leftEyeUpper),
    leftEyeLower: get(LANDMARK_INDICES.leftEyeLower),
    rightEyeUpper: get(LANDMARK_INDICES.rightEyeUpper),
    rightEyeLower: get(LANDMARK_INDICES.rightEyeLower),
    faceLeft: get(LANDMARK_INDICES.faceLeft),
    faceRight: get(LANDMARK_INDICES.faceRight),
  };
}

/** Ensure we have an array of {x,y,z} indexed by landmark index (MediaPipe can return array or object). */
function normalizeLandmarks(raw: any): Array<{ x: number; y: number; z: number }> {
  const len = 478;
  if (Array.isArray(raw) && raw.length >= len) {
    return raw.slice(0, len).map((p: any) =>
      p && typeof p.x === 'number' && typeof p.y === 'number'
        ? { x: p.x, y: p.y, z: typeof p.z === 'number' ? p.z : 0 }
        : { x: 0, y: 0, z: 0 }
    );
  }
  const arr: Array<{ x: number; y: number; z: number }> = [];
  for (let i = 0; i < len; i++) {
    const p = raw?.[i];
    if (p && typeof p.x === 'number' && typeof p.y === 'number')
      arr.push({ x: p.x, y: p.y, z: typeof p.z === 'number' ? p.z : 0 });
    else arr.push({ x: 0, y: 0, z: 0 });
  }
  return arr;
}

let faceMeshInstance: any = null;
let faceMeshLoadPromise: Promise<any> | null = null;

function getFaceMesh(): Promise<any> {
  if (faceMeshInstance) return Promise.resolve(faceMeshInstance);
  if (faceMeshLoadPromise) return faceMeshLoadPromise;

  faceMeshLoadPromise = (async () => {
    await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js');
    const FaceMeshClass = (window as any).FaceMesh;
    if (!FaceMeshClass) throw new Error('FaceMesh not found');
    faceMeshInstance = new FaceMeshClass({
      locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });
    faceMeshInstance.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    return faceMeshInstance;
  })();

  return faceMeshLoadPromise;
}

/**
 * Detect face landmarks (eyes/pupils = iris 468/473) on the given image using MediaPipe.
 * Use the same image that is displayed in the VTO so alignment is accurate.
 */
export async function detectLandmarksFromImage(imageDataUrl: string): Promise<FaceLandmarks | null> {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imageDataUrl;
    if (img.complete) resolve();
  });

  const faceMesh = await getFaceMesh();

  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve(null), 10000);
    faceMesh.onResults((results: any) => {
      clearTimeout(timeout);
      if (!results?.multiFaceLandmarks?.length) {
        resolve(null);
        return;
      }
      const raw = results.multiFaceLandmarks[0];
      const arr = normalizeLandmarks(raw);
      if (arr.length < 474) {
        resolve(null);
        return;
      }
      const landmarks = extractLandmarks(arr);
      resolve(landmarks);
    });
    faceMesh.send({ image: img }).then(
      () => {},
      () => {
        clearTimeout(timeout);
        resolve(null);
      }
    );
  });
}
