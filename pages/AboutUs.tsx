import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
       <div className="w-full  min-h-screen font-sans text-[#1F1F1F] pt-6 pb-16 md:pt-12 md:pb-24 mt-20 md:mt-1">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Desktop Layout - 3 columns: eye | text (centered in middle) | profile */}
        <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-4 md:gap-8 mb-10 md:mb-0 min-h-[300px] md:min-h-[400px] items-center justify-items-center">
          {/* Left: Eye icon */}
          <div className="w-32 h-32 md:w-40 md:h-40 justify-self-end">
            <img
              src="/eye.png"
              alt="Eye illustration"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Center: Text in the middle between the two icons (your blue box area) */}
          <div className="text-center px-4 min-w-0 max-w-[520px]">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-4 md:mb-6 leading-tight">
              About Multifolks
            </h1>
            <p className="text-lg md:text-xl text-[#1F1F1F]">
              Multifocals, made for the way you live now.
            </p>
          </div>

          {/* Right: Profile icon */}
          <div className="w-32 h-32 md:w-40 md:h-40 justify-self-start">
            <img
              src="/q5.png"
              alt="Profile illustration"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout - Only shown on mobile */}
        <div className="sm:hidden mb-12 flex flex-col items-center justify-center text-center">
          {/* Mobile Eye Box */}
          <div className="w-28 h-28 mb-4">
            <img
              src="/eye.png"
              alt="Eye illustration"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Mobile Text Content - Centered */}
          <div className="w-full max-w-[320px] mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold uppercase mb-4">
              About Multifolks
            </h1>
            <p className="text-base font-medium text-[#1F1F1F]">
              Multifocals, made for the way you live now.
            </p>
          </div>

          {/* Mobile Profile Box */}
          <div className="w-28 h-28 mt-4">
            <img
              src="/q5.png"
              alt="Profile illustration"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content Sections */}
        <div className="space-y-10 sm:space-y-2 max-w-7xl mx-auto">
          <section>
            <h3 className="text-lg sm:text-xl md:text-xl font-mono uppercase mb-1  text-[#1F1F1F] tracking-wide">
              The World's Only 100% Multifocal Specialists
            </h3>
              <br />
            <div className="text-sm sm:text-base  text-gray-600 space-y-4 sm:space-y-4 text-sm font-mono text-justify">
              <p>
               Ask anyone who wears multifocals and they’ll tell you — they change daily life. School runs, work emails, sport, bedtime stories. Clear vision at every distance, all in one pair.
              </p>
              <p>
            
We believe so strongly in the life-enhancing power of multifocals that we built a service entirely around them. High-quality, feature-rich lenses. Honest pricing. Zero fuss.

              </p>
              <p>That’s Multifolks.</p>
            </div>
          </section>

          <section>
              <br />
            <h3 className="text-sm sm:text-xl md:text-xl font-bold uppercase   text-[#1F1F1F] tracking-wide">
              The Folk Behind Multifolks
            </h3>
            
  <br />
            <div className="text-md  text-gray-600 leading-relaxed  font-display text-justify">
              <p>
              We’re proudly online — and powered by real expertise.
              </p>
              <br />
          
               <p>
             Our team brings years of eyewear experience and has helped thousands find glasses that work for real life. That knowledge shapes every lens, every frame, and every interaction.
              </p>
            </div>
          </section>

          <section>
              <br />
            <h3 className="text-lg sm:text-xl md:text-xl font-bold uppercase  text-[#1F1F1F] tracking-wide">
              Making Multifocals Surprisingly Affordable
            </h3>
              <br />
            <div className="text-md   text-gray-600 font-sans-serif  leading-relaxed sm:leading-[1.7] font-medium text-justify">
              <p>
             Multifocals shouldn’t feel like a luxury purchase.
              </p>  <br />
               <p>
           Because they’re our sole focus, we’ve streamlined everything — passing savings of up to 50% compared to the high street directly to you.
              </p>  <br />
               <p>
           Clear vision. Sensible pricing. No drama.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;