'use client';

import { useState } from 'react';
import { useLang } from '../../LanguageContext';

const T = {
  en: {
    pageTitle: 'Try It Now —',
    pageTitleAccent: 'Human-in-the-Loop (15 min/day)',
    pageSubtitle: '~100 AI suggestions/day with clear reasoning and full control.',
    chips: [
      { key: 'approve', label: 'Approve & Next', desc: 'Send the suggested message and move to the next lead. Every approval becomes training data.', cls: 'bg-green-100 text-green-800 border-green-300' },
      { key: 'edit',    label: 'Edit',           desc: 'Modify the message before sending. Locks in your voice and tone for future AI suggestions.',  cls: 'bg-blue-100 text-blue-800 border-blue-300'  },
      { key: 'reject',  label: 'Reject',         desc: 'Skip this suggestion. Teaches the AI what "bad" looks like for your business.',                cls: 'bg-red-100 text-red-800 border-red-300'    },
      { key: 'snooze',  label: 'Snooze',         desc: 'Mark this lead for later — wrong timing right now.',                                           cls: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
      { key: 'dnc',     label: 'Stop / DNC',     desc: 'Add to Do Not Contact list. Compliance guardrail — never contacts again.',                    cls: 'bg-orange-100 text-orange-800 border-orange-300' },
    ],
    briefTitle: 'Daily Brief',
    progress: 'Progress',
    replies: 'Replies', repliesSub: 'Inbound replies', repliesDone: '0/6 done',
    plays: 'Plays',     playsSub:   'AI follow-ups',   playsDone:   '0/14 done',
    calls: 'Calls',     callsSub:   'Recommended calls',callsDone:  '0/4 done',
    leads: [
      { id: 1, name: 'Jordan Lee',     service: 'AC Repair',        zip: '75231', tag: 'Quick Tip' },
      { id: 2, name: 'Hannah Brooks',  service: 'AC Installation',  zip: '75248', tag: 'Ballpark Price (1 Question)' },
      { id: 3, name: 'Noah Kim',       service: 'AC Repair',        zip: '75006', tag: 'Pick a Time Window' },
      { id: 4, name: 'Nora Patel',     service: 'HVAC Maintenance', zip: '75243', tag: 'Reactivation Nudge' },
      { id: 5, name: 'Dylan Carter',   service: 'AC Repair',        zip: '75001', tag: 'Close the Loop' },
      { id: 6, name: 'Mateo Garcia',   service: 'Heat Pumps',       zip: '75254', tag: 'New Angle: Financing / Rebates' },
    ],
    btnHistory:  'History',
    btnCRM:      'Open in CRM',
    lastTouch:   'Last touch: 18d ago',
    whyTitle:    'Why this is next',
    whyPoints: [
      'See if they still want help so we either re-engage or close it out.',
      'Lead is 40 days old; last touch 18 days ago; 0 touches in 7 days and 3 touches in 30.',
      'A low-pressure reactivation check fits better than pushing details after a long quiet period.',
      "The draft is a one-line check-in with an 'all set' option, so it's easy to answer.",
    ],
    channelLabel: 'Channel',
    playLabel:    'Play',
    playName:     'Reactivation Nudge',
    messageLabel: 'Message',
    defaultMessage: 'If you still want help, Nora, want the next available time window this week?',
    btnApprove: '✓ Approve & Next',
    btnReject:  '✕ Reject',
    btnSnooze:  '⏰ Snooze',
    btnDNC:     '⊗ Stop / DNC',
    gotIt:      'Got it',
    speedBar:   (s: string) => <>Speed: 100 actions/day in <strong>~15 minutes</strong> <span className="text-[#22C55E] font-semibold">{s}</span></>,
    speedHighlight: '≈33× faster than manual follow-up',
  },
  he: {
    pageTitle: 'נסו עכשיו —',
    pageTitleAccent: 'בינה אנושית בלולאה (15 דקות/יום)',
    pageSubtitle: '~100 הצעות AI ביום עם הסבר ברור ושליטה מלאה.',
    chips: [
      { key: 'approve', label: 'אשר ועבור הבא', desc: 'שלח את ההודעה המוצעת ועבור לליד הבא. כל אישור הופך לנתוני אימון.', cls: 'bg-green-100 text-green-800 border-green-300' },
      { key: 'edit',    label: 'ערוך',           desc: 'שנה את ההודעה לפני השליחה. נועל את הקול והטון שלכם להצעות עתידיות.',   cls: 'bg-blue-100 text-blue-800 border-blue-300'  },
      { key: 'reject',  label: 'דחה',            desc: 'דלג על ההצעה. מלמד את ה-AI מה נראה "רע" לעסק שלכם.',                  cls: 'bg-red-100 text-red-800 border-red-300'    },
      { key: 'snooze',  label: 'דחה לזמנית',    desc: 'סמן את הליד לאחר כך — לא הזמן הנכון כרגע.',                            cls: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
      { key: 'dnc',     label: 'עצור / DNC',     desc: 'הוסף לרשימת אל-תיצור-קשר. גדר ציות — לעולם לא ייצור קשר שוב.',       cls: 'bg-orange-100 text-orange-800 border-orange-300' },
    ],
    briefTitle: 'תדריך יומי',
    progress: 'התקדמות',
    replies: 'תגובות',  repliesSub: 'תגובות נכנסות',    repliesDone: '0/6 הושלמו',
    plays:   'פלייז',   playsSub:   'פולואפ AI',         playsDone:   '0/14 הושלמו',
    calls:   'שיחות',   callsSub:   'שיחות מומלצות',     callsDone:   '0/4 הושלמו',
    leads: [
      { id: 1, name: 'Jordan Lee',     service: 'תיקון מיזוג',   zip: '75231', tag: 'טיפ מהיר' },
      { id: 2, name: 'Hannah Brooks',  service: 'התקנת מיזוג',   zip: '75248', tag: 'הצעת מחיר ראשונית' },
      { id: 3, name: 'Noah Kim',       service: 'תיקון מיזוג',   zip: '75006', tag: 'בחר חלון זמן' },
      { id: 4, name: 'Nora Patel',     service: 'תחזוקת HVAC',   zip: '75243', tag: 'דחיפה להפעלה מחדש' },
      { id: 5, name: 'Dylan Carter',   service: 'תיקון מיזוג',   zip: '75001', tag: 'סגור את הלולאה' },
      { id: 6, name: 'Mateo Garcia',   service: 'משאבות חום',    zip: '75254', tag: 'זווית חדשה: מימון / הנחות' },
    ],
    btnHistory:  'היסטוריה',
    btnCRM:      'פתח ב-CRM',
    lastTouch:   'מגע אחרון: לפני 18 ימים',
    whyTitle:    'למה זה הבא',
    whyPoints: [
      'לראות אם הם עדיין רוצים עזרה כדי שנחזור אליהם או נסגור.',
      'הליד בן 40 יום; מגע אחרון לפני 18 יום; 0 מגעים ב-7 ימים ו-3 מגעים ב-30.',
      'בדיקת הפעלה מחדש בלחץ נמוך מתאימה יותר מדחיפת פרטים לאחר תקופת שקט ארוכה.',
      'הטיוטה היא צ׳ק-אין חד-שורתי עם אפשרות "הכל בסדר", כך שקל לענות עליה.',
    ],
    channelLabel: 'ערוץ',
    playLabel:    'פליי',
    playName:     'דחיפה להפעלה מחדש',
    messageLabel: 'הודעה',
    defaultMessage: 'נורה, אם את עדיין צריכה עזרה — רצית את חלון הזמן הפנוי הבא השבוע?',
    btnApprove: '✓ אשר ועבור הבא',
    btnReject:  '✕ דחה',
    btnSnooze:  '⏰ דחה לזמנית',
    btnDNC:     '⊗ עצור / DNC',
    gotIt:      'הבנתי',
    speedBar:   (s: string) => <>מהירות: 100 פעולות/יום ב-<strong>~15 דקות</strong> <span className="text-[#22C55E] font-semibold">{s}</span></>,
    speedHighlight: '≈33× מהיר יותר מפולואפ ידני',
  },
  pl: {
    pageTitle: 'Wypróbuj Teraz —',
    pageTitleAccent: 'Człowiek w Pętli (15 min/dzień)',
    pageSubtitle: '~100 sugestii AI dziennie z jasnym uzasadnieniem i pełną kontrolą.',
    chips: [
      { key: 'approve', label: 'Zatwierdź i Następny', desc: 'Wyślij sugerowaną wiadomość i przejdź do następnego leada. Każde zatwierdzenie staje się danymi treningowymi.', cls: 'bg-green-100 text-green-800 border-green-300' },
      { key: 'edit',    label: 'Edytuj',               desc: 'Zmodyfikuj wiadomość przed wysłaniem. Utrwala Twój głos i ton dla przyszłych sugestii AI.',                   cls: 'bg-blue-100 text-blue-800 border-blue-300'  },
      { key: 'reject',  label: 'Odrzuć',               desc: 'Pomiń tę sugestię. Uczy AI, jak wygląda "złe" dla Twojego biznesu.',                                         cls: 'bg-red-100 text-red-800 border-red-300'    },
      { key: 'snooze',  label: 'Odłóż',                desc: 'Oznacz tego leada na później — zły czas teraz.',                                                              cls: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
      { key: 'dnc',     label: 'Zatrzymaj / DNC',      desc: 'Dodaj do listy Nie Kontaktować. Bariera zgodności — nigdy więcej nie skontaktuje.',                          cls: 'bg-orange-100 text-orange-800 border-orange-300' },
    ],
    briefTitle: 'Codzienny Brief',
    progress: 'Postęp',
    replies: 'Odpowiedzi', repliesSub: 'Przychodzące odpowiedzi', repliesDone: '0/6 gotowe',
    plays:   'Akcje',      playsSub:   'Follow-upy AI',           playsDone:   '0/14 gotowe',
    calls:   'Rozmowy',    callsSub:   'Zalecane rozmowy',        callsDone:   '0/4 gotowe',
    leads: [
      { id: 1, name: 'Jordan Lee',    service: 'Naprawa klimatyzacji', zip: '75231', tag: 'Szybka Wskazówka' },
      { id: 2, name: 'Hannah Brooks', service: 'Montaż klimatyzacji',  zip: '75248', tag: 'Wstępna Cena (1 Pytanie)' },
      { id: 3, name: 'Noah Kim',      service: 'Naprawa klimatyzacji', zip: '75006', tag: 'Wybierz Okno Czasowe' },
      { id: 4, name: 'Nora Patel',    service: 'Konserwacja HVAC',     zip: '75243', tag: 'Impuls Reaktywacji' },
      { id: 5, name: 'Dylan Carter',  service: 'Naprawa klimatyzacji', zip: '75001', tag: 'Zamknij Pętlę' },
      { id: 6, name: 'Mateo Garcia',  service: 'Pompy Ciepła',         zip: '75254', tag: 'Nowy Kąt: Finansowanie / Rabaty' },
    ],
    btnHistory:  'Historia',
    btnCRM:      'Otwórz w CRM',
    lastTouch:   'Ostatni kontakt: 18 dni temu',
    whyTitle:    'Dlaczego jest następny',
    whyPoints: [
      'Sprawdź czy nadal potrzebują pomocy — albo reaktywujemy albo zamykamy.',
      'Lead ma 40 dni; ostatni kontakt 18 dni temu; 0 kontaktów w 7 dniach i 3 w 30.',
      'Delikatny impuls reaktywacji pasuje lepiej niż nacisk na szczegóły po długiej ciszy.',
      'Wiadomość to jednowierszowy check-in z opcją "wszystko w porządku" — łatwa odpowiedź.',
    ],
    channelLabel: 'Kanał',
    playLabel:    'Akcja',
    playName:     'Impuls Reaktywacji',
    messageLabel: 'Wiadomość',
    defaultMessage: 'Nora, jeśli nadal potrzebujesz pomocy — czy chcesz zarezerwować następne wolne okno czasowe w tym tygodniu?',
    btnApprove: '✓ Zatwierdź i Następny',
    btnReject:  '✕ Odrzuć',
    btnSnooze:  '⏰ Odłóż',
    btnDNC:     '⊗ Zatrzymaj / DNC',
    gotIt:      'Rozumiem',
    speedBar:   (s: string) => <>Szybkość: 100 działań/dzień w <strong>~15 minut</strong> <span className="text-[#22C55E] font-semibold">{s}</span></>,
    speedHighlight: '≈33× szybciej niż ręczny follow-up',
  },
  de: {
    pageTitle: 'Jetzt ausprobieren —',
    pageTitleAccent: 'Mensch in der Schleife (15 Min./Tag)',
    pageSubtitle: '~100 KI-Vorschläge pro Tag mit klarer Begründung und voller Kontrolle.',
    chips: [
      { key: 'approve', label: 'Genehmigen & Weiter', desc: 'Sende die vorgeschlagene Nachricht und gehe zum nächsten Lead. Jede Genehmigung wird zu Trainingsdaten.', cls: 'bg-green-100 text-green-800 border-green-300' },
      { key: 'edit',    label: 'Bearbeiten',          desc: 'Nachricht vor dem Senden ändern. Sichert Ihren Ton für zukünftige KI-Vorschläge.',                       cls: 'bg-blue-100 text-blue-800 border-blue-300'  },
      { key: 'reject',  label: 'Ablehnen',            desc: 'Diesen Vorschlag überspringen. Lehrt die KI, was für Ihr Unternehmen "schlecht" aussieht.',              cls: 'bg-red-100 text-red-800 border-red-300'    },
      { key: 'snooze',  label: 'Verschieben',         desc: 'Diesen Lead für später markieren — gerade falscher Zeitpunkt.',                                          cls: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
      { key: 'dnc',     label: 'Stopp / DNC',         desc: 'Zur Nicht-Kontaktieren-Liste hinzufügen. Compliance-Schutz — wird nie wieder kontaktiert.',             cls: 'bg-orange-100 text-orange-800 border-orange-300' },
    ],
    briefTitle: 'Tagesbericht',
    progress: 'Fortschritt',
    replies: 'Antworten',  repliesSub: 'Eingehende Antworten',  repliesDone: '0/6 erledigt',
    plays:   'Aktionen',   playsSub:   'KI-Follow-ups',         playsDone:   '0/14 erledigt',
    calls:   'Anrufe',     callsSub:   'Empfohlene Anrufe',     callsDone:   '0/4 erledigt',
    leads: [
      { id: 1, name: 'Jordan Lee',     service: 'Klimaanlage Reparatur',    zip: '75231', tag: 'Schneller Tipp' },
      { id: 2, name: 'Hannah Brooks',  service: 'Klimaanlage Installation', zip: '75248', tag: 'Ungefährer Preis (1 Frage)' },
      { id: 3, name: 'Noah Kim',       service: 'Klimaanlage Reparatur',    zip: '75006', tag: 'Zeitfenster wählen' },
      { id: 4, name: 'Nora Patel',     service: 'HVAC-Wartung',             zip: '75243', tag: 'Reaktivierungsanstoß' },
      { id: 5, name: 'Dylan Carter',   service: 'Klimaanlage Reparatur',    zip: '75001', tag: 'Den Kreis schließen' },
      { id: 6, name: 'Mateo Garcia',   service: 'Wärmepumpen',              zip: '75254', tag: 'Neuer Ansatz: Finanzierung / Rabatte' },
    ],
    btnHistory:  'Verlauf',
    btnCRM:      'Im CRM öffnen',
    lastTouch:   'Letzter Kontakt: vor 18 Tagen',
    whyTitle:    'Warum dieser als nächstes',
    whyPoints: [
      'Prüfen ob sie noch Hilfe möchten — entweder reaktivieren oder abschließen.',
      'Lead ist 40 Tage alt; letzter Kontakt vor 18 Tagen; 0 Kontakte in 7 Tagen und 3 in 30.',
      'Ein druckloser Reaktivierungs-Check passt besser als Detailpush nach langer Stille.',
      'Der Entwurf ist ein einzeiliger Check-in mit einer "Alles gut"-Option — leicht zu beantworten.',
    ],
    channelLabel: 'Kanal',
    playLabel:    'Aktion',
    playName:     'Reaktivierungsanstoß',
    messageLabel: 'Nachricht',
    defaultMessage: 'Nora, wenn Sie noch Hilfe benötigen — möchten Sie das nächste freie Zeitfenster diese Woche?',
    btnApprove: '✓ Genehmigen & Weiter',
    btnReject:  '✕ Ablehnen',
    btnSnooze:  '⏰ Verschieben',
    btnDNC:     '⊗ Stopp / DNC',
    gotIt:      'Verstanden',
    speedBar:   (s: string) => <>Geschwindigkeit: 100 Aktionen/Tag in <strong>~15 Minuten</strong> <span className="text-[#22C55E] font-semibold">{s}</span></>,
    speedHighlight: '≈33× schneller als manuelles Follow-up',
  },
} as const;

export default function ReviewPage() {
  const { lang } = useLang();
  const t = T[lang];

  const [activeChipKey, setActiveChipKey] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState(4);
  const [message, setMessage] = useState<Record<string, string>>({ en: T.en.defaultMessage, he: T.he.defaultMessage, pl: T.pl.defaultMessage, de: T.de.defaultMessage });

  const activeChip = t.chips.find(c => c.key === activeChipKey);

  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 64px)' }}>

      {/* ─── Page Header ────────────────────────────────────── */}
      <div className="flex-shrink-0 border-b border-gray-200 px-8 py-5 bg-white">
        <h1 className="text-2xl font-bold text-black tracking-tight">
          {t.pageTitle}{' '}
          <span className="text-[#22C55E]">{t.pageTitleAccent}</span>
        </h1>
        <p className="text-gray-500 text-sm mt-1">{t.pageSubtitle}</p>

        <div className="flex gap-2 mt-4 flex-wrap">
          {t.chips.map(chip => (
            <button
              key={chip.key}
              onClick={() => setActiveChipKey(chip.key)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border cursor-pointer hover:opacity-75 transition-opacity ${chip.cls}`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── 3-Panel Layout ─────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="flex-shrink-0 border-e border-gray-200 bg-gray-50 overflow-y-auto" style={{ width: '180px' }}>
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-xs text-gray-500 uppercase tracking-widest mb-3">{t.briefTitle}</h3>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
              <span>{t.progress}</span>
              <span className="font-medium">0 / 24</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-1.5 bg-[#22C55E] rounded-full" style={{ width: '0%' }} />
            </div>
          </div>

          <div className="p-4 border-b border-gray-100 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-start justify-between mb-1">
              <span className="text-xs font-semibold text-gray-700">{t.replies}</span>
              <span className="bg-[#22C55E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">8</span>
            </div>
            <div className="text-[11px] text-gray-500 mb-0.5">{t.repliesSub}</div>
            <div className="text-[11px] text-gray-400">{t.repliesDone}</div>
          </div>

          <div className="p-4 border-b border-gray-100 bg-blue-50 border-s-2 border-s-blue-500 cursor-pointer">
            <div className="flex items-start justify-between mb-1">
              <span className="text-xs font-semibold text-blue-700">{t.plays}</span>
              <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">14</span>
            </div>
            <div className="text-[11px] text-blue-600 mb-0.5">{t.playsSub}</div>
            <div className="text-[11px] text-blue-400">{t.playsDone}</div>
          </div>

          <div className="p-4 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-start justify-between mb-1">
              <span className="text-xs font-semibold text-gray-700">{t.calls}</span>
              <span className="bg-orange-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">4</span>
            </div>
            <div className="text-[11px] text-gray-500 mb-0.5">{t.callsSub}</div>
            <div className="text-[11px] text-gray-400">{t.callsDone}</div>
          </div>
        </div>

        {/* MIDDLE PANEL */}
        <div className="flex-shrink-0 border-e border-gray-200 bg-white overflow-y-auto" style={{ width: '220px' }}>
          {t.leads.map(lead => {
            const isSelected = lead.id === selectedLead;
            return (
              <div
                key={lead.id}
                onClick={() => setSelectedLead(lead.id)}
                className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${isSelected ? 'bg-blue-50 border-s-2 border-s-blue-500' : 'hover:bg-gray-50'}`}
              >
                <div className="font-semibold text-sm text-black">{lead.name}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{lead.service} • {lead.zip}</div>
                <div className="mt-2">
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200 leading-none">{lead.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white min-w-0">
          <div className="flex-shrink-0 px-6 pt-5 pb-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-black">Nora Patel</h2>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 text-xs border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 text-gray-600 transition-colors">
                  <span>📋</span> {t.btnHistory}
                </button>
                <button className="flex items-center gap-1.5 text-xs border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 text-gray-600 transition-colors">
                  <span>🔗</span> {t.btnCRM}
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500">(469) 558-8172 • npatel.outlook.com • HVAC Maintenance • 75243</div>
            <div className="text-xs text-gray-400 mt-1">{t.lastTouch}</div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            <div className="mb-6">
              <h3 className="font-bold text-sm text-black mb-3">{t.whyTitle}</h3>
              <ul className="space-y-2">
                {t.whyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <span className="text-gray-300 mt-1 flex-shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t.channelLabel}</span>
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded">SMS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t.playLabel}</span>
                <span className="text-xs text-gray-600">{t.playName}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t.messageLabel}</div>
              <textarea
                value={message[lang]}
                onChange={e => setMessage(prev => ({ ...prev, [lang]: e.target.value }))}
                rows={3}
                className="w-full border-2 border-[#22C55E] rounded-lg px-4 py-3 text-sm text-gray-700 resize-none focus:outline-none focus:border-[#16A34A] transition-colors"
              />
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-white flex items-center gap-3 flex-wrap">
            <button onClick={() => setActiveChipKey('approve')} className="flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#16A34A] transition-colors whitespace-nowrap">
              {t.btnApprove}
            </button>
            <button onClick={() => setActiveChipKey('reject')} className="flex items-center gap-2 border border-gray-300 text-gray-600 font-medium px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
              {t.btnReject}
            </button>
            <button onClick={() => setActiveChipKey('snooze')} className="flex items-center gap-2 border border-gray-300 text-gray-600 font-medium px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
              {t.btnSnooze}
            </button>
            <div className="flex-1" />
            <button onClick={() => setActiveChipKey('dnc')} className="flex items-center gap-2 border-2 border-red-400 text-red-500 font-medium px-4 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors whitespace-nowrap">
              {t.btnDNC}
            </button>
          </div>
        </div>
      </div>

      {/* Speed bar */}
      <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 px-8 py-3">
        <p className="text-sm text-center text-gray-600">
          {t.speedBar(t.speedHighlight)}
        </p>
      </div>

      {/* Popup Modal */}
      {activeChipKey && activeChip && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={() => setActiveChipKey(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-black text-xl mb-3">{activeChip.label}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{activeChip.desc}</p>
            <button onClick={() => setActiveChipKey(null)} className="mt-6 w-full bg-[#22C55E] text-white font-semibold py-2.5 rounded-lg hover:bg-[#16A34A] transition-colors">
              {t.gotIt}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
