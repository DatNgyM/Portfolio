"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

type TranslationValue = typeof translations.en;

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationValue;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lấy ngôn ngữ từ localStorage hoặc default là 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      return saved && (saved === 'en' || saved === 'vi') ? saved : 'en';
    }
    return 'en';
  });
  
  const t = translations[language];
  
  // Hàm setLanguage với lưu vào localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

