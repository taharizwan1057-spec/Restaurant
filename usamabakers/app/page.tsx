import { Hero } from "@/components/sections/Hero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { FeaturedDeals } from "@/components/sections/FeaturedDeals";
import { AboutStory } from "@/components/sections/AboutStory";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedDeals />
      <AboutStory />
      <Testimonials />
      <ContactSection />
    </>
  );
}
