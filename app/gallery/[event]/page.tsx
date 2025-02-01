import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import prisma from "@/lib/prisma";
import { Gallery } from "@prisma/client";

const Page = async ({ params }: { params: Promise<{ event: string }> }) => {
  const param = await params;
  const eventType = param.event;

  const allGalleryImgs: Gallery[] = await prisma.Gallery.findMany();
  console.log(allGalleryImgs);

  const getArray = () => {
    switch (eventType) {
      case "all":
        return allGalleryImgs;
      default:
        return allGalleryImgs.filter(
          (img) => img.galleryCategory.toLowerCase() === eventType,
        );
    }
  };

  return (
    <Wrapper className="mb-20 mt-10">
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-2 text-2xl text-muted-foreground">
          <span className="text-muted-foreground">Our</span>
          <span className="text-xl text-primary">&</span>
          <span className="text-muted-foreground">Album</span>
        </div>
        <Image
          src="https://www.fiestroevents.com/uploads/20/12/5fe2d8e9309502312201608702185.png"
          width={100}
          height={100}
          alt="service categories"
        />
      </div>
      <div className="my-10 grid gap-8 p-4 sm:grid-cols-2 md:grid-cols-3">
        {getArray().map((img, index) => (
          <div
            className="group relative overflow-hidden rounded-xl hover:cursor-pointer"
            key={index}
          >
            <Image
              src={img.imageUrl}
              width={400}
              height={300}
              alt={`Event photo ${index + 1}`}
              className="aspect-video w-full transition-transform duration-500 group-hover:scale-125"
              quality={100}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Page;
