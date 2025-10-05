"use client";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogContent = {
  "k1-fiance-visa-vs-spouse-visa": {
    title: "K-1 Fiancé Visa vs Spouse Visa: Which One Is Right for You?",
    description:
      "Understanding the differences between the K-1 Fiancé Visa and the Spouse Visa to make an informed decision for your situation.",
    date: "October 2, 2025",
    readTime: "9 min read",
    category: "Family Immigration",
    content: {
      intro:
        "When it comes to bringing a loved one to the United States, two popular visa options are the K-1 Fiancé Visa and the Spouse Visa. Both are pathways to citizenship, but the choice between the two can depend on your timeline, eligibility, and overall experience. This guide will break down the key differences between the K-1 Fiancé Visa and the Spouse Visa, so you can make an informed decision about which one is best for you and your partner.",
      overview: {
        title: "Overview of K-1 Fiancé Visa",
        content:
          "The K-1 Fiancé Visa is designed for individuals who are engaged to a U.S. citizen. It allows the foreign fiancé(e) to enter the U.S. with the intention of getting married within 90 days of arrival. After marriage, the fiancé(e) can apply for a change of status to become a permanent resident.",
        pros: [
          {
            title: "Faster Processing Time",
            description:
              "The K-1 visa typically has a shorter processing time than the Spouse Visa.",
          },
          {
            title: "Engagement Stage",
            description:
              "This visa is perfect for couples who are engaged but have not yet married. It allows the couple to get married in the U.S. without needing to be married before applying.",
          },
          {
            title: "Post-Marriage Path to Green Card",
            description:
              "After marrying within the 90-day period, the fiancé can apply for a green card (permanent residency).",
          },
        ],
        cons: [
          {
            title: "Marriage Requirement Within 90 Days",
            description:
              "The couple must get married within 90 days of the foreign fiancé's arrival in the U.S., or the visa holder must leave the country.",
          },
          {
            title: "Application Complexity",
            description:
              "The K-1 process can be lengthy and requires proving that the relationship is genuine, which can be challenging.",
          },
        ],
      },
      spouseOverview: {
        title: "Overview of Spouse Visa (CR-1/IR-1)",
        content:
          "The Spouse Visa, specifically the CR-1 (Conditional Resident) or IR-1 (Immediate Relative) visa, is for individuals who are already married to a U.S. citizen or lawful permanent resident. This visa allows the foreign spouse to enter the U.S. and become a permanent resident without needing to apply for an adjustment of status after marriage.",
        pros: [
          {
            title: "Permanent Resident Status Upon Arrival",
            description:
              "Unlike the K-1 visa, the foreign spouse receives a green card upon arrival in the U.S., without the need to apply for an adjustment of status after marriage.",
          },
          {
            title: "No 90-Day Timeframe",
            description:
              "There is no pressure to marry within a short time frame, making this a more flexible option for couples who have already married.",
          },
          {
            title: "Better for Long-Term Marriage Plans",
            description:
              "If you are already married and looking to live together in the U.S., the Spouse Visa is often a more straightforward and stable path.",
          },
        ],
        cons: [
          {
            title: "Longer Processing Time",
            description:
              "The Spouse Visa generally takes longer to process than the K-1 Visa. The couple must be married before applying, which can slow down the process.",
          },
          {
            title: "More Documentation",
            description:
              "The application process for the Spouse Visa can require more documentation, including proof of a bona fide marriage.",
          },
        ],
      },
      keyDifferences: {
        title: "Key Differences Between K-1 Fiancé Visa and Spouse Visa",
        table: [
          {
            aspect: "Eligibility",
            k1: "Engaged to a U.S. citizen",
            spouse: "Married to a U.S. citizen or lawful permanent resident",
          },
          {
            aspect: "Processing Time",
            k1: "Generally faster",
            spouse: "Takes longer due to additional paperwork and interviews",
          },
          {
            aspect: "Post-Arrival Requirement",
            k1: "Must marry within 90 days of entry",
            spouse: "Already married before application",
          },
          {
            aspect: "Adjustment of Status",
            k1: "After marriage, apply for permanent residency",
            spouse: "Immediate permanent residency upon arrival",
          },
          {
            aspect: "Visa Issuance",
            k1: "Temporary (Fiancé Visa)",
            spouse: "Permanent (Green Card upon entry)",
          },
          {
            aspect: "Flexibility",
            k1: "Can marry in the U.S. after entry",
            spouse: "Must be married before applying",
          },
        ],
      },
      whichVisa: {
        title: "Which Visa is Right for You?",
        intro:
          "Choosing between the K-1 Fiancé Visa and the Spouse Visa depends on your unique situation:",
        k1Choice: {
          title: "Choose the K-1 Fiancé Visa if:",
          points: [
            "You are engaged to a U.S. citizen but not yet married.",
            "You want to marry in the U.S. after arrival and start your life together there.",
            "You are willing to marry within the 90-day time frame after arrival.",
          ],
        },
        spouseChoice: {
          title: "Choose the Spouse Visa if:",
          points: [
            "You are already married to a U.S. citizen or lawful permanent resident.",
            "You prefer a more straightforward and flexible path with no deadline to marry.",
            "You don't mind waiting longer for the visa processing time.",
          ],
        },
      },
      faqs: [
        {
          question: "Can I apply for a K-1 Fiancé Visa if I'm not married yet?",
          answer:
            "Yes, the K-1 Visa is specifically for couples who are engaged but not yet married. You must marry within 90 days of entering the U.S.",
        },
        {
          question: "How long does it take to get a Spouse Visa?",
          answer:
            "The Spouse Visa typically takes longer to process than the K-1 Visa, sometimes up to a year or more.",
        },
        {
          question: "Can I work with a K-1 Visa?",
          answer:
            "Yes, once in the U.S., you can apply for a work permit while you wait for your green card.",
        },
        {
          question:
            "Do I need to live in the U.S. during the K-1 Visa process?",
          answer:
            "Not necessarily. You can apply from abroad, and the fiancé(e) can come to the U.S. for marriage, but must marry within 90 days of arrival.",
        },
        {
          question:
            "What if I can't marry within the 90-day period on the K-1 Visa?",
          answer:
            "If you don't marry within 90 days, the fiancé(e) must leave the U.S. and will need to reapply for a different visa.",
        },
      ],
      conclusion: {
        content:
          "Both the K-1 Fiancé Visa and the Spouse Visa provide pathways for international couples to live together in the U.S., but they differ in terms of eligibility, processing times, and requirements. Your choice should align with your current situation—whether you are engaged and planning to marry in the U.S., or already married and looking for a smoother, albeit slower, immigration process. By understanding these differences, you can better navigate the U.S. immigration system and choose the visa that suits your needs best.",
        advice:
          "For further details, it's always a good idea to consult with an immigration attorney who can guide you through the specific process for your situation.",
      },
      expertHelp: {
        title: "Need Expert Help",
        name: "Tejas G. Patel, Esq.",
        description:
          "founded T.P.L. Global with a simple belief that immigration clients deserve both sharp legal strategy and genuine care. Known for his tenacity, creative problem-solving, and clear communication, Tejas has helped individuals and families navigate complex immigration challenges with confidence.",
      },
    },
  },
};

