import { FaInstagram, FaMedium, FaReddit, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '/about-us' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="md:bg-black/50 bg-slate-800 text-background py-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="text-xl font-bold">
                <img src="/logo.png" alt="TPL Global Logo" className="w-40" />
              </a>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Providing clear, effective U.S. immigration strategies with practical advice 
              and careful execution for individuals and families worldwide.
            </p>
            <div className="text-background/70 text-sm">
              <p>Mr. Tejas G. Patel, Esq.</p>
              <p>11 Years Experience Since 2014</p>
              <p>TPL Global - Founded November 2020</p>
            </div>
            <div className="my-4 flex gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/company/t-p-l-global-llc/"
                className=" hover:text-zapier-blue"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tpl_global/"
                className=" hover:text-zapier-blue"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@tejaspatel-tplglobal"
                className=" hover:text-zapier-blue"
                aria-label="Youtube"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://medium.com/@tplglobal_usimmigration"
                className=" hover:text-zapier-blue"
                aria-label="Medium"
              >
                <FaMedium size={20} />
              </a>
              <a
                href="https://www.reddit.com/r/USimmigrationindia/"
                className=" hover:text-zapier-blue"
                aria-label="Reddit"
              >
                <FaReddit size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-background/80 text-sm">
              <p>Professional consultation available</p>
              <p>Remote services worldwide</p>
              <p>Initial consultation scheduling</p>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2025 TPL Global Immigration Law. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-background/60 text-sm">
              <a href="/faqs" className="hover:text-accent transition-colors">
               FAQs 
              </a>
              <span>•</span>
              <a href="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms-of-use" className="hover:text-accent transition-colors">
                Terms of Use
              </a>
              <span>•</span>
              <span>Licensed to practice immigration law</span>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-6 p-4 bg-background/10 rounded-lg">
            <p className="text-background/70 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This site provides general information only and does not constitute legal advice. 
              Results depend on your individual facts and circumstances. Prior results do not guarantee a similar outcome. 
              An attorney-client relationship is not formed by visiting this website or contacting our office until a 
              written agreement is signed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
