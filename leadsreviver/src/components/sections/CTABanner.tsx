"use client";

import { ArrowRight } from "lucide-react";

export default function CTABanner() {
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
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "-30%", right: "-10%", width: "600px", height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-brand-300)",
          marginBottom: "1.25rem",
        }}>
          Ready to start?
        </p>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
          fontWeight: 800,
          color: "white",
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          marginBottom: "1.25rem",
        }}>
          Your Best Leads Are
          <br />
          <span style={{
            background: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Already in Your CRM.
          </span>
        </h2>

        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.125rem",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.65,
          marginBottom: "2.5rem",
          maxWidth: "520px",
          margin: "0 auto 2.5rem",
        }}>
          Start your free 14-day trial and see re-engagement happen in your first week. No credit card required.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              height: "56px",
              paddingInline: "2rem",
              background: "white",
              color: "var(--color-brand-700)",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 700,
              borderRadius: "var(--radius-button)",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.25)";
            }}
          >
            Start Free Trial
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "56px",
              paddingInline: "1.75rem",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 500,
              borderRadius: "var(--radius-button)",
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              transition: "background 200ms ease",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.16)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"}
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
