"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, RefreshCw, Globe } from "lucide-react";
import { motion } from "motion/react";

const HowWeWork = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Strategy Calls",
      description:
        "We start with understanding your unique goals and circumstances.",
    },
    {
      icon: FileText,
      title: "Clear Documentation Plan",
      description:
        "Receive a detailed roadmap of required documents and filing strategy.",
    },
    {
      icon: RefreshCw,
      title: "Ongoing Updates",
      description:
        "Stay informed with regular updates throughout your case progression.",
    },
    {
      icon: Globe,
      title: "Remote Capability",
      description:
        "Most matters handled remotely, whether you're in the U.S. or abroad.",
    },
  ];

  return (
    <section className="max-w-7xl py-20 mx-auto">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-blue-950/60 max-w-2xl mx-auto">
            Simple, guided process designed to make your immigration journey
            clear and manageable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 ">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              key={step.title}
            >
              <Card className=" text-center relative">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-blue-950 rounded-full w-fit">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-950/60">{step.description}</p>
                </CardContent>

                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-blue-50/80 rounded-lg">
            <p className="text-lg font-medium text-blue-950">
              Most matters can be handled remotely, whether you're in the U.S.
              or abroad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
