import React from "react";
import Image from "next/image";
import { Wrapper } from "../Wrapper";
import { Button } from "../ui/button";

export const WeddingGallery = () => {
  const images = [
    "https://www.fiestroevents.com/uploads/2023-05-16-64636e5290e89.jpg",
    "https://www.fiestroevents.com/uploads/2024-05-13-6641ecccb1873.png",
    "https://www.fiestroevents.com/uploads/2023-06-02-6479b2499c2d9.png",
    "https://www.fiestroevents.com/uploads/2024-05-13-6641ecd8a2307.png",
  ];
  return (
    <div>
      <Wrapper className="p-4">
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
            <span className="font-medium text-muted-foreground">Wedding</span>{" "}
            <span className="mt-[2px] text-xl font-medium text-primary/90">
              Gallery
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
        <p className="mx-auto mb-8 max-w-4xl text-center">
          As one of the best wedding planner company in India, we know weddings
          are all about memories. We understand this and make the magic happen
          for you and this is why we are the top wedding organizer in India. We
          have some magic moments from the weddings that we have arranged for
          our happy couples. For us it is not only your special day, ours too.
          Have a look at the wedding gallery and know why we are the best
          wedding decorators in Kota. We have various themes to decorate your
          wedding functions.
        </p>
        <div className="grid grid-rows-2 gap-2 md:grid-cols-12">
          <div className="md:col-span-5 md:row-span-2">
            <Image
              src={images[0]}
              width={100}
              height={100}
              alt="img"
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <div className="grid grid-rows-2 gap-2 md:col-span-7 md:row-span-2 md:grid-cols-2">
            <div className="col-span-2">
              <Image
                src={images[1]}
                width={100}
                height={100}
                alt="img"
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="col-span-1">
              <Image
                src={images[2]}
                width={100}
                height={100}
                alt="img"
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="col-span-1">
              <Image
                src={images[3]}
                width={100}
                height={100}
                alt="img"
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="my-4 flex items-center justify-center">
          <Button className="rounded-none font-extrabold uppercase">
            VIEW ALL
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};
