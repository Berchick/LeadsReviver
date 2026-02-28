'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/echolynk', label: 'Overview' },
  { href: '/echolynk/review', label: 'Try Now' },
  { href: '/echolynk/autopilot', label: 'Autopilot' },
];

export default function EchoLynkNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/echolynk" className="font-bold text-xl tracking-tight">
          <span className="text-[#22C55E]">Echo</span>
          <span className="text-black">Lynk</span>
        </Link>
        <div className="flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-150 pb-0.5 ${
                  isActive
                    ? 'text-[#22C55E] border-b-2 border-[#22C55E]'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
