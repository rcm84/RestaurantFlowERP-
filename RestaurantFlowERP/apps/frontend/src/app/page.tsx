import RestaurantCard from "@/components/RestaurantCard";
import { RESTAURANT_LIST } from "@/lib/restaurants";
import { cookies } from "next/headers";
import { LANG_COOKIE, normalizeLang } from "@/lib/lang";

export default function Page() {
  const lang = normalizeLang(cookies().get(LANG_COOKIE)?.value);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-14">
        <h1 className="text-5xl md:text-6xl tracking-tight text-white">
          Five premium restaurant demos
          <span className="ml-2" style={{ color: "var(--accent)" }}>
            .
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          {lang === "en"
            ? "Choose a concept. Each one is a high-end landing with its own art direction."
            : "Elige un concepto. Cada uno es una landing premium con su propia dirección de arte."}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {RESTAURANT_LIST.map((r) => (
            <RestaurantCard
              key={r.slug}
              slug={r.slug}
              name={r.name}
              cuisine={r.cuisine}
              hero={r.hero}
              accent={r.accent}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
