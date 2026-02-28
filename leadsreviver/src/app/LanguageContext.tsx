'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'he' | 'pl';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangCtx>({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div dir={lang === 'he' ? 'rtl' : 'ltr'} style={{ fontFamily: lang === 'he' ? 'var(--font-heebo), sans-serif' : undefined }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
