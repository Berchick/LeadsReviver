'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLang, Lang } from './LanguageContext';

const NAV_LABELS = {
  en: { overview: 'Overview', tryNow: 'Try Now', autopilot: 'Autopilot' },
  he: { overview: 'סקירה', tryNow: 'נסו עכשיו', autopilot: 'אוטופיילוט' },
  pl: { overview: 'Przegląd', tryNow: 'Wypróbuj', autopilot: 'Autopilot' },
  de: { overview: 'Übersicht', tryNow: 'Ausprobieren', autopilot: 'Autopilot' },
};

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
  { code: 'de', label: 'DE' },
  { code: 'he', label: 'עב' },
];

export default function RootNav() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const labels = NAV_LABELS[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: labels.overview },
    { href: '/echolynk/review', label: labels.tryNow },
    { href: '/echolynk/autopilot', label: labels.autopilot },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' || pathname === '/echolynk' : pathname.startsWith(href);

  return (
    <nav dir="ltr" className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tight flex-shrink-0"
          style={{ fontFamily: 'var(--font-syne), sans-serif' }}
        >
          <span className="text-[#22C55E]">Echo</span>
          <span className="text-white">Lynk</span>
        </Link>

        {/* Desktop: nav links + language switcher */}
        <div className="hidden sm:flex items-center gap-6">
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
            {LANGUAGES.map((l, i) => (
              <span key={l.code} className="contents">
                {i > 0 && <div className="w-px h-4 bg-white/15" />}
                <button
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1.5 transition-colors duration-150 ${
                    lang === l.code
                      ? 'bg-white/15 text-white'
                      : 'text-white/35 hover:text-white/70'
                  }`}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: language switcher always visible + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center border border-white/15 rounded-lg overflow-hidden text-xs font-bold">
            {LANGUAGES.map((l, i) => (
              <span key={l.code} className="contents">
                {i > 0 && <div className="w-px h-4 bg-white/15" />}
                <button
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1.5 transition-colors duration-150 ${
                    lang === l.code
                      ? 'bg-white/15 text-white'
                      : 'text-white/35 hover:text-white/70'
                  }`}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-white/[0.06] bg-[#0A0A0A]/95 px-4 py-3 flex flex-col gap-1">
          {navLinks.map(link => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-semibold py-2 px-3 rounded-lg transition-colors duration-150 ${
                  active
                    ? 'text-[#22C55E] bg-white/5'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
