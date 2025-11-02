"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-title">Bestsellers</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Coveted icons from the Atelier
          </h2>
        </div>
        <a
          href="#"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-blush-500 hover:text-blush-600"
        >
          Shop signature pieces
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1.15}
        spaceBetween={18}
        breakpoints={{
          640: { slidesPerView: 1.8, spaceBetween: 20 },
          900: { slidesPerView: 2.5, spaceBetween: 24 },
          1200: { slidesPerView: 3.2, spaceBetween: 28 }
        }}
        navigation
        pagination={{ clickable: true }}
        className="!pb-14"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[32px] bg-white shadow-card">
              <div className="relative aspect-square w-full overflow-hidden bg-cream-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1200px) 25vw, (min-width: 768px) 40vw, 90vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-4 p-7">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
                  <p className="text-sm text-slate-500">Limited run • 250 bottles</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold tracking-[0.28em] text-slate-900">{product.price}</p>
                  <button className="rounded-full bg-slate-900 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-700">
                    Add to bag
                  </button>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
