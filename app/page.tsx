import FeaturedServices from "@/components/featured-services";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  Clock,
  FileCheck,
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  User,
} from "lucide-react";
import QuickPathTiles from "@/components/quick-path-tiles";
import HowWeWork from "@/components/how-we-work";
import TestimonialsAndTrust from "@/components/testimonials";
import BlogAndResources from "@/components/blog-resources";
import FinalCTA from "@/components/final-cta";

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

  return (
    <div className=" mx-auto w-screen">
      <img src="/hero.jpg" alt="" className="fixed bottom-0 -z-10 w-screen"/>
      <section className="relative">
        {/* Background video*/}
        <div className="relative min-h-screen flex items-center">
          <video
            autoPlay
            loop
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="h-full w-full absolute inset-0 bg-gradient-to-b from-black/90 to-black/40"></div>
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Clear, Effective U.S. immigration strategy
              <span className="block text-amber-400">
                {" "}
                Wherever you are in the world.
              </span>
            </h1>
            <div className="mx-auto w-20 h-1 bg-blue-400 mb-6" />
            <p className="text-white/90 text-base md:text-lg mb-8">
              We help individuals and families with visas, green cards, and
              citizenship. Practical advice. Careful execution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book a Consultation
              </Button>
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Here – Free Guides
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-black/20">
        <div className="section-container">
          <div className="flex flex-col max-w-7xl mx-auto lg:flex-row items-center justify-between gap-8">
            {/* Government Logos */}
            <div className="flex items-center gap-6">
              <img
                src="https://www.uscis.gov/sites/default/files/USCIS_Signature_Preferred_FC.png"
                alt="USCIS"
                className="h-12 opacity-80"
              />
              <img
                src="https://www.justice.gov/themes/custom/usdoj_uswds/images/doj-main-header-logo.svg"
                alt="U.S. Department of Justice"
                className="h-12 opacity-80"
              />
            </div>

            {/* Credentials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex gap-2 p-2 px-4 bg-yellow-200/60 rounded-3xl">
                <Award className="h-4 w-4" />
                Bar Membership
              </div>
              <div className="flex gap-2 p-2 px-4 bg-yellow-200/60 rounded-3xl">
                <Calendar className="h-4 w-4" />
                11 Years Experience (Since 2014)
              </div>
              <div className="flex gap-2 p-2 px-4 bg-yellow-200/60 rounded-3xl">
                <TrendingUp className="h-4 w-4" />
                TPL Global - Founded Nov 2020
              </div>
            </div>
          </div>

          <div className="mt-6 text-center ">
            <p className="text-white/60 text-sm">
              Mr. Tejas Patel has 11 years of experience since 2014. His
              company, TPL Global, was founded on November 5, 2020, and has been
              growing steadily for the past five years.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-background">
        <QuickPathTiles/>
      </section>
      <section className="mt-52 bg-background">
        <HowWeWork/>
      </section>
      <section className="mt-52 bg-background">
        <FeaturedServices/>
      </section>
      <section className="mt-52 bg-background">
        <TestimonialsAndTrust/>
      </section>
      <section className="mt-52 bg-background">
        <BlogAndResources/>
      </section>
      <section className=" bg-background">
        <FinalCTA/>
      </section>
    </div>
  );
}
