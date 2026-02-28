"use client";

import { Upload, Sparkles, SendHorizonal, UserCheck } from "lucide-react";

const STEPS = [
  {
    icon: Upload,
    number: "01",
    title: "Import Your Leads",
    description: "Connect your CRM or upload a CSV. LeadsReviver ingests your existing contacts — including leads that went cold months or years ago.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "AI Scores & Segments",
    description: "Our AI analyzes firmographic data, engagement history, and intent signals to score every lead and identify the best re-engagement window.",
  },
  {
    icon: SendHorizonal,
    number: "03",
    title: "Automated Outreach Begins",
    description: "Personalized multi-channel sequences go out automatically — email, LinkedIn, SMS — timed intelligently based on each lead's profile.",
  },
  {
    icon: UserCheck,
    number: "04",
    title: "Warm Leads Land in Your CRM",
    description: "Engaged leads are automatically flagged and handed to your sales team with full context. You only speak to people who are ready to buy.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: "var(--color-neutral-50)",
        paddingBlock: "clamp(4rem, 8vw, 7rem)",
        paddingInline: "2rem",
      }}
    >
      <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-brand-500)",
            marginBottom: "1rem",
          }}>
            How it works
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--color-neutral-900)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
          }}>
            From Cold List to Closed Deal
            <br />in Four Steps
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            color: "var(--color-text-secondary)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}>
            Set up in under 10 minutes. Results visible within the first week.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "2rem",
            position: "relative",
          }}
        >
          {STEPS.map(({ icon: Icon, number, title, description }, i) => (
            <div key={number} style={{ position: "relative" }}>
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="step-connector"
                  style={{
                    position: "absolute",
                    top: "28px",
                    left: "calc(100% + 1rem)",
                    width: "calc(2rem - 2px)",
                    height: "2px",
                    background: "linear-gradient(90deg, var(--color-brand-200), var(--color-brand-100))",
                    zIndex: 0,
                  }}
                />
              )}

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Icon + number */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "var(--gradient-brand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "var(--shadow-brand)",
                    flexShrink: 0,
                  }}>
                    <Icon size={24} color="white" strokeWidth={1.75} />
                  </div>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--color-neutral-200)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}>
                    {number}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-neutral-900)",
                  letterSpacing: "-0.01em",
                  marginBottom: "0.625rem",
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              height: "52px",
              paddingInline: "2rem",
              background: "var(--gradient-brand)",
              color: "white",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "var(--radius-button)",
              textDecoration: "none",
              boxShadow: "var(--shadow-brand)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-brand-hover)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-brand)";
            }}
          >
            Start Reviving Leads Today
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .step-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}
