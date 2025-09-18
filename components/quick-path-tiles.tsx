"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Heart,
  Baby,
  UserPlus,
  Shield,
  Scale,
  HandHeart,
  UserCheck,
  CreditCard,
  Flag,
} from "lucide-react";
import Link from "next/link";

const QuickPathTiles = () => {
  const pathways = [
    {
      category: "Individuals",
      icon: Users,
      items: [
        {
          title: "Visitor Visas (B-1/B-2)",
          description: "Short-term travel options and what to expect.",
          icon: Users,
          link: "/services/individuals",
          photo: "/individuals/visitor-visa.png",
        },
        {
          title: "Permanent Residence",
          description: "Step-by-step pathways to permanent residence.",
          icon: CreditCard,
          link: "/services/individuals",
          photo: "/individuals/perm-residence.png",
        },
        {
          title: "U.S. Citizenship",
          description:
            "Becoming a U.S. citizen and preparing for the interview.",
          icon: Flag,
          link: "/services/individuals",
          photo: "/individuals/us-citizenship.png",
        },
      ],
    },
    {
      category: "Families",
      icon: Heart,
      items: [
        {
          title: "Spouse & Fiancé(e) (IR/CR-1, K-1, K-3)",
          description: "Marriage-based options explained simply.",
          icon: Heart,
          link: "/services/families",
          photo: "/families/spouse.png",
        },
        {
          title: "Parents & Children",
          description: "Family petitions and who qualifies.",
          icon: Baby,
          link: "/services/families",
          photo: "/families/parents.png",
        },
        {
          title: "Siblings",
          description: "How family preference categories work.",
          icon: UserPlus,
          link: "/services/families",
          photo: "/families/siblings.png",
        },
      ],
    },
    {
      category: "Humanitarian",
      icon: Shield,
      items: [
        {
          title: "Asylum",
          description: "Protection if you fear harm in your home country.",
          icon: Shield,
          link: "/services/humanitarian",
          photo: "/humanitarian/asylum.png",
        },
        {
          title: "U Visa",
          description: "For victims of certain crimes.",
          icon: Scale,
          link: "/services/humanitarian",
          photo: "/humanitarian/u-visa.png",
        },
        {
          title: "T Visa",
          description: "For survivors of trafficking.",
          icon: HandHeart,
          link: "/services/humanitarian",
          photo: "/humanitarian/t-visa.png",
        },
        {
          title: "VAWA",
          description: "Self-petition for victims of abuse.",
          icon: UserCheck,
          link: "/services/humanitarian",
          photo: "/humanitarian/abuse.png",
        },
        {
          title: "SIJ",
          description: "Status for children facing hardship.",
          icon: Baby,
          link: "/services/humanitarian",
          photo: "/humanitarian/sij.png",
        },
      ],
    },
  ];
  return (
    <section className="max-w-7xl py-20 mx-auto bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Find Your Path
          </h2>
          <p className="text-xl text-blue-950/60 max-w-2xl mx-auto px-4 md:px-0">
            Navigate U.S. immigration with confidence. Choose your pathway to
            get started.
          </p>
        </div>

        {/* Horizontal pathway sections */}
        <div className="flex gap-4 md:gap-44 justify-center md:mb-12">
          {pathways.map((pathway, pathwayIndex) => (
            <div key={pathway.category} className="text-center">
              <div className="flex flex-col items-center mb-6">
                <div className="p-4 bg-blue-950 rounded-full mb-3 shadow-lg">
                  <pathway.icon className="md:h-8 md:w-8 h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-blue-950">
                  {pathway.category}
                </h3>
              </div>

              {/* Timeline path with dots */}
              <div className="relative">
                {/* Timeline dots for each item */}
                <div className="space-y-12 relative z-10">
                  {pathway.items.map((item, itemIndex) => (
                    <div key={item.title} className="relative group">
                      {/* Connecting line between dots */}
                      {itemIndex < pathway.items.length - 1 && (
                        <div className="absolute  left-2 top-4 w-0.5 h-20 bg-primary/30 transform -translate-x-1/2" />
                      )}

                      {/* Timeline dot */}
                      <div className="flex gap-2">
                        <Link href={item.link} className="flex gap-2">

                        <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl" />
                        <span className="text-xs text-muted-foreground max-w-28">
                          {item.title}
                        </span>
                        </Link>
                      </div>

                      {/* Hover card */}
                      <div className="absolute -top-16 left-40 bg-secondary transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 hover:opacity-100 hover:visible group-hover:visible transition-all duration-300 z-20 ">
                        <Card className="w-64 border-primary/30 relative bg-secondary overflow-hidden shadow-xl">
                          <div className="absolute inset-0 " />
                          <CardHeader className="pb-3 relative z-10">
                            <div className="flex  gap-3">
                              <div className="flex-1">
                                <CardTitle className="text-sm font-semibold text-foreground mb-1">
                                  {item.title}
                                </CardTitle>
                                <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                                  {item.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0 relative z-10">
                            <Link href={item.link}>
                            <Button
                              size="sm"
                              className="w-full hover:bg-blue-950 cursor-pointer bg-blue-950 text-xs font-medium"
                            >
                              Learn More
                            </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPathTiles;
