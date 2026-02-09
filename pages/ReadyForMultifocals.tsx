import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ReadyForMultifocals: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Ready for Multifocals</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                How to Know If You are Ready for Multifocal Glasses
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed mb-4">
                Struggling to read your phone up close, but still seeing road signs clearly?
              </p>
              <p className="text-[#333] text-base font-medium leading-relaxed mb-4">
                That&apos;s often the first sign of presbyopia, a natural change in near vision that usually begins in your 40s. It simply means your eyes are evolving.
              </p>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Multifocal glasses are designed to help you move seamlessly from books to screens to the open road, all with a single pair of lenses. But when is the right time to make the switch? Here are the signs.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="sign-1">
                <h2 id="sign-1" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  1. You are Holding Your Phone or Book at Arm&apos;s Length
                </h2>
                <p className="mb-2">
                  Menu, messages, even the morning paper — they all feel clearer when they are farther away.
                </p>
                <p>
                  This is the classic start of presbyopia, and it is exactly what multifocals are built to solve.
                </p>
              </section>

              <section aria-labelledby="sign-2">
                <h2 id="sign-2" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  2. You are Switching Between Two Pairs of Glasses
                </h2>
                <p>
                  One for distance. Another for reading. Juggling glasses is frustrating — and unnecessary. Progressive lenses combine near, intermediate, and distance vision into one seamless solution.
                </p>
              </section>

              <section aria-labelledby="sign-3">
                <h2 id="sign-3" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  3. Screens Strain Your Eyes, Even When Reading Glasses Help
                </h2>
                <p>
                  If your laptop or tablet feels like a gray zone — not quite near, not quite far — multifocals bridge that gap with a dedicated intermediate zone, designed for screen comfort.
                </p>
              </section>

              <section aria-labelledby="sign-4">
                <h2 id="sign-4" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  4. Your Prescription Includes an &quot;ADD&quot; Value
                </h2>
                <p>
                  Look at your most recent prescription. If there is a section marked ADD (with a number like +1.50 or +2.00), it is your cue: your optometrist is signaling it is time to add near-vision support.
                </p>
              </section>

              <section aria-labelledby="sign-5">
                <h2 id="sign-5" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  5. Eye Fatigue by the End of the Day
                </h2>
                <p>
                  Eyes that feel strained after switching between books, screens, and conversations are often working harder than they need to. Multifocals spread the workload, so your vision stays comfortable longer.
                </p>
              </section>

              <section aria-labelledby="sign-6">
                <h2 id="sign-6" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  6. You are Looking for Comfort and Simplicity
                </h2>
                <p>
                  One pair. All day. For work, reading, and driving — no switching, no lines, no compromises. That&apos;s why most people make the move to progressives.
                </p>
              </section>

              <section aria-labelledby="sign-7">
                <h2 id="sign-7" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  7. Still Unsure? Try This Quick Test
                </h2>
                <p className="mb-3">Ask yourself:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Can you see your TV across the room clearly?</li>
                  <li>Can you read a text message without strain?</li>
                  <li>Can you do both without changing glasses?</li>
                </ul>
                <p>If not, it is time.</p>
              </section>

              <section aria-labelledby="sign-8">
                <h2 id="sign-8" className="text-xl font-bold text-[#1F1F1F] mb-2">
                  8. Why Choose MultiFolks for Your First Multifocals?
                </h2>
                <p className="mb-3">
                  We&apos;ve designed our experience to make adapting easy — even for first-time wearers:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>AI-powered PD and fitting height measurement (for perfect lens alignment)</li>
                  <li>Frame-specific lens mapping for a natural feel</li>
                  <li>Lightweight, thin lenses that reduce bulk</li>
                  <li>30-day comfort guarantee so you can adjust without worry</li>
                </ul>
                <p>
                  Most users adapt in just a few days. Once they do, they rarely look back.
                </p>
              </section>
            </div>

            <p className="text-[#333] text-base font-medium leading-relaxed mb-10">
              Multifocal lenses include varifocals, progressives, trifocal and bifocal — all designed to help you see clearly at multiple distances.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => navigate("/glasses")}
                className="bg-[#232320] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-[0.15em] hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full max-w-[300px] sm:w-auto"
              >
                EXPLORE OUR COLLECTION
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default ReadyForMultifocals;
