import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptureCamera } from '@pf/components/try-on/CaptureCamera';
import { useVoiceGuidance } from '@pf/hooks/useVoiceGuidance';

type Step = '1' | '2' | '3';

export default function Index() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('1');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const { speak } = useVoiceGuidance({ enabled: true, debounceMs: 3000 });

  useEffect(() => {
    if (currentStep === '1') {
      speak("Welcome to Multifolks Perfect Fit. Let's get your perfect measurements. Please agree to the privacy policy to begin.");
    } else if (currentStep === '2') {
      speak("Great! Now, tuck your hair behind your ears and keep your glasses on if you wear them.");
    }
  }, [currentStep, speak]);

  if (currentStep === '3') {
    return (
      <CaptureCamera
        onBack={() => setCurrentStep('2')}
        onClose={() => navigate('/')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F0E7] flex flex-col items-center justify-center p-6">
      {/* Step 1: Welcome */}
      {currentStep === '1' && (
        <div className="flex flex-col items-center animate-fadeIn max-w-[500px] w-full">
          <h1 className="font-semibold text-[17px] leading-[100%] tracking-[0.2em] text-center uppercase mb-6 text-black">
            Welcome to Multifolks MFit
          </h1>
          <div className="w-[180px] h-[180px] mb-6 flex items-center justify-center">
            <svg width="180" height="180" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.542 213.417C35.4289 213.417 31.9632 212.007 29.1447 209.189C26.3262 206.369 24.917 202.903 24.917 198.792V83.4167C24.917 79.2639 26.3262 75.7882 29.1447 72.9896C31.9632 70.191 35.4289 68.7917 39.542 68.7917H72.5837L92.6253 46.5833H148.959V52.5417H95.3337L75.292 74.75H39.542C37.0142 74.75 34.9378 75.6076 33.3128 77.3229C31.6878 79.0382 30.8753 81.0694 30.8753 83.4167V198.792C30.8753 201.319 31.6878 203.396 33.3128 205.021C34.9378 206.646 37.0142 207.458 39.542 207.458H198.792C201.32 207.458 203.396 206.646 205.021 205.021C206.646 203.396 207.459 201.319 207.459 198.792V111.042H213.417V198.792C213.417 202.903 212.018 206.369 209.219 209.189C206.42 212.007 202.945 213.417 198.792 213.417H39.542ZM207.459 74.75V52.5417H185.25V46.5833H207.459V24.375H213.417V46.5833H235.625V52.5417H213.417V74.75H207.459ZM119.167 178.208C129.639 178.208 138.441 174.642 145.573 167.51C152.705 160.378 156.271 151.576 156.271 141.104C156.271 130.632 152.705 121.83 145.573 114.698C138.441 107.566 129.639 104 119.167 104C108.695 104 99.8927 107.566 92.7607 114.698C85.6288 121.83 82.0628 130.632 82.0628 141.104C82.0628 151.576 85.6288 160.378 92.7607 167.51C99.8927 174.642 108.695 178.208 119.167 178.208ZM119.167 172.25C110.32 172.25 102.917 169.271 96.9587 163.312C91.0003 157.354 88.0212 149.951 88.0212 141.104C88.0212 132.257 91.0003 124.854 96.9587 118.896C102.917 112.938 110.32 109.958 119.167 109.958C128.014 109.958 135.417 112.938 141.375 118.896C147.334 124.854 150.313 132.257 150.313 141.104C150.313 149.951 147.334 157.354 141.375 163.312C135.417 169.271 128.014 172.25 119.167 172.25Z" fill="#E94D37"/>
            </svg>
          </div>
          <p className="text-base text-gray-600 mb-8 max-w-[400px] leading-relaxed text-center">
            One click. Perfect measurements. Better fitting frames. Let's take your picture.
          </p>
          <div className="flex items-center justify-center mb-6">
            <input
              type="checkbox"
              id="privacyPolicy"
              checked={privacyAgreed}
              onChange={(e) => setPrivacyAgreed(e.target.checked)}
              className="mr-2 w-[18px] h-[18px] cursor-pointer"
            />
            <label htmlFor="privacyPolicy" className="text-sm text-gray-600 cursor-pointer">
              Agree to <Link to="/privacy" target="_blank" className="text-blue-600 hover:underline">privacy policy</Link>
            </label>
          </div>
          <button
            onClick={() => setCurrentStep('2')}
            disabled={!privacyAgreed}
            className="bg-black text-white border-none px-10 py-3 text-base font-semibold rounded-[50px] cursor-pointer transition-all hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Ready
          </button>
        </div>
      )}

      {/* Step 2: Get ready */}
      {currentStep === '2' && (
        <div className="flex flex-col items-center animate-fadeIn max-w-[500px] w-full text-center">
          <h2 className="text-3xl font-bold mb-12 text-black uppercase">Before We Begin</h2>
          <div className="flex justify-center items-center gap-8 md:gap-12 mb-12 flex-wrap">
            <div className="flex flex-col items-center">
              <img src="/tuck-Hair.svg" alt="Hair" className="w-[120px] h-[120px] md:w-[140px] md:h-[140px]" />
              <p className="text-base text-gray-600 mt-4 max-w-[140px]">Tuck your hair behind your ears</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/no-glass.svg" alt="Glasses" className="w-[120px] h-[120px] md:w-[140px] md:h-[140px]" />
              <p className="text-base text-gray-600 mt-4 max-w-[140px]">Keep your glasses on</p>
            </div>
          </div>
          <div className="flex items-center justify-center text-green-600 font-semibold mb-8">
            <span>Look straight ahead, eyes at camera and relax</span>
          </div>
          <button
            onClick={() => setCurrentStep('3')}
            className="bg-black text-white border-none px-10 py-3 text-base font-semibold rounded-[50px] cursor-pointer hover:bg-gray-800 transition-all uppercase"
          >
            Start Camera
          </button>
        </div>
      )}
    </div>
  );
}
