import React from "react";
import { Link } from "react-router-dom";

const ReplacementChecklist: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Replacement Checklist</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                When Should I Replace My Glasses?
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                If your prescription feels fine, worn-out lenses or frames can strain your eyes and make life harder. Here is how to know it is time for a refresh.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="clarity-check">
                <h2 id="clarity-check" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  1. Clarity Check
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Are you squinting more than usual at texts, menus, or road signs?</li>
                  <li>Cleaning your lenses constantly, but they still do not feel clear?</li>
                  <li>Tilting your head often to find the &quot;sweet spot&quot; in your progressives?</li>
                </ul>
                <p className="text-[#525252] italic">
                  It might mean: Your prescription has changed, or your lens coatings have worn out.
                </p>
              </section>

              <section aria-labelledby="comfort-test">
                <h2 id="comfort-test" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  2. The Comfort Test
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Do your glasses keep sliding, even after adjustments?</li>
                  <li>Feel pressure behind your ears or on your temples?</li>
                  <li>Are the frames loose, wobbly, or uneven?</li>
                </ul>
                <p className="text-[#525252] italic">
                  It might mean: Warped frames or loose hinges are disrupting how your lenses align with your eyes. Critical for multifocals.
                </p>
              </section>

              <section aria-labelledby="damage-report">
                <h2 id="damage-report" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  3. The Damage Report
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Scratches, yellowed nose pads, or bent arms?</li>
                  <li>Have you resorted to tape? (It happens.)</li>
                </ul>
                <p className="text-[#525252] italic">
                  It might mean: Your glasses are affecting both comfort and lens accuracy.
                </p>
              </section>

              <section aria-labelledby="upgrade-itch">
                <h2 id="upgrade-itch" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  4. The Upgrade Itch
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Bored with your current style?</li>
                  <li>Craving lighter, trendier frames?</li>
                  <li>Wanting better lens features (like blue light filters or ultra-thin designs)?</li>
                </ul>
                <p className="text-[#525252] italic">
                  It might mean: Time to match your eyewear to your life today, not five years ago.
                </p>
              </section>

              <section aria-labelledby="vision-fatigue">
                <h2 id="vision-fatigue" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  5. The Vision Fatigue Test
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Headaches after reading or screen time?</li>
                  <li>Dry, tired eyes by mid-afternoon?</li>
                  <li>Difficulty adjusting focus between distances?</li>
                </ul>
                <p className="text-[#525252] italic">
                  It might mean: Your prescription is outdated, or your lenses no longer sit correctly.
                </p>
              </section>

              <section aria-labelledby="two-year-rule">
                <h2 id="two-year-rule" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  6. The Two-Year Rule
                </h2>
                <p>
                  Even if everything feels fine, experts recommend an eye check-up every two years, especially after 40. Small vision changes can have a big impact on comfort and clarity.
                </p>
              </section>

              <section aria-labelledby="time-for-upgrade">
                <h2 id="time-for-upgrade" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Time for an Upgrade?
                </h2>
                <p className="mb-4">
                  If you checked two or more boxes above, it is time to treat your eyes to something better.
                </p>
                <p>
                  With MultiFolks, you could measure your PD and fitting height online, choose lenses tailored to your lifestyle, and explore our collection for frames and lenses that fit your life.
                </p>
              </section>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default ReplacementChecklist;
