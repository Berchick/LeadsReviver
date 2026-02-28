"use client";

import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for small sales teams with up to 1,000 leads.",
    features: [
      "Up to 1,000 active leads",
      "AI email sequences",
      "Basic lead scoring",
      "HubSpot & Salesforce sync",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    description: "For growing teams that need multi-channel reach and deeper AI.",
    features: [
      "Up to 10,000 active leads",
      "Email + LinkedIn + SMS",
      "Advanced AI scoring",
      "All CRM integrations",
      "Voice AI follow-up (500 calls/mo)",
      "Revenue attribution reports",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Unlimited scale, dedicated AI training, and white-glove onboarding.",
    features: [
      "Unlimited leads",
      "All channels + custom channels",
      "Custom AI model training",
      "Dedicated success manager",
      "SLA & uptime guarantees",
      "Custom reporting & API",
      "SSO & enterprise security",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: "white",
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
            Pricing
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
            Simple, Transparent Pricing
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            color: "var(--color-text-secondary)",
            maxWidth: "420px",
            margin: "0 auto",
          }}>
            14-day free trial on all plans. No credit card required.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}>
          {PLANS.map(({ name, price, period, description, features, cta, highlighted, badge }) => (
            <div
              key={name}
              style={{
                background: highlighted ? "var(--color-brand-800)" : "white",
                border: highlighted
                  ? "1.5px solid var(--color-brand-600)"
                  : "1.5px solid var(--color-border-default)",
                borderRadius: "var(--radius-card)",
                padding: "2rem",
                boxShadow: highlighted ? "0 20px 60px rgba(21,32,112,0.35)" : "var(--shadow-card)",
                position: "relative",
                transform: highlighted ? "scale(1.03)" : "scale(1)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
              onMouseEnter={e => {
                if (!highlighted) {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card-hover)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }
              }}
              onMouseLeave={e => {
                if (!highlighted) {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }
              }}
            >
              {/* Badge */}
              {badge && (
                <div style={{
                  position: "absolute",
                  top: "-13px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--gradient-brand)",
                  color: "white",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "4px 14px",
                  borderRadius: "9999px",
                  boxShadow: "var(--shadow-brand)",
                  whiteSpace: "nowrap",
                }}>
                  {badge}
                </div>
              )}

              {/* Plan name */}
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: highlighted ? "var(--color-brand-300)" : "var(--color-brand-500)",
                marginBottom: "0.75rem",
              }}>
                {name}
              </div>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.75rem" }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: highlighted ? "white" : "var(--color-neutral-900)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}>
                  {price}
                </span>
                {period && (
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: highlighted ? "rgba(255,255,255,0.5)" : "var(--color-text-muted)",
                  }}>
                    {period}
                  </span>
                )}
              </div>

              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: highlighted ? "rgba(255,255,255,0.6)" : "var(--color-text-secondary)",
                lineHeight: 1.55,
                marginBottom: "1.75rem",
                minHeight: "2.8em",
              }}>
                {description}
              </p>

              {/* CTA */}
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  borderRadius: "var(--radius-button)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginBottom: "1.75rem",
                  transition: "all 200ms ease",
                  ...(highlighted
                    ? {
                        background: "white",
                        color: "var(--color-brand-700)",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                      }
                    : {
                        background: "var(--gradient-brand)",
                        color: "white",
                        boxShadow: "var(--shadow-brand)",
                      }),
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {cta}
              </a>

              {/* Divider */}
              <div style={{
                height: "1px",
                background: highlighted ? "rgba(255,255,255,0.1)" : "var(--color-border-subtle)",
                marginBottom: "1.5rem",
              }} />

              {/* Features */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {features.map((feature) => (
                  <li
                    key={feature}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}
                  >
                    <span style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: highlighted ? "rgba(255,255,255,0.15)" : "var(--color-brand-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}>
                      <Check size={11} color={highlighted ? "white" : "var(--color-brand-500)"} strokeWidth={2.5} />
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: highlighted ? "rgba(255,255,255,0.8)" : "var(--color-text-secondary)",
                      lineHeight: 1.5,
                    }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: "center",
          marginTop: "2.5rem",
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "var(--color-text-muted)",
        }}>
          All plans include a 14-day free trial. Cancel anytime.{" "}
          <a href="#" style={{ color: "var(--color-brand-500)", textDecoration: "none", fontWeight: 500 }}>
            Compare all features →
          </a>
        </p>
      </div>
    </section>
  );
}
