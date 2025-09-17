import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20 ">
      <img src="/hero.jpg" alt="" className="fixed bottom-0 -z-10 w-screen"/>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-950/5 to-blue-50/10 ">
        <div className="section-container max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl mb-6">The Team Behind T.P.L. Global</h1>
            <p className="text-xl text-white/80">
              Meet the dedicated professionals committed to your immigration
              success
            </p>
          </div>
        </div>
      </section>

      {/* Attorney Tejas Patel Section */}
      <section className="py-28 bg-white">
        <div className="section-container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12  items-center">
            <div>
              <h2 className="text-2xl mb-6">Meet Attorney Mr. Tejas G. Patel, Esq. </h2>
              <div className="space-y-4 text-blue-950/60">
                <p>
                  Mr. Tejas G. Patel, Esq. founded T.P.L. Global with a simple belief:
                  immigration clients deserve both sharp legal strategy and
                  genuine care. Known for his tenacity, creative
                  problem-solving, and clear communication, Tejas has helped
                  individuals and families navigate complex immigration
                  challenges with confidence.
                </p>
                <p>
                  Clients often describe him as approachable, responsive, and
                  deeply invested in their success. He sees every case as more
                  than paperwork—it's about people, their families, and their
                  futures.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-96 border border-black bg-secondary/20 rounded-lg flex items-center justify-center">
                <img
                  src="/tejas-patel.jpg"
                  alt="Tejas Patel Profile Image"
                  className="bg-muted-foreground h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background and Experience */}
      <section className="py-32 bg-gradient-to-br from-blue-950/5 to-blue-50/10  ">
        <div className="section-container max-w-7xl mx-auto">
          <Card className=" hover:shadow-lg duration-300">
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-6">
                Background and Experience
              </h3>
              <div className="space-y-4 text-blue-950/60">
                <p>
                  Before founding T.P.L. Global, Tejas worked as in-house
                  counsel for a nationally recognized bank, sharpening his
                  advocacy skills in high-stakes environments. He earned his
                  Juris Doctor from Suffolk University Law School in 2014, where
                  he contributed to the Suffolk Journal of Trial and Appellate
                  Advocacy and published a note on the intersection of legal
                  ethics and technology.
                </p>
                <p>
                  He holds a Bachelor of Arts in International Studies (with a
                  minor in Philosophical Studies) from the College of the Holy
                  Cross.
                </p>
                <p>
                  Tejas is admitted to the Massachusetts Bar (2014) and is an
                  active member of the American Immigration Lawyers Association
                  (AILA) and its New England Chapter.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Approach to Practice */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-7xl mx-auto">
          <h3 className="text-lg font-bold mb-8 text-center">
            Approach to Practice
          </h3>
          <p className="text-center text-blue-950/60 mb-8">Tejas brings:</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-950/20 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">
                  Meticulous Case Management
                </h4>
                <p className="text-blue-950/60">
                  Every filing is carefully reviewed and strategically prepared.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-950/20 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">
                  Real-time Communication
                </h4>
                <p className="text-blue-950/60">
                  He believes clients should never feel left in the dark about
                  their case.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-950/20 rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">
                  Emotional Intelligence
                </h4>
                <p className="text-blue-950/60">
                  Immigration matters are often personal and stressful, and he
                  meets clients with patience and empathy.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-blue-950/60">
              His practice focuses on immigration law, physician contract
              review, and personal injury/worker's compensation.
            </p>
          </div>
        </div>
      </section>

      {/* Languages and Global Perspective */}
      <section className="py-32 bg-gradient-to-br from-blue-950/5 to-blue-50/10  ">
        <div className="section-container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="card-professional">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold mb-6">
                  Languages and Global Perspective
                </h3>
                <p className="text-blue-950/60">
                  Having worked and studied internationally, Tejas offers
                  clients a global perspective on immigration issues. He is
                  fluent in Gujarati and Hindi, which helps him connect with and
                  serve a diverse client base.
                </p>
              </CardContent>
            </Card>
            <Card className="card-professional">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold mb-6">Outside the Office</h3>
                <p className="text-blue-950/60">
                  When he's not advocating for clients, you'll likely find Tejas
                  refining (or battling with) his golf swing—and always open to
                  tips.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-7xl mx-auto">
          <h3 className="text-lg font-bold mb-8 text-center">
            Professional Highlights
          </h3>
          <Card className=" hover:shadow-lg duration-300 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <ul className="space-y-3 text-blue-950/60">
                <li>
                  • Member, American Immigration Lawyers Association (AILA)
                </li>
                <li>• Member, New England Chapter of AILA</li>
                <li>
                  • Published in Suffolk Journal of Trial and Appellate
                  Advocacy:
                  <br />
                  <span className="italic ml-4">
                    "Document Automation Software: Solving the Dichotomy Between
                    Meeting Attorneys' Financial Needs and Ethical Obligations"
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Clients Choose T.P.L. Global */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-7xl mx-auto">
          <h3 className="text-lg font-bold text-blue-950 mb-8 text-center">
            Why Clients Choose T.P.L. Global
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-3">
                Personalized Strategy
              </h4>
              <p className="text-blue-950/60">
                No one-size-fits-all approach—every case is tailored.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-3">
                Clear Communication
              </h4>
              <p className="text-blue-950/60">
                You'll know where your case stands at every step.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-3">Dedication</h4>
              <p className="text-blue-950/60">
                Your trust is valued, and your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-bold text-xl mb-6">Next Step</h3>
            <p className="text-blue-950/60 mb-8">
              If you're ready to take the next step in your immigration journey,
              we'd be honored to guide you.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-950 to-blue-800 flex-1"
              size="lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
