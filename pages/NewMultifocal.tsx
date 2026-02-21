import React from "react";
import { useNavigate } from "react-router-dom";

const NewBifocal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white min-h-screen font-sans text-[#1F1F1F] pt-[120px] pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="relative flex flex-col items-center justify-center mb-16 text-center min-h-[250px]">
          {/* Left Graphic (Sun/Eye) */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[180px] md:h-[180px]">
            <img
              src="/eye.png"
              alt="Sun illustration"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-[50%] h-[50%]">
                <path d="M10 50 Q50 10 90 50 Q50 90 10 50" fill="#F37021" />
                <circle cx="50" cy="50" r="12" fill="#F3F0E7" />
              </svg>
            </div>
          </div>

          {/* Center Text */}
          <div className="max-w-[800px] z-10 relative px-4">
            <h1 className="text-3xl md:text-[40px] font-bold uppercase tracking-wide mb-6 leading-tight">
              New to bifocals? We'll make it simple and straightforward.
            </h1>
          </div>

          {/* Right Graphic (Blue Profile) */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[220px]">
            <img
              src="/q5.png"
              alt="Blue head illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-[16px] leading-[1.7] text-[#333]">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 ">
                Your First Pair Made Easy
              </h3>
              <p className="mb-4">
             Juggling two pairs of glasses?
Multifocals replace them with one.


              </p>
              <p>
              
Clear vision near, far, and in between — without switching.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                Here is How it Works
              </h3>
            
              <ul className="list-disc pl-5 space-y-2 marker:text-[#1F1F1F]">
                <li>
            1. Share your prescription
Upload it, enter or simply take a photo. We’ll help if anything’s unclear.
                </li>
                <li>
                 2. Find your fit
Use our smart tool to capture the critical metrics (your PD and lens height) and rather importantly, how it looks on your face

                </li>
                <li>
                3. Choose for your lifestyle
Screens. Driving. Everyday life. We’ll guide you to the right lens type.

                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
       

            <div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 ">
          What You Get
              </h3>
              <p className="mb-4">
               Every pair includes:

	<li>Anti-glare</li>
  <li>Scratch resistance</li><li>Anti-reflective coating</li>
  <br></br>


All with a high quality lens and the frame of your choice. 


              </p>
             
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 ">
               Adjusting Is Normal
              </h3>
              <p className="mb-4">
                It can take a few days to adapt. That’s expected and we can help.
Your eyes learn quickly.



              </p>
              <p className="mb-4">
          If something’s not right?
We’ll adjust them or remake them — free of charge. 
Or you can simply ask for a refund. No issues. 
              </p>
             Free worldwide shipping.<br />
HSA/FSA eligible.<br />

One pair. Total clarity.

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
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

export default NewBifocal;