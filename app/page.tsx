import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  const items = [
    { icon: Phone, label: "Phone", value: "(628) 352-1351" },
    { icon: Mail, label: "Email", value: "info@notary.com" },
    {
      icon: MapPin,
      label: "Office",
      value: "1234 Elm St #1000, San Francisco, CA",
    },
    { icon: Clock, label: "Hours", value: "Mon - Fri: 8am - 5pm" },
  ];
  return (
    <div>
      <section className="relative">
        {/* Background image */}
        <div className="relative min-h-[72vh] flex items-center">
          <img
            src="/hero.jpg"
            alt="Notary stamp and documents on a desk"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <div className="uppercase tracking-wide text-blue-400 font-semibold text-sm mb-6">
              Available 6 days a week
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
              TPL GlOBAL
            </h1>
            <div className="mx-auto w-20 h-1 bg-blue-400 mb-6" />
            <p className="text-white/90 text-base md:text-lg mb-8">
              We come to you. Professional, licensed, bonded and insured notary
              services for real estate, legal and personal documents. Fast,
              reliable and convenient.
            </p>
            <Button
              size="lg"
              className="bg-orange-600 text-white hover:bg-orange-600/90 font-bold cursor-pointer px-8 py-3"
            >
              Schedule an Appointment
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto -mt-12 relative z-40 px-6">
          <div className="bg-card text-card-foreground rounded-xl shadow-2xl border border-border p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-4">
              {items.map(({ icon: Icon, label, value }, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-orange-600">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                    <div className="font-semibold">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
