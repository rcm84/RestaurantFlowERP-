"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/lang";
import { LANG_COOKIE, normalizeLang } from "@/lib/lang";

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageToggle({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const stored = normalizeLang(localStorage.getItem(LANG_COOKIE));
    if (stored !== lang) setLang(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(LANG_COOKIE, lang);
    setCookie(LANG_COOKIE, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <button
      className="shine rounded-full border border-white/15 px-3 py-1 text-xs tracking-widest uppercase text-white/80 hover:text-white"
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      aria-label="Toggle language"
    >
      {lang === "en" ? "EN" : "ES"}
    </button>
  );
}
