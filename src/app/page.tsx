import { BlogShowcase } from "@/components/BlogShowcase";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { EditorialGrid } from "@/components/EditorialGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Testimonials } from "@/components/Testimonials";
import {
  blogPosts,
  categories,
  curatedStories,
  heroProducts,
  testimonials,
  trustBadges
} from "@/data/content";
import { TrustBadges } from "@/components/TrustBadges";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <CategoryCarousel items={categories} />
        <EditorialGrid stories={curatedStories} />
        <ProductCarousel products={heroProducts} />
        <TrustBadges badges={trustBadges} />
        <Testimonials testimonials={testimonials} />
        <BlogShowcase posts={blogPosts} />
      </main>
      <Footer />
    </div>
  );
}
