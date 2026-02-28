import Link from 'next/link';

export default function EchoLynkPage() {
  return (
    <main data-theme="dark" className="bg-[#0A0A0A] text-white">

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 py-32 text-center">
        {/* Green radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(34,197,94,0.13) 0%, transparent 70%)',
          }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="px-4 py-1.5 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] text-xs font-semibold tracking-widest uppercase">
              AI-Powered Follow-Up Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Stop Guessing.{' '}
            <span className="text-[#22C55E]">Start Converting.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            EchoLynk tells your team <span className="text-white font-semibold">who</span> to contact,{' '}
            <span className="text-white font-semibold">what</span> to say, and{' '}
            <span className="text-white font-semibold">why</span> — 100 actions a day, in 15 minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/echolynk/review"
              className="inline-flex items-center gap-2 bg-[#22C55E] text-black font-bold px-7 py-3.5 rounded-xl hover:bg-[#16A34A] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            >
              See It In Action →
            </Link>
            <Link
              href="/echolynk/autopilot"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-200"
            >
              View Autopilot →
            </Link>
          </div>

          {/* Social proof */}
          <p className="text-white/30 text-sm tracking-wide">
            Break-even at 6 deals &nbsp;·&nbsp; $15k pilot &nbsp;·&nbsp; Client-specific ROI
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      </section>

      {/* ─── INTELLIGENCE LAYER ───────────────────────────────────────── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-[#22C55E] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            The Intelligence Layer
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Every day, EchoLynk answers 4 questions for your team.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              num: '01',
              label: 'WHO NEXT',
              desc: 'The lead most likely to reply or book, ranked fresh every morning.',
            },
            {
              num: '02',
              label: 'WHAT PLAYBOOK',
              desc: "The exact follow-up routine built for this lead's situation.",
            },
            {
              num: '03',
              label: 'WHAT MESSAGE',
              desc: 'A ready-to-send draft, written in your voice. Not a template.',
            },
            {
              num: '04',
              label: 'WHY',
              desc: 'Clear reason codes: history, timing, risk. No black box.',
            },
          ].map(({ num, label, desc }) => (
            <div
              key={num}
              className="group relative p-8 rounded-2xl border border-white/[0.06] bg-[#111] hover:border-[#22C55E]/30 hover:bg-[#0f1f14] transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 50%, rgba(34,197,94,0.05), transparent 70%)' }}
              />
              <span className="block text-[#22C55E] text-xs font-bold tracking-[0.15em] mb-3">{num}</span>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-syne), sans-serif' }}
              >
                {label}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#22C55E] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              The Process
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              From messy CRM to revenue engine —<br />
              <span className="text-white/40">in 90 days.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '[1]',
                title: 'Calibrate on Your Wins',
                desc: 'We study your past deals before touching a single lead. Ground Truth scoring calibrated to your outcomes, not generic models.',
                badge: 'Week 1',
                borderColor: 'border-[#22C55E]/20',
                badgeColor: 'bg-[#22C55E]/10 text-[#22C55E]',
              },
              {
                step: '[2]',
                title: '15-Minute Daily Review',
                desc: 'Your team reviews ~100 AI suggestions. Approve, edit, reject. Every action trains the AI faster to match your voice.',
                badge: 'Days 1–90',
                borderColor: 'border-white/10',
                badgeColor: 'bg-white/5 text-white/50',
              },
              {
                step: '[3]',
                title: 'Sprint to Autopilot',
                desc: 'Once approval rates hit ~90%, flip the switch. Autoplay runs the playbooks. You capture revenue without the daily labor.',
                badge: 'Day 90+',
                borderColor: 'border-[#22C55E]/20',
                badgeColor: 'bg-[#22C55E]/10 text-[#22C55E]',
              },
            ].map(({ step, title, desc, badge, borderColor, badgeColor }) => (
              <div
                key={step}
                className={`p-8 rounded-2xl border ${borderColor} bg-[#0D0D0D] flex flex-col gap-5`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white/20 text-3xl font-black" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                    {step}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
                    {badge}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METRICS BAR ──────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/[0.06] bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: '~21%', label: 'Reply rate, first week' },
              { value: '~30%', label: 'Reactivation rate' },
              { value: '≈33×', label: 'Faster than manual follow-up' },
              { value: '100%', label: 'ROI in week one (2 sales @ $5k)' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-black text-[#22C55E] mb-2 tabular-nums"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                >
                  {value}
                </div>
                <div className="text-white/40 text-xs leading-snug max-w-[140px] mx-auto">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ───────────────────────────────────────────────── */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <p className="text-[#22C55E] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Recent Results
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight mb-10"
                style={{ fontFamily: 'var(--font-syne), sans-serif' }}
              >
                Dormant leads →<br />Real conversations in days.
              </h2>

              <div className="space-y-3">
                {[
                  'Calibrated on prior wins + outcomes',
                  'Daily best-next-action queue consistency',
                  'Human-in-the-loop approvals → fast voice learning',
                ].map(point => (
                  <div
                    key={point}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#111] border-l-2 border-[#22C55E]"
                  >
                    <span className="text-[#22C55E] text-sm font-bold mt-0.5">→</span>
                    <span className="text-white/70 text-sm leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-[#0D0D0D]">
              <p className="text-white/30 text-sm mb-6 leading-relaxed">
                If you have <span className="text-white">25,000 dormant leads</span>:
              </p>
              <div className="text-white/40 text-sm font-mono leading-loose mb-8 p-4 rounded-xl bg-black/40 border border-white/[0.04]">
                25,000 leads<br />
                × 70% deliverable<br />
                × ~2% escalated<br />
                × 35% close rate<br />
                × $3,000 AOV
              </div>
              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
                  Potential Recovered Revenue
                </p>
                <p
                  className="text-[#22C55E] text-4xl font-black"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                >
                  ≈ $367,500
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#22C55E] rounded-3xl px-10 py-14 text-center relative overflow-hidden">
            {/* Subtle texture on CTA */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 70% 20%, #fff 0%, transparent 50%)',
              }}
            />
            <h2
              className="relative text-3xl md:text-4xl font-black text-black mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              Give us 15 minutes a day for 90 days.
            </h2>
            <p className="relative text-black/70 text-lg mb-8">
              We&apos;ll build your revenue recovery engine.
            </p>
            <Link
              href="/echolynk/review"
              className="relative inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#111] transition-colors duration-200"
            >
              Start the Pilot →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-center text-white/20 text-sm">
        © 2024 EchoLynk — WW A.I Solutions
      </footer>
    </main>
  );
}
