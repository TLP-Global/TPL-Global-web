import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_bottom,black,rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url('/footer.jpg')] bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto pt-32 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Service categories */}
          <div>
            <div className="text-orange-600 text-sm font-medium mb-4 tracking-wider uppercase">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-8 leading-tight">
              Get a Free Estimate or
              <br />
              Schedule an Appointment
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Notarization Packages
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Proin eget tortor risus. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Mobile Service
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Proin eget tortor risus. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Certifications
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Proin eget tortor risus. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  I-Documents
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Proin eget tortor risus. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  className="w-full h-12 border-gray-200 bg-gray-50"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-12 border-gray-200 bg-gray-50"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Message"
                  className="w-full min-h-[120px] border-gray-200 bg-gray-50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-orange-600 hover:bg-orange-600/90 text-white font-semibold tracking-wider uppercase"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Certified TPL Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
