"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogContent = {
  "green-card-101-types-timelines-what-to-expect": {
    title: "Green Card 101: Types, Timelines, and What to Expect",
    description:
      "A comprehensive guide to U.S. green cards including types, application process, timelines, and what to expect.",
    date: "September 24, 2025",
    readTime: "6 min read",
    category: "Green Cards",
    content: {
      intro:
        "A U.S. green card gives you lawful permanent residency. It allows you to live, work, and study in the country without needing a separate visa. Many people use this as the first step toward citizenship. Here's what you need to know.",
      overview:
        "The green card application process has become more streamlined with digital systems, but it still requires careful preparation and patience. Understanding the different types and timelines can help you choose the best path for your situation.",
      whoNeeds: [
        "Family members of U.S. citizens or permanent residents",
        "Skilled workers and professionals seeking employment-based immigration",
        "Investors making substantial investments in U.S. businesses",
        "Refugees, asylees, and victims of crime or trafficking",
        "Diversity visa lottery winners from eligible countries",
      ],
      types: [
        {
          title: "Family-based Green Cards",
          content: [
            "For immediate relatives of U.S. citizens",
            "Certain family preference categories",
            "Spouses, children, and parents of U.S. citizens have priority",
          ],
        },
        {
          title: "Employment-based Green Cards",
          content: [
            "For skilled workers, professionals, investors",
            "Special immigrants including religious workers",
            "Requires labor certification in most cases",
          ],
        },
        {
          title: "Diversity Lottery",
          content: [
            "For applicants from countries with low immigration rates to the U.S.",
            "Annual lottery system with limited spots",
            "Strict eligibility requirements",
          ],
        },
        {
          title: "Humanitarian Programs",
          content: [
            "For refugees, asylees, victims of crime or trafficking",
            "Special protections for vulnerable populations",
            "Different application processes and timelines",
          ],
        },
      ],
      process: [
        {
          title: "Approved Petition",
          content: [
            "Form I-130 for family-based cases",
            "Form I-140 for employment-based cases",
            "Petition must be approved before proceeding",
          ],
        },
        {
          title: "Check Visa Availability",
          content: [
            "Monitor annual visa bulletin",
            "Wait times vary by category and country",
            "Priority date determines when you can apply",
          ],
        },
        {
          title: "File Form I-485",
          content: [
            "Adjustment of status if inside the U.S.",
            "Consular processing if outside the U.S.",
            "Biometrics appointment required",
          ],
        },
        {
          title: "Interview Process",
          content: [
            "Interview with USCIS or at consulate",
            "Final decision and green card issuance",
            "Background checks and medical exam",
          ],
        },
      ],
      timelines: [
        {
          category: "Family-based Immediate Relatives",
          time: "About 12-18 months on average",
        },
        {
          category: "Family Preference Categories",
          time: "Can take years due to annual visa backlogs",
        },
        {
          category: "Employment-based",
          time: "Usually 1-3 years depending on demand and priority date",
        },
        {
          category: "Diversity Visa Lottery",
          time: "About 1 year after selection (if processed on time)",
        },
      ],
      costs: [
        "Filing fees for Form I-485 currently over $1,000 per applicant",
        "Medical exam costs vary by provider",
        "Legal fees if you hire an attorney",
        "Waivers may be available in certain hardship cases",
      ],
      rights: [
        "Live and work permanently in the U.S.",
        "Sponsor certain family members for green cards",
        "Travel in and out of the country more easily (though trips over 6 months can raise questions)",
        "Apply for U.S. citizenship after 3-5 years depending on category",
      ],
      expectations: [
        "Expect long timelines and detailed paperwork",
        "Expect background checks and in-person interviews",
        "Expect the need to maintain eligibility even after filing",
        "Expect patience. The system moves slowly and backlogs are common",
      ],
      faqs: [
        {
          question: "Can I work while waiting?",
          answer:
            "Only if you receive an Employment Authorization Document (EAD) during the process.",
        },
        {
          question: "Can I travel while waiting?",
          answer:
            "You need Advance Parole if your I-485 is pending. Leaving without it may cancel your application.",
        },
        {
          question: "What if my petition is denied?",
          answer:
            "You may be able to appeal or refile, depending on the reason.",
        },
        {
          question: "Do green cards expire?",
          answer:
            "Yes, most are valid for 10 years and must be renewed. Conditional 2-year cards require filing to remove conditions.",
        },
        {
          question: "What to expect during the process?",
          answer:
            "Expect long timelines, detailed paperwork, background checks, in-person interviews, and the need to maintain eligibility throughout.",
        },
      ],
    },
  },
};

export default function Blog() {
  const post = blogContent["green-card-101-types-timelines-what-to-expect"];

  return (
    <div className="min-h-screen bg-background">
      <img
        src="/hero.jpg"
        alt="Notary seal stamping official legal documents"
        className="hidden md:block  fixed bottom-0 -z-10  w-screen left-0"
      />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Article Header */}
        <article>
          <header className="mb-12">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-blue-950/60 mb-6">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-blue-950/60">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <Separator className="mb-12" />

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-blue-950/60 leading-relaxed">
              {post.content.intro}
            </p>
          </section>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-950 mb-6">
              Overview
            </h2>
            <p className="text-blue-950/60 leading-relaxed">
              {post.content.overview}
            </p>
          </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-6">Who Needs a Visitor Visa</h2>
              <ul className="space-y-3">
                {post.content.whoNeeds.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-950/60">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-blue-950/60 mt-4 italic">
                Citizens of Visa Waiver Program countries may not need this visa for short visits.
              </p>
            </section>

          {/* Who Needs Section - Green Card Only */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-6">Who Can Apply</h2>
              <ul className="space-y-3">
                {post.content.whoNeeds.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-950/60">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          {/* Types Section - Green Card Only */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-8">Types of Green Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.content.types.map((type: any, index: number) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-950 mb-4">{type.title}</h3>
                    <ul className="space-y-2">
                      {type.content.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-blue-950/60 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-8">Application Process</h2>
              <p className="text-blue-950/60 mb-6">The process depends on your category. Most cases involve:</p>
              <div className="space-y-6">
                {post.content.process.map((step: any, index: number) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-950 mb-4">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.content.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-blue-950/60 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-8">Typical Timelines</h2>
              <div className="space-y-4 mb-6">
                {post.content.timelines.map((timeline: any, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-950 mb-1">{timeline.category}</h3>
                      <p className="text-blue-950/60">{timeline.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          {/* Costs Section - Green Card Only */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-6">Costs</h2>
              <ul className="space-y-3">
                {post.content.costs.map((cost: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-950/60">{cost}</span>
                  </li>
                ))}
              </ul>
            </section>

          {/* Rights Section - Green Card Only */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-6">Rights After Getting a Green Card</h2>
              <ul className="space-y-3">
                {post.content.rights.map((right: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-950/60">{right}</span>
                  </li>
                ))}
              </ul>
            </section>

          {/* What to Expect Section - Green Card Only */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-6">What to Expect</h2>
              <ul className="space-y-3">
                {post.content.expectations.map((expectation: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-950/60">{expectation}</span>
                  </li>
                ))}
              </ul>
            </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-950 mb-8">
              Common Questions
            </h2>
            <div className="space-y-6">
              {post.content.faqs.map((faq: any, index: number) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-blue-950 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-blue-950/60">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Need Expert Help?
            </h2>
            <p className="text-blue-950/60 mb-6 max-w-2xl mx-auto">
              Tejas G. Patel, Esq. founded T.P.L. Global with a simple belief
              that immigration clients deserve both sharp legal strategy and
              genuine care. Known for his tenacity, creative problem-solving,
              and clear communication, Tejas has helped individuals and families
              navigate complex immigration challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consult"
                className="bg-gradient-to-r rounded-md from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
              >
                <Button
                  size="lg"
                  className="text-lg hover:bg-transparent bg-transparent text-white px-8 py-4 h-full "
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </Link>
              <button className="border border-primary text-blue-500 px-8 py-4 rounded-md font-medium hover:bg-primary/10 transition-colors">
                Learn More
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
