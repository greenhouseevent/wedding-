"use client";

import React from "react";
import { Wrapper } from "../Wrapper";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Hero = () => {
  const images = [
    "https://www.fiestroevents.com/uploads/2023-06-03-647ac6f709839.png",
  ];
  const icons = [
    {
      iconUrl:
        "https://www.fiestroevents.com/uploads/2022-10-29-635cc5436ab1c.webp",
      text: "Manage your vendors ",
    },
    {
      iconUrl:
        "https://www.fiestroevents.com/uploads/2022-10-29-635cc57a4883a.webp",
      text: "Organise your guest List",
    },
    {
      iconUrl:
        "https://www.fiestroevents.com/uploads/2022-10-29-635cc5a103dad.webp",
      text: "Stay on track with your checklist",
    },
    {
      iconUrl:
        "https://www.fiestroevents.com/uploads/2022-10-29-635cc5cfba4df.webp",
      text: "Manage your Budget",
    },
    {
      iconUrl:
        "https://www.fiestroevents.com/uploads/2022-10-29-635cc5f2b7f03.webp",
      text: "Decor your Venues",
    },
    {
      iconUrl:
        "https://www.fiestroevents.com/uploads/2022-10-29-635cc61a0c170.webp",
      text: "Artist for Events ",
    },
  ];

  return (
    <div className="my-4">
      <Wrapper className="relative">
        <div className="-z-10 w-full">
          {images.map((img, i) => (
            <Image
              src={img}
              key={i}
              width={500}
              height={500}
              className="w-full"
              alt="hero image"
            />
          ))}
        </div>
        <div className="absolute top-0 grid h-full w-full grid-cols-6 grid-rows-4 px-4">
          <div className="col-span-3 row-span-3 flex h-full w-full flex-col items-center justify-center gap-2 self-end">
            <div className="text-sm md:text-lg">
              <p className="font-bold">
                Destination with stress free mind WE ARE YOUR DESIGNERS
              </p>
              <Button
                size={"lg"}
                className="mt-4 hidden h-11 font-extrabold md:block md:h-16 md:text-xl"
              >
                Explore More
              </Button>
              <Button className="mb-10 mt-2 w-28 font-bold md:hidden">
                Explore More
              </Button>
            </div>
          </div>
        </div>

        <Carousel
          className="m-4"
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {icons.map((icon, indx) => (
              <CarouselItem
                className="flex basis-1/2 items-center justify-center gap-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                key={indx}
              >
                <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                  <Image
                    src={icon.iconUrl}
                    width={50}
                    height={50}
                    alt="icon"
                    className="hidden sm:block"
                  />
                  <Image
                    src={icon.iconUrl}
                    width={40}
                    height={40}
                    alt="icon"
                    className="sm:hidden"
                  />
                  <p className="text-center text-xs text-muted-foreground sm:text-sm">
                    {icon.text}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Wrapper>
    </div>
  );
};
