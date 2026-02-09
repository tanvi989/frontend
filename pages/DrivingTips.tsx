import React from "react";
import { Link } from "react-router-dom";

const DrivingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Driving Tips</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                Driving with Multifocal Lenses: A Safety Checklist
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Before hitting the road with new multifocals, take a moment to prepare:
              </p>
            </header>

            <div className="space-y-6 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="checklist">
                <h2 id="checklist" className="sr-only">
                  Safety checklist
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Wear them for several days indoors first to adapt.</li>
                  <li>Turn your head to check mirrors, not just your eyes.</li>
                  <li>Avoid reading road signs through the near zone.</li>
                  <li>Use anti-reflective coatings for night glare.</li>
                  <li>Keep your windshield spotless — it helps more than you would think.</li>
                </ul>
                <p>
                  For your first trip, drive during daylight on familiar routes until everything feels natural.
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

export default DrivingTips;
