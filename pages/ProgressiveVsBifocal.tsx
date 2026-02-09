import React from "react";
import { Link } from "react-router-dom";

const ProgressiveVsBifocal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Progressive vs. Bifocal vs. Single Vision</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                Progressive vs. Bifocal vs. Single Vision: What&apos;s Right for You?
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                If your prescription includes distance and near correction, you&apos;re likely weighing three choices: single vision, bifocal, or progressive lenses. Each corrects vision, but they deliver very different experiences.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="single-vision">
                <h2 id="single-vision" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  1. Single Vision Lenses
                </h2>
                <p className="mb-3">One consistent power across the entire lens.</p>
                <p className="font-bold text-[#1F1F1F] mb-2">Best For:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>People under 40 with basic correction needs.</li>
                  <li>Those needing only distance or only reading glasses.</li>
                  <li>Anyone comfortable swapping pairs for different tasks.</li>
                </ul>
                <p className="text-[#525252] italic">
                  May require two separate pairs if you need both reading and distance correction.
                </p>
              </section>

              <section aria-labelledby="bifocal">
                <h2 id="bifocal" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  2. Bifocal Lenses
                </h2>
                <p className="mb-3">
                  Two distinct powers in a single lens, divided by a visible line.
                </p>
                <p className="font-bold text-[#1F1F1F] mb-2">Best For:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>People comfortable with a &quot;split zone&quot; format.</li>
                  <li>Those seeking a budget-friendly dual-correction option.</li>
                </ul>
                <p className="font-bold text-[#1F1F1F] mb-2">Considerations:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sudden shifts between zones can feel abrupt.</li>
                  <li>The visible line is a cosmetic drawback for some.</li>
                  <li>No built-in intermediate (screen) vision.</li>
                </ul>
              </section>

              <section aria-labelledby="progressive">
                <h2 id="progressive" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  3. Progressive Lenses
                </h2>
                <p className="mb-3">
                  Seamless vision at all distances with no visible lines.
                </p>
                <p className="font-bold text-[#1F1F1F] mb-2">Best For:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>People over 40 with both distance and near correction.</li>
                  <li>Those seeking a sleek, line-free look.</li>
                  <li>Digital users who need clarity across devices, documents, and distances.</li>
                </ul>
              </section>

              <section aria-labelledby="why-progressives">
                <h2 id="why-progressives" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Why Choose Progressives?
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>More natural vision flow without a line.</li>
                  <li>One pair for all-day wear.</li>
                  <li>Built-in intermediate zone, unlike bifocals.</li>
                </ul>
              </section>

              <section aria-labelledby="comparison-table">
                <h2 id="comparison-table" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  Quick Comparison Table
                </h2>
                <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
                  <table className="w-full text-sm text-left" summary="Comparison of Single Vision, Bifocal, and Progressive lenses">
                    <thead>
                      <tr className="bg-[#F3F0E7] text-[#1F1F1F] font-bold">
                        <th className="px-4 py-3 border-b border-r border-gray-200">Feature</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">Single Vision</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">Bifocal</th>
                        <th className="px-4 py-3 border-b border-gray-200">Progressive</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">Vision Zones</td>
                        <td className="px-4 py-3 border-r border-gray-200">One (near or far)</td>
                        <td className="px-4 py-3 border-r border-gray-200">Two (near &amp; far)</td>
                        <td className="px-4 py-3">Three (near, intermediate, far)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">Visible Line</td>
                        <td className="px-4 py-3 border-r border-gray-200">No</td>
                        <td className="px-4 py-3 border-r border-gray-200">Yes</td>
                        <td className="px-4 py-3">No</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">Intermediate Vision</td>
                        <td className="px-4 py-3 border-r border-gray-200">Not included</td>
                        <td className="px-4 py-3 border-r border-gray-200">Not included</td>
                        <td className="px-4 py-3">Built-in</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">Adaptation</td>
                        <td className="px-4 py-3 border-r border-gray-200">Instant</td>
                        <td className="px-4 py-3 border-r border-gray-200">Quick</td>
                        <td className="px-4 py-3">Few days to adjust</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">Aesthetic</td>
                        <td className="px-4 py-3 border-r border-gray-200">Sleek</td>
                        <td className="px-4 py-3 border-r border-gray-200">Line visible</td>
                        <td className="px-4 py-3">Sleek, modern</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section aria-labelledby="why-multifolks">
                <h2 id="why-multifolks" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Why MultiFolks Recommends Progressives
                </h2>
                <p className="mb-4">
                  We&apos;ve built our platform around making multifocals simple and comfortable:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>AI-fitted PD and fitting height.</li>
                  <li>Digital lens surfacing for thinner, sleeker profiles.</li>
                  <li>Frame-specific mapping for natural alignment.</li>
                </ul>
                <p>
                  Add a 30-days comfort guarantee, and it&apos;s a stress-free way to step into progressives.
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

export default ProgressiveVsBifocal;
