import Link from "next/link";
import type { RestaurantSlug } from "@/lib/restaurants";

export default function RestaurantCard(props: {
  slug: RestaurantSlug;
  name: string;
  cuisine: string;
  hero: string;
  accent: string;
}) {
  return (
    <Link
      href={`/r/${props.slug}`}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/30 shine"
      style={{ ["--accent" as any]: props.accent }}
    >
      <div
        className="h-[240px] w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${props.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase text-white/60">
              {props.cuisine}
            </div>
            <div className="text-3xl tracking-tight text-white">
              {props.name}
              <span className="ml-1" style={{ color: "var(--accent)" }}>
                .
              </span>
            </div>
          </div>

          <div className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80">
              Enter →
            </div>
          </div>
        </div>

        <div
          className="mt-4 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        />
      </div>
    </Link>
  );
}
