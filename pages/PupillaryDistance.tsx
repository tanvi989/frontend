import React from "react";
import { Link } from "react-router-dom";

const BANNER_IMG =
  "https://cdn.multifolks.com/desktop/images/banners/static-pages/desk-pupillarydistance-banner.jpg";
const PD_IMG_1 = "https://cdn.multifolks.com/shared/images/static-pages/pupillary-distance/PD-img-1.jpg";
const PD_IMG_2 = "https://cdn.multifolks.com/shared/images/static-pages/pupillary-distance/PD-img-2.jpg";
const PD_IMG_3 = "https://cdn.multifolks.com/shared/images/static-pages/pupillary-distance/PD-img-31.jpg";
const PD_IMG_4 = "https://cdn.multifolks.com/shared/images/static-pages/pupillary-distance/PD-img-4.jpg";
const PD_IMG_5 = "https://cdn.multifolks.com/shared/images/static-pages/pupillary-distance/PD-img-5.jpg";

const PupillaryDistance: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-6 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Pupillary Distance</span>
          </span>
        </div>

        {/* Banner - compact height per user request */}
        <div className="relative w-full h-[180px] md:h-[220px] rounded-lg overflow-hidden mb-10">
          <img
            src={BANNER_IMG}
            alt="How to measure pupillary distance at home"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                How to Measure Pupillary Distance (PD) at Home
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                PD (Pupillary Distance) is the space between the centers of your pupils, measured in millimeters. It determines where the optical center of each lens should sit so your vision stays sharp and strain-free.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="types-pd">
                <h2 id="types-pd" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Types of PD
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Single PD:</strong> One measurement across both eyes (e.g., 62mm) — used mainly for single vision.</li>
                  <li><strong>Dual PD:</strong> One measurement per eye (e.g., 31mm right, 31mm left) — preferred for multifocals to fine-tune each zone&apos;s position.</li>
                </ul>
              </section>

              <section aria-labelledby="why-matters">
                <h2 id="why-matters" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Why Pupillary Distance Matters?
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Keeps multifocals feeling balanced and natural.</li>
                  <li>Aligns the reading and intermediate zones so they fall exactly where your eyes need them.</li>
                  <li>Prevents distortion and eye strain, especially for screen-heavy routines.</li>
                </ul>
              </section>

              <section aria-labelledby="easy-ways">
                <h2 id="easy-ways" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  Easy Ways to Measure PD at Home
                </h2>
                <p className="mb-4">Let&apos;s explore simple ways to measure your PD value yourself.</p>

                <div className="mb-6">
                  <h3 className="font-bold text-[#1F1F1F] text-lg mb-2">
                    With MultiFolks AI Tool (Recommended):
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>A quick, guided webcam capture during checkout.</li>
                    <li>Accurate to ±1mm, no tools or manual measuring needed.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-[#1F1F1F] text-lg mb-3">
                    Manual Options:
                  </h3>
                  {/* Row 1: content left, image right */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6 items-center">
                    <div>
                      <h4 className="font-bold text-[#1F1F1F] mb-2">Credit Card Method:</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Stand 12–14 inches from a mirror.</li>
                        <li>Hold a credit card below your eyes for scale.</li>
                        <li>Look straight ahead, take a selfie, and upload it — we calculate your PD digitally.</li>
                      </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img src={PD_IMG_1} alt="Pupillary distance - credit card method" className="w-full h-auto object-contain" loading="lazy" />
                    </div>
                  </div>
                  {/* Row 2: image left, content right */}
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="rounded-lg overflow-hidden">
                      <img src={PD_IMG_2} alt="Pupillary distance - ruler and friend method" className="w-full h-auto object-contain" loading="lazy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F1F1F] mb-2">Ruler + Friend Method:</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Sit with a millimeter ruler above your eyes.</li>
                        <li>Have a friend measure from the center of one pupil to the other, or per eye for dual PD.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section aria-labelledby="using-mirror">
                <h2 id="using-mirror" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  Using A Mirror
                </h2>
                {/* Image left, content right */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <img src={PD_IMG_3} alt="Pupillary distance - using a mirror" className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                  <div>
                    <p className="mb-2 font-bold text-sm">What you need: A mirror &amp; a ruler</p>
                    <p className="mb-2 font-bold text-sm">Steps:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Stand at least 8 inches away from a mirror.</li>
                      <li>Take the ruler &amp; place it against the brow.</li>
                      <li>Close your left eye &amp; align the 0 mm of the ruler with your right pupil.</li>
                      <li>Repeat the same with the right eye &amp; measure this distance.</li>
                      <li>You&apos;ll have your PD value right there.</li>
                    </ol>
                  </div>
                </div>
              </section>

              <section aria-labelledby="existing-rx">
                <h2 id="existing-rx" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  Using Existing Prescription
                </h2>
                {/* Content left, image right */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="mb-4">
                      If you already have a PD, look for an abbreviated &quot;PD&quot; column on the lower part of your prescription slip. If there are two pupillary values in your prescriptions, you might have to measure the distance between each pupil to the center of the nose bridge individually.
                    </p>
                    <p>
                      In case your PD measurement is not coming out right, you can also take help from a friend or visit your optometrist / optician to get your exact Pupillary distance.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img src={PD_IMG_4} alt="Pupillary distance - prescription" className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                </div>
              </section>

              <section aria-labelledby="takeaways">
                <h2 id="takeaways" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  Some More Takeaways:
                </h2>
                {/* Image left, content right */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <img src={PD_IMG_5} alt="Pupillary distance - takeaways" className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                  <div>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>PD is an important value when buying eyeglasses to ensure perfectly centered vision.</li>
                      <li>You can ask the optometrist to measure it for you at your regular Eye Check Up.</li>
                      <li>You can find your PD Value with the help of a PD stick or a pupilometer also.</li>
                      <li>If you wear Reading Glasses, your PD value will be different. Ideally, you need to subtract 3 mm from your PD value in order to get the exact PD.</li>
                      <li>PD Value can change with age. So make sure you go for regular eye check-ups.</li>
                    </ul>
                    <p>
                      In case you have your prescription &amp; are confused about it, write to us at support@multifolks.com and we&apos;ll help you out.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex justify-center mb-8">
              <Link
                to="/glasses"
                className="bg-[#232320] text-white px-12 py-4 rounded-full font-bold text-sm uppercase tracking-[0.15em] hover:bg-black transition-all"
              >
                SHOP NOW
              </Link>
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

export default PupillaryDistance;
