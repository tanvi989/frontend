import React from "react";
import { Link } from "react-router-dom";

const FitGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Fit Guide</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                MultiFolks Fit Guide
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Here&apos;s a step-by-step guide to adjust the fit of multifocal glasses at home so you get proper vision through all three zones (distance, intermediate, and near) without visiting a store:
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="step-1">
                <h2 id="step-1" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  1. Check How They&apos;re Sitting First
                </h2>
                <p className="mb-3">
                  Before adjusting anything, put your glasses on and note:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Are you tilting your head up/down to see clearly at distance or near?</li>
                  <li>Do you have to look sideways to get clear focus?</li>
                  <li>Are the frames slipping down your nose?</li>
                  <li>Is one lens higher or closer than the other?</li>
                </ul>
                <p>These clues help identify what needs adjusting.</p>
              </section>

              <section aria-labelledby="step-2">
                <h2 id="step-2" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  2. Fix Frame Height (Fitting Height)
                </h2>
                <p className="mb-3">
                  For multifocals, your eyes must naturally align with the correct zones:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>The distance zone should be at or just above your pupil line.</li>
                  <li>The near zone should align with your natural reading angle when looking down.</li>
                </ul>
                <p className="mb-2 font-bold text-sm">If the frame is too high or low:</p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Lower it by carefully bending the nose pads outward (for metal frames) so the frame sits lower.</li>
                  <li>Raise it by pushing the nose pads inward so it sits higher.</li>
                  <li>For plastic frames without nose pads, adjust by slightly bending the arms near the hinges so the frame tilts correctly.</li>
                </ul>
              </section>

              <section aria-labelledby="step-3">
                <h2 id="step-3" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  3. Level the Lenses (Horizontal Alignment)
                </h2>
                <p className="mb-3">If one lens seems higher:</p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Bend the temple (arm) down on the side where the lens is too high (this lowers that side).</li>
                  <li>Do the opposite to raise a side.</li>
                </ul>
                <p>
                  Do this slowly using gentle pressure near the hinge, not at the tip, to avoid cracking the arm.
                </p>
              </section>

              <section aria-labelledby="step-4">
                <h2 id="step-4" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  4. Secure the Fit Around Your Ears
                </h2>
                <p className="mb-3">
                  Slipping frames can ruin your multifocals alignment because the near zone drops too low.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Heat the temple tips gently (hairdryer on low for 30 seconds if they&apos;re plastic).</li>
                  <li>Bend them slightly inward and downward so they hug behind your ears comfortably.</li>
                </ul>
              </section>

              <section aria-labelledby="step-5">
                <h2 id="step-5" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  5. Check the Tilt (Pantoscopic Tilt)
                </h2>
                <p className="mb-3">
                  Multifocals are designed to work best with a slight forward tilt (around 8–12°).
                </p>
                <p>
                  If your frames sit too upright or lean back, carefully bend the arms downward near the hinge so the bottom of the lenses angle slightly closer to your cheeks.
                </p>
              </section>

              <section aria-labelledby="step-6">
                <h2 id="step-6" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  6. Re-Test Your Vision Zones
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Look straight ahead — you should see distance clearly without tilting your chin.</li>
                  <li>Look slightly down for computer — intermediate zone should be natural.</li>
                  <li>Look down at reading distance — the near zone should engage without straining your neck.</li>
                </ul>
              </section>

              <section aria-labelledby="quick-tips">
                <h2 id="quick-tips" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Quick Tips:
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Always use both hands when bending to avoid twisting the frame.</li>
                  <li>Make small adjustments (1–2 mm at a time).</li>
                  <li>If your lenses are popping out or the frame feels fragile, don&apos;t force it — visit an optician.</li>
                  <li>Clean and dry your hands and frames before starting.</li>
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

export default FitGuide;
