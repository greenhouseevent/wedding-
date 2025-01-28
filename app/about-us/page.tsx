import React from "react";
import Image from "next/image";
import { Wrapper } from "@/components/Wrapper";

const Page = () => {
  return (
    <div className="p-4">
      <Wrapper className="my-6 flex flex-col items-center justify-center">
        <Image
          src={
            "https://www.fiestroevents.com/uploads/21/01/05012116098298705ff40dee8a4cc.jpg"
          }
          width={500}
          height={600}
          alt="contact us"
        />
        <div className="mt-4 md:text-center">
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
              <span className="font-semibold text-muted-foreground">About</span>{" "}
              <span className="mt-[2px] text-xl font-medium text-primary/90">
                Green House Events
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
          <h5 className="my-1 text-center text-sm font-medium text-primary sm:text-base">
            Green House Events was conceptualized as a trendsetter wedding
            planner and event management company in Kota by Mr. Nirmal
          </h5>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground md:mt-8">
            <p>
              Over the years since 2013, Green House Events has become a brand
              that makes your celebrations and events noticed, respected,
              trendsetter, and up to the expectations. During the journey so
              far, innovations to deliver the best values to our customers’
              investment has been our guiding force.
            </p>
            <p>
              Everyone at the Green House Events team is committed to justify
              the selection of Green House Events as a wedding planner, wedding
              decorator, destination wedding venue expert, honeymoon planner,
              event organizer, exhibition organizer, or MICE consultant etc in
              the best scalable terms..
            </p>
          </div>
        </div>

        <div className="my-4 sm:my-8">
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
              <span className="font-semibold text-muted-foreground">
                QUALITY
              </span>{" "}
              <span className="mt-[2px] text-xl font-medium text-primary/90">
                POLICY
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
          <p className="text-sm text-muted-foreground sm:text-center">
            We will follow the robust quality standards to ensure the best ROI
            for our customers. Any service provided by us will comply with local
            regulations. Creativity, innovation, uniqueness, personalized
            approach, value, and clients’ satisfaction will always be at the
            core of our quality policy for wedding planning, destination
            wedding, MICE consultancy, exhibition organization, or event
            management. .
          </p>
        </div>
        <div className="my-8 text-muted-foreground">
          <p className="font-serif font-semibold italic">
            Our fast expanding project portfolio, enriched with diversity,
            certifies our excellence wedding planning and event management. As a
            dependable, proficient, specialist, and experienced wedding and
            event management agency in Jaipur that ranks among the top wedding
            planners and event management agencies in India, Fiestro Events
            follows the best practices to keep you away from any hassle and
            management/coordination engagements.
          </p>
          <p className="mt-4 text-lg font-semibold italic sm:text-2xl">
            Hiring Fiestro Events in-itself is a celebration!
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
export default Page;
