import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: Promise<{ event: string }> }) => {
  const param = await params;
  const eventType = param.event;

  const path = `/assets/images/gallery/${eventType}/`;

  const mehndi = [
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "7.JPG",
    "8.JPG",
    "9.JPG",
    "10.JPG",
    "11.JPG",
    "12.JPG",
  ];
  const sangeet = [
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "7.JPG",
    "8.JPG",
    "9.JPG",
    "10.JPG",
    "11.JPG",
    "12.JPG",
  ];
  const wedding = [
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "7.JPG",
    "8.JPG",
    "9.JPG",
    "10.JPG",
    "11.JPG",
    "12.JPG",
  ];
  const brunch = [
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "7.JPG",
    "8.JPG",
    "9.JPG",
    "10.JPG",
    "11.JPG",
    "12.JPG",
  ];
  const all = [
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "7.JPG",
    "8.JPG",
    "9.JPG",
    "10.JPG",
    "11.JPG",
    "12.JPG",
  ];

  const getArray = () => {
    switch (eventType) {
      case "mehndi":
        return mehndi;
      case "sangeet":
        return sangeet;
      case "wedding":
        return wedding;
      case "brunch":
        return brunch;
      case "all":
      default:
        return all;
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
              src={`${path}${img}`}
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
