import Image from "next/image";
import React from "react";
import { Wrapper } from "./Wrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const ServicesCard = () => {
  const services = [
    {
      heading: "Venues",
      description: "Hotel , Banquet Hall , Garden..",
      imageUrl:
        "https://www.fiestroevents.com/uploads/2023-01-11-63beb30bbec6f.png",
    },
    {
      heading: "Decoration",
      description: "Tents, Flower , Lights , Candles...",
      imageUrl:
        "https://www.fiestroevents.com/uploads/2024-04-05-660fd83e8cd90.png",
    },
    {
      heading: "Hospitality",
      description: "Guest RSVP, Guest ..",
      imageUrl:
        "https://www.fiestroevents.com/uploads/2023-01-11-63beb5626db0c.png",
    },
    {
      heading: "Conference",
      description: "Venues, Designing..",
      imageUrl:
        "https://www.fiestroevents.com/uploads/2023-01-11-63beb56fbf9a2.png",
    },
    {
      heading: "Logistic",
      description: "Luxury Buses, Car, Transport..",
      imageUrl:
        "https://www.fiestroevents.com/uploads/2023-01-11-63beb57dac775.png",
    },
    {
      heading: "Entertainment",
      description: "Singer, Anchor , Dj , Comedian.",
      imageUrl:
        "https://www.fiestroevents.com/uploads/2023-01-11-63beb58580355.png",
    },
  ];

  return (
    <div>
      <Wrapper className="mt-8 grid max-w-[70rem] gap-4 sm:grid-cols-3">
        {services.map((service, indx) => (
          <div key={indx} className="relative h-40 w-full">
            <div className="absolute top-0 z-20 flex h-full max-w-[50%] flex-col justify-center pl-4 text-white">
              <h4 className="font-bold text-foreground">{service.heading}</h4>

              <Button asChild className="mt-4">
                <Link
                  href={`https://api.whatsapp.com/send/?phone=9664291374&text=I am looking for ${service.description} service&type=phone_number&app_absent=0`}
                >
                  Book Now
                </Link>
              </Button>
            </div>

            <Image
              src={service.imageUrl}
              width={100}
              height={100}
              alt="service category"
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </Wrapper>
      <Wrapper className="flex items-center justify-center">
        <Button className="mt-6 h-12 font-extrabold uppercase">
          VIEW ALL CATEGORIES
        </Button>
      </Wrapper>
    </div>
  );
};

export default ServicesCard;
