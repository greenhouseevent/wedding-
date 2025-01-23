"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import validator from "validator";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  venue: z.string().min(2, {
    message: "Venue must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  phone: z
    .string()
    .max(10, { message: "Phone number can not be more than 10 digits." })
    .regex(/^\d{10}$/, {
      message: "Phone number must be exactly 10 digits.",
    })
    .refine(validator.isMobilePhone, {
      message: "Phone numbers must be a number.",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(100, {
      message: "Message must not be longer than 100 characters long.",
    }),
});

const Contact = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      venue: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Your message was sent successfully!");
        form.reset();
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
    <div className="p-4">
      <Wrapper className="my-6 flex flex-col items-center justify-center">
        <Image
          src={
            "https://www.fiestroevents.com/uploads/20/12/29122016092182905feab8f25eb4f.jpg"
          }
          width={400}
          height={500}
          alt="contact us"
        />
        <div className="md:text-center">
          <h3 className="text-center text-2xl uppercase">Get in Touch With</h3>
          <h5 className="my-1 text-center text-xl font-medium uppercase text-primary">
            Fiestro events
          </h5>
          <p className="font-medium text-foreground/60 md:text-lg">
            Fiestro Events is a team of wedding planners in Jaipur that makes
            wedding planning easy and fun. Be it an intimate wedding or a grand
            celebration, our team of event planners in Jaipur are experienced
            professionals who take care of everything from setup to teardown.
            For destination weddings in India or abroad, you can rely on us for
            the complete planning and execution. You can contact us today for
            destination weddings in Goa, Udaipur, Kerala, Jaipur, Chennai,
            Mussoorie, Dehradun, Mumbai, Agra, etc. However, if you are looking
            for a foreign wedding planner, you are at the right place. We help
            plan abroad weddings in exotic international locations like
            Thailand, Phuket, Bali, Greece, Paris, Dubai, Jakarta, Vietnam, etc.
            So, if you are looking for the best wedding destinations in Jaipur
            or anywhere else, fill out this form and our team will contact you
            soon.
          </p>
        </div>
        <div className="my-10 flex w-full justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:my-20">
          <div className="hidden w-[35%] lg:block">
            <Image
              src={
                "https://www.fiestroevents.com/uploads/20/12/29122016092210535feac3bdb4f96.jpg"
              }
              width={300}
              height={600}
              alt="wedding image"
              unoptimized
              className="h-full w-full"
            />
          </div>
          <div className="flex w-full flex-col gap-4 p-8 lg:w-[65%]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Nirmal" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="venue"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Venue</FormLabel>
                        <FormControl>
                          <Input placeholder="Designer Wedding" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="nirmal@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="9664291374" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a little bit about yourself"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
