import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const BustingTheMyth: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <article>
          <header className="mb-12">
            <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-4">
              Busting the Myth
            </h1>
            <p className="text-lg text-gray-700">
              We believe in honesty, not hope.
            </p>
          </header>

          <section className="mb-12" aria-labelledby="breaking-the-myth">
            <h2 id="breaking-the-myth" className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-12">
              Breaking the Multifocal Myth
            </h2>

            <section className="mb-10" aria-labelledby="myth-1">
              <h3 id="myth-1" className="text-[22px] md:text-[26px] font-medium uppercase tracking-wide mb-4">
                The Myth
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Multifocals are seen as a reluctant step into &quot;old age&quot; — clunky lenses, awkward adjustments, unclear pricing. Something you tolerate, not choose.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="reality-1">
              <h3 id="reality-1" className="text-[22px] md:text-[26px] font-medium uppercase tracking-wide mb-4">
                The MultiFolks Reality
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Multifocals aren&apos;t a compromise — they&apos;re a life upgrade. We design them for people in their 40s, 50s, and beyond who are still working, traveling, and living fully.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every pair delivers clarity, comfort, and confidence as standard, so your glasses do more than correct vision — they help you enhance every area of your life.
              </p>
            </section>
          </section>

          <section className="mb-12 pt-8 border-t border-gray-300" aria-labelledby="myth-2">
            <h3 id="myth-2" className="text-[22px] md:text-[26px] font-medium uppercase tracking-wide mb-4">
              The Myth
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              For years, opticians have priced multifocals like a luxury item, not an everyday essential. Opaque prices. Comfort that depends on luck. An in-store experience where you have little control.
            </p>
          </section>

          <section className="mb-12" aria-labelledby="reality-2">
            <h3 id="reality-2" className="text-[22px] md:text-[26px] font-medium uppercase tracking-wide mb-4">
              The MultiFolks Reality
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We include what others upsell: thin 1.6+ index lenses, scratch resistance, UV protection and anti-reflective coatings — all standard.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Digital precision ensures a perfect fit, backed by our Vision Guarantee.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our pricing is upfront, so the process is simple and stress-free. And because we do it all online we will always likely be cheaper than anywhere else.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default BustingTheMyth;
