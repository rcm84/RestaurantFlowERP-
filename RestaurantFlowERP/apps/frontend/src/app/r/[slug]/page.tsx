import Link from "next/link";
import { notFound } from "next/navigation";
import { RESTAURANTS, type RestaurantSlug } from "@/lib/restaurants";
import { cookies } from "next/headers";
import { LANG_COOKIE, normalizeLang } from "@/lib/lang";

export default function RestaurantPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RestaurantSlug;
  const data = RESTAURANTS[slug];
  if (!data) notFound();

  const lang = normalizeLang(cookies().get(LANG_COOKIE)?.value);

  return (
    <main style={{ ["--accent" as any]: data.accent }}>
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.hero})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16">
          <Link href="/" className="text-white/70 hover:text-white text-sm">
            ← {lang === "en" ? "Back" : "Volver"}
          </Link>

          <div className="mt-10">
            <div className="text-xs tracking-[0.45em] uppercase text-white/70">
              {data.cuisine}
            </div>

            <h1 className="mt-4 text-6xl md:text-8xl font-light tracking-tighter text-white">
              {data.name}
              <span style={{ color: "var(--accent)" }}>. </span>
            </h1>

            <p className="mt-6 max-w-xl text-white/75 text-lg">
              {data.tagline[lang]}
            </p>

            <div className="mt-10 flex gap-3">
              <button className="shine rounded-full bg-white text-black px-6 py-3 text-xs tracking-[0.25em] uppercase hover:opacity-95">
                {lang === "en" ? "Reserve now" : "Reservar"}
              </button>
              <button className="shine rounded-full border border-white/15 bg-black/25 px-6 py-3 text-xs tracking-[0.25em] uppercase text-white/85 hover:text-white">
                {lang === "en" ? "View menu" : "Ver menú"}
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-10 text-white/40 text-xs tracking-widest uppercase">
          {data.name} — Demo experience
        </div>
      </section>
    </main>
  );
}
