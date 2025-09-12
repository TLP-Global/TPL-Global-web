
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

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
      <header className="stikcy  py-4 bg-white top-0 left-0 right-0 z-50 ">
        <div className="section-container max-w-7xl mx-auto ">
          <div className="flex h-16 items-center justify-between px-4 md:px-0 lg:px-0">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="text-xl font-bold">
                <img src="/logo.png" alt="TPL Global Logo" className="w-40" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Button className="bg-gradient-to-r from-blue-950 to-blue-800">
                <Phone className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                  <Menu className="h-8 w-8 md:hidden" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-4 mt-8 px-4 pt-12">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary p-4">
        <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-primary font-semibold">
          <Phone className="mr-2 h-4 w-4" />
          Book Consultation
        </Button>
      </div>
      </header>

  );
};

export default Navbar;
