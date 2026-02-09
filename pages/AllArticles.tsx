import React from "react";
import { Link } from "react-router-dom";

const LANDING_IMG1 = "https://cdn.multifolks.com/desktop/images/landing-img1.svg";
const LANDING_IMG2 = "https://cdn.multifolks.com/desktop/images/landing-img2.svg";

const AllArticles: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans pt-16 pb-24 text-[#1F1F1F]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        {/* Landing banner */}
        <div
          className="flex justify-between items-center text-[#232320] mb-16"
          style={{ height: "300px" }}
        >
          <img
            src={LANDING_IMG1}
            alt=""
            width={190}
            height="auto"
            className="h-auto object-contain flex-shrink-0"
          />
          <div className="list-top-title flex flex-col items-center justify-center px-4">
            <h1 className="text-[28px] md:text-[36px] font-bold uppercase tracking-wide text-center">
              All Articles
            </h1>
          </div>
          <img
            src={LANDING_IMG2}
            alt=""
            width={190}
            height="auto"
            className="h-auto object-contain flex-shrink-0"
          />
        </div>

        {/* Article links by category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-[#333]">
          {/* About Us */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F1F1F] mb-3">
              About Us
            </h2>
            <div className="space-y-2">
              <Link to="/bursting-the-myth" className="block hover:underline">
                Busting the Myth
              </Link>
              <Link to="/why-multifolks" className="block hover:underline">
                Why MultiFolks
              </Link>
              <Link to="/our-guarantee" className="block hover:underline">
                Our Guarantee
              </Link>
              <Link to="/insurance" className="block hover:underline">
                Insurance
              </Link>
              <Link to="/exchange-policy" className="block hover:underline">
                Exchange Policy
              </Link>
              <Link to="/return-policy" className="block hover:underline">
                Return Policy
              </Link>
              <Link to="/shipping" className="block hover:underline">
                Shipping
              </Link>
              <Link to="/privacy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:underline">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Buying Guides */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F1F1F] mb-3">
              Buying Guides
            </h2>
            <div className="space-y-2">
              <Link to="/ready-for-multifocals" className="block hover:underline">
                Ready for Multifocals
              </Link>
              <Link to="/how-to-order" className="block hover:underline">
                How to Order
              </Link>
              <Link to="/read-your-prescription" className="block hover:underline">
                Read Your Prescription
              </Link>
              <Link to="/choosing-right-frame" className="block hover:underline">
                Choosing the Right Frame
              </Link>
              <Link to="/pick-right-lens" className="block hover:underline">
                Pick the Right Lens
              </Link>
              <Link to="/lens-coatings" className="block hover:underline">
                Lens Coatings
              </Link>
              <Link to="/replacement-checklist" className="block hover:underline">
                Replacement Checklist
              </Link>
            </div>
          </div>

          {/* Multifocal Essentials */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F1F1F] mb-3">
              Multifocal Essentials
            </h2>
            <div className="space-y-2">
              <Link to="/PBS-vision" className="block hover:underline">
                Progressive vs Bifocal vs Single Vision
              </Link>
              <Link to="/how-multifocal-work" className="block hover:underline">
                How Multifocal Lenses Work
              </Link>
              <Link to="/pupillary-distance" className="block hover:underline">
                Pupillary Distance (PD)
              </Link>
              <Link to="/fitting-height" className="block hover:underline">
                Fitting Height
              </Link>
              <Link to="/how-we-measure" className="block hover:underline">
                How We Measure
              </Link>
            </div>
          </div>

          {/* Adaptation */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F1F1F] mb-3">
              Adaptation
            </h2>
            <div className="space-y-2">
              <Link to="/tip-first-time" className="block hover:underline">
                Tips for First-Timers
              </Link>
              <Link to="/fit-guide" className="block hover:underline">
                Fit Guide
              </Link>
              <Link to="/first-7-days" className="block hover:underline">
                First 7 Days
              </Link>
              <Link to="/adjusting-multifocal-glasses" className="block hover:underline">
                Adjusting to Multifocals
              </Link>
              <Link to="/common-mistakes" className="block hover:underline">
                Common Mistakes
              </Link>
              <Link to="/driving-progressive-lenses" className="block hover:underline">
                Driving Tips
              </Link>
              <Link to="/progressive-fit-check" className="block hover:underline">
                Fine Tune the Fit
              </Link>
              <Link to="/all-day-comfort" className="block hover:underline">
                All-Day Comfort
              </Link>
              <Link to="/help" className="block hover:underline">
                Seek Help
              </Link>
            </div>
          </div>

          {/* Care & Maintenance */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F1F1F] mb-3">
              Care & Maintenance
            </h2>
            <div className="space-y-2">
              <Link to="/clean-scratches" className="block hover:underline">
                Clean Without Scratches
              </Link>
              <Link to="/storage-handling" className="block hover:underline">
                Storage and Handling
              </Link>
              <Link to="/how-to-travel" className="block hover:underline">
                Travel Tips
              </Link>
              <Link to="/contact" className="block font-bold hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
