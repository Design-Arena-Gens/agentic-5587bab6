"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import type { StaticImageData } from "next/image";

interface Category {
  id: string;
  name: string;
  image: string | StaticImageData;
}

interface CategoryCarouselProps {
  items: Category[];
}

export function CategoryCarousel({ items }: CategoryCarouselProps) {
  return (
    <section className="mx-auto mt-12 max-w-6xl px-6">
      <div className="flex items-center justify-between pb-4">
        <div>
          <p className="section-title">Shop by Aesthetic</p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Curated manicure universes for every mood
          </h2>
        </div>
        <a
          href="#"
          className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-blush-500 hover:text-blush-600 md:inline-flex"
        >
          View all
        </a>
      </div>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2.1, spaceBetween: 18 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 }
        }}
        modules={[Autoplay, FreeMode]}
        freeMode
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="!pb-6"
      >
        {items.map((category) => (
          <SwiperSlide key={category.id}>
            <article className="group relative overflow-hidden rounded-3xl bg-white shadow-card">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Explore collection
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
