import type { ReactNode } from "react";

interface Badge {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface TrustBadgesProps {
  badges: Badge[];
}

export function TrustBadges({ badges }: TrustBadgesProps) {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-6">
      <div className="grid gap-6 rounded-[36px] bg-white/70 p-10 shadow-soft md:grid-cols-3">
        {badges.map((badge) => (
          <article key={badge.id} className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">{badge.title}</h3>
            <p className="text-sm leading-relaxed text-slate-500">{badge.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
