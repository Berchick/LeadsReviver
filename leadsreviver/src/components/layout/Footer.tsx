"use client";

const LINKS = {
  Product: ["Features", "How It Works", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-neutral-950)",
        paddingBlock: "3.5rem 2rem",
        paddingInline: "2rem",
      }}
    >
      <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L28 8.5V23.5L16 30L4 23.5V8.5L16 2Z" fill="var(--color-brand-700)" />
                <path d="M16 7L23 11V19L16 23L9 19V11L16 7Z" fill="var(--color-brand-500)" opacity="0.9" />
                <circle cx="16" cy="15" r="3" fill="white" />
              </svg>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "white",
                letterSpacing: "-0.02em",
              }}>
                Leads<span style={{ color: "var(--color-brand-400)" }}>Reviver</span>
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.65,
              maxWidth: "240px",
            }}>
              AI-powered lead re-engagement by WW A.I Solutions. Turn dormant contacts into active pipeline.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "1.25rem",
              }}>
                {group}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 200ms ease",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "white"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "1.75rem" }} />

        {/* Bottom row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.3)",
          }}>
            © 2026 WW A.I Solutions. All rights reserved.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.25)",
          }}>
            Built with precision by{" "}
            <a
              href="#"
              style={{ color: "var(--color-brand-400)", textDecoration: "none" }}
            >
              wwaisolutions.com
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}
