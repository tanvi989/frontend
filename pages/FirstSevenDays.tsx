import React from "react";
import { Link } from "react-router-dom";

const FirstSevenDays: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>First 7 Days</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                What to Expect in the First 7 Days with Multifocal Lenses
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Switching to multifocals can feel like settling into a new space, slightly unfamiliar, but rewarding as you adjust. Here is a day-by-day guide so you know what is typical.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="day-1">
                <h2 id="day-1" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Day 1:
                </h2>
                <p>
                  Things might feel unusual. You may experience slight edge blur, more head movement, and stairs may look odd. Stick to familiar environments.
                </p>
              </section>

              <section aria-labelledby="day-2-3">
                <h2 id="day-2-3" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Day 2-3:
                </h2>
                <p className="mb-3">Your brain starts mapping the zones:</p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Top for distance.</li>
                  <li>Middle for screens.</li>
                  <li>Bottom for reading.</li>
                </ul>
                <p>
                  Moments of &quot;ah, that&apos;s better&quot; start appearing, like reading a menu without swapping glasses.
                </p>
              </section>

              <section aria-labelledby="day-4-5">
                <h2 id="day-4-5" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Day 4-5:
                </h2>
                <p>
                  Your movements start to feel automatic. Edge blur fades, screens and print feel sharper, and your confidence builds.
                </p>
              </section>

              <section aria-labelledby="day-6-7">
                <h2 id="day-6-7" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Day 6-7:
                </h2>
                <p>
                  It begins to feel natural. Walking, driving, and working flow without effort, and your lenses feel like an extension of you.
                </p>
              </section>
            </div>

            <p className="text-[#333] text-base font-medium leading-relaxed mb-8">
              If, after 10 days, things still feel uncomfortable, it is time for a quick check of your fit, alignment, or prescription.
            </p>

            <p className="text-[#333] text-base font-medium leading-relaxed">
              Multifocal lenses include progressives, trifocal and bifocal — all designed to help you see clearly at multiple distances.
            </p>
          </article>
        </main>
      </div>
    </div>
  );
};

export default FirstSevenDays;
