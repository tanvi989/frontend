import React from "react";
import { Link } from "react-router-dom";

const PickRightLens: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Pick the Right Lens</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                How to Pick the Right Lens Material and Thickness
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                The choice of lens is an important consideration in multifocals because comfort and clarity depend on lens performance.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="why-thickness">
                <h2 id="why-thickness" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Why Lens Thickness Matters
                </h2>
                <p className="mb-4">
                  The stronger your prescription, the more your lenses need to bend light. Traditionally, this meant thicker, heavier lenses.
                </p>
                <p>
                  Modern lens technology has changed that. Today, choosing the right lens index can make your glasses dramatically thinner and lighter, even for high prescriptions.
                </p>
              </section>

              <section aria-labelledby="lens-index">
                <h2 id="lens-index" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  What is Lens Index?
                </h2>
                <p className="mb-4">
                  Lens index measures how efficiently the material bends light. The higher the index is, the thinner and lighter the lens.
                </p>
                <p className="mb-4">Here is a simplified guide:</p>

                <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
                  <table className="w-full text-sm text-left" summary="Lens index guide: index, best for, prescription range, why choose it">
                    <thead>
                      <tr className="bg-[#F3F0E7] text-[#1F1F1F] font-bold">
                        <th className="px-4 py-3 border-b border-r border-gray-200">Index</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">Best For</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">Prescription Range</th>
                        <th className="px-4 py-3 border-b border-gray-200">Why Choose It</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">1.50</td>
                        <td className="px-4 py-3 border-r border-gray-200">Mild prescriptions</td>
                        <td className="px-4 py-3 border-r border-gray-200">SPH ±2.00 or below</td>
                        <td className="px-4 py-3">Affordable, basic option.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">1.57</td>
                        <td className="px-4 py-3 border-r border-gray-200">Mild to moderate</td>
                        <td className="px-4 py-3 border-r border-gray-200">SPH ±2.00 to ±4.00</td>
                        <td className="px-4 py-3">Slimmer than standard, cost-effective.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">1.59 (Polycarbonate)</td>
                        <td className="px-4 py-3 border-r border-gray-200">Active use, kids</td>
                        <td className="px-4 py-3 border-r border-gray-200">SPH ±1.00 to ±6.00</td>
                        <td className="px-4 py-3">Impact-resistant, naturally UV-protective.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">1.60</td>
                        <td className="px-4 py-3 border-r border-gray-200">Moderate prescriptions</td>
                        <td className="px-4 py-3 border-r border-gray-200">SPH ±4.00 to ±6.00</td>
                        <td className="px-4 py-3">Lightweight and versatile.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">1.67</td>
                        <td className="px-4 py-3 border-r border-gray-200">High prescriptions</td>
                        <td className="px-4 py-3 border-r border-gray-200">SPH ±6.00 to ±9.00</td>
                        <td className="px-4 py-3">Ultra-thin, sleek, minimal edge thickness.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">1.74</td>
                        <td className="px-4 py-3 border-r border-gray-200">Very high prescriptions</td>
                        <td className="px-4 py-3 border-r border-gray-200">SPH ±9.00 and above</td>
                        <td className="px-4 py-3">Thinnest available, reduces eye magnification.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  At MultiFolks, every multifocal lens starts at 1.60 index by default (no extra charge), so your glasses are always lightweight and comfortable. For higher prescriptions, we automatically suggest 1.67 or 1.74 to keep your glasses sleek.
                </p>
              </section>

              <section aria-labelledby="lens-materials">
                <h2 id="lens-materials" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  What About Lens Materials?
                </h2>
                <p className="mb-4">
                  Beyond thickness, the material affects clarity, safety, and comfort.
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Standard Plastic (CR-39):</strong> Affordable and clear, but thicker and less impact-resistant. Best for low prescriptions.
                  </li>
                  <li>
                    <strong>Polycarbonate (1.59 Index):</strong> Lightweight, tough, and UV-blocking by default. Ideal for active users, kids, or rimless frames.
                  </li>
                  <li>
                    <strong>High-Index Plastics (1.60–1.74):</strong> Designed for stronger prescriptions. Thinner, flatter, and more stylish — minimizing the &quot;coke bottle&quot; look.
                  </li>
                  <li>
                    <strong>Trivex (Future Option):</strong> Combines the optical clarity of CR-39 with the strength of polycarbonate (coming soon at MultiFolks).
                  </li>
                </ul>
              </section>

              <section aria-labelledby="coatings">
                <h2 id="coatings" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Coatings for Comfort and Protection (Default vs. Add-On)
                </h2>
                <p className="mb-3">
                  Every MultiFolks lens includes, at no extra cost:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Scratch-resistant coating.</li>
                  <li>Anti-reflective coating.</li>
                  <li>UV protection.</li>
                </ul>
                <p className="mb-3">
                  For added performance, you can personalize with:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Blue light filters for digital strain.</li>
                  <li>Water-repellent, smudge-resistant layers for easy cleaning.</li>
                  <li>Transitions® or photochromic lenses for sun-sensitive lifestyles.</li>
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

export default PickRightLens;
