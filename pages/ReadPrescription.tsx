import React from "react";
import { Link } from "react-router-dom";

const ReadPrescription: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="mb-8 hidden md:block">
          <span className="bg-[#F3F0E7] px-3 py-1 rounded text-xs font-bold text-[#1F1F1F] uppercase tracking-widest inline-flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Read Your Prescription</span>
          </span>
        </div>

        <main>
          <article>
            <header className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-medium uppercase tracking-wide mb-6">
                How to Read Your Prescription
              </h1>
              <p className="text-[#333] text-base font-medium leading-relaxed">
                Your eyeglasses are a personalized blueprint for how your lenses will help you see. Understanding each element of your prescription helps you make precise choices when selecting lenses, coatings, or comparing options.
              </p>
            </header>

            <div className="space-y-10 text-[#333] text-base font-medium leading-relaxed border-b border-gray-200 pb-8 mb-8">
              <section aria-labelledby="where-from">
                <h2 id="where-from" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Where Your Prescription Comes From
                </h2>
                <p className="mb-4">
                  After a routine eye exam, your optometrist will give you a written prescription, typically valid for 1–2 years.
                </p>
                <p className="mb-2">When you shop with MultiFolks, you can:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Upload a photo or scanned copy directly, or</li>
                  <li>Enter the values manually using our guided form.</li>
                </ul>
                <p>
                  Either way, our licensed opticians verify every detail before your glasses are made.
                </p>
              </section>

              <section aria-labelledby="essentials">
                <h2 id="essentials" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  The Essentials, Explained Simply
                </h2>
                <p className="mb-6">
                  Most prescriptions include these key terms (do not worry — they are simpler than they sound):
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">
                      1. OD &amp; OS
                    </h3>
                    <p className="mb-2">
                      These are just abbreviations in Latin:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                      <li><strong>OD (Oculus Dexter)</strong> – your right eye.</li>
                      <li><strong>OS (Oculus Sinister)</strong> – your left eye.</li>
                    </ul>
                    <p>
                      Each eye can have different correction needs, so they are listed separately.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">
                      2. SPH (Sphere)
                    </h3>
                    <p className="mb-2">
                      This is the main number that corrects nearsightedness or farsightedness:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                      <li>A minus (–) sign means you are nearsighted (clear close-up, blurry far away).</li>
                      <li>A plus (+) sign means you are farsighted (clear far away, blurry up close).</li>
                    </ul>
                    <p>
                      The bigger the number, the stronger the correction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">
                      3. CYL (Cylinder) and Axis
                    </h3>
                    <p className="mb-2">
                      These two work together to correct astigmatism — a common condition where the eye is not perfectly round.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                      <li><strong>CYL</strong> shows how much correction is needed.</li>
                      <li><strong>Axis</strong> (1 to 180 degrees) shows where to apply it.</li>
                    </ul>
                    <p>
                      If you do not have astigmatism, these fields may be blank.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">
                      4. ADD (Addition)
                    </h3>
                    <p className="mb-2">
                      This is the near-vision boost added to your regular prescription, most often needed if you are over 40.
                    </p>
                    <p className="mb-2">
                      It is what allows multifocal (progressive) lenses to help you see clearly up close, mid-range (like a laptop), and far away — all in one lens.
                    </p>
                    <p>
                      Typical values look like +1.25, +2.00, and so on.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">
                      5. PD (Pupillary Distance)
                    </h3>
                    <p className="mb-2">
                      This is the distance between the centers of your pupils. It ensures your lenses are perfectly aligned with your eyes for comfort and clarity.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Sometimes your optometrist includes it.</li>
                      <li>If not, MultiFolks measures it for you automatically using our AI-powered face scan during checkout (accurate to within ±1mm).</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section aria-labelledby="sample-prescription">
                <h2 id="sample-prescription" className="text-xl font-bold text-[#1F1F1F] mb-4">
                  A Sample Prescription
                </h2>
                <p className="mb-4">
                  Here is how a typical prescription might look:
                </p>

                <p className="text-sm font-semibold text-[#1F1F1F] mb-2">Table 1 — Simplified example (one eye)</p>
                <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
                  <table className="w-full text-sm text-left" summary="Simplified prescription example for right eye">
                    <thead>
                      <tr className="bg-[#F3F0E7] text-[#1F1F1F] font-bold">
                        <th className="px-4 py-3 border-b border-r border-gray-200">Eye</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">SPH</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">CYL</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">Axis</th>
                        <th className="px-4 py-3 border-b border-gray-200">ADD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200">OD</td>
                        <td className="px-4 py-3 border-r border-gray-200">–</td>
                        <td className="px-4 py-3 border-r border-gray-200">–</td>
                        <td className="px-4 py-3 border-r border-gray-200">180</td>
                        <td className="px-4 py-3">+2.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm font-semibold text-[#1F1F1F] mb-2">Table 2 — Full example (both eyes)</p>
                <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
                  <table className="w-full text-sm text-left" summary="Sample prescription with both eyes">
                    <thead>
                      <tr className="bg-[#F3F0E7] text-[#1F1F1F] font-bold">
                        <th className="px-4 py-3 border-b border-r border-gray-200">Eye</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">SPH</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">CYL</th>
                        <th className="px-4 py-3 border-b border-r border-gray-200">Axis</th>
                        <th className="px-4 py-3 border-b border-gray-200">ADD</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200">(Right)</td>
                        <td className="px-4 py-3 border-r border-gray-200">2.50</td>
                        <td className="px-4 py-3 border-r border-gray-200">0.75</td>
                        <td className="px-4 py-3 border-r border-gray-200">0</td>
                        <td className="px-4 py-3">0</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-gray-200">OS (Left)</td>
                        <td className="px-4 py-3 border-r border-gray-200">2.00</td>
                        <td className="px-4 py-3 border-r border-gray-200">0.50</td>
                        <td className="px-4 py-3 border-r border-gray-200">170</td>
                        <td className="px-4 py-3">+2.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  This person is nearsighted in both eyes, has mild astigmatism, and needs a boost for near vision — making them an ideal candidate for multifocal lenses.
                </p>
              </section>

              <section aria-labelledby="contact-lens">
                <h2 id="contact-lens" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  What About Contact Lens Prescriptions?
                </h2>
                <p className="mb-4">
                  These are different from eyeglass prescriptions because they include additional measurements like base curve and diameter.
                </p>
                <p className="font-bold text-[#1F1F1F]">
                  You cannot use contact lens prescription for glasses. Always use the prescription written specifically for eyeglasses.
                </p>
              </section>

              <section aria-labelledby="dont-understand">
                <h2 id="dont-understand" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  What If I Do not Understand My Prescription?
                </h2>
                <p className="mb-3">No worries. If you are unsure:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Upload a photo of your prescription.</li>
                  <li>Our opticians will interpret it for you.</li>
                  <li>If anything is missing or unclear, reach out before making your lenses.</li>
                </ul>
              </section>

              <section aria-labelledby="worth-understanding">
                <h2 id="worth-understanding" className="text-xl font-bold text-[#1F1F1F] mb-3">
                  Why It is Worth Understanding
                </h2>
                <p className="mb-3">
                  Knowing what each part of your prescription means helps you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Choose lenses confidently.</li>
                  <li>Understand why certain coatings (like anti-reflective or blue light filters) may help.</li>
                  <li>Select the right lens thickness (especially for higher prescriptions).</li>
                </ul>
                <p>
                  At MultiFolks, we believe great vision starts with understanding your needs — and we make sure your lenses match them perfectly.
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

export default ReadPrescription;
