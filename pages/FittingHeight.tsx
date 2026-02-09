import React from "react";
import { Link } from "react-router-dom";

const FittingHeight: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Fitting Height</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                What Is Fitting Height and Why Does It Matter?
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                While Pupillary Distance (PD) determines horizontal alignment, fitting height ensures your progressive lenses are positioned correctly vertically. Without accurate fitting height, the three vision zones — near, intermediate, and distance — can fall in the wrong places, forcing your eyes to strain or tilt your head unnaturally.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="what-is-fitting-height">
                <h2 id="what-is-fitting-height" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  What Exactly Is Fitting Height?
                </h2>
                <p className="mb-3">
                  Fitting height is the distance from the bottom of your eyeglass frame to the center of your pupil when you&apos;re looking straight ahead in a natural, relaxed posture.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>It positions the near zone exactly where your eyes drop when reading.</li>
                  <li>It ensures the intermediate and distance zones align with your typical gaze angles.</li>
                </ul>
                <p>
                  Without the right fitting height, progressives can feel off-balance, making adaptation harder and reducing visual comfort.
                </p>
              </section>

              <section aria-labelledby="how-multifolks">
                <h2 id="how-multifolks" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  How MultiFolks Gets It Right
                </h2>
                <p className="mb-3">
                  Unlike traditional methods, which rely on in-store marks and rulers, MultiFolks uses AI-powered face mapping via webcam to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Capture the exact frame dimensions you&apos;ve chosen.</li>
                  <li>Measure your pupil position in real time as you look naturally at the camera.</li>
                  <li>Lock in your fitting height so each lens zone aligns with your posture and head angle.</li>
                </ul>
                <p>
                  This process gives ±1mm precision, helping your lenses feel comfortable from the first wear.
                </p>
              </section>

              <section aria-labelledby="why-essential">
                <h2 id="why-essential" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Why It&apos;s Essential for Progressives
                </h2>
                <p className="mb-3">
                  Even a few millimeters off can:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Make near tasks feel blurry or force you to tilt your head awkwardly.</li>
                  <li>Cause the intermediate zone to sit too high or low, straining your neck during screen use.</li>
                  <li>Reduce the usable area for each zone, especially in smaller frames.</li>
                </ul>
                <p>
                  With MultiFolks, PD and fitting height work together so your progressives feel natural from day one.
                </p>
              </section>
            </div>

            <p className="text-[#333] text-base font-medium leading-relaxed">
              Multifocal lenses include progressives, trifocal and bifocal — all designed to help you see clearly at multiple distances.
            </p>
          </article>
        </main>
      </div>
    </div>
  );
};

export default FittingHeight;
