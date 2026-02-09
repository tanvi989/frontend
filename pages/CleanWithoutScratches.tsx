import React from "react";
import { Link } from "react-router-dom";

const CleanWithoutScratches: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Clean Without Scratches</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                How to Clean Multifocal Lenses Without Scratching Them
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed mb-4">
                MultiFolks progressive lenses are engineered with multiple focal zones and advanced coatings to deliver seamless clarity. It comes with built in anti-reflective, scratch protection and UV protection. Treating them gently is essential because scratches do not just dull the surface; they can disrupt the smooth transitions between distance, intermediate, and near vision.
              </p>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Here is how to keep your lenses spotless while preserving every coating and curve.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="dos">
                <h2 id="dos" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  The Do&apos;s for Cleaning
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] mb-1">
                      Rinse with lukewarm water first
                    </h3>
                    <p>
                      Always run lenses under gentle, lukewarm water before wiping. Even invisible dust can scratch coatings if wiped dry.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] mb-1">
                      Use a lens-specific cleaner
                    </h3>
                    <p>
                      Skip dish soap or glass spray. Use a pH-neutral, alcohol-free cleaner designed for optical lenses.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] mb-1">
                      Dry with microfiber only
                    </h3>
                    <p>
                      A clean microfiber cloth is the safest way to dry. Shirts, tissues, or paper towels can leave lint, scratches, or streaks.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] mb-1">
                      Keep the frame clean
                    </h3>
                    <p>
                      Clean the nose pads and edges regularly. Dirt buildup here can transfer back to your lenses.
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="donts">
                <h2 id="donts" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  The Don&apos;ts to Avoid Damage
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] mb-1">No hot water.</h3>
                    <p>High heat can warp lens coatings. Stick to lukewarm.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] mb-1">
                      No ammonia, vinegar, or glass cleaners.
                    </h3>
                    <p>These break down coatings and can cloud the lenses.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] mb-1">
                      No circular rubbing.
                    </h3>
                    <p>Gently swipe in one direction to avoid micro-abrasions.</p>
                  </div>
                </div>
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

export default CleanWithoutScratches;
