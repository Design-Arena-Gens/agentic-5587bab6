import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

interface BlogShowcaseProps {
  posts: BlogPost[];
}

export function BlogShowcase({ posts }: BlogShowcaseProps) {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-title">The Journal</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Stories steeped in modern ritual
          </h2>
        </div>
        <a
          href="#"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-blush-500 hover:text-blush-600"
        >
          Explore journal
        </a>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-card">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
              />
            </div>
            <div className="flex h-full flex-col justify-between space-y-4 p-7">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{post.date}</p>
                <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
              </div>
              <a
                href="#"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-blush-500 hover:text-blush-600"
              >
                Continue reading
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
