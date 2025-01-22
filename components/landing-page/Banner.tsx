import Image from "next/image";
import React from "react";
import { Wrapper } from "../Wrapper";
import { cn } from "@/lib/utils";

export const Banner = () => {
  const bannerImages = [
    "https://www.fiestroevents.com/uploads/20/12/5fe2d076191052312201608700022.png",
    "https://www.fiestroevents.com/uploads/20/12/5fe1cf26a8bdf2212201608634150.png",
    "https://www.fiestroevents.com/uploads/20/12/5fe1cf20d8efe2212201608634144.png",
    "https://www.fiestroevents.com/uploads/20/12/5fe1cf1be33fb2212201608634139.png",
    "https://www.fiestroevents.com/uploads/20/12/5fe1cf0f770982212201608634127.png",
  ];
  return (
    <div className="my-8 bg-foreground/5 p-4">
      <Wrapper className="flex items-center justify-between gap-4">
        {bannerImages.map((img, indx) => (
          <div
            key={indx}
            className={cn(
              "flex items-center justify-center",
              // Hide everything after index 1 (first 2 items) on mobile
              indx > 1 ? "hidden sm:block" : "",
              // Hide 4th item and beyond between sm and md breakpoints
              indx > 2 ? "sm:hidden md:block" : "",
            )}
          >
            <Image src={img} alt="100" height={50} width={300} />
          </div>
        ))}
      </Wrapper>
    </div>
  );
};
