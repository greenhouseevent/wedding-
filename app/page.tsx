import { Hero } from "@/components/landing-page/Hero";
import { Services as ServiceComp } from "@/components/landing-page/Services";
import { Trending } from "@/components/landing-page/Trending";
import { WeddingGallery as WeddingGalleryComp } from "@/components/landing-page/WeddingGallery";
import { WeddingTrends as WeddingTrendsComp } from "@/components/landing-page/WeddingTrends";
import { WeddingTypes as WeddingTypesComp } from "@/components/landing-page/WeddingTypes";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import prisma from "@/lib/prisma";
import { Wrapper } from "@/components/Wrapper";

export const dynamic = "force-dynamic";

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
      <Wrapper className="my-6 flex items-center justify-center px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28886.84402132794!2d75.83333663084608!3d25.17435647441214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85bfdf3080a1%3A0x27ef019259d3f177!2sGreen%20House%20Event%20-%20Best%20Wedding%20Planner%20In%20Kota!5e0!3m2!1sen!2sin!4v1738318281078!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </Wrapper>
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
