import { Button } from "@/components/ui/button";
import { Award, Building2, Clock, FileCheck, Mail, MapPin, Phone, User } from "lucide-react";

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

  const services = [
    {
      title: "Mobile Services",
      description:
        "Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor",
      icon: User,
      link: "LEARN MORE",
    },
    {
      title: "Serving the Entire Bay Area",
      description:
        "Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor",
      icon: Building2,
      link: "LEARN MORE",
    },
    {
      title: "Apostille & Authentication",
      description:
        "Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor",
      icon: FileCheck,
      link: "LEARN MORE",
    },
    {
      title: "Acknowledgments",
      description:
        "Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor",
      icon: Award,
      link: "LEARN MORE",
    },
  ];

  const bulletPoints = [
    "SIT AMET NIBH",
    "NULLA SIT AMET NIBH",
    "CURABITUR ALIQUET",
    "CURABITUR ALIQUET",
    "NULLA SIT AMET NIBH",
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
              TPL GLOBAL
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl py-20 mx-auto px-6">
          {/* Header Section */}
          <div className="mb-16">

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-1">
                <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-8 leading-tight">
                  We Offer Mobile Notary & Apostille Services
                </h2>
              </div>

              {/* Middle Column */}
              <div className="lg:col-span-1">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Donec
                  sollicitudin molestie malesuada. Nulla quis lorem ut libero
                  malesuada feugiat. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim. Donec cursus congue lorem.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Maecenas rhoncus congue lorem. Proin cursus cursus mauris,
                  consectetur a pellentesque nec, egestas non nisi.
                </p>
              </div>

              {/* Right Column - Bullet Points */}
              <div className="lg:col-span-1">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Donec
                  sollicitudin molestie malesuada. Nulla quis lorem ut libero
                  malesuada feugiat. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim. Donec cursus congue lorem.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors flex items-center gap-2">
                    {service.link}
                    <span className="text-primary">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-12">
            <img src="/services.png" alt=""/>
          </div>
        </div>
      </section>
    </div>
  );
}
