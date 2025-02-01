import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GalleryPage = () => {
  const galleries = [
    {
      img: "https://www.fiestroevents.com/script/public/galleryimage/image-1726734911.png",
      event: "MEHNDI",
    },
    {
      img: "https://www.fiestroevents.com/script/public/galleryimage/image-1726734899.png",
      event: "SANGEET",
    },
    {
      img: "https://www.fiestroevents.com/script/public/galleryimage/image-1726734881.png",
      event: "WEDDING",
    },
    {
      img: "https://www.fiestroevents.com/script/public/galleryimage/image-1726734864.png",
      event: "BRUNCH",
    },
    {
      img: "https://www.fiestroevents.com/script/public/galleryimage/image-1726731123.png",
      event: "ALL",
    },
  ];

  return (
    <div>
      <Wrapper>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-x-2 text-2xl text-muted-foreground">
            <span className="text-muted-foreground">Our</span>
            <span className="text-xl text-primary">&</span>
            <span className="text-muted-foreground">Album</span>{" "}
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

        <div className="my-10 grid gap-8 p-4 sm:grid-cols-2 md:grid-cols-3">
          {galleries.map((gallery, indx) => (
            <Link
              href={`/gallery/${gallery.event.toLocaleLowerCase()}`}
              className="group relative overflow-hidden rounded-xl hover:cursor-pointer"
              key={indx}
            >
              <Image
                src={gallery.img}
                alt={gallery.event}
                width={400}
                height={400}
                className="transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute top-0 flex h-full w-full items-center justify-center bg-black/50 text-2xl uppercase text-white">
                <p>{gallery.event}</p>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default GalleryPage;
