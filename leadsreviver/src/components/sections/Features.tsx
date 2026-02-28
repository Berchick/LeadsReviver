"use client";

import { Bot, BarChart3, Mail, Phone, Target, RefreshCw } from "lucide-react";

const FEATURES = [
  {
    icon: Bot,
    title: "AI-Powered Outreach",
    description: "Our AI analyzes each lead's history and crafts hyper-personalized messages that feel human — not templated. Re-engagement rates increase by up to 82%.",
    cta: "See the AI in action",
  },
  {
    icon: Target,
    title: "Smart Lead Scoring",
    description: "Every lead gets a real-time score based on behavior, company data, and engagement signals. Know exactly who to prioritize before your team picks up the phone.",
    cta: "Explore scoring engine",
  },
  {
    icon: Mail,
    title: "Multi-Channel Sequences",
    description: "Email, SMS, LinkedIn — coordinated outreach across channels, automatically timed to maximize open rates and responses without overwhelming your prospects.",
    cta: "View channel options",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    description: "Track every touchpoint from first re-engagement to closed deal. Attribution reporting shows exactly which sequences and channels drive the most revenue.",
    cta: "Explore analytics",
  },
  {
    icon: RefreshCw,
    title: "CRM Sync",
    description: "Two-way sync with Salesforce, HubSpot, and Pipedrive. Leads flow in, engagement data flows back. Your CRM stays up to date without manual updates.",
    cta: "View integrations",
  },
  {
    icon: Phone,
    title: "Voice AI Follow-Up",
    description: "When email isn't enough, our Voice AI calls and qualifies leads with natural conversation — then hands off warm prospects directly to your sales team.",
    cta: "Try Voice AI",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        background: "var(--color-brand-900)",
        paddingBlock: "clamp(4rem, 8vw, 7rem)",
        paddingInline: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(ellipse at 70% 0%, rgba(37,99,235,0.12) 0%, transparent 60%),
                          radial-gradient(ellipse at 10% 100%, rgba(96,165,250,0.08) 0%, transparent 50%)`,
      }} />

      <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-brand-300)",
            marginBottom: "1rem",
          }}>
            Everything you need
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
          }}>
            Built for Revenue Teams
            <br />
            <span style={{ color: "var(--color-brand-300)" }}>That Can't Afford Cold Lists</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}>
            Every feature is designed to turn your existing lead database into your best pipeline asset.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {FEATURES.map(({ icon: Icon, title, description, cta }) => (
            <div
              key={title}
              className="feature-card"
              style={{
                background: "rgba(255,255,255,0.96)",
                borderRadius: "var(--radius-card)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "transform 250ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 300ms ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.25)";
              }}
            >
              {/* Icon */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "var(--color-brand-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
                flexShrink: 0,
              }}>
                <Icon size={22} color="var(--color-brand-500)" strokeWidth={1.75} />
              </div>

              {/* Title */}
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

              {/* Description */}
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--color-neutral-600)",
                lineHeight: 1.65,
                flex: 1,
                marginBottom: "1.5rem",
              }}>
                {description}
              </p>

              {/* CTA link */}
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-brand-500)",
                  textDecoration: "none",
                  transition: "gap 200ms ease",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = "0.625rem"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = "0.375rem"}
              >
                {cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
