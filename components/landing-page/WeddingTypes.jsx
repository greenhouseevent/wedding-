"use client";
import { Wrapper } from "../Wrapper";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const WeddingTypes = ({ photos }) => {
  const weddingImages = [
    ...photos,
    // {
    //   imageUrl:
    //     "https://www.fiestroevents.com/uploads/2023-05-17-6464bd356355d.webp",
    //   text: "Maharastrian Wedding",
    // },
    // {
    //   imageUrl:
    //     "https://www.fiestroevents.com/uploads/2023-05-16-646370c9781b6.jpg",
    //   text: "Punjabi Wedding",
    // },
    // {
    //   imageUrl:
    //     "https://www.fiestroevents.com/uploads/2022-10-29-635cc0b63a601.webp",
    //   text: "Arya Samaj Wedding",
    // },
    // {
    //   imageUrl:
    //     "https://www.fiestroevents.com/uploads/2023-05-16-646370fb6f74b.jpg",
    //   text: "Hindu Wedding",
    // },
  ];
  return (
    <div className="bg-muted-foreground/10 py-1">
      <Wrapper className="p-4">
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
            <span className="font-medium text-muted-foreground">Types of</span>{" "}
            <span className="mt-[2px] text-xl font-medium text-primary/90">
              Wedding
            </span>
          </div>
          <Image
            src={
              "https://www.fiestroevents.com/uploads/20/12/5fe2d8e9309502312201608702185.png"
            }
            width={100}
            height={100}
            alt="service categories"
          />
        </div>
        <div className="mx-auto max-w-4xl font-medium leading-loose tracking-wide text-muted-foreground sm:text-center">
          <p className="mb-4">
            As one of the best wedding planning companies in India, we do not
            only stick to the same patterns of getting people wed. We cover all
            main cultural, and religious rituals and ways of tying the knot in
            India. So, no matter whether you have a subtle aesthetic private
            wedding or a big fat wedding on your mind, we got it all covered
            with zero worries guaranteed.
          </p>
          <p>
            As a royal wedding planner in Kota, we do not just execute royal
            weddings in Rajasthan we incorporate all your wedding ideas, wishes,
            and rituals. So, no matter whether you belong to Marathi, Hindu,
            Christian, Sikh, Muslim, or any other community. We got you.
          </p>
        </div>
        <Carousel
          className="mb-4 mt-8"
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {weddingImages.map((imgs, indx) => (
              <CarouselItem
                className="flex items-center justify-center gap-0 overflow-hidden sm:basis-1/3 md:basis-1/4"
                key={indx}
              >
                <div className="relative flex aspect-square h-fit w-full items-center justify-center overflow-hidden">
                  <Image
                    src={imgs.imageUrl}
                    alt={imgs.text}
                    width={100}
                    height={100}
                    unoptimized
                    className="aspect-square w-full transition-transform duration-500 hover:scale-125"
                  />
                  <div className="absolute bottom-0 w-full bg-foreground/60 p-3 text-center text-background">
                    {imgs.text}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="my-4 flex items-center justify-center">
          <Link
            href={"/gallery"}
            className={cn(
              "mx-auto rounded-none font-extrabold uppercase",
              buttonVariants(),
            )}
          >
            VIEW ALL WEDDINGS
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
