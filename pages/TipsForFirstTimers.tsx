import React from "react";
import { Link } from "react-router-dom";

const TipsForFirstTimers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Tips for First-Timers</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                Tips for First-Time Multifocal Wearers
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed mb-4">
                Stepping into the world of multifocal lenses is a shift worth celebrating. MultiFolks lenses are designed to give seamless vision across every distance, from reading your phone to spotting road signs. Like any adjustment, it is normal for your eyes and brain to need a little time to sync.
              </p>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Here is how to make those first few weeks as smooth as possible.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="tip-1">
                <h2 id="tip-1" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  1. Wear Them Full-Time from Day One
                </h2>
                <p>
                  The quickest path to comfort is consistency. Put your new MultiFolks lenses on in the morning and keep them on all day. Switching back to old glasses can disrupt adaptation because your eyes are relearning how to track through the new lens zones. The more consistently you wear them, the faster your brain makes the switch permanent.
                </p>
              </section>

              <section aria-labelledby="tip-2">
                <h2 id="tip-2" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  2. Move Your Head, Not Just Your Eyes
                </h2>
                <p className="mb-3">
                  Multifocals have zones for distance (top), intermediate (middle), and near (bottom). To see clearly, shift your head toward what you are viewing rather than relying only on your eyes.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Looking down at your phone? Slightly drop your chin.</li>
                  <li>Reading a sign across the street? Lift your chin a bit and use the upper part of the lens.</li>
                </ul>
                <p>
                  Think of it like adjusting a camera lens. The clearer you frame your focus, the sharper things appear.
                </p>
              </section>

              <section aria-labelledby="tip-3">
                <h2 id="tip-3" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  3. Practice Everyday Movements
                </h2>
                <p className="mb-3">
                  Use the first couple of days to rehearse real-life scenarios:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Walk up and down stairs indoors.</li>
                  <li>Scroll through your phone or read a book at a natural distance.</li>
                  <li>Take a few laps around your home.</li>
                </ul>
                <p>
                  By repeating common movements, your brain maps out how to use each lens zone — making them feel like second nature faster.
                </p>
              </section>

              <section aria-labelledby="tip-4">
                <h2 id="tip-4" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  4. Expect Some Soft Edges (At First)
                </h2>
                <p>
                  Multifocals lenses naturally transition between zones, which can create slight peripheral blur when shifting focus. This is not a flaw, it is how the lenses balance your vision needs. Within days, your eyes will intuitively know where to look. What feels deliberate at first soon becomes automatic.
                </p>
              </section>

              <section aria-labelledby="tip-5">
                <h2 id="tip-5" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  5. Ensure Your Frame Fits Correctly
                </h2>
                <p>
                  Fit matters just as much as the lenses. If your glasses slide down your nose or sit unevenly, you will not be looking through the correct zones. Follow the MultiFolks fit guide online to fine-tune at home.
                </p>
              </section>

              <section aria-labelledby="tip-6">
                <h2 id="tip-6" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  6. Patience Pays Off
                </h2>
                <p>
                  Some people feel at ease within 24 hours; others take up to two weeks. Both are normal. Set a 7-day commitment goal. Most MultiFolks wearers feel at home by day five.
                </p>
              </section>

              <section aria-labelledby="tip-7">
                <h2 id="tip-7" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  7. Seek Help If Things Still Feel &quot;Off&quot;
                </h2>
                <p className="mb-3">
                  If, after two weeks, your vision feels strained or distorted:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Your Pupillary Distance (PD) or fitting height may need adjustment.</li>
                  <li>Your frame might not be sitting correctly.</li>
                </ul>
                <p>
                  MultiFolks support can help recalibrate your fit or lens layout, so you get the comfort you paid for.
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

export default TipsForFirstTimers;
