'use client';

import Link from 'next/link';
import { useLang } from './LanguageContext';

const CONTENT = {
  en: {
    hero: {
      badge: 'AI-Powered Follow-Up Intelligence',
      h1a: 'Stop Guessing.',
      h1b: 'Start Converting.',
      sub: 'EchoLynk tells your team who to contact, what to say, and why — 100 actions a day, in 15 minutes.',
      cta1: 'See It In Action →',
      cta2: 'View Autopilot →',
      proof: 'Break-even at 6 deals · $15k pilot · Client-specific ROI',
    },
    intel: {
      label: 'The Intelligence Layer',
      h2: 'Every day, EchoLynk answers 4 questions for your team.',
      cards: [
        { num: '01', title: 'WHO NEXT', desc: 'The lead most likely to reply or book, ranked fresh every morning.' },
        { num: '02', title: 'WHAT PLAYBOOK', desc: "The exact follow-up routine built for this lead's situation." },
        { num: '03', title: 'WHAT MESSAGE', desc: 'A ready-to-send draft, written in your voice. Not a template.' },
        { num: '04', title: 'WHY', desc: 'Clear reason codes: history, timing, risk. No black box.' },
      ],
    },
    process: {
      label: 'The Process',
      h2a: 'From messy CRM to revenue engine —',
      h2b: 'in 90 days.',
      steps: [
        { step: '[1]', title: 'Calibrate on Your Wins', desc: 'We study your past deals before touching a single lead. Ground Truth scoring calibrated to your outcomes, not generic models.', badge: 'Week 1', border: 'border-[#22C55E]/20', badgeCls: 'bg-[#22C55E]/10 text-[#22C55E]' },
        { step: '[2]', title: '15-Minute Daily Review', desc: 'Your team reviews ~100 AI suggestions. Approve, edit, reject. Every action trains the AI faster to match your voice.', badge: 'Days 1–90', border: 'border-white/10', badgeCls: 'bg-white/5 text-white/50' },
        { step: '[3]', title: 'Sprint to Autopilot', desc: 'Once approval rates hit ~90%, flip the switch. Autoplay runs the playbooks. You capture revenue without the daily labor.', badge: 'Day 90+', border: 'border-[#22C55E]/20', badgeCls: 'bg-[#22C55E]/10 text-[#22C55E]' },
      ],
    },
    metrics: [
      { value: '~21%', label: 'Reply rate, first week' },
      { value: '~30%', label: 'Reactivation rate' },
      { value: '≈33×', label: 'Faster than manual follow-up' },
      { value: '100%', label: 'ROI in week one (2 sales @ $5k)' },
    ],
    caseStudy: {
      label: 'Recent Results',
      h2a: 'Dormant leads →',
      h2b: 'Real conversations in days.',
      points: [
        'Calibrated on prior wins + outcomes',
        'Daily best-next-action queue consistency',
        'Human-in-the-loop approvals → fast voice learning',
      ],
      formulaIntro: 'If you have 25,000 dormant leads:',
      formula: ['25,000 leads', '× 70% deliverable', '× ~2% escalated', '× 35% close rate', '× $3,000 AOV'],
      revenueLabel: 'Potential Recovered Revenue',
      revenueAmount: '≈ $367,500',
    },
    cta: {
      h2: 'Give us 15 minutes a day for 90 days.',
      sub: "We'll build your revenue recovery engine.",
      btn: 'Start the Pilot →',
    },
    footer: '© 2024 EchoLynk — WW A.I Solutions',
  },
  he: {
    hero: {
      badge: 'בינה מלאכותית לניהול פולואפ',
      h1a: 'הפסיקו לנחש.',
      h1b: 'התחילו להמיר.',
      sub: 'EchoLynk אומר לצוות שלכם עם מי לדבר, מה לומר, ולמה — 100 פעולות ביום, ב-15 דקות בלבד.',
      cta1: '← ראו את זה בפעולה',
      cta2: '← צפו באוטופיילוט',
      proof: 'נקודת איזון ב-6 עסקאות · פיילוט של $15k · ROI ספציפי ללקוח',
    },
    intel: {
      label: 'שכבת המודיעין',
      h2: 'כל יום, EchoLynk עונה על 4 שאלות עבור הצוות שלכם.',
      cards: [
        { num: '01', title: 'מי הבא', desc: 'הליד שהכי סביר להגיב או לקבוע פגישה, מדורג כל בוקר מחדש.' },
        { num: '02', title: 'איזה פלייבוק', desc: 'תהליך הפולואפ המדויק שמתאים לליד ולמצב הספציפי.' },
        { num: '03', title: 'מה להגיד', desc: 'טיוטה מוכנה לשליחה בקולכם שלכם — לא תבנית גנרית.' },
        { num: '04', title: 'למה', desc: 'קודי סיבה ברורים: היסטוריה, תזמון, סיכון. ללא תיבה שחורה.' },
      ],
    },
    process: {
      label: 'התהליך',
      h2a: 'מ-CRM מבולגן למנוע הכנסות —',
      h2b: 'תוך 90 יום.',
      steps: [
        { step: '[1]', title: 'כוונון על הניצחונות שלכם', desc: 'אנחנו לומדים את העסקאות הקודמות שלכם לפני שנוגעים בליד אחד. ניקוד Ground Truth מכוייל לתוצאות שלכם, לא למודלים גנריים.', badge: 'שבוע 1', border: 'border-[#22C55E]/20', badgeCls: 'bg-[#22C55E]/10 text-[#22C55E]' },
        { step: '[2]', title: 'סקירה יומית של 15 דקות', desc: 'הצוות שלכם סוקר ~100 הצעות AI. אשרו, ערכו, דחו. כל פעולה מאמנת את ה-AI מהר יותר לדבר בקולכם.', badge: 'ימים 1–90', border: 'border-white/10', badgeCls: 'bg-white/5 text-white/50' },
        { step: '[3]', title: 'ריצה לאוטופיילוט', desc: 'כשאחוז האישור מגיע ל~90%, הפעילו את המתג. Autoplay מריץ את הפלייבוקים. אתם לוכדים הכנסה ללא עבודה יומית.', badge: 'יום 90+', border: 'border-[#22C55E]/20', badgeCls: 'bg-[#22C55E]/10 text-[#22C55E]' },
      ],
    },
    metrics: [
      { value: '~21%', label: 'שיעור תגובה, שבוע ראשון' },
      { value: '~30%', label: 'שיעור הפעלה מחדש' },
      { value: '≈33×', label: 'מהיר יותר מפולואפ ידני' },
      { value: '100%', label: 'ROI בשבוע הראשון (2 עסקאות ב-$5k)' },
    ],
    caseStudy: {
      label: 'תוצאות אחרונות',
      h2a: 'לידים רדומים →',
      h2b: 'שיחות אמיתיות — תוך ימים.',
      points: [
        'כוונון על ניצחונות ותוצאות קודמות',
        'עקביות בתור הפעולה היומית הטובה ביותר הבאה',
        'אישורי human-in-the-loop ← למידת קול מהירה',
      ],
      formulaIntro: 'אם יש לכם 25,000 לידים רדומים:',
      formula: ['25,000 לידים', '× 70% ניתנים למסירה', '× ~2% הסלמה', '× 35% שיעור סגירה', '× $3,000 AOV'],
      revenueLabel: 'הכנסה פוטנציאלית שהוחזרה',
      revenueAmount: '≈ $367,500',
    },
    cta: {
      h2: 'תנו לנו 15 דקות ביום ל-90 יום.',
      sub: 'נבנה לכם את מנוע שחזור ההכנסות.',
      btn: '← התחילו את הפיילוט',
    },
    footer: '© 2024 EchoLynk — WW A.I Solutions',
  },
  pl: {
    hero: {
      badge: 'Inteligencja Follow-Up wspierana przez AI',
      h1a: 'Koniec z Domysłami.',
      h1b: 'Czas na Konwersje.',
      sub: 'EchoLynk mówi Twojemu zespołowi kogo kontaktować, co mówić i dlaczego — 100 działań dziennie w 15 minut.',
      cta1: 'Zobacz w Akcji →',
      cta2: 'Zobacz Autopilota →',
      proof: 'Próg rentowności przy 6 transakcjach · Pilot za $15k · ROI dla klienta',
    },
    intel: {
      label: 'Warstwa Inteligencji',
      h2: 'Każdego dnia EchoLynk odpowiada na 4 pytania dla Twojego zespołu.',
      cards: [
        { num: '01', title: 'KTO NASTĘPNY', desc: 'Lead najbardziej skłonny do odpowiedzi lub rezerwacji, rankingowany każdego ranka.' },
        { num: '02', title: 'JAKI PLAYBOOK', desc: 'Dokładna procedura follow-up dostosowana do sytuacji tego leada.' },
        { num: '03', title: 'CO NAPISAĆ', desc: 'Gotowa do wysłania wiadomość, napisana Twoim głosem. Nie szablon.' },
        { num: '04', title: 'DLACZEGO', desc: 'Jasne kody przyczyn: historia, czas, ryzyko. Żadnej czarnej skrzynki.' },
      ],
    },
    process: {
      label: 'Proces',
      h2a: 'Od chaotycznego CRM do silnika przychodów —',
      h2b: 'w 90 dni.',
      steps: [
        { step: '[1]', title: 'Kalibracja na Twoich Wygranych', desc: 'Studiujemy Twoje poprzednie transakcje zanim dotkniemy jednego leada. Ocenianie Ground Truth skalibrowane na Twoje wyniki, nie generyczne modele.', badge: 'Tydzień 1', border: 'border-[#22C55E]/20', badgeCls: 'bg-[#22C55E]/10 text-[#22C55E]' },
        { step: '[2]', title: '15-minutowy Dzienny Przegląd', desc: 'Twój zespół przegląda ~100 sugestii AI. Zatwierdź, edytuj, odrzuć. Każde działanie szybciej trenuje AI do dopasowania do Twojego głosu.', badge: 'Dni 1–90', border: 'border-white/10', badgeCls: 'bg-white/5 text-white/50' },
        { step: '[3]', title: 'Sprint do Autopilota', desc: 'Gdy współczynnik zatwierdzenia osiągnie ~90%, włącz przełącznik. Autoplay uruchamia playbooki. Ty zbierasz przychody bez codziennej pracy.', badge: 'Dzień 90+', border: 'border-[#22C55E]/20', badgeCls: 'bg-[#22C55E]/10 text-[#22C55E]' },
      ],
    },
    metrics: [
      { value: '~21%', label: 'Wskaźnik odpowiedzi, pierwszy tydzień' },
      { value: '~30%', label: 'Wskaźnik reaktywacji' },
      { value: '≈33×', label: 'Szybciej niż ręczny follow-up' },
      { value: '100%', label: 'ROI w pierwszym tygodniu (2 sprzedaże po $5k)' },
    ],
    caseStudy: {
      label: 'Ostatnie Wyniki',
      h2a: 'Uśpione leady →',
      h2b: 'Prawdziwe rozmowy w dni.',
      points: [
        'Kalibracja na poprzednich wygranych + wynikach',
        'Codzienna spójność kolejki najlepszego następnego działania',
        'Zatwierdzenia human-in-the-loop → szybkie uczenie się głosu',
      ],
      formulaIntro: 'Jeśli masz 25 000 uśpionych leadów:',
      formula: ['25 000 leadów', '× 70% dostarczalnych', '× ~2% eskalowanych', '× 35% wskaźnik zamknięcia', '× $3 000 AOV'],
      revenueLabel: 'Potencjalnie Odzyskany Przychód',
      revenueAmount: '≈ $367 500',
    },
    cta: {
      h2: 'Daj nam 15 minut dziennie przez 90 dni.',
      sub: 'Zbudujemy Twój silnik odzyskiwania przychodów.',
      btn: 'Rozpocznij Pilota →',
    },
    footer: '© 2024 EchoLynk — WW A.I Solutions',
  },
  de: {
    hero: {
      badge: 'KI-gestützte Follow-Up-Intelligenz',
      h1a: 'Schluss mit dem Raten.',
      h1b: 'Jetzt konvertieren.',
      sub: 'EchoLynk sagt Ihrem Team, wen sie kontaktieren, was sie sagen und warum — 100 Aktionen täglich in 15 Minuten.',
      cta1: 'In Aktion sehen →',
      cta2: 'Autopilot ansehen →',
      proof: 'Break-even bei 6 Deals · $15k Pilot · Kundenspezifischer ROI',
    },
    intel: {
      label: 'Die Intelligenzschicht',
      h2: 'Jeden Tag beantwortet EchoLynk 4 Fragen für Ihr Team.',
      cards: [
        { num: '01', title: 'WER ALS NÄCHSTES', desc: 'Der Lead mit der höchsten Antwort- oder Buchungswahrscheinlichkeit, jeden Morgen neu eingestuft.' },
        { num: '02', title: 'WELCHER PLAYBOOK', desc: 'Die exakte Follow-up-Routine, die für die Situation dieses Leads erstellt wurde.' },
        { num: '03', title: 'WAS SCHREIBEN', desc: 'Ein versandbereiter Entwurf in Ihrer Stimme. Kein Template.' },
        { num: '04', title: 'WARUM', desc: 'Klare Grundcodes: Verlauf, Timing, Risiko. Keine schwarze Box.' },
      ],
    },
    process: {
      label: 'Der Prozess',
      h2a: 'Vom unübersichtlichen CRM zur Umsatzmaschine —',
      h2b: 'in 90 Tagen.',
      steps: [
        { step: '[1]', title: 'Kalibrierung auf Ihre Erfolge', desc: 'Wir analysieren Ihre bisherigen Deals, bevor wir einen einzigen Lead anfassen. Ground Truth-Scoring kalibriert auf Ihre Ergebnisse, nicht auf generische Modelle.', badge: 'Woche 1', border: 'border-[#22C55E]/20', badgeCls: 'bg-[#22C55E]/10 text-[#22C55E]' },
        { step: '[2]', title: '15-minütige tägliche Überprüfung', desc: 'Ihr Team prüft ~100 KI-Vorschläge. Genehmigen, bearbeiten, ablehnen. Jede Aktion trainiert die KI schneller auf Ihre Stimme.', badge: 'Tage 1–90', border: 'border-white/10', badgeCls: 'bg-white/5 text-white/50' },
        { step: '[3]', title: 'Sprint zum Autopiloten', desc: 'Sobald die Genehmigungsrate ~90% erreicht, den Schalter umlegen. Autoplay führt die Playbooks aus. Sie erfassen Umsatz ohne tägliche Arbeit.', badge: 'Tag 90+', border: 'border-[#22C55E]/20', badgeCls: 'bg-[#22C55E]/10 text-[#22C55E]' },
      ],
    },
    metrics: [
      { value: '~21%', label: 'Antwortrate, erste Woche' },
      { value: '~30%', label: 'Reaktivierungsrate' },
      { value: '≈33×', label: 'Schneller als manuelles Follow-up' },
      { value: '100%', label: 'ROI in Woche 1 (2 Deals à $5k)' },
    ],
    caseStudy: {
      label: 'Aktuelle Ergebnisse',
      h2a: 'Ruhende Leads →',
      h2b: 'Echte Gespräche in Tagen.',
      points: [
        'Kalibrierung auf frühere Erfolge + Ergebnisse',
        'Tägliche Konsistenz der besten nächsten Aktion',
        'Human-in-the-Loop-Genehmigungen → schnelles Stimmenlernen',
      ],
      formulaIntro: 'Bei 25.000 ruhenden Leads:',
      formula: ['25.000 Leads', '× 70% zustellbar', '× ~2% eskaliert', '× 35% Abschlussrate', '× $3.000 AOV'],
      revenueLabel: 'Potenziell zurückgewonnener Umsatz',
      revenueAmount: '≈ $367.500',
    },
    cta: {
      h2: 'Geben Sie uns 15 Minuten täglich für 90 Tage.',
      sub: 'Wir bauen Ihre Umsatz-Rückgewinnungsmaschine.',
      btn: 'Pilot starten →',
    },
    footer: '© 2024 EchoLynk — WW A.I Solutions',
  },
} as const;

export default function EchoLynkHome() {
  const { lang } = useLang();
  const t = CONTENT[lang];

  return (
    <main data-theme="dark" className="bg-[#0A0A0A] text-white">

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 py-32 text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(34,197,94,0.13) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="px-4 py-1.5 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] text-xs font-semibold tracking-widest uppercase">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6" style={{ fontFamily: 'var(--font-syne), sans-serif', color: 'white' }}>
            {t.hero.h1a}{' '}
            <span style={{ color: '#22C55E' }}>{t.hero.h1b}</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link href="/echolynk/review" className="inline-flex items-center gap-2 bg-[#22C55E] text-black font-bold px-7 py-3.5 rounded-xl hover:bg-[#16A34A] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
              {t.hero.cta1}
            </Link>
            <Link href="/echolynk/autopilot" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-200">
              {t.hero.cta2}
            </Link>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.3)' }} className="text-sm tracking-wide">{t.hero.proof}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      </section>

      {/* ─── INTELLIGENCE LAYER ───────────────────────────────────────── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-[#22C55E] text-xs font-bold tracking-[0.2em] uppercase mb-4">{t.intel.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl" style={{ fontFamily: 'var(--font-syne), sans-serif', color: 'white' }}>
            {t.intel.h2}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.intel.cards.map(({ num, title, desc }) => (
            <div key={num} className="group relative p-8 rounded-2xl border border-white/[0.06] bg-[#111] hover:border-[#22C55E]/30 hover:bg-[#0f1f14] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(34,197,94,0.05), transparent 70%)' }} />
              <span className="block text-[#22C55E] text-xs font-bold tracking-[0.15em] mb-3">{num}</span>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-syne), sans-serif', color: 'white' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#22C55E] text-xs font-bold tracking-[0.2em] uppercase mb-4">{t.process.label}</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-syne), sans-serif', color: 'white' }}>
              {t.process.h2a}<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>{t.process.h2b}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.process.steps.map(({ step, title, desc, badge, border, badgeCls }) => (
              <div key={step} className={`p-8 rounded-2xl border ${border} bg-[#0D0D0D] flex flex-col gap-5`}>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black" style={{ fontFamily: 'var(--font-syne), sans-serif', color: 'rgba(255,255,255,0.2)' }}>{step}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeCls}`}>{badge}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-syne), sans-serif', color: 'white' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
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
            {t.metrics.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#22C55E] mb-2 tabular-nums" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                  {value}
                </div>
                <div className="text-xs leading-snug max-w-[140px] mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ───────────────────────────────────────────────── */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#22C55E] text-xs font-bold tracking-[0.2em] uppercase mb-4">{t.caseStudy.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10" style={{ fontFamily: 'var(--font-syne), sans-serif', color: 'white' }}>
                {t.caseStudy.h2a}<br />{t.caseStudy.h2b}
              </h2>
              <div className="space-y-3">
                {t.caseStudy.points.map(point => (
                  <div key={point} className="flex items-start gap-4 p-4 rounded-xl bg-[#111] border-s-2 border-[#22C55E]">
                    <span className="text-[#22C55E] text-sm font-bold mt-0.5 flex-shrink-0">→</span>
                    <span className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.7)' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-white/[0.06] bg-[#0D0D0D]">
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {t.caseStudy.formulaIntro}
              </p>
              <div className="text-sm font-mono leading-loose mb-8 p-4 rounded-xl" style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.04)' }}>
                {t.caseStudy.formula.map((line, i) => <div key={i}>{line}</div>)}
              </div>
              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.caseStudy.revenueLabel}</p>
                <p className="text-4xl font-black text-[#22C55E]" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>{t.caseStudy.revenueAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="px-6 py-24 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#22C55E] rounded-3xl px-10 py-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, #fff 0%, transparent 50%)' }} />
            <h2 className="relative text-3xl md:text-4xl font-black text-black mb-3 leading-tight" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
              {t.cta.h2}
            </h2>
            <p className="relative text-lg mb-8" style={{ color: 'rgba(0,0,0,0.7)' }}>{t.cta.sub}</p>
            <Link href="/echolynk/review" className="relative inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#111] transition-colors duration-200">
              {t.cta.btn}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-8 text-center text-sm" style={{ color: 'rgba(255,255,255,0.2)' }}>
        {t.footer}
      </footer>
    </main>
  );
}
