"use client";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogContent = {
  "step-by-step-guide-us-visitor-visa-b1-b2": {
    title: "Step by Step Guide to Applying for a U.S. Visitor Visa B1/B2",
    description:
      "A comprehensive guide to applying for U.S. visitor visas for business and tourism purposes.",
    date: "September 22, 2025",
    readTime: "8 min read",
    category: "Visitor Visas",
    content: {
      intro:
        "A U.S. visitor visa B1/B2 lets you travel for business, tourism, or medical reasons. B1 is for business visits. B2 is for tourism, family visits, or treatment. Both are issued together in most cases.",
      overview:
        "AI now plays a role in visa processing. U.S. systems use AI for document verification, fraud detection, and faster processing. This doesn't change what you need to apply, but it means accurate and complete information is more important than ever.",
      whoNeeds: [
        "Tourists planning vacations",
        "Family or friends visiting relatives in the U.S.",
        "Business visitors for meetings or conferences",
        "People seeking medical treatment",
      ],
      steps: [
        {
          title: "Complete DS-160 Form",
          content: [
            "Go to the Consular Electronic Application Center website",
            "Fill out the DS-160 online form carefully",
            "Save the confirmation page with the barcode",
          ],
          tips: [
            "Answer honestly and consistently",
            "Save progress as you go",
            "Use the same details as in your passport",
          ],
        },
        {
          title: "Pay the Visa Fee",
          content: [
            "Non-refundable fee around $185 USD",
            "Pay online or at a designated bank depending on your country",
            "Keep the receipt for scheduling your appointment",
          ],
        },
        {
          title: "Schedule Appointments",
          content: [
            "You usually need two appointments:",
            "One at the Visa Application Center (VAC) for biometrics and photo",
            "One in the U.S. Embassy or Consulate for your interview",
            "Book through the U.S. visa application website for your region.",
          ],
        },
        {
          title: "Prepare Required Documents",
          content: [
            "Valid passport with at least 6 months validity beyond your stay",
            "DS-160 confirmation page",
            "Visa fee receipt",
            "Appointment confirmation",
            "Photo as per U.S. visa photo guidelines",
          ],
          supporting: [
            "Employment proof",
            "Bank statements",
            "Property documents",
            "Invitation letters if applicable",
          ],
        },
        {
          title: "Attend the VAC Appointment",
          content: [
            "Provide fingerprints",
            "Have your photo taken",
            "Carry only required papers",
          ],
        },
        {
          title: "Attend the Visa Interview",
          content: [
            "Arrive early with all documents",
            "Answer clearly and honestly",
            "Show proof of ties to your home country like job, family, or property",
            "The officer will decide based on your answers and documents.",
          ],
        },
        {
          title: "Wait for Processing",
          content: [
            "If approved, your passport will be kept for visa stamping",
            "Processing time varies by location",
            "Track status on the Consular Electronic Application Center site",
          ],
        },
        {
          title: "Receive Passport with Visa",
          content: [
            "Collect your passport or wait for delivery",
            "Check details on the visa carefully",
          ],
        },
      ],
      faqs: [
        {
          question: "How long is the B1/B2 visa valid?",
          answer: "Usually 1 to 10 years depending on nationality.",
        },
        {
          question: "How long can I stay in the U.S.?",
          answer: "Usually up to 6 months per visit.",
        },
        {
          question: "Can I extend my stay?",
          answer: "Yes. File Form I-539 before your status expires.",
        },
        {
          question: "Do I need travel insurance?",
          answer: "Not required but recommended.",
        },
        {
          question: "What if my visa is refused?",
          answer: "You can reapply. Fix issues noted in your refusal.",
        },
        {
          question: "Can AI affect approval?",
          answer:
            "AI is used in screening, but final decisions are made by officers. Accurate information reduces risk of denial.",
        },
      ],
    },
  },
};

export default function Blog() {
  const post = blogContent["step-by-step-guide-us-visitor-visa-b1-b2"];

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

          {/* Who Needs Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-950 mb-6">
              Who Needs a Visitor Visa
            </h2>
            <ul className="space-y-3">
              {post.content.whoNeeds.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-950/60">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-blue-950/60 mt-4 italic">
              Citizens of Visa Waiver Program countries may not need this visa
              for short visits.
            </p>
          </section>

          {/* Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-950 mb-8">
              Application Steps
            </h2>
            <div className="space-y-8">
              {post.content.steps.map((step: any, index: number) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-blue-950 mb-4">
                    Step {index + 1}: {step.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {step.content.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-blue-950/60 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {step.tips && (
                    <div className="bg-muted/50 p-4 rounded-md mt-4">
                      <h4 className="font-semibold text-blue-950 mb-2">
                        Tips:
                      </h4>
                      <ul className="space-y-1">
                        {step.tips.map((tip: string, tipIndex: number) => (
                          <li
                            key={tipIndex}
                            className="text-sm text-blue-950/60"
                          >
                            • {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.supporting && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-blue-950 mb-2">
                        Supporting Documents:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.supporting.map(
                          (doc: string, docIndex: number) => (
                            <li
                              key={docIndex}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-3 w-3 text-blue-500" />
                              <span className="text-sm text-blue-950/60">
                                {doc}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
              Tejas G. Patel, Esq. founded T.P.L. Global, LLC with a simple belief
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
