export type RestaurantSlug = "kasai" | "marmo" | "obsidiana" | "botanico" | "malecon";

export const RESTAURANTS: Record<RestaurantSlug, {
  slug: RestaurantSlug;
  name: string;
  cuisine: string;
  accent: string;
  hero: string;
  tagline: { en: string; es: string };
}> = {
  kasai: {
    slug: "kasai",
    name: "KASAI",
    cuisine: "Japanese",
    accent: "#cc3333",
    hero: "/restaurants/kasai/hero.jpg",
    tagline: { en: "Fire. Precision. Omakase.", es: "Fuego. Precisión. Omakase." }
  },
  marmo: {
    slug: "marmo",
    name: "MARMO",
    cuisine: "Italian",
    accent: "#d4af37",
    hero: "/restaurants/marmo/hero.jpg",
    tagline: { en: "Marble. Flour. Craft.", es: "Mármol. Harina. Oficio." }
  },
  obsidiana: {
    slug: "obsidiana",
    name: "OBSIDIANA",
    cuisine: "Mexican",
    accent: "#00e5ff",
    hero: "/restaurants/obsidiana/hero.jpg",
    tagline: { en: "Volcanic. Ritual. Night.", es: "Volcánico. Ritual. Noche." }
  },
  botanico: {
    slug: "botanico",
    name: "BOTÂNICO",
    cuisine: "Brazilian",
    accent: "#ccff00",
    hero: "/restaurants/botanico/hero.jpg",
    tagline: { en: "Jungle. Fresh. Electric.", es: "Selva. Fresco. Eléctrico." }
  },
  malecon: {
    slug: "malecon",
    name: "MALECÓN",
    cuisine: "Cuban",
    accent: "#e6b89c",
    hero: "/restaurants/malecon/hero.jpg",
    tagline: { en: "Noir. Rhythm. Havana.", es: "Noir. Ritmo. Habana." }
  }
};

export const RESTAURANT_LIST = Object.values(RESTAURANTS);
