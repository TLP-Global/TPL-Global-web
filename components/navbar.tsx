"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "About", href: "/about-us" },
    { name: "Resources", href: "#resources" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute py-4 bg-white top-0 left-0 right-0 z-50 ">
      <div className="section-container max-w-7xl mx-auto ">
        <div className="flex h-16 items-center justify-between px-4 md:px-0 lg:px-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="text-xl font-bold">
              <img src="/logo.png" alt="T.P.L. Global, LLC Logo" className="w-40" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="hover:text-primary transition-colors px-4 py-2"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary transition-colors">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 w-[800px] bg-background  rounded-md ">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-3">
                          INDIVIDUALS
                        </h4>
                        <div className="space-y-2">
                          <NavigationMenuLink
                            href="/services/individuals#visitor-visas"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            Visitor Visas (B-1/B-2)
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/services/individuals#green-cards"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            Green Cards (Overview)
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/services/individuals#us-citizenship"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            U.S. Citizenship & Naturalization
                          </NavigationMenuLink>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-3">
                          FAMILIES
                        </h4>
                        <div className="space-y-2">
                          <NavigationMenuLink
                            href="/services/families#spouse"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            Spouse & Fiancé(e) (IR/CR-1, K-1, K-3)
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/services/families#parents"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            Parents, Children & Siblings
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/services/families#conditions"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            Remove Conditions (I-751)
                          </NavigationMenuLink>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-3">
                          HUMANITARIAN
                        </h4>
                        <div className="space-y-2">
                          <NavigationMenuLink
                            href="/services/humanitarian#asylum"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            Asylum
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/services/humanitarian#u-visa"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            U Visa (Victims of Crime)
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/services/humanitarian#t-visa"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            T Visa (Trafficking)
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/services/humanitarian#vawa"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            VAWA (Self-Petition)
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/services/humanitarian#sij"
                            className="block py-2 text-sm hover:text-primary transition-colors"
                          >
                            SIJ
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary transition-colors">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] bg-background rounded-md ">
                    <NavigationMenuLink
                      href="#"
                      className="block py-2 hover:text-primary transition-colors"
                    >
                      Start Here: Your U.S. Immigration Options
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/processing-times"
                      className="block py-2 hover:text-primary transition-colors"
                    >
                      Processing Times & Priority Dates
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/forms"
                      className="block py-2 hover:text-primary transition-colors"
                    >
                      Forms & Document Templates
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="https://blog.tplglobal.net/"
                      className="block py-2 hover:text-primary transition-colors"
                    >
                      Blog / Insights
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about-us"
                  className="hover:text-primary transition-colors px-4 py-2"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="hover:text-primary transition-colors px-4 py-2"
                >
                  Contact us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-navy-foreground"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col p-4 space-y-4 py-16">
                <a
                  href="/"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Home
                </a>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Services</h3>
                  <div className="pl-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">
                        <a
                          href="/services/individuals"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          INDIVIDUALS
                        </a>
                      </h4>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">
                        <a
                          href="/services/families"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          FAMILIES
                        </a>
                      </h4>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">
                        <a
                          href="/services/humanitarian"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          HUMANITARIAN
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Resources</h3>
                  <div className="pl-4 space-y-4">
                    <a
                      href="/processing-times"
                      className="font-medium block text-lg text-muted-foreground mb-2"
                    >
                      Processing Times
                    </a>
                    <a
                      href="/forms"
                      className="font-medium block text-lg text-muted-foreground mb-2"
                    >
                      Forms & Document Templates
                    </a>
                    <a
                      href="https://blog.tplglobal.net/"
                      className="font-medium block text-lg text-muted-foreground mb-2"
                    >
                      Blog / Insights
                    </a>
                  </div>
                </div>

                <a
                  href="/about-us"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            href="/consult"
            className="bg-gradient-to-r rounded-md from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
            >
              <Phone className="mr-2 h-5 w-5 hidden md:inline" />
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
