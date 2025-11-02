import Image from "next/image";

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface EditorialGridProps {
  stories: Story[];
}

export function EditorialGrid({ stories }: EditorialGridProps) {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-title">Editorial Moodboard</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Stories from the Atelier
          </h2>
        </div>
        <p className="max-w-xl text-sm text-slate-500">
          Immerse in high-touch narratives and couture finishes captured by our resident photographers and
          tastemakers.
        </p>
      </div>
      <div className="mt-10 grid gap-7 md:grid-cols-3">
        {stories.map((story) => (
          <article
            key={story.id}
            className="group relative overflow-hidden rounded-[32px] bg-white shadow-card transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 90vw"
              />
            </div>
            <div className="space-y-3 p-7">
              <p className="text-xs uppercase tracking-[0.35em] text-blush-400">{`Collection No. ${story.id}`}</p>
              <h3 className="text-xl font-semibold text-slate-900">{story.title}</h3>
              <p className="text-sm text-slate-600">{story.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
