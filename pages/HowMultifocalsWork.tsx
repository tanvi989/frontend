import React from "react";
import { Link } from "react-router-dom";

const HowMultifocalsWork: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>How Multifocal Lenses Work</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                What Are Multifocal Lenses and How Do They Work?
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed mb-4">
                For many people over 40, vision changes make everyday tasks — from reading a phone to watching the road — a juggling act of multiple glasses. Our multifocal lenses are built to simplify this, combining near, intermediate, and distance correction in one seamless lens.
              </p>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Unlike bifocals, there are no visible lines or abrupt jumps in focus. Every transition feels natural, so your glasses work with you.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="what-are">
                <h2 id="what-are" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  What Are Multifocal Lenses?
                </h2>
                <p className="mb-3">
                  Also known as progressive lenses, multifocal feature three vision zones:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li><strong>Top:</strong> Distance (walking, driving, conversations)</li>
                  <li><strong>Middle:</strong> Intermediate (computer screens, dashboards, grocery shelves)</li>
                  <li><strong>Bottom:</strong> Near (books, phones, labels)</li>
                </ul>
                <p>
                  These zones are digitally blended so your eyes glide smoothly from one to the next, without the visual &quot;breaks&quot; that bifocals create.
                </p>
              </section>

              <section aria-labelledby="stand-apart">
                <h2 id="stand-apart" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Why MultiFolks Lenses Stand Apart
                </h2>
                <p className="mb-3">
                  Not all multifocals perform the same. MultiFolks goes beyond the standard with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Digital corridor designs customized to your facial structure.</li>
                  <li>AI-measured PD (Pupillary Distance) and fitting height for precise zone placement.</li>
                  <li>Frame-specific optimization so your zones align naturally within your chosen style.</li>
                </ul>
                <p>
                  These details mean greater comfort and faster adaptation — especially if you wear your lenses from morning to night.
                </p>
              </section>

              <section aria-labelledby="how-fit">
                <h2 id="how-fit" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  How Multifocals Work (and Why Fit Matters)
                </h2>
                <p className="mb-3">
                  Multifocals only perform at their best when they&apos;re aligned perfectly with your eyes. Three factors determine this alignment:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>PD (Pupillary Distance):</strong> Horizontal alignment of the lens center to your pupils.</li>
                  <li><strong>Fitting Height:</strong> Vertical positioning of each vision zone.</li>
                  <li><strong>Frame Size and Shape:</strong> Influences how naturally your eyes move through the zones.</li>
                </ul>
                <p>
                  MultiFolks lenses are custom mapped to your measurements and your frame to avoid distortion and speed up adaptation.
                </p>
              </section>

              <section aria-labelledby="getting-comfortable">
                <h2 id="getting-comfortable" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Getting Comfortable with Multifocals
                </h2>
                <p className="mb-3">
                  For most people, adapting takes 3–7 days, sometimes up to two weeks if it&apos;s a first pair. Comfort comes faster when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Wear them consistently.</li>
                  <li>Move your head slightly (not just your eyes) when shifting between distances.</li>
                  <li>Avoid switching back to old glasses during the adjustment phase.</li>
                </ul>
                <p>
                  Every pair comes with a 30-day comfort guarantee, so you can ease into multifocals risk-free.
                </p>
              </section>

              <section aria-labelledby="right-for-you">
                <h2 id="right-for-you" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Are Multifocal Right for You?
                </h2>
                <p className="mb-3">They&apos;re ideal if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You&apos;ve been prescribed both distance and reading correction.</li>
                  <li>You&apos;re done swapping between multiple pairs of glasses.</li>
                  <li>You prefer a clean, modern look without bifocal lines.</li>
                </ul>
              </section>

              <section aria-labelledby="lens-types">
                <h2 id="lens-types" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  Multifocal Lens Types
                </h2>
                <p className="mb-4">
                  Not every lifestyle needs the same lens. MultiFolks offers three multifocal options:
                </p>
                <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
                  <table className="w-full text-sm text-left" summary="Multifocal lens types: Standard, Advanced, Precision+">
                    <thead>
                      <tr className="bg-[#F3F0E7] text-[#1F1F1F] font-bold">
                        <th className="px-4 py-3 border-b border-r border-gray-200">Type</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">Feature</th>
                        <th className="px-4 py-3 border-b border-gray-200">Ideal For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">Standard</td>
                        <td className="px-4 py-3 border-r border-gray-200">Wide near zone</td>
                        <td className="px-4 py-3">People who are more into reading, limited digital screen time. Very little or no driving, etc.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">Advanced</td>
                        <td className="px-4 py-3 border-r border-gray-200">Wider intermediate zone, smoother transitions</td>
                        <td className="px-4 py-3">People who have an active lifestyle, office goers, limited sports, active driving, regular screen users, multitaskers. Easy adaptability.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200 font-medium">Precision+</td>
                        <td className="px-4 py-3 border-r border-gray-200">Widest zone for all three sections: distance, intermediate &amp; near zone</td>
                        <td className="px-4 py-3">People who want to enjoy life to the fullest without any compromise. All purpose and no restrictions. Fastest adaptability and works with most frames.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section aria-labelledby="enhancements">
                <h2 id="enhancements" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Enhancements to Elevate Your Lenses
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Blue Light Filter:</strong> Reduces screen fatigue during extended device use.</li>
                  <li><strong>Transitions®:</strong> Lenses that adjust to sunlight, eliminating the need for a second pair outdoors.</li>
                  <li><strong>Anti-Reflective + Scratch-Resistant Coatings:</strong> Standard on all MultiFolks multifocal.</li>
                  <li><strong>Water-Repellent + Smudge-Proof Layers:</strong> Keeps your lenses clearer, longer.</li>
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

export default HowMultifocalsWork;
