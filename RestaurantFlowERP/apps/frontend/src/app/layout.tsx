import "./globals.css";
import { cookies } from "next/headers";
import CursorGlow from "@/components/CursorGlow";
import LanguageToggle from "@/components/LanguageToggle";
import { LANG_COOKIE, normalizeLang } from "@/lib/lang";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = normalizeLang(cookies().get(LANG_COOKIE)?.value);

  return (
    <html lang={lang}>
      <body>
        <div className="noise" />
        <CursorGlow />

        <header className="fixed top-5 left-0 right-0 z-50">
          <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
            <div className="text-xs tracking-[0.35em] uppercase text-white/70">
              RestaurantFlowERP
            </div>
            <LanguageToggle initialLang={lang} />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
