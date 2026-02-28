'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from './LanguageContext';

const NAV_LABELS = {
  en: { overview: 'Overview', tryNow: 'Try Now', autopilot: 'Autopilot' },
  he: { overview: 'סקירה', tryNow: 'נסו עכשיו', autopilot: 'אוטופיילוט' },
  pl: { overview: 'Przegląd', tryNow: 'Wypróbuj', autopilot: 'Autopilot' },
};

export default function RootNav() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const labels = NAV_LABELS[lang];

  const navLinks = [
    { href: '/', label: labels.overview },
    { href: '/echolynk/review', label: labels.tryNow },
    { href: '/echolynk/autopilot', label: labels.autopilot },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' || pathname === '/echolynk' : pathname.startsWith(href);

  return (
    <nav dir="ltr" className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight flex-shrink-0"
          style={{ fontFamily: 'var(--font-syne), sans-serif' }}
        >
          <span className="text-[#22C55E]">Echo</span>
          <span className="text-white">Lynk</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Page links */}
          <div className="flex items-center gap-6">
            {navLinks.map(link => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-150 pb-0.5 ${
                    active
                      ? 'text-[#22C55E] border-b-2 border-[#22C55E]'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Language toggle */}
          <div className="flex items-center border border-white/15 rounded-lg overflow-hidden text-xs font-bold">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition-colors duration-150 ${
                lang === 'en'
                  ? 'bg-white/15 text-white'
                  : 'text-white/35 hover:text-white/70'
              }`}
            >
              EN
            </button>
            <div className="w-px h-4 bg-white/15" />
            <button
              onClick={() => setLang('pl')}
              className={`px-3 py-1.5 transition-colors duration-150 ${
                lang === 'pl'
                  ? 'bg-white/15 text-white'
                  : 'text-white/35 hover:text-white/70'
              }`}
            >
              PL
            </button>
            <div className="w-px h-4 bg-white/15" />
            <button
              onClick={() => setLang('he')}
              className={`px-3 py-1.5 transition-colors duration-150 ${
                lang === 'he'
                  ? 'bg-white/15 text-white'
                  : 'text-white/35 hover:text-white/70'
              }`}
            >
              עב
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
