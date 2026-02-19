import React from "react";
import { Link } from "react-router-dom";

const LANDING_IMG1 = "https://cdn.multifolks.com/desktop/images/landing-img1.svg";
const LANDING_IMG2 = "https://cdn.multifolks.com/desktop/images/landing-img2.svg";

const steps = [
  {
    number: "01",
    title: "Share Your Prescription",
    body: "Upload your prescription or send us a photo at support@multifolks.com. If you're unsure how to read it, we'll explain each part — SPH, CYL, ADD — in plain language.",
  },
  {
    number: "02",
    title: "Measure Your Fit",
    body: "Use our smart fitting tool to measure your pupillary distance (PD) and fitting height. This ensures your vision zones are perfectly aligned with your eyes.",
  },
  {
    number: "03",
    title: "Choose Your Lenses",
    body: "During checkout, we guide you step by step to choose lenses that fit your lifestyle — whether you're retired, working on screens, or constantly on the go.",
  },
];

const coatings = [
  { icon: "✦", label: "Anti-Glare" },
  { icon: "◈", label: "Scratch-Resistant" },
  { icon: "◎", label: "Anti-Reflective" },
];

const Newtomultifocals: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-white font-sans text-[#1F1F1F]"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .mf-page { font-family: 'DM Sans', sans-serif; }
        .mf-display { font-family: 'Playfair Display', Georgia, serif; }

        .mf-hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #1a1a18;
        }

        .mf-section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8a8072;
        }

        .mf-step-number {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 52px;
          font-weight: 400;
          color: #e8e2d9;
          line-height: 1;
          font-style: italic;
        }

        .mf-step-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a1a18;
          line-height: 1.3;
        }

        .mf-divider {
          border: none;
          border-top: 1px solid #e8e2d9;
        }

        .mf-callout {
          background: #f9f6f1;
          border-left: 3px solid #c8a96e;
        }

        .mf-badge {
          background: #f9f6f1;
          border: 1px solid #e8e2d9;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #3d3930;
        }

        .mf-badge-icon {
          color: #c8a96e;
          font-size: 16px;
        }

        .mf-cta {
          background: #1a1a18;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.08em;
          padding: 16px 40px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s;
        }
        .mf-cta:hover { background: #3d3930; }

        .mf-adjust-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #6b6560;
          line-height: 1.7;
        }

        .mf-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.75;
          color: #3d3930;
        }

        .mf-intro-large {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(17px, 2.2vw, 22px);
          line-height: 1.65;
          color: #2d2a25;
          font-weight: 400;
        }

        .mf-step-card {
          border-top: 1px solid #e8e2d9;
          padding-top: 28px;
          padding-bottom: 28px;
        }
        .mf-step-card:last-child {
          border-bottom: 1px solid #e8e2d9;
        }

        .mf-perks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #e8e2d9;
          border: 1px solid #e8e2d9;
        }
        .mf-perk-cell {
          background: #fff;
          padding: 28px 20px;
          text-align: center;
        }

        .mf-footnote-block {
          border: 1px solid #e8e2d9;
          border-radius: 6px;
          padding: 28px 32px;
          background: #fdfcfa;
        }
      `}</style>

      <div className="mf-page pt-14 pb-24">
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px" }}>

          {/* ── Hero Banner ── */}
          <div
            className="flex justify-between items-center mb-20"
            style={{ minHeight: "280px" }}
          >
            <img
              src={LANDING_IMG1}
              alt=""
              width={170}
              style={{ height: "auto", objectFit: "contain", flexShrink: 0 }}
            />
            <div style={{ flex: 1, textAlign: "center", padding: "0 32px" }}>
              <p className="mf-section-label mb-4">First-time multifocal wearer</p>
              <h1 className="mf-hero-title">
                New to multifocals?<br />
                <em style={{ fontStyle: "italic", fontWeight: 400 }}>
                  Let's make your first pair feel easy.
                </em>
              </h1>
            </div>
            <img
              src={LANDING_IMG2}
              alt=""
              width={170}
              style={{ height: "auto", objectFit: "contain", flexShrink: 0 }}
            />
          </div>

          {/* ── Intro ── */}
          <div style={{ maxWidth: "680px", margin: "0 auto 72px" }}>
            <p className="mf-intro-large">
              If you've ever juggled two pairs of glasses — one for reading, one for everything
              else — multifocals can sound like a complicated upgrade. But they don't have to be.
            </p>
            <hr className="mf-divider" style={{ marginTop: "32px", marginBottom: "32px" }} />
            <p className="mf-body">
              Multifocal lenses give you clear vision at every distance — far, near, and everything
              in between — without the need to swap glasses. They work by smoothly transitioning
              between zones within a single lens, so you can go from laptop to phone to across the
              room, effortlessly.
            </p>
          </div>

          {/* ── How It Works ── */}
          <div style={{ marginBottom: "72px" }}>
            <p className="mf-section-label" style={{ marginBottom: "32px" }}>
              Here is how it works
            </p>

            {steps.map((step) => (
              <div key={step.number} className="mf-step-card">
                <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
                  <span className="mf-step-number">{step.number}</span>
                  <div style={{ paddingTop: "10px" }}>
                    <h3 className="mf-step-title" style={{ marginBottom: "10px" }}>
                      {step.title}
                    </h3>
                    <p className="mf-body" style={{ margin: 0, maxWidth: "560px" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Included Coatings ── */}
          <div style={{ marginBottom: "72px" }}>
            <p className="mf-section-label" style={{ marginBottom: "20px" }}>
              Every pair includes
            </p>
            <div className="mf-perks-grid">
              {coatings.map((c) => (
                <div key={c.label} className="mf-perk-cell">
                  <div className="mf-badge-icon" style={{ fontSize: "22px", marginBottom: "10px" }}>
                    {c.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#1a1a18",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "#8a8072",
                marginTop: "12px",
                letterSpacing: "0.02em",
              }}
            >
              All included. No hidden extras. No complicated upgrades.
            </p>
          </div>

          {/* ── What to Expect ── */}
          <div style={{ maxWidth: "680px", margin: "0 auto 72px" }}>
            <p className="mf-section-label" style={{ marginBottom: "24px" }}>
              What to expect
            </p>
            <div className="mf-callout" style={{ padding: "24px 28px", marginBottom: "28px" }}>
              <p className="mf-body" style={{ margin: 0 }}>
                It may take a few days for your eyes to fully adjust to the different zones in
                multifocals — especially if it's your first pair. That's completely normal. Think
                of it like switching to a new phone — your brain adapts quickly, and it soon
                becomes second nature.
              </p>
            </div>
            <div className="mf-footnote-block">
              <p
                className="mf-step-title"
                style={{ marginBottom: "12px", fontStyle: "normal", fontSize: "16px" }}
              >
                Not feeling quite right?
              </p>
              <p className="mf-adjust-note" style={{ margin: 0 }}>
                If your glasses don't feel quite right, we'll adjust or remake them at no cost.
                We also have step-by-step guides to help you get used to your new lenses, along
                with real support from our team if you need it.
              </p>
            </div>
          </div>

          {/* ── Perks Row ── */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "64px",
            }}
          >
            {[
              "Use your HSA / FSA",
              "Claim it later",
              "Free worldwide shipping",
            ].map((perk) => (
              <span key={perk} className="mf-badge">
                <span className="mf-badge-icon">✓</span>
                {perk}
              </span>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{ textAlign: "center" }}>
            <p
              className="mf-display"
              style={{
                fontSize: "clamp(20px, 3vw, 30px)",
                color: "#1a1a18",
                marginBottom: "28px",
                lineHeight: 1.3,
              }}
            >
              We make your first multifocals feel easy —<br />
              <em>because they should be.</em>
            </p>
            <Link to="/collection" className="mf-cta">
              Explore Our Collection
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Newtomultifocals;