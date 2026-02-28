'use client';

import { useState } from 'react';
import { useLang } from '../../LanguageContext';

type Status = 'Training' | 'Ready' | 'Autoplay' | 'Paused';

interface PlaybookRow {
  id: number;
  nameKey: string;
  descKey: string;
  status: Status;
  suggested: number;
  succeededPct: string;
  streakDays: number | null;
  editedPct: string;
  errPct: string;
  autoplaySince: string | null;
  autoSent: number | null;
}

const INITIAL_ROWS: PlaybookRow[] = [
  { id: 1, nameKey: 'ballpark',     descKey: 'salvage_ballpark',  status: 'Training', suggested: 28,  succeededPct: '71%', streakDays: null, editedPct: '21%', errPct: '7%', autoplaySince: null,          autoSent: null },
  { id: 2, nameKey: 'socialProof',  descKey: 'salvage_trust',     status: 'Ready',    suggested: 180, succeededPct: '92%', streakDays: 9,   editedPct: '7%',  errPct: '2%', autoplaySince: null,          autoSent: null },
  { id: 3, nameKey: 'financing',    descKey: 'nurture_reactivate',status: 'Ready',    suggested: 95,  succeededPct: '92%', streakDays: 12,  editedPct: '7%',  errPct: '1%', autoplaySince: null,          autoSent: null },
  { id: 4, nameKey: 'blocker',      descKey: 'estimate_blocker',  status: 'Ready',    suggested: 220, succeededPct: '96%', streakDays: 14,  editedPct: '4%',  errPct: '0%', autoplaySince: null,          autoSent: null },
  { id: 5, nameKey: 'reactivation', descKey: 'nurture_reactivate',status: 'Autoplay', suggested: 145, succeededPct: '93%', streakDays: 11,  editedPct: '6%',  errPct: '1%', autoplaySince: 'Jan 8, 2024', autoSent: 87  },
  { id: 6, nameKey: 'repair',       descKey: 'nurture_detail',    status: 'Autoplay', suggested: 168, succeededPct: '93%', streakDays: 13,  editedPct: '5%',  errPct: '1%', autoplaySince: 'Jan 12, 2024',autoSent: 142 },
  { id: 7, nameKey: 'warranty',     descKey: 'estimate_trust',    status: 'Paused',   suggested: 95,  succeededPct: '82%', streakDays: null, editedPct: '11%', errPct: '7%', autoplaySince: 'Jan 5, 2024', autoSent: 68  },
];

