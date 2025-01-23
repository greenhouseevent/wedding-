"use client";

import React, { useState } from "react";
import { Wrapper } from "./Wrapper";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  const [number, setNumber] = useState<null | string>(null);

  async function onSubmit() {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: number }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Your message was sent successfully!");
      } else {
        alert(
          data.message || "Failed to send the message. Please try again later.",
        );
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="mt-4">
      <Wrapper className="mb-8 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:mb-0 md:grid-cols-3 md:gap-4">
        <div className="flex flex-col items-center justify-start md:py-8">
          <Image
            src={
              "https://www.fiestroevents.com/uploads/2021-01-27-60114a84c0596.png"
            }
            width={170}
            height={170}
            alt="logo"
          />
          <div className="mt-8 space-y-4 text-center text-sm text-muted-foreground/80">
            <p>Terms & conditions | Real Wedding | Gallery</p>
            <p>Wedding Services | Blog | About | Sitemap</p>
            <p>Testimonials | Wedding Hotels</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:py-8 md:shadow-[rgba(50,_50,_105,_0.15)_0px_4px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <h3 className="flex gap-0 text-2xl text-primary/95">
            <span className="relative">
              Fiestro F
              <span className="absolute -bottom-2 block h-[1px] w-full bg-primary"></span>
            </span>
            avourite
          </h3>
          <div className="mt-10 space-y-2 text-sm text-muted-foreground/85">
            <ul className="list-disc space-y-2">
              <li>Wedding Planner in Udaipur</li>
              <li>Wedding Planner in Kota</li>
              <li>Wedding Planner in Jodhpur</li>
              <li>Wedding Planner in Jaisalmer</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2 sm:col-span-2 sm:flex-row md:col-span-1 md:flex-col md:gap-6 md:py-8">
          <Image
            src={
              "https://www.fiestroevents.com/uploads/21/01/5ff54a435ee4d0601211609910851.png"
            }
            width={60}
            height={60}
            alt="footer image"
            className="mb-4 sm:mb-0"
          />
          <div className="flex w-full items-center justify-center gap-4 md:flex-col lg:flex-row">
            <div className="col-span-3 w-full">
              <Input
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Enter your phone number"
                onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              />
            </div>
            <Button
              className="mr-auto font-semibold uppercase"
              onClick={() => onSubmit()}
            >
              SUBSCRIBE
            </Button>
          </div>
          <div className="mr-auto flex justify-start gap-2 text-xl">
            <FaFacebookF className="text-blue-600" />
            <FaXTwitter className="text-blue-600" />
            <FaInstagram className="text-blue-600" />
            <FaYoutube className="text-red-600" />
            <FaLinkedin className="text-blue-600" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
