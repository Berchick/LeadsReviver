"use client";

const STATS = [
  { value: "82%", label: "Average re-engagement rate", sub: "vs. 12% industry average" },
  { value: "3.4×", label: "Pipeline increase", sub: "from existing lead databases" },
  { value: "9 days", label: "Average time to first reply", sub: "from a dormant lead" },
  { value: "$0", label: "Extra ad spend needed", sub: "work your existing contacts" },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "var(--gradient-hero-mesh)",
        paddingBlock: "clamp(4rem, 8vw, 6rem)",
        paddingInline: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />

      <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", position: "relative" }}>
        <p style={{
          textAlign: "center",
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-brand-300)",
          marginBottom: "1rem",
        }}>
          Real results from real customers
        </p>
        <h2 style={{
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 800,
          color: "white",
          letterSpacing: "-0.03em",
          marginBottom: "clamp(2.5rem, 5vw, 4rem)",
        }}>
          Numbers That Change How You Think About Cold Leads
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}>
          {STATS.map(({ value, label, sub }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius-card)",
                padding: "2rem 1.75rem",
                textAlign: "center",
                transition: "background 250ms ease",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.11)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                marginBottom: "0.75rem",
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                marginBottom: "0.375rem",
              }}>
                {label}
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.45)",
              }}>
                {sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
