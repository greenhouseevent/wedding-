import Image from "next/image";
import { Wrapper } from "../Wrapper";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const WeddingGallery = ({ photos }) => {
  let img = [];

  photos.forEach((element) => {
    img.push(element.imageUrl);
  });

  const images = [...img];

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
              className="object-fit h-full max-h-[36rem] w-full overflow-hidden"
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
                className="max-h-68 object-fit h-full w-full"
                unoptimized
              />
            </div>
            <div className="col-span-1">
              <Image
                src={images[2]}
                width={100}
                height={100}
                alt="img"
                className="object-fit h-full w-full"
                unoptimized
              />
            </div>
            <div className="col-span-1">
              <Image
                src={images[3]}
                width={100}
                height={100}
                alt="img"
                className="object-fit h-full w-full"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="my-4 flex items-center justify-center">
          <Link
            href={"/gallery"}
            className={cn(
              "rounded-none font-extrabold uppercase",
              buttonVariants(),
            )}
          >
            VIEW ALL
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
