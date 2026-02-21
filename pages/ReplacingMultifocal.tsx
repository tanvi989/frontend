import React from "react";
import { useNavigate } from "react-router-dom";

const ReplacingMultifocal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F3F0E7] min-h-screen font-sans text-[#1F1F1F] mt-14 md:mt-5 pt-6 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Desktop Layout */}
        <div className="hidden sm:block relative mb-10 md:mb-16 min-h-[300px] md:min-h-[400px]">
          {/* Left Eye Box */}
          <div className="absolute top-20 left-0 w-32 h-32 md:w-40 md:h-40 lg:w-42 lg:h-42">
            <img
              src="/eye.png"
              alt="Eye illustration"
              className="w-full h-full object-contain"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-[50%] h-[50%]">
                <path d="M10 50 Q50 10 90 50 Q50 90 10 50" fill="#F37021" />
                <circle cx="50" cy="50" r="12" fill="#F3F0E7" />
              </svg>
            </div>
          </div>

          {/* Center Text Content — inset-0 + flex ensures true centering */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-44">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold uppercase tracking-wide leading-tight">
              ALREADY WEARING MULTIFOCALS? <br /> TIME FOR A SMARTER UPGRADE.
            </h1>
          </div>

          {/* Right Profile Box */}
          <div className="absolute bottom-20 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-42 lg:h-42">
            <img
              src="/q5.png"
              alt="Profile illustration"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden mb-12">
          <div className="flex items-center space-y-8">
            <div className="w-28 h-28 self-start">
              <img
                src="/eye.png"
                alt="Eye illustration"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="text-center w-full">
              <h1 className="text-xl font-bold uppercase mb-4 leading-tight">
                ALREADY WEARING MULTIFOCALS? <br /> TIME FOR A SMARTER UPGRADE.
              </h1>
            </div>
            <div className="w-28 h-28 self-end">
              <img
                src="/q5.png"
                alt="Profile illustration"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Full-width Centered Heading — outside the grid */}
        <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1F]  mb-6 md:mb-10">
          Your eyes have changed. Your lenses should too.
        </h3>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-[1.7] text-[#333]">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-medium text-justify">
              If your current pair isn’t keeping up — or your screen time has — it might be time for an upgrade.
<br />
You shouldn’t have to settle for lenses that almost work.

            </p>
            <p className="font-medium text-justify">
           At Multifolks, we help experienced multifocal wearers upgrade with precision and confidence.

            </p>
            <p className="font-bold text-justify">
          How to Upgrade
            </p>
            <p className="font-medium text-justify">
         1. Share your prescription
Upload it, enter or simply take a photo. We’ll help if anything’s unclear.


            </p>
            <p className="font-medium text-justify">
              2. Find your fit
Use our smart tool to capture the critical metrics (your PD and lens height) and rather importantly, how it looks on your face

            </p>

              <p className="font-medium text-justify">
        
3. Choose lenses for your routine
Sharper screen vision. Seamless distance clarity. Smooth transitions across all zones. We’ll guide you.

            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
              <p className="font-bold ">
          What’s Included
            </p>
            <p className="font-medium text-justify">
         Every frame of your choice comes with premium multifocal lenses featuring:
<br />
	•	Anti-glare<br />
	•	Anti-reflective coating<br />
	•	Scratch resistance<br />
<br />
No mystery pricing. No extras needed, unless you want them. 

            </p>
            <p className="font-medium text-justify">
             Free worldwide shipping.


            </p>
            <p className="font-medium text-justify">
             HSA/FSA eligible.
            </p>
            <p className="font-medium text-justify">
             And if they don’t feel quite right?
We’ll adjust or remake them — at no cost.
Or you can simply ask for a refund. No issues.

            </p>
            <p className="font-bold text-lg sm:text-lg text-[#1F1F1F] text-justify">
             
A better fit for how you live now.

            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 md:mt-16">
          <button
            onClick={() => navigate("/glasses")}
            className="bg-[#232320] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-[0.15em] hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full max-w-[300px] sm:w-auto"
          >
            EXPLORE OUR COLLECTION
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReplacingMultifocal;