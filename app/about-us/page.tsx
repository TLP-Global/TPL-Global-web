import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Boston Top Immigration Lawyer. Learn more about T.P.L. Global, LLC Immigration law firm, our mission, and our team of experienced immigration attorneys.",
  alternates: {
    canonical: "https://tplglobal.net/about-us",
  },
};

const teamMembers = [
  {
    id: 1,
    name: "Samloth Sreng",
    position: "Manager",
    image: "/samloth.png",
    description:
      "Samloth was born in Cambodia. Her family  immigrated to the U.S. when she was just a toddler; fleeing a hostile regime. She grew up in the Northshore and later graduated with a B.A. in Communications from a college in Boston. Her love of history, art and food led her to live and work abroad in Taiwan as well as extensive travels throughout Europe and Asia. Samloth has deep knowledge and years of practical experience in filing various types of immigration matters ranging from U-Visa, Family Petition, SIJ and Asylum cases. As manager, she oversees the Team Leads, implements the Firm's policies and procedures, conducts training and ensures client relations are upheld to meet both the clients' and Firm's standards.",
  },
  // {
  //   id: 2,
  //   name: "Raghav Khandelwal",
  //   position: "Immigration Attorney, Family Petition, T-Visa, VAWA Team",
  //   image: "/raghav.png",
  //   description:
  //     "Raghav Khandelwal is an immigration attorney dedicated to helping individuals and families through the intricacies of immigration law. With a B.A.LL.B (Business Law Hons.) from ICFAI University Dehradun, Raghav combines his legal knowledge with a deep commitment to his clients' needs. He specializes in assisting with family petitions, consular processing, U.S. Naturalization applications, T-Visas and VAWA cases providing personalized and effective solutions. Raghav's client-centered approach and attention to detail ensure that each case is handled with the utmost care, and as a result, earning clients’ trust to help with complex immigration matters.",
  // },
  {
    id: 2,
    name: "Rahul Dubey",
    position: "Finance Associate",
    image: "/rahul.png",
    description:
      "Rahul Dubey is a Finance Associate at T.P.L. Global, LLC with over three years of experience in accounting, inventory management, statutory audits, and ROC compliances. He completed his education at Ranchi University, earning a first-class degree in Accounting and Finance. He is proficient in preparing and analyzing financial statements to ensure accuracy and regulatory compliance, managing tax filings and optimizing tax strategies, conducting internal and external audits to assess financial health and operational efficiency, ensuring adherence to all financial regulations and standards, and offering strategic financial advice to foster business growth and development. His expertise and dedication have made him a key contributor in the finance and compliance sectors.",
  },
  {
    id: 3,
    name: "Diana Garcia",
    position: "Secretary",
    image: "/diana.png",
    description:
      "Diana was born in Los Angeles, California. Her parents immigrated to the U.S from Guatemala in the early 1990's hoping for a better life. Diana and her family moved to Massachusetts when she was 2 years old and she later sponsored my parents through a family petition when she turned 21. Having grown up with immigrant parents, Diana understands the struggles immigrants in the U.S. experience. Diana graduated with a Bachelor's degree in Criminal Justice at Salem State",
  },
];
const About = () => {
  return (
    <main className="pt-20 px-4">
      <img
        src="/hero.jpg"
        alt="Notary seal stamping official legal documents"
        className="hidden md:block fixed bottom-0 -z-10  w-screen left-0"
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-950/5 to-blue-50/10 ">
        <div className="section-container max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              The Team Behind T.P.L. Global, LLC
            </h1>
            <p className="text-base lg:text-white/80 text-blue-950/60">
              Meet the dedicated professionals committed to your immigration
              success
            </p>
          </div>
        </div>
      </section>

      {/* Attorney Tejas Patel Section */}
      <section className="py-28 p-4 bg-white">
        <div className="section-container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12  items-center">
            <div>
              <h2 className="text-2xl mb-6">
                Meet Attorney Mr. Tejas G. Patel, Esq.{" "}
              </h2>
              <div className="space-y-4 text-blue-950/60">
                <p>
                  Mr. Tejas G. Patel, Esq. founded T.P.L. Global, LLC with a simple
                  belief: immigration clients deserve both sharp legal strategy
                  and genuine care. Known for his tenacity, creative
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
                  alt="Boston Top Immigration Lawyer Tejas Patel Profile Image"
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
                  Before founding T.P.L. Global, LLC, Tejas worked as in-house
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
          <div className="grid md:grid-cols-3 gap-8 px-4">
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
      <section className="py-32 bg-gradient-to-br from-blue-950/5 to-blue-50/10 px-4">
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
      <section className="py-16 bg-white px-4">
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-950">
              Meet Our Team
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Our experienced team of immigration attorneys and staff are here
              to guide you through every step of your immigration journey.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {teamMembers.map((member) => (
                  <CarouselItem
                    key={member.id}
                    className="md:basis-1/2 lg:basis-1/1"
                  >
                    <div className="p-4">
                      <Card className="h-full">
                        <CardContent className="p-8">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-0"
                              />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <h3 className="text-2xl font-bold mb-2 text-foreground">
                                {member.name}
                              </h3>
                              <p className="text-primary font-medium mb-4">
                                {member.position}
                              </p>
                              <p className="text-muted-foreground leading-relaxed text-sm">
                                {member.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>
      {/* Why Clients Choose T.P.L. Global, LLC */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-7xl mx-auto">
          <h3 className="text-lg font-bold text-blue-950 mb-8 text-center">
            Why Clients Choose T.P.L. Global, LLC
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
            <Link
              href="/consult"
              className="bg-gradient-to-r rounded-md from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r rounded-md from-blue-950 to-blue-800 group-hover:shadow-lg transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
