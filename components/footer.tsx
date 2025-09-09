import { Scale } from 'lucide-react';

const Footer = () => {
  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-blue-950 text-background py-20">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">TPL Global</span>
                <span className="text-sm text-background/70">Immigration Law</span>
              </div>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Providing clear, effective U.S. immigration strategies with practical advice 
              and careful execution for individuals and families worldwide.
            </p>
            <div className="text-background/70 text-sm">
              <p>Tejas Patel, Esq.</p>
              <p>11 Years Experience Since 2014</p>
              <p>TPL Global - Founded November 2020</p>
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
              © 2024 TPL Global Immigration Law. All rights reserved.
            </div>
            <div className="text-background/60 text-sm">
              Licensed to practice immigration law
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
