export function Footer() {
  return (
    <footer className="mt-24 bg-slate-900 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <p className="font-display text-2xl tracking-[0.35em] text-white">LUMI</p>
          <p className="text-sm text-slate-300">
            Atelier Lumi Nails curates modern manicure artistry, blending innovation with mindful self-care for
            discerning aesthetes.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em]">Boutique</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-white">
                Haute Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Rituals & Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Artist Collaborations
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em]">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-white">
                About Atelier
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em]">Contact</h4>
          <p className="text-sm text-slate-300">
            concierge@luminaire.studio
            <br />
            +33 1 86 76 45 12
            <br />
            18 Rue des Francs Bourgeois, Paris
          </p>
          <form className="space-y-3">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Join our private salon</label>
            <div className="flex overflow-hidden rounded-full bg-white/10 p-1">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">
          © {new Date().getFullYear()} Atelier Lumi Nails. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
