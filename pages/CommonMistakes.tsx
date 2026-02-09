import React from "react";
import { Link } from "react-router-dom";

const CommonMistakes: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Common Mistakes</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                Common Mistakes to Avoid with Multifocals
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Multifocal lenses perform best when fitted and used correctly. Avoid these common pitfalls:
              </p>
            </header>

            <div className="space-y-8 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="mistake-1">
                <h2 id="mistake-1" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  1. Switching Between Old and New Glasses:
                </h2>
                <p>Confuses your visual adaptation.</p>
              </section>

              <section aria-labelledby="mistake-2">
                <h2 id="mistake-2" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  2. Poor Frame Fit:
                </h2>
                <p>Sliding or crooked frames disrupt your fitting height.</p>
              </section>

              <section aria-labelledby="mistake-3">
                <h2 id="mistake-3" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  3. Not Moving Your Head:
                </h2>
                <p>Relying only on your eyes can make finding focus harder.</p>
              </section>

              <section aria-labelledby="mistake-4">
                <h2 id="mistake-4" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  4. Reading Through the Distance Zone:
                </h2>
                <p>Drop your chin to use the correct part of the lens.</p>
              </section>

              <section aria-labelledby="mistake-5">
                <h2 id="mistake-5" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  5. Choosing Frames Too Short Vertically:
                </h2>
                <p>Frames under 30mm height restrict all three vision zones.</p>
              </section>

              <p className="pt-2">
                Fixing even one of these issues can noticeably improve your comfort. If you need support, the MultiFolks team is here to help make it right.
              </p>
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

export default CommonMistakes;
