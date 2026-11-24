// ─── Hero Stats ─────────────────────────────────────────────────────────────
// Edit the `value` fields here to update the numbers shown in the Hero section.

export interface HeroStat {
  label: string;
  value: string;
}

export const HERO_STATS: HeroStat[] = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Happy Clients", value: "7+" },
];
