import Image from "next/image";
import React from "react";
import { Wrapper } from "../Wrapper";
import ServicesCard from "../ServicesCard";

export const Services = () => {
  return (
    <div className="relative mt-4 h-full w-full" id="services">
      <Wrapper className="p-4">
        <div className="font-medium text-muted-foreground">
          <p className="py-4 text-center text-4xl font-semibold uppercase">
            BEST WEDDING PLANNER IN JAIPUR
          </p>
          <p className="my-6 sm:text-center">
            Looking for the best wedding planner in Kota and India? Then look no
            more. Green House Events is one of the top 10 wedding planner in
            India that allows you to plan your weddings with excitement and
            ease. We provide end-to-end event management solutions from venues
            to decoration and organizing guest lists. Our team of expert wedding
            planners in Kota will help you enjoy the event and let all the
            workload be on us. Our motto is to make your wedding day a time you
            can enjoy without worrying about preparations. We have the most
            reasonable Wedding planner cost for Kota wedding.{" "}
          </p>

          <p className="sm:text-center">
            We have planned destination weddings in over 160+ wedding venues in
            India and internationally. Our dedication to work helped us to gain
            the reputation of being the best destination wedding planner in
            Kota, India. We take care of all your wishes and the comfort of your
            family and friends so that you can have the best time of your life.{" "}
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
            <span className="font-semibold text-muted-foreground">Our</span>{" "}
            <span className="mt-[2px] text-xl font-medium text-primary/90">
              Services
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
        <div>
          <ServicesCard />
        </div>
      </Wrapper>
      <div className="absolute top-0 -z-10 h-full w-full">
        <Image
          src="https://www.fiestroevents.com/uploads/20/12/23122016087022255fe2d91195669.jpg"
          width={100}
          height={100}
          alt="services-bg"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