export default function Blog() {
  const post = blogContent["k1-fiance-visa-vs-spouse-visa"];

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
              {post.content.overview.content}
            </p>
          </section>

          {/* K-1 Fiancé Visa Content */}
            <>
              {/* K-1 Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                  {post.content.overview.title}
                </h2>
                <p className="text-blue-950/60 mb-6 leading-relaxed">
                  {post.content.overview.content}
                </p>

                {/* K-1 Pros */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-950 mb-4">Pros of the K-1 Fiancé Visa:</h3>
                  <div className="space-y-4">
                    {post.content.overview.pros.map((pro: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-blue-950">{pro.title}:</span>
                          <span className="text-blue-950/60"> {pro.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* K-1 Cons */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-950 mb-4">Cons of the K-1 Fiancé Visa:</h3>
                  <div className="space-y-4">
                    {post.content.overview.cons.map((con: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-5 w-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-red-400" />
                        </div>
                        <div>
                          <span className="font-semibold text-blue-950">{con.title}:</span>
                          <span className="text-blue-950/60"> {con.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Spouse Visa Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                  {post.content.spouseOverview.title}
                </h2>
                <p className="text-blue-950/60 mb-6 leading-relaxed">
                  {post.content.spouseOverview.content}
                </p>

                {/* Spouse Visa Pros */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-950 mb-4">Pros of the Spouse Visa:</h3>
                  <div className="space-y-4">
                    {post.content.spouseOverview.pros.map((pro: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-blue-950">{pro.title}:</span>
                          <span className="text-blue-950/60"> {pro.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spouse Visa Cons */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-950 mb-4">Cons of the Spouse Visa:</h3>
                  <div className="space-y-4">
                    {post.content.spouseOverview.cons.map((con: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-5 w-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-red-400" />
                        </div>
                        <div>
                          <span className="font-semibold text-blue-950">{con.title}:</span>
                          <span className="text-blue-950/60"> {con.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Key Differences Table */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                  {post.content.keyDifferences.title}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-4 text-left font-semibold text-blue-950 border-b border-border">Aspect</th>
                        <th className="p-4 text-left font-semibold text-blue-950 border-b border-border">K-1 Fiancé Visa</th>
                        <th className="p-4 text-left font-semibold text-blue-950 border-b border-border">Spouse Visa (CR-1/IR-1)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {post.content.keyDifferences.table.map((row: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/40'}>
                          <td className="p-4 font-medium text-blue-950 border-b border-border">{row.aspect}</td>
                          <td className="p-4 text-blue-950/60 border-b border-border">{row.k1}</td>
                          <td className="p-4 text-blue-950/60 border-b border-border">{row.spouse}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Which Visa Is Right For You */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                  {post.content.whichVisa.title}
                </h2>
                <p className="text-blue-950/60 mb-8 leading-relaxed">
                  {post.content.whichVisa.intro}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* K-1 Choice */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-950 mb-4">
                      {post.content.whichVisa.k1Choice.title}
                    </h3>
                    <ul className="space-y-3">
                      {post.content.whichVisa.k1Choice.points.map((point: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-950/60">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spouse Choice */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-950 mb-4">
                      {post.content.whichVisa.spouseChoice.title}
                    </h3>
                    <ul className="space-y-3">
                      {post.content.whichVisa.spouseChoice.points.map((point: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-950/60">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">Conclusion</h2>
                <p className="text-blue-950/60 mb-4 leading-relaxed">
                  {post.content.conclusion.content}
                </p>
                <p className="text-blue-950/60 leading-relaxed">
                  {post.content.conclusion.advice}
                </p>
              </section>
            </>
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
