import { Hero } from "@/components/landing-page/Hero";
import { Services as ServiceComp } from "@/components/landing-page/Services";
import { Trending } from "@/components/landing-page/Trending";
import { WeddingGallery as WeddingGalleryComp } from "@/components/landing-page/WeddingGallery";
import { WeddingTrends as WeddingTrendsComp } from "@/components/landing-page/WeddingTrends";
import { WeddingTypes as WeddingTypesComp } from "@/components/landing-page/WeddingTypes";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import prisma from "@/lib/prisma";

export default async function Home() {
  const [Services, WeddingTypes, WeddingGallery, WeddingTrends] = [
    await prisma.Services.findMany({}),
    await prisma.WeddingTypes.findMany({}),
    await prisma.WeddingGallery.findMany({}),
    await prisma.WeddingTrends.findMany({}),
  ];
  return (
    <div className="relative min-h-screen">
      <Hero />
      <ServiceComp photos={Services} />
      <Trending />
      <WeddingTypesComp photos={WeddingTypes} />
      <WeddingGalleryComp photos={WeddingGallery} />
      <WeddingTrendsComp photos={WeddingTrends} />
      <Link
        href={`https://api.whatsapp.com/send/?phone=9664291374&text=Kindly%20give%20me%20a%20callback&type=phone_number&app_absent=0`}
        target="_blank"
        className="fixed bottom-4 right-4 flex aspect-square w-16 items-center justify-center rounded-full border-none bg-green-500 text-white sm:bottom-10 sm:right-10"
      >
        <BsWhatsapp size={32} />
      </Link>
    </div>
  );
}
