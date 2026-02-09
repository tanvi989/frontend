import { useCallback, useRef, useEffect, useState } from 'react';

interface VoiceGuidanceOptions {
  enabled?: boolean;
  debounceMs?: number;
  voice?: string;
}

export function useVoiceGuidance(options: VoiceGuidanceOptions = {}) {
  const { enabled = true, debounceMs = 2000 } = options;
  const lastSpokenRef = useRef<string>('');
  const lastSpokenTimeRef = useRef<number>(0);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const speak = useCallback((message: string) => {
    if (!enabled || !synthRef.current) return;

    const now = Date.now();
    // Debounce: don't repeat same message within debounceMs
    if (message === lastSpokenRef.current && now - lastSpokenTimeRef.current < debounceMs) {
      return;
    }

    // Cancel any ongoing speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try to use a natural voice
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => 
      v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Female'))
    ) || voices.find(v => v.lang.startsWith('en'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setCurrentMessage(message);
    utterance.onend = () => {
      // Keep message visible for a short time after speaking ends
      setTimeout(() => setCurrentMessage(''), 1000);
    };

    synthRef.current.speak(utterance);
    lastSpokenRef.current = message;
    lastSpokenTimeRef.current = now;
  }, [enabled, debounceMs]);

  const speakGuidance = useCallback((validationChecks: Array<{ id: string; passed: boolean; message: string }>) => {
    if (!enabled) return;

    // Priority order for guidance (most critical first)
    const faceDetectedCheck = validationChecks.find(c => c.id === 'face-detected');
    const faceInOvalCheck = validationChecks.find(c => c.id === 'face-in-oval');
    const distanceCheck = validationChecks.find(c => c.id === 'distance');
    const tiltCheck = validationChecks.find(c => c.id === 'tilt' || c.id === 'head-straight');
    const rotationCheck = validationChecks.find(c => c.id === 'rotation' || c.id === 'no-rotation');
    const lightingCheck = validationChecks.find(c => c.id === 'lighting');
    const eyesCheck = validationChecks.find(c => c.id === 'eyes-open');

    // 1. No face detected – ask user to position face
    if (faceDetectedCheck && !faceDetectedCheck.passed) {
      if (faceDetectedCheck.message.includes('Multiple')) {
        speak('Only one person should be in frame. Please make sure no one else is visible.');
      } else {
        speak('Position your face in the oval. Make sure you are well lit and facing the camera.');
      }
      return;
    }

    // 2. Face not in oval – specific direction guidance
    if (faceInOvalCheck && !faceInOvalCheck.passed) {
      const msg = faceInOvalCheck.message.toLowerCase();
      if (msg.includes('move left')) {
        speak('Move your face slightly to the left to centre it in the oval.');
      } else if (msg.includes('move right')) {
        speak('Move your face slightly to the right to centre it in the oval.');
      } else if (msg.includes('move up')) {
        speak('Move your face up a little to align with the guide.');
      } else if (msg.includes('move down')) {
        speak('Move your face down a little to align with the guide.');
      } else {
        speak('Centre your face in the oval and align your eyes with the blue horizontal line for the best try-on.');
      }
      return;
    }

    // 3. Distance – too close or too far
    if (distanceCheck && !distanceCheck.passed) {
      if (distanceCheck.message.includes('closer')) {
        speak('Please move closer to the camera. Your face should fill most of the oval.');
      } else if (distanceCheck.message.includes('back')) {
        speak('Please move back from the camera. You are a bit too close.');
      }
      return;
    }

    // 4. Head tilt – keep head straight
    if (tiltCheck && !tiltCheck.passed) {
      if (tiltCheck.message.includes('Tilt head left')) {
        speak('Straighten your head. Tilt it slightly to the left.');
      } else if (tiltCheck.message.includes('Tilt head right')) {
        speak('Straighten your head. Tilt it slightly to the right.');
      } else {
        speak('Keep your head straight. Avoid tilting left or right for accurate measurement.');
      }
      return;
    }

    // 5. Head rotation – face the camera
    if (rotationCheck && !rotationCheck.passed) {
      if (rotationCheck.message.includes('Turn head left')) {
        speak('Look straight at the camera. Turn your face slightly to the left.');
      } else if (rotationCheck.message.includes('Turn head right')) {
        speak('Look straight at the camera. Turn your face slightly to the right.');
      } else {
        speak('Please look directly at the camera. Face forward for the best result.');
      }
      return;
    }

    // 6. Lighting
    if (lightingCheck && !lightingCheck.passed) {
      if (lightingCheck.message.includes('dark')) {
        speak('It is too dark. Please add more light or move to a brighter area.');
      } else if (lightingCheck.message.includes('bright')) {
        speak('It is too bright. Reduce the light or move away from direct sunlight.');
      } else if (lightingCheck.message.includes('shadows')) {
        speak('Reduce shadows on your face. Try turning on a light in front of you.');
      } else {
        speak(lightingCheck.message);
      }
      return;
    }

    // 7. Eyes open
    if (eyesCheck && !eyesCheck.passed) {
      speak('Please keep both eyes open and look at the camera. This helps us measure accurately.');
      return;
    }
  }, [enabled, speak]);

  const cancel = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setCurrentMessage('');
  }, []);

  return { speak, speakGuidance, cancel, currentMessage };
}
