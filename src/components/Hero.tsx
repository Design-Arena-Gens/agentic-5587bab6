import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-white to-blush-50">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-100/70 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cream-200/60 blur-[160px]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-16 px-6 pb-24 pt-20 md:flex-row md:items-center">
        <div className="max-w-xl space-y-8">
          <div className="space-y-4">
            <p className="section-title">Couture Nail Atelier</p>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Luxurious manicure artistry meticulously crafted for modern muses
            </h1>
            <p className="text-base leading-relaxed text-slate-600">
              Discover sensorial nail rituals, artisanal pigments, and design-forward accessories curated by
              master manicurists from Paris, Milan, and Tokyo.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-slate-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800">
              Book a couture consult
            </button>
            <button className="rounded-full border border-slate-200 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-blush-300 hover:text-blush-500">
              Shop new arrivals
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] bg-white shadow-[0_35px_60px_-30px_rgba(255,122,162,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
              alt="Luxurious manicure presentation"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div className="absolute -bottom-10 -left-6 hidden w-60 rounded-[28px] bg-white p-5 shadow-soft md:block">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Signature Blend</p>
            <p className="mt-2 text-sm text-slate-600">
              Infused with sakura blossom, vitamin c, and cold-pressed camellia oil for luminous resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
