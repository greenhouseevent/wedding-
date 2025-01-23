"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Wrapper } from "../Wrapper";
import { Button } from "../ui/button";

export const Trending = () => {
  const cities = [
    {
      imageUrl:
        "https://www.fiestroevents.com/script/public/treadingimage/treading-image-1718087875.jpg",
      city: "Udaipur",
      text: "26 Hotel Available",
    },
    {
      imageUrl:
        "https://www.fiestroevents.com/script/public/treadingimage/treading-image-1718087452.jpg",
      city: "Kota",
      text: "47 Hotel Available",
    },
    {
      imageUrl:
        "https://www.fiestroevents.com/script/public/treadingimage/treading-image-1718002810.jpg",
      city: "Chandigarh",
      text: "18 Hotel Available",
    },
    {
      imageUrl:
        "https://www.fiestroevents.com/script/public/treadingimage/treading-image-1718002024.jpg",
      city: "Jim Corbett",
      text: "50 Hotel Available",
    },
    {
      imageUrl:
        "https://www.fiestroevents.com/script/public/treadingimage/treading-image-1718001640.jpg",
      city: "Nainital",
      text: "23 Hotel Available",
    },
    {
      imageUrl:
        "https://www.fiestroevents.com/script/public/treadingimage/treading-image-1718001429.png",
      city: "Mussorrie",
      text: "15 Hotel Available",
    },
  ];
  return (
    <div id="venues">
      <Wrapper className="my-4 flex flex-col items-center justify-center bg-background p-4">
        <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
          <span className="font-medium text-muted-foreground">Trending</span>{" "}
          <span className="mt-[2px] text-xl font-medium text-primary/90">
            Venues
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
        <div className="my-8 hidden w-full grid-cols-3 justify-between gap-4 md:grid lg:gap-8">
          {cities.map((city, indx) => (
            <div
              className="flex w-full items-center justify-center gap-4"
              key={indx}
            >
              <div className="h-24 w-36 overflow-hidden hover:cursor-pointer">
                <Image
                  src={city.imageUrl}
                  width={100}
                  height={100}
                  alt={city.text}
                  className="h-full w-full transition-transform duration-500 hover:scale-125"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg font-medium">{city.city}</p>
                <p className="text-primary/90">{city.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Carousel
            className="m-4 md:hidden"
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {cities.map((city, indx) => (
                <CarouselItem
                  className="flex basis-1/2 items-center justify-center gap-0 overflow-hidden sm:basis-1/3 md:basis-1/4"
                  key={indx}
                >
                  <div className="relative flex aspect-square h-fit w-full items-center justify-center overflow-hidden">
                    <Image
                      src={city.imageUrl}
                      alt={city.text}
                      width={100}
                      height={100}
                      unoptimized
                      className="aspect-square w-full transition-transform duration-500 hover:scale-125"
                    />
                    <div className="absolute bottom-0 w-full bg-foreground/60 p-1 text-center text-background">
                      <p className="text-lg"> {city.city}</p>
                      <p className="text-background/80"> {city.text}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <Button className="rounded-none font-extrabold uppercase">
          VIEW ALL
        </Button>
      </Wrapper>
    </div>
  );
};
