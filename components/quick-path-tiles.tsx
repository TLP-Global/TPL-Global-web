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
import { motion } from "motion/react";

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
          photo:"/individuals/visitor-visa.png"
        },
        {
          title: "Permanent Residence",
          description: "Step-by-step pathways to permanent residence.",
          icon: CreditCard,
          link: "/services/individuals",
          photo:"/individuals/perm-residence.png"
        },
        {
          title: "U.S. Citizenship",
          description:
            "Becoming a U.S. citizen and preparing for the interview.",
          icon: Flag,
          link: "/services/individuals",
          photo:"/individuals/us-citizenship.png"
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
          photo:"/families/spouse.png"
        },
        {
          title: "Parents & Children",
          description: "Family petitions and who qualifies.",
          icon: Baby,
          link: "/services/families",
          photo:"/families/parents.png"
        },
        {
          title: "Siblings",
          description: "How family preference categories work.",
          icon: UserPlus,
          link: "/services/families",
          photo:"/families/siblings.png"
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
          photo:"/humanitarian/asylum.png"
        },
        {
          title: "U Visa",
          description: "For victims of certain crimes.",
          icon: Scale,
          link: "/services/humanitarian",
          photo:"/humanitarian/u-visa.png"
        },
        {
          title: "T Visa",
          description: "For survivors of trafficking.",
          icon: HandHeart,
          link: "/services/humanitarian",
          photo:"/humanitarian/t-visa.png"
        },
        {
          title: "VAWA",
          description: "Self-petition for victims of abuse.",
          icon: UserCheck,
          link: "/services/humanitarian",
          photo:"/humanitarian/abuse.png"
        },
        {
          title: "SIJ",
          description: "Status for children facing hardship.",
          icon: Baby,
          link: "/services/humanitarian",
          photo:"/humanitarian/sij.png"
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

        <div className="flex flex-wrap gap-8 justify-center ">
          {pathways.map((pathway) => (
            <div key={pathway.category} className="w-96 h-full space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-950 rounded-lg">
                  <pathway.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {pathway.category}
                </h3>
              </div>

              <div className="space-y-8">
                {pathway.items.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative h-44 w-full rounded-t-lg overflow-hidden">
                      <img
                        src={item.photo}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <Card className="bg-gradient-to-br rounded-t-none from-blue-200/40 to-blue-50/40 group h-44">
                      <CardHeader className="">
                        <div className="flex items-start gap-3">
                          <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <CardTitle className="text-lg mb-2">
                              {item.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Link href={item.link}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full hover:bg-blue-950 hover:text-white group-hover:bg-blue-950 group-hover:text-primary-foreground transition-all duration-300"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPathTiles;
