import React from "react";
import { Link } from "react-router-dom";

const HowToOrder: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>How to Order</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                How to Order Prescription Glasses Online
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed mb-4">
                Buying prescription glasses online should not feel like a gamble. You need comfort, clarity, and confidence — and a process that guarantees all three. At MultiFolks, we have simplified every step with smart tools, AI-powered measurements, and lenses designed specifically for 40+ eyes.
              </p>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Whether this is your first pair or your tenth, here is how we make sure your new glasses feel like they were made just for you — because they are.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="step-1">
                <h2 id="step-1" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Step 1: Find a Frame That Fits You — and Your Lifestyle
                </h2>
                <p className="mb-4">
                  The right glasses do not just look good. They need to feel natural and work seamlessly with your lenses, especially if you are choosing progressives.
                </p>
                <p className="mb-3">
                  When browsing our collection, use these tools to narrow down your perfect match:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Face Shape Guide</strong> – See which frames naturally flatter your features.</li>
                  <li><strong>Size Filters</strong> – Match the width and bridge of your current pair.</li>
                  <li><strong>Multifocal-Ready Badge</strong> – Avoid frames that cannot accommodate progressives.</li>
                  <li><strong>Find My Fit</strong> – Test how your frame will look, right from your screen.</li>
                </ul>
                <p>
                  From ultra-light titanium to statement acetate, every frame at MultiFolks is engineered for comfort, durability, and lens compatibility.
                </p>
              </section>

              <section aria-labelledby="step-2">
                <h2 id="step-2" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Step 2: Add Your Prescription
                </h2>
                <p className="mb-3">
                  Your prescription is the foundation of your lenses. Adding it is simple:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Upload a photo or PDF of your prescription.</li>
                  <li>Enter it manually using our guided form (tap the &quot;?&quot; next to any field for help).</li>
                </ul>
                <p>
                  We securely store your details for easy reordering. Every order is verified by licensed opticians before it is processed.
                </p>
              </section>

              <section aria-labelledby="step-3">
                <h2 id="step-3" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Step 3: Get Your PD &amp; Fitting Height Measured — Without the Guesswork
                </h2>
                <p className="mb-3">
                  For precise vision, especially with progressives, two measurements are critical:
                </p>
                <p className="mb-3">
                  <strong>Pupillary Distance (PD)</strong> and <strong>Fitting Height</strong>.
                </p>
                <p className="mb-4">
                  Instead of rulers or in-store visits, we use your webcam (with your permission) and patented AI face scan to measure both accurately to within ±1mm.
                </p>
                <p>
                  This technology is why over 95% of our first-time customers adjust within days.
                </p>
              </section>

              <section aria-labelledby="step-4">
                <h2 id="step-4" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Step 4: Customize Your Lenses
                </h2>
                <p className="mb-3">
                  Make your glasses work harder for your lifestyle by adding enhancements:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Blue Light Filter</strong> – For heavy screen use and evening reading.</li>
                  <li><strong>Transitions / Photochromic Lenses</strong> – Darken in sunlight, clear indoors.</li>
                  <li><strong>Gradient or Polarized Tints</strong> – For outdoor clarity and sun protection.</li>
                  <li><strong>Water &amp; Smudge Resistance</strong> – Stay cleaner, clearer, longer.</li>
                </ul>
                <p>
                  Not sure what&apos;s right? Write to us at{" "}
                  <a href="mailto:support@multifolks.com" className="text-[#E94D37] hover:underline font-bold">
                    support@multifolks.com
                  </a>
                  {" "}and we will guide you based on your prescription and daily routine.
                </p>
              </section>

              <section aria-labelledby="step-5">
                <h2 id="step-5" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Step 5: Review &amp; Checkout
                </h2>
                <p className="mb-3">
                  Before you confirm, we will show you everything in one place:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your frame name and size</li>
                  <li>Prescription details</li>
                  <li>Lens type and upgrades</li>
                  <li>Estimated delivery date</li>
                </ul>
                <p className="mb-4">
                  Make changes anytime before payment. Once you are set, choose from HSA/FSA, credit/debit cards, UPI, wallets, or pay-later options. You can also use your vision insurance for reimbursement.
                </p>
                <p>
                  Every order is optician-verified, encrypted, and backed by our 30-day comfort guarantee.
                </p>
              </section>

              <section aria-labelledby="after-order">
                <h2 id="after-order" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  After You Order
                </h2>
                <p className="mb-3">
                  Here is what happens behind the scenes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Our optical team verifies your prescription and fit details.</li>
                  <li>Your lenses are crafted in our precision lab and fitted to your chosen frame.</li>
                  <li>Each pair undergoes a final quality check before shipping.</li>
                </ul>
                <p className="mb-4">
                  Most orders arrive in 7–14 business days, complete with tracking updates.
                </p>
                <p>
                  If something does not feel right, we offer easy exchanges or full returns. No hidden terms, no stress.
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

export default HowToOrder;
