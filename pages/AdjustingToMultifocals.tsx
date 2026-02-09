import React from "react";
import { Link } from "react-router-dom";

const AdjustingToMultifocals: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Adjusting to Multifocals</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                How Long Does It Take to Adjust to Multifocal Glasses?
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed mb-4">
                Most people adapt fully in 5–14 days, though the timeline can vary based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#333]">
                <li>Whether you previously wore glasses.</li>
                <li>Your lens design (standard vs. precision)</li>
                <li>How active or screen-heavy your lifestyle is</li>
                <li>How consistently you wear them</li>
              </ul>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="adaptation-phases">
                <h2 id="adaptation-phases" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  The 3 Adaptation Phases
                </h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Initial Awareness (Days 1–3):</strong> Your eyes identify the zones; things may feel slightly &quot;swimmy.&quot;
                  </li>
                  <li>
                    <strong>Active Adjustment (Days 4–10):</strong> Your brain begins reprogramming, making near-to-far transitions feel natural.
                  </li>
                  <li>
                    <strong>Comfort Zone (Day 11+):</strong> You forget you are wearing them. The ultimate sign of full adaptation.
                  </li>
                </ol>
              </section>

              <section aria-labelledby="speed-up">
                <h2 id="speed-up" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  How to Speed Things Up
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Wear your progressives full-time. No swapping.</li>
                  <li>Keep lenses clean and properly adjusted.</li>
                  <li>Turn your head instead of just shifting your eyes.</li>
                </ul>
                <p>Consistency is key.</p>
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

export default AdjustingToMultifocals;
