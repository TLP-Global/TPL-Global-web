import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 text-navy-foreground">
        <a href="#" className="text-xl font-bold">
          TPL Global
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a
            href="#how-it-works"
            className="hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        <Button
          variant="default"
              className="bg-orange-600 text-white hover:bg-orange-600/90 font-bold cursor-pointer px-4 py-3"
        >
          Call Us
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