const T = {
  en: {
    h1: 'Sprint to',
    h1Accent: 'Autopilot',
    sub1: 'You started with 15 minutes a day. Now your follow-up runs itself.',
    sub2: (s: string) => <>When your team consistently approves <strong>~90% of suggestions</strong>, it&apos;s time to <span className="text-[#22C55E] font-bold">{s}</span>. Autoplay takes over — sending the right message to the right lead, automatically, every day.</>,
    flipSwitch: 'flip the switch',
    onceOn: 'Once Autoplay is on, it:',
    bullets: [
      'Runs your proven playbooks automatically — no daily review needed',
      'Spots replies that need a human and escalates them instantly',
      'Logs every outcome to keep getting smarter over time',
    ],
    colPlaybook: 'Playbook',
    colStatus: 'Status',
    colSuggested: 'Suggested (14d)',
    colSucceeded: 'Succeeded (14d)',
    colCorrected: 'Corrected (14d)',
    colSince: 'Autoplay Since',
    colSent: 'Auto-sent',
    colActions: 'Actions',
    edited: 'Edited',
    err: 'Err',
    streakSuffix: '-day streak',
    btnEnable: 'Enable Autoplay',
    btnPause: 'Pause',
    btnResume: 'Resume',
    btnLog: 'View Log',
    statusLabels: { Training: 'Training', Ready: 'Ready', Autoplay: 'Autoplay', Paused: 'Paused' } as Record<Status, string>,
    names: {
      ballpark:     'Ballpark Price (1 Question)',
      socialProof:  'Social Proof Nudge',
      financing:    'New Angle: Financing / Rebates',
      blocker:      "Estimate: What's the blocker?",
      reactivation: 'Reactivation Nudge',
      repair:       'Repair vs Replace (2 Questions Total)',
      warranty:     'Warranty / Guarantee Clarity',
    },
    descs: {
      salvage_ballpark:  'Salvage • give ballpark',
      salvage_trust:     'Salvage • build trust',
      nurture_reactivate:'Nurture • reactivate',
      estimate_blocker:  'Estimate • find blocker',
      nurture_detail:    'Nurture • collect detail',
      estimate_trust:    'Estimate • build trust',
    },
    footer1: 'Once playbooks are on Autoplay, follow-up becomes a',
    footer1b: 'compounding revenue system',
    footer2: 'Autoplay = Revenue capture on repeat — without daily labor.',
    cta: "Give us 15 minutes/day for 90 days — we'll build your revenue recovery engine",
  },
  he: {
    h1: 'ריצה ל',
    h1Accent: 'אוטופיילוט',
    sub1: 'התחלתם עם 15 דקות ביום. עכשיו הפולואפ שלכם עובד לבד.',
    sub2: (s: string) => <>כשהצוות שלכם מאשר בעקביות <strong>~90% מהמוצעות</strong>, הגיע הזמן <span className="text-[#22C55E] font-bold">{s}</span>. Autoplay לוקח אחריות — שולח את ההודעה הנכונה לליד הנכון, אוטומטית, כל יום.</>,
    flipSwitch: 'להפעיל את המתג',
    onceOn: 'כשה-Autoplay פועל:',
    bullets: [
      'מריץ את הפלייבוקים המוכחים שלכם אוטומטית — ללא צורך בסקירה יומית',
      'מזהה תגובות שדורשות מגע אנושי ומסלים אותן מיד',
      'מתעד כל תוצאה כדי להשתפר ללא הפסקה',
    ],
    colPlaybook: 'פלייבוק',
    colStatus: 'סטטוס',
    colSuggested: 'הוצע (14י)',
    colSucceeded: 'הצלחה (14י)',
    colCorrected: 'תוקן (14י)',
    colSince: 'Autoplay מאז',
    colSent: "נשלח אוטו'",
    colActions: 'פעולות',
    edited: 'נערך',
    err: 'שגיאה',
    streakSuffix: ' ימים רצף',
    btnEnable: 'הפעל Autoplay',
    btnPause: 'השהה',
    btnResume: 'המשך',
    btnLog: 'צפה ביומן',
    statusLabels: { Training: 'אימון', Ready: 'מוכן', Autoplay: 'אוטופליי', Paused: 'מושהה' } as Record<Status, string>,
    names: {
      ballpark:     'הצעת מחיר ראשונית (שאלה אחת)',
      socialProof:  'דחיפה עם הוכחה חברתית',
      financing:    'זווית חדשה: מימון / הנחות',
      blocker:      'הערכה: מה עוצר אתכם?',
      reactivation: 'דחיפה להפעלה מחדש',
      repair:       'תיקון מול החלפה (2 שאלות)',
      warranty:     'בהירות לגבי אחריות / ערבות',
    },
    descs: {
      salvage_ballpark:  'שימור • הצעת מחיר ראשונית',
      salvage_trust:     'שימור • בניית אמון',
      nurture_reactivate:'טיפוח • הפעלה מחדש',
      estimate_blocker:  'הערכה • מציאת חוסם',
      nurture_detail:    'טיפוח • איסוף פרטים',
      estimate_trust:    'הערכה • בניית אמון',
    },
    footer1: 'ברגע שהפלייבוקים על Autoplay, הפולואפ הופך ל',
    footer1b: 'מנוע הכנסות מתרכב',
    footer2: 'Autoplay = לכידת הכנסות חוזרת — ללא עבודה יומית.',
    cta: 'תנו לנו 15 דקות/יום ל-90 יום — נבנה לכם את מנוע שחזור ההכנסות',
  },
  pl: {
    h1: 'Sprint do',
    h1Accent: 'Autopilota',
    sub1: 'Zacząłeś od 15 minut dziennie. Teraz Twój follow-up działa sam.',
    sub2: (s: string) => <>Gdy Twój zespół regularnie zatwierdza <strong>~90% sugestii</strong>, czas <span className="text-[#22C55E] font-bold">{s}</span>. Autoplay przejmuje kontrolę — wysyłając właściwą wiadomość do właściwego leada, automatycznie, każdego dnia.</>,
    flipSwitch: 'przełączyć przełącznik',
    onceOn: 'Gdy Autoplay jest włączony:',
    bullets: [
      'Uruchamia Twoje sprawdzone playbooki automatycznie — bez codziennego przeglądu',
      'Wykrywa odpowiedzi wymagające człowieka i natychmiast je eskaluje',
      'Rejestruje każdy wynik, by ciągle się doskonalić',
    ],
    colPlaybook: 'Playbook',
    colStatus: 'Status',
    colSuggested: 'Zaproponowane (14d)',
    colSucceeded: 'Zaakceptowane (14d)',
    colCorrected: 'Poprawione (14d)',
    colSince: 'Autoplay od',
    colSent: 'Auto-wysłane',
    colActions: 'Akcje',
    edited: 'Edytowane',
    err: 'Błąd',
    streakSuffix: '-dniowa passa',
    btnEnable: 'Włącz Autoplay',
    btnPause: 'Pauza',
    btnResume: 'Wznów',
    btnLog: 'Zobacz Log',
    statusLabels: { Training: 'Trening', Ready: 'Gotowy', Autoplay: 'Autoplay', Paused: 'Wstrzymany' } as Record<Status, string>,
    names: {
      ballpark:     'Wstępna Cena (1 Pytanie)',
      socialProof:  'Impuls Dowodu Społecznego',
      financing:    'Nowy Kąt: Finansowanie / Rabaty',
      blocker:      'Wycena: Co Cię Blokuje?',
      reactivation: 'Impuls Reaktywacji',
      repair:       'Naprawa vs Wymiana (2 Pytania)',
      warranty:     'Wyjaśnienie Gwarancji',
    },
    descs: {
      salvage_ballpark:  'Ratowanie • wstępna cena',
      salvage_trust:     'Ratowanie • budowanie zaufania',
      nurture_reactivate:'Pielęgnowanie • reaktywacja',
      estimate_blocker:  'Wycena • znajdź bloker',
      nurture_detail:    'Pielęgnowanie • zbieranie szczegółów',
      estimate_trust:    'Wycena • budowanie zaufania',
    },
    footer1: 'Gdy playbooki są na Autoplay, follow-up staje się',
    footer1b: 'narastającym silnikiem przychodów',
    footer2: 'Autoplay = Powtarzalne zbieranie przychodów — bez codziennej pracy.',
    cta: 'Daj nam 15 minut/dzień przez 90 dni — zbudujemy Twój silnik odzyskiwania przychodów',
  },
} as const;

