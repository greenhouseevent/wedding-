import { Wrapper } from "../Wrapper";
import Image from "next/image";

export const WeddingTrends = ({ photos }) => {
  console.log(photos, "from wedding trends");

  let imgUrl = [];
  photos.forEach((element) => {
    imgUrl.push(element.imageUrl);
  });

  const images = [...imgUrl];
  return (
    <Wrapper className="px-4">
      <div className="my-6 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-2xl font-bold text-primary md:flex-row md:gap-2">
          <span className="font-medium text-muted-foreground">Read About</span>{" "}
          <span className="mt-[2px] text-xl font-medium text-primary/90">
            Wedding Trends
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
        If you are wondering what kind of wedding you must have then we have
        also covered that for you. Being among the top 5 wedding planners in
        Kota, we suggest you current trends in weddings, to help you to decide
        what suits you better. So, if you are a fan of uniqueness and want
        something different for your big day then you must read our latest
        vlogs. So, dig in because we are happy to help.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative overflow-hidden">
          <Image
            src={images[0]}
            alt="image"
            width={100}
            height={100}
            className="object-fit aspect-video h-full w-full transition-transform duration-300 hover:scale-125"
            unoptimized
          />
        </div>
        <div className="relative row-span-2 overflow-hidden">
          <Image
            src={images[1]}
            alt="image"
            width={100}
            height={100}
            className="object-fit aspect-video h-full w-full transition-transform duration-300 hover:scale-125"
            unoptimized
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={images[2]}
            alt="image"
            width={100}
            height={100}
            className="object-fit aspect-video h-full w-full transition-transform duration-300 hover:scale-125"
            unoptimized
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={images[3]}
            alt="image"
            width={100}
            height={100}
            className="object-fit aspect-video h-full w-full transition-transform duration-300 hover:scale-125"
            unoptimized
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={images[4]}
            alt="image"
            width={100}
            height={100}
            className="object-fit aspect-video h-full w-full transition-transform duration-300 hover:scale-125"
            unoptimized
          />
        </div>
      </div>
    </Wrapper>
  );
};
