const TESTIMONIALS = [
  {
    quote: "We had 4,000 leads sitting untouched in our CRM for over a year. LeadsReviver re-engaged 31% of them within the first month. That's pipeline we would have written off entirely.",
    author: "Marcus Webb",
    role: "VP of Sales, Trident SaaS",
    initials: "MW",
    color: "var(--color-brand-500)",
  },
  {
    quote: "The AI personalization is genuinely impressive. Replies come in saying 'this is the first outreach that felt relevant.' Our reps are now only handling warm conversations.",
    author: "Lena Kovacs",
    role: "Head of Revenue, Volta Analytics",
    initials: "LK",
    color: "#10B981",
  },
  {
    quote: "Setup took 20 minutes. By day 3 we had our first re-engaged lead book a demo. ROI paid back in the first week — I wish we'd done this two years ago.",
    author: "Daniel Osei",
    role: "Founder, Apex CRM",
    initials: "DO",
    color: "var(--color-warning-500)",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        background: "var(--color-neutral-50)",
        paddingBlock: "clamp(4rem, 8vw, 7rem)",
        paddingInline: "2rem",
      }}
    >
      <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 5vw, 4rem)" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-brand-500)",
            marginBottom: "1rem",
          }}>
            Customer stories
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--color-neutral-900)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}>
            Teams Who Stopped Leaving
            <br />Money in Their CRM
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {TESTIMONIALS.map(({ quote, author, role, initials, color }) => (
            <div
              key={author}
              className="card"
              style={{ padding: "2rem", cursor: "default" }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B">
                    <path d="M8 1l2 4.5H15l-4 3.5 1.5 5L8 11.5 3.5 14 5 9 1 5.5h5L8 1z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
                flex: 1,
              }}>
                "{quote}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "white",
                  }}>
                    {initials}
                  </span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "var(--color-neutral-900)",
                  }}>
                    {author}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    marginTop: "2px",
                  }}>
                    {role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
