import { Hero } from "@/components/landing-page/Hero";
import { Services } from "@/components/landing-page/Services";
import { Trending } from "@/components/landing-page/Trending";
import { WeddingGallery } from "@/components/landing-page/WeddingGallery";
import { WeddingTrends } from "@/components/landing-page/WeddingTrends";
import { WeddingTypes } from "@/components/landing-page/WeddingTypes";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Trending />
      <WeddingTypes />
      <WeddingGallery />
      <WeddingTrends />
    </div>
  );
}
