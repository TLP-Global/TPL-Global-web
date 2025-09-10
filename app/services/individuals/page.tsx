import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, CreditCard, Flag, Phone, BookOpen } from "lucide-react";

const Individuals = () => {
  return (
    <div className="min-h-screen">
      <main className="py-16 md:py-24">
        <div className="section-container max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Individual Immigration Services
            </h1>
            <p className="text-xl text-blue-950/60 max-w-3xl mx-auto leading-relaxed">
              We help people at every stage of their immigration journey,
              whether you're visiting the U.S. for a short stay, planning to
              settle here long-term, or ready to take the final step toward
              citizenship.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-12 lg:gap-16">
            {/* Visitor Visas */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    Visitor Visas (B-1/B-2)
                  </CardTitle>
                </div>
                <CardDescription className="text-lg">
                  The B-1/B-2 visa lets you visit the U.S. temporarily for
                  business (B-1) or tourism/medical visits (B-2).
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      What you can do:
                    </h4>
                    <ul className="space-y-2 text-blue-950/60">
                      <li>
                        • Attend business meetings, conferences, or training
                        (B-1)
                      </li>
                      <li>
                        • Visit family and friends, receive medical treatment,
                        or travel for leisure (B-2)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      What you can't do:
                    </h4>
                    <ul className="space-y-2 text-blue-950/60">
                      <li>• Work for U.S. employers</li>
                      <li>• Study toward a degree</li>
                      <li>• Stay indefinitely</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Key documents often required:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • Proof of ties to your home country (job, property,
                      family)
                    </li>
                    <li>
                      • Financial records showing you can support your stay
                    </li>
                    <li>• Travel itinerary and purpose of visit</li>
                  </ul>
                </div>

                <Button className="bg-gradient-to-r from-blue-950 to-blue-800 w-full group-hover:shadow-lg transition-all">
                  <Phone className="mr-2 h-4 w-4" />
                  Talk to us about Visitor Visas
                </Button>
              </CardContent>
            </Card>

            {/* Green Cards */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <CreditCard className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    Green Cards (Permanent Residence)
                  </CardTitle>
                </div>
                <CardDescription className="text-lg">
                  A green card is the pathway to living and working permanently
                  in the U.S. It's also the stepping stone to citizenship if
                  that's your long-term goal.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Main ways to qualify:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • <strong>Through family:</strong> A U.S. citizen or green
                      card holder sponsors you
                    </li>
                    <li>
                      • <strong>Through humanitarian programs:</strong> Asylum,
                      refugee status, or certain special visas
                    </li>
                    <li>
                      • <strong>Other categories:</strong> Employment-based or
                      special programs (case-specific)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    What to expect in the process:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • Petition filed on your behalf (or by you, in some
                      categories)
                    </li>
                    <li>
                      • Either consular processing abroad or adjustment of
                      status in the U.S.
                    </li>
                    <li>• Biometrics, interview, and final decision</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Common questions we help answer:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>• Am I eligible right now, or do I need to wait?</li>
                    <li>
                      • Should I file from inside the U.S. or through a
                      consulate abroad?
                    </li>
                    <li>• How long will my case likely take?</li>
                  </ul>
                </div>

                <Button className="bg-gradient-to-r from-blue-950 to-blue-800 w-full group-hover:shadow-lg transition-all">
                  Learn more about Green Cards
                </Button>
              </CardContent>
            </Card>

            {/* U.S. Citizenship */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <Flag className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    U.S. Citizenship & Naturalization
                  </CardTitle>
                </div>
                <CardDescription className="text-lg">
                  Citizenship is the final step for many immigrants—giving you
                  full rights, including the ability to vote, obtain a U.S.
                  passport, and sponsor more relatives.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Eligibility basics:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • 5 years as a green card holder (3 years if married to a
                      U.S. citizen)
                    </li>
                    <li>
                      • Continuous residence and physical presence requirements
                    </li>
                    <li>
                      • Good moral character and no disqualifying criminal
                      issues
                    </li>
                    <li>
                      • English and civics knowledge (with some exceptions)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    What we provide:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>• Review of your eligibility before filing</li>
                    <li>• Help prepare Form N-400 and supporting documents</li>
                    <li>• Practice for the interview and civics test</li>
                    <li>
                      • Guidance on tricky issues (long trips abroad, prior
                      arrests, tax history)
                    </li>
                  </ul>
                </div>

                <Button className="bg-gradient-to-r from-blue-950 to-blue-800 w-full group-hover:shadow-lg transition-all">
                  <Phone className="mr-2 h-4 w-4" />
                  Talk to us about Citizenship
                </Button>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-16" />

          {/* Why Work With Us */}
          <div className="text-center mb-12 py-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Straightforward Advice
                </h4>
                <p className="text-sm text-blue-950/60">
                  Clear guidance on your options
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Careful Preparation
                </h4>
                <p className="text-sm text-blue-950/60">
                  Meticulous forms and evidence
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Regular Updates
                </h4>
                <p className="text-sm text-blue-950/60">Never left guessing</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Remote Service
                </h4>
                <p className="text-sm text-blue-950/60">
                  Available anywhere you are
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Next Step
            </h3>
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
      </main>
    </div>
  );
};

export default Individuals;
