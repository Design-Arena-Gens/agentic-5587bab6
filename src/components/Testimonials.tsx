"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="section-title">Collectors Speak</p>
        <h2 className="max-w-2xl text-3xl font-semibold text-slate-900 md:text-4xl">
          Revered by editors, creatives, and tastemakers worldwide
        </h2>
      </div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        className="mt-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <figure className="mx-auto max-w-3xl space-y-6 rounded-[32px] bg-white/80 p-10 text-center shadow-soft backdrop-blur">
              <p className="text-lg leading-relaxed text-slate-600">
                “{testimonial.content}”
              </p>
              <figcaption className="flex flex-col items-center gap-1 text-sm uppercase tracking-[0.35em] text-slate-500">
                <span className="font-semibold text-slate-900">{testimonial.name}</span>
                <span>{testimonial.title}</span>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
