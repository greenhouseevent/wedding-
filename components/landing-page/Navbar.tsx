import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-background px-4">
      <Wrapper className="flex items-center justify-between gap-4">
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
            <SheetContent className="p-0" side={"left"}>
              <SheetHeader>
                <SheetTitle className="flex flex-col items-start justify-center p-4">
                  <Link href={"/"} className="flex items-start justify-start">
                    <Image
                      src={"/assets/logo.png"}
                      width={170}
                      height={170}
                      alt="logo"
                      className="aspect-square h-20 w-20"
                    />
                  </Link>
                </SheetTitle>
                <div className="px-4 pb-4">
                  <ul>
                    <li>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-none">
                          <Link
                            href={"/#services"}
                            className="flex h-9 items-center justify-start border-b px-4 font-bold text-primary hover:bg-gray-200"
                          >
                            Services
                          </Link>
                        </AccordionItem>

                        <AccordionItem value="item-1" className="border-none">
                          <Link
                            href={"/about-us"}
                            className="flex h-9 items-center justify-start border-b px-4 font-bold text-primary hover:bg-gray-200"
                          >
                            <SheetTrigger>About us</SheetTrigger>
                          </Link>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-none">
                          <AccordionTrigger className="h-10 border-b px-4 font-bold text-primary hover:bg-gray-200 hover:no-underline">
                            Venues in India
                          </AccordionTrigger>
                          <AccordionContent className="mt-0 space-y-2 text-start font-bold">
                            <Link
                              href={"/#venues"}
                              className="flex items-center justify-start px-4 py-2 hover:bg-yellow-100"
                            >
                              Hotels & Resort
                            </Link>
                            <Link
                              href={"/#venues"}
                              className="flex items-center justify-start px-4 py-2 hover:bg-yellow-100"
                            >
                              Beaches & Park
                            </Link>
                            <Link
                              href={"/#venues"}
                              className="flex items-center justify-start px-4 py-2 hover:bg-yellow-100"
                            >
                              Heritage Venues
                            </Link>
                            <Link
                              href={"/#venues"}
                              className="flex items-center justify-start px-4 py-2 hover:bg-yellow-100"
                            >
                              Palaces & Fort
                            </Link>
                            <Link
                              href={"/#venues"}
                              className="flex items-center justify-start px-4 py-2 hover:bg-yellow-100"
                            >
                              Gardens & Farm
                            </Link>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-none">
                          <Link
                            href={"/gallery"}
                            className="flex h-10 items-center justify-start border-b px-4 font-bold text-primary hover:bg-gray-200"
                          >
                            <SheetTrigger className="flex h-full w-full items-center justify-start">
                              Gallery
                            </SheetTrigger>
                          </Link>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-none">
                          <Link
                            href={"/contact"}
                            className="flex h-10 items-center justify-start border-b px-4 font-bold text-primary hover:bg-gray-200"
                          >
                            <SheetTrigger className="flex h-full w-full items-center justify-start">
                              Contact Us
                            </SheetTrigger>
                          </Link>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  </ul>
                  <div className="px-4">
                    <Button asChild className="mt-8 w-full">
                      <Link
                        href={`https://api.whatsapp.com/send/?phone=9664291374&text=Kindly%20give%20me%20a%20callback&type=phone_number&app_absent=0`}
                        className="h-full w-full"
                        target="_blank"
                      >
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div>
          <Link href={"/"}>
            <Image
              src={"/assets/logo.png"}
              width={170}
              height={170}
              alt="logo"
              className="h-20 w-20"
            />
          </Link>
        </div>
        <Link
          href={`https://api.whatsapp.com/send/?phone=9664291374&text=Kindly%20give%20me%20a%20callback&type=phone_number&app_absent=0`}
          className="flex items-center justify-center hover:cursor-pointer md:hidden"
          target="_blank"
        >
          <FaPhoneAlt className="text-primary" size={22} />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-2 text-primary">
            <li>
              <NavigationMenu className="text-nowrap">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/#services" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Services
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
                    <Link href="/about-us" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        About Us
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
                    <NavigationMenuTrigger className="text-primary hover:text-primary">
                      Venues In India
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul>
                        <li>
                          <Link
                            href="/#venues"
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
                          <Link href="/#venues" legacyBehavior passHref>
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
                          <Link href="/#venues" legacyBehavior passHref>
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
                          <Link href="/#venues" legacyBehavior passHref>
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
                          <Link href="/#venues" legacyBehavior passHref>
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
          <Button asChild>
            <Link
              href={`https://api.whatsapp.com/send/?phone=9664291374&text=Kindly%20give%20me%20a%20callback&type=phone_number&app_absent=0`}
              className="h-full w-full"
              target="_blank"
            >
              Book Now
            </Link>
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};
