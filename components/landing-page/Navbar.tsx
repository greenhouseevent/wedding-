import React from "react";
import { Wrapper } from "../Wrapper";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-background p-4">
      <Wrapper className="flex justify-between gap-4">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              className={cn(
                "flex items-center justify-center",
                buttonVariants({ size: "icon" }),
              )}
            >
              <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div>
          <Link href={"/"}>
            <Image
              src={
                "https://www.fiestroevents.com/uploads/2021-01-27-60114a84c0596.png"
              }
              width={170}
              height={170}
              alt="logo"
            />
          </Link>
        </div>
        <a
          href="tel:+8504920637"
          className="flex items-center justify-center hover:cursor-pointer md:hidden"
        >
          <FaPhoneAlt className="text-primary" size={22} />
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-2 text-primary">
            <li className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary hover:text-primary">
                      About us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul>
                        <li>
                          <Link
                            href="/about-us"
                            className="w-full"
                            legacyBehavior
                            passHref
                          >
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              About Us
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Team
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Testimonials
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Contact Us
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu className="text-nowrap">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary hover:text-primary">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul>
                        <li>
                          <Link
                            href="#services"
                            className="w-full"
                            legacyBehavior
                            passHref
                          >
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Wedding Services
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="#services" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Social Events
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu className="text-nowrap">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-primary hover:text-primary">
                      Venues In India
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul>
                        <li>
                          <Link
                            href="#venues"
                            className="w-full"
                            legacyBehavior
                            passHref
                          >
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Hotels & Resort
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="#venues" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Beaches & Park
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="#venues" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Heritage Venues
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="#venues" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Palaces & Fort
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link href="#venues" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "flex w-full justify-start text-start",
                              )}
                            >
                              Gardens & Farms
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu className="text-nowrap">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/gallery" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-primary hover:text-primary",
                        )}
                      >
                        Gallery
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu className="text-nowrap">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-primary hover:text-primary",
                        )}
                      >
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          </ul>
          <Button>Book Now</Button>
        </div>
      </Wrapper>
    </div>
  );
};