const STATUS_STYLES: Record<Status, string> = {
  Training: 'bg-gray-100 text-gray-600 border border-gray-200',
  Ready:    'bg-blue-100 text-blue-700 border border-blue-200',
  Autoplay: 'bg-green-100 text-green-700 border border-green-200',
  Paused:   'bg-amber-100 text-amber-700 border border-amber-200',
};

export default function AutopilotPage() {
  const { lang } = useLang();
  const t = T[lang];
  const [rows, setRows] = useState<PlaybookRow[]>(INITIAL_ROWS);

  const today = new Date().toLocaleDateString(lang === 'he' ? 'he-IL' : lang === 'pl' ? 'pl-PL' : 'en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  const enableAutoplay = (id: number) =>
    setRows(prev => prev.map(r => r.id === id ? { ...r, status: 'Autoplay' as Status, autoplaySince: today, autoSent: r.autoSent ?? 0 } : r));
  const pause  = (id: number) => setRows(prev => prev.map(r => r.id === id ? { ...r, status: 'Paused'   as Status } : r));
  const resume = (id: number) => setRows(prev => prev.map(r => r.id === id ? { ...r, status: 'Autoplay' as Status } : r));

  return (
    <main className="max-w-7xl mx-auto px-8 py-10">

      {/* ─── Header ─────────────────────────────────────────── */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-black mb-3">
          {t.h1}<span className="text-[#22C55E]">{t.h1Accent}</span>
        </h1>
        <p className="text-gray-500 text-lg mb-2">{t.sub1}</p>
        <p className="text-gray-700 text-lg mb-6">{t.sub2(t.flipSwitch)}</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">{t.onceOn}</p>
          <ul className="space-y-1.5">
            {t.bullets.map(item => (
              <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="text-[#22C55E] font-bold flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── Table ──────────────────────────────────────────── */}
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-14">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                {[t.colPlaybook, t.colStatus, t.colSuggested, t.colSucceeded, t.colCorrected, t.colSince, t.colSent, t.colActions].map((col, i) => (
                  <th key={col} className={`px-4 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wider whitespace-nowrap ${i === 0 || i === 1 ? 'text-left' : 'text-right'}`}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map(row => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 min-w-[180px]">
                    <div className="font-semibold text-black text-sm">{t.names[row.nameKey as keyof typeof t.names]}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{t.descs[row.descKey as keyof typeof t.descs]}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[row.status]}`}>
                      {t.statusLabels[row.status]}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-gray-700 font-medium">{row.suggested}</td>
                  <td className="px-4 py-4 text-right">
                    <div className="text-gray-700 font-medium">{row.succeededPct}</div>
                    {row.streakDays && (
                      <div className="text-xs text-gray-400">
                        {lang === 'he' ? `רצף ${row.streakDays} ימים` : `${row.streakDays}${t.streakSuffix}`}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="text-xs text-gray-500">{t.edited}: {row.editedPct}</div>
                    <div className="text-xs text-gray-500">{t.err}: {row.errPct}</div>
                  </td>
                  <td className="px-4 py-4 text-right text-gray-500 text-sm whitespace-nowrap">{row.autoplaySince ?? '—'}</td>
                  <td className="px-4 py-4 text-right text-gray-700">{row.autoSent !== null ? row.autoSent : '—'}</td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {row.status === 'Training' && <span className="text-gray-300 text-xs">—</span>}
                      {row.status === 'Ready' && (
                        <button onClick={() => enableAutoplay(row.id)} className="bg-[#22C55E] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#16A34A] transition-colors whitespace-nowrap">
                          {t.btnEnable}
                        </button>
                      )}
                      {row.status === 'Autoplay' && (
                        <>
                          <button onClick={() => pause(row.id)} className="border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                            {t.btnPause}
                          </button>
                          <button onClick={() => {}} className="border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                            {t.btnLog}
                          </button>
                        </>
                      )}
                      {row.status === 'Paused' && (
                        <>
                          <button onClick={() => resume(row.id)} className="border border-amber-400 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-amber-50 transition-colors">
                            {t.btnResume}
                          </button>
                          <button onClick={() => {}} className="border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                            {t.btnLog}
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── Footer ─────────────────────────────────────────── */}
      <div className="text-center mb-10">
        <p className="text-gray-600 text-lg mb-3">
          {t.footer1} <strong>{t.footer1b}</strong>.
        </p>
        <p className="text-[#22C55E] text-2xl font-bold">{t.footer2}</p>
      </div>

      <div className="bg-[#22C55E] rounded-2xl px-8 py-10 text-center mb-10">
        <p className="text-white text-xl font-bold">{t.cta}</p>
      </div>
    </main>
  );
}
