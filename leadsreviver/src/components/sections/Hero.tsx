"use client";

import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";

const STATS = [
  { value: "1,200+", label: "Companies revived" },
  { value: "82%", label: "Re-engagement rate" },
  { value: "4.9★", label: "Customer rating" },
];

const LEAD_CARDS = [
  { name: "Sarah Chen", company: "Acme Corp", score: 92, status: "Hot", statusColor: "var(--color-error-500)", time: "2d ago" },
  { name: "James Okafor", company: "Nexus Ltd", score: 67, status: "Warm", statusColor: "var(--color-warning-500)", time: "1w ago" },
  { name: "Priya Mehta", company: "Orbit SaaS", score: 41, status: "Cold", statusColor: "var(--color-info-500)", time: "3w ago" },
];

export default function Hero() {
  return (
    <section
      style={{
        background: "var(--gradient-hero-mesh)",
        paddingTop: "clamp(5rem, 10vw, 7.5rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
        paddingInline: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orbs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-10%", right: "10%", width: "500px", height: "500px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "0%", left: "-5%", width: "400px", height: "400px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      <div
        style={{
          maxWidth: "var(--container-max-width)",
          margin: "0 auto",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Copy */}
        <div style={{ maxWidth: "680px" }} className="hero-copy">
          {/* Overline */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(37,99,235,0.2)",
              border: "1px solid rgba(96,165,250,0.35)",
              borderRadius: "9999px",
              padding: "0.375rem 1rem",
              marginBottom: "1.75rem",
            }}
          >
            <Zap size={13} color="var(--color-brand-300)" fill="var(--color-brand-300)" />
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-brand-300)",
            }}>
              AI Lead Re-Engagement Platform
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            Turn Dead Leads
            <br />
            <span style={{
              background: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 50%, #DBEAFE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Into Revenue.
            </span>
          </h1>

          {/* Subhead */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
            maxWidth: "540px",
          }}>
            LeadsReviver automatically re-engages cold prospects with personalized AI outreach — so your team only talks to buyers who are ready.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "3.5rem" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                height: "52px",
                paddingInline: "1.75rem",
                background: "var(--gradient-brand)",
                color: "white",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "var(--radius-button)",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(37,99,235,0.45)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(37,99,235,0.55)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.45)";
              }}
            >
              Start Free Trial
              <ArrowRight size={17} />
            </a>
            <a
              href="#how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                height: "52px",
                paddingInline: "1.5rem",
                background: "rgba(255,255,255,0.1)",
                color: "white",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 500,
                borderRadius: "var(--radius-button)",
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                transition: "background 200ms ease",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.17)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"}
            >
              <span style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Play size={11} fill="white" color="white" style={{ marginLeft: "2px" }} />
              </span>
              Watch Demo
            </a>
          </div>

          {/* Social proof bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
          }}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.625rem",
                  fontWeight: 800,
                  color: "white",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.55)",
                  marginTop: "0.375rem",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Floating UI preview */}
        <div className="hero-visual" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div style={{
            width: "100%",
            maxWidth: "420px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "1.5rem",
            padding: "1.5rem",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
          }}>
            {/* Panel header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: "white",
                  letterSpacing: "-0.01em",
                }}>
                  AI Re-Engagement
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>
                  3 leads queued for outreach
                </div>
              </div>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                background: "rgba(16,185,129,0.2)",
                border: "1px solid rgba(16,185,129,0.4)",
                borderRadius: "9999px",
                padding: "4px 10px",
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "#34D399",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34D399", display: "inline-block" }} />
                Live
              </span>
            </div>

            {/* Lead cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {LEAD_CARDS.map((lead, i) => (
                <div
                  key={lead.name}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderLeft: `3px solid ${lead.statusColor}`,
                    borderRadius: "0.75rem",
                    padding: "0.875rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    animation: `fadeSlideIn 500ms ease-out ${i * 120}ms both`,
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "white",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                      {lead.name}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>
                      {lead.company} · {lead.time}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexShrink: 0 }}>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.4)", marginBottom: "2px" }}>Score</div>
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "white" }}>{lead.score}%</div>
                    </div>
                    <span style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: "9999px",
                      background: `${lead.statusColor}22`,
                      color: lead.statusColor,
                      border: `1px solid ${lead.statusColor}44`,
                    }}>
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI action bar */}
            <div style={{
              marginTop: "1rem",
              padding: "0.875rem 1rem",
              background: "rgba(37,99,235,0.2)",
              border: "1px solid rgba(37,99,235,0.35)",
              borderRadius: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}>
              <TrendingUp size={16} color="var(--color-brand-300)" />
              <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.8)", flex: 1 }}>
                AI drafting personalized sequences…
              </span>
              <div style={{ display: "flex", gap: "3px" }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--color-brand-300)",
                    animation: `pulse 1.2s ease-in-out ${i * 200}ms infinite`,
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1); }
        }
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 1023px) {
          .hero-visual { display: none !important; }
          .hero-copy { max-width: 100% !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
