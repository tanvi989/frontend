import React from "react";
import { Link } from "react-router-dom";

const HowWeMeasure: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>How We Measure</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                How MultiFolks Measures PD and Fitting Height via Webcam
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Traditional PD and fitting height measurements require a visit to an optician, a ruler, and a lot of guesswork. MultiFolks replaces that with a guided, AI-driven process you can complete from your computer or phone.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="how-it-works">
                <h2 id="how-it-works" className="text-xl font-bold text-[#1F1F1F] mb-6">
                  How It Works:
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] text-lg mb-2">
                      1. Frame Mapping:
                    </h3>
                    <p>
                      Once you choose a frame, we digitally map its lens width and depth for exact scaling.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F1F1F] text-lg mb-2">
                      2. AI-Powered Face Capture:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Our system guides you to face the camera naturally.</li>
                      <li>It detects your pupils, head tilt, and posture automatically.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F1F1F] text-lg mb-2">
                      3. Measurement and Verification:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>PD is calculated to ±1mm accuracy (single or dual).</li>
                      <li>Fitting height is captured for each eye individually.</li>
                      <li>You receive a visual confirmation before checkout so you can review.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section aria-labelledby="why-matters">
                <h2 id="why-matters" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Why This Matters
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No need to measure manually or visit a store.</li>
                  <li>Each lens zone — distance, intermediate, near — sits exactly where you need it.</li>
                  <li>Faster, easier adaptation because your lenses fit like they were made in-store (without the trip).</li>
                </ul>
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

export default HowWeMeasure;
