export type Lang = "en" | "es";
export const LANG_COOKIE = "lang";

export function normalizeLang(v?: string | null): Lang {
  return v === "es" ? "es" : "en";
}
