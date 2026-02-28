"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
        transition: "box-shadow 300ms ease, background 300ms ease",
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid var(--color-border-subtle)"
          : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-nav)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max-width)",
          margin: "0 auto",
          padding: "0 2rem",
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 2L28 8.5V23.5L16 30L4 23.5V8.5L16 2Z"
              fill="var(--color-brand-800)"
            />
            <path
              d="M16 7L23 11V19L16 23L9 19V11L16 7Z"
              fill="var(--color-brand-500)"
              opacity="0.9"
            />
            <circle cx="16" cy="15" r="3" fill="white" />
            <path
              d="M16 10V12M16 18V20M11 15H13M19 15H21"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.125rem",
              color: "var(--color-brand-900)",
              letterSpacing: "-0.02em",
            }}
          >
            Leads<span style={{ color: "var(--color-brand-500)" }}>Reviver</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            flex: 1,
            justifyContent: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: "0.5rem 0.875rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                borderRadius: "0.625rem",
                transition: "color 200ms ease, background 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-primary)";
                (e.target as HTMLElement).style.background = "var(--color-brand-50)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-text-secondary)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}
          className="hidden-mobile"
        >
          <a
            href="#"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              padding: "0.5rem 0.75rem",
            }}
          >
            Log in
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "40px",
              paddingInline: "1.25rem",
              background: "var(--gradient-brand)",
              color: "white",
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              borderRadius: "var(--radius-button)",
              textDecoration: "none",
              boxShadow: "var(--shadow-brand)",
              transition: "box-shadow 200ms ease, transform 200ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-brand-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-brand)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Start Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="show-mobile"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--color-text-primary)",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-border-subtle)",
            padding: "1rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: "0.75rem 1rem",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--color-text-primary)",
                textDecoration: "none",
                borderRadius: "0.625rem",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <a
              href="#"
              style={{
                padding: "0.75rem 1rem",
                textAlign: "center",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                borderRadius: "var(--radius-button)",
                border: "1.5px solid var(--color-border-default)",
              }}
            >
              Log in
            </a>
            <a
              href="#"
              style={{
                padding: "0.75rem 1rem",
                textAlign: "center",
                background: "var(--gradient-brand)",
                color: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "var(--radius-button)",
                boxShadow: "var(--shadow-brand)",
              }}
            >
              Start Free
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
