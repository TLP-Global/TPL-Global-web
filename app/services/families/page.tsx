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

const Families = () => {
  return (
    <div className="min-h-screen px-4">
      <main className="py-16 md:py-24">
        <div className="section-container max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Families: Immigration Through Loved Ones
            </h1>
            <p className="text-xl text-blue-950/60 max-w-3xl mx-auto leading-relaxed">
              Family ties are one of the strongest paths to U.S. immigration.
              Whether you’re bringing a spouse, reuniting with children, or
              sponsoring parents, the process can feel overwhelming. We break it
              down into clear steps so you know exactly what to expect.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {/* Visitor Visas */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    {`Spouse & Fiancé(e) Visas (IR/CR-1, K-1, K-3)`}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Spouse visas (IR/CR-1):
                    </h4>
                    <ul className="space-y-2 text-blue-950/60">
                      <li>• For couples who are already married.</li>
                      <li>• Leads directly to a green card.</li>
                      <li>
                        • If the marriage is less than two years old at
                        approval, the green card is “conditional” and valid for
                        two years.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Fiancé(e) visa (K-1):
                    </h4>
                    <ul className="space-y-2 text-blue-950/60">
                      <li>
                        • For engaged couples when the foreign fiancé(e) is
                        abroad.
                      </li>
                      <li>
                        • The fiancé(e) must marry the U.S. citizen petitioner
                        within 90 days of entry.
                      </li>
                      <li>
                        • After marriage, the spouse applies for adjustment of
                        status.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    K-3 visa:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • Less common today but may apply if a spouse is waiting
                      abroad for an immigrant visa.
                    </li>
                  </ul>
                </div>

                <Button className="bg-gradient-to-r from-blue-950 to-blue-800 w-full group-hover:shadow-lg transition-all">
                  We’ll guide you on which option makes sense based on your
                  timeline, location, and long-term plans.
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    Parents, Children & Siblings
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Parents:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • U.S. citizens age 21+ may petition for their parents.
                    </li>
                    <li>
                      • Parents are considered “immediate relatives” no annual
                      visa caps.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Children:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • Unmarried children under 21 of U.S. citizens are
                      “immediate relatives.”
                    </li>
                    <li>
                      • Married children, or children of green card holders,
                      fall into family preference categories with longer waits.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Siblings:
                  </h4>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • U.S. citizens age 21+ may petition for brothers and
                      sisters.
                    </li>
                    <li>
                      • This is a preference category with some of the longest
                      wait times.
                    </li>
                  </ul>
                </div>

                <Button className="bg-gradient-to-r from-blue-950 to-blue-800 w-full group-hover:shadow-lg transition-all">
                  Understanding who qualifies and how long it may take is
                  critical for planning family reunification.
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <Flag className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    Removing Conditions on Residence (I-751)
                  </CardTitle>
                </div>
                <CardDescription className="text-lg">
                  If you received a two-year “conditional” green card through
                  marriage, you’ll need to file Form I-751 to remove conditions
                  and secure a 10-year green card.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • Normally, couples file jointly within the 90 days before
                      the conditional card expires.
                    </li>
                    <li>
                      • If the marriage has ended or there’s hardship, you may
                      be able to file a waiver.
                    </li>
                    <li>
                      • Good moral character and no disqualifying criminal
                      issues
                    </li>
                    <li>
                      • Strong evidence of a real relationship is required.
                    </li>
                  </ul>
                </div>

                <Button className="bg-gradient-to-r from-blue-950 to-blue-800 w-full group-hover:shadow-lg transition-all">
                  We help clients prepare clear, well-documented I-751 petitions
                  especially important if there are complications like divorce,
                  separation, or limited proof.
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
                  Honest Timelines
                </h4>
                <p className="text-sm text-blue-950/60">
                  Know exactly what to expect
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Avoid Delays
                </h4>
                <p className="text-sm text-blue-950/60">
                  Guidance to prevent common mistakes
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Strong Filings
                </h4>
                <p className="text-sm text-blue-950/60">
                  Evidence prepared the way USCIS needs
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Clear Updates
                </h4>
                <p className="text-sm text-blue-950/60">
                  Stay informed at every step
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

export default Families;
