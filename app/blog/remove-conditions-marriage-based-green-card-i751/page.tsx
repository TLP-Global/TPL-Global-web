"use client";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogContent = {
  "remove-conditions-marriage-based-green-card-i751": {
    title: "How to Remove Conditions on a Marriage-Based Green Card (I-751)",
    description:
      "A comprehensive guide to understanding and completing the I-751 petition process to remove conditions from your marriage-based green card.",
    date: "October 4, 2025",
    readTime: "10 min read",
    category: "Green Cards & Citizenship",
    content: {
      intro:
        "If you're holding a marriage-based green card with conditions, you're probably familiar with the requirement to remove those conditions before your two-year conditional status expires. The process, formally known as filing Form I-751 (\"Petition to Remove Conditions on Residence\"), is crucial for gaining permanent residency status in the U.S. This blog will cover everything you need to know, provide an overview of the process, answer frequently asked questions, and offer insights to help you understand how to approach this task and answer frequently asked questions related to this specific search.",
      whatIs: {
        title: "What is the I-751 Petition?",
        content:
          "The I-751 petition is a necessary step for individuals who received conditional permanent residence status based on marriage to a U.S. citizen or lawful permanent resident. This petition is filed to remove the conditions on your green card and apply for permanent resident status. If you don't file it before the conditions are denied, you could lose your lawful status.",
      },
      whyRemove: {
        title: "Why Do You Need to Remove Conditions?",
        content:
          "When you marry a U.S. citizen or permanent resident and are granted a green card, it's typically a conditional permanent resident status if the marriage is less than two years old. This conditional status exists to prevent fraud in marriage-based immigration. Once the conditions are removed, you'll receive a 10-year unconditional green card and, in most cases, will be eligible to apply for U.S. citizenship after 5 years of permanent residence.",
      },
      steps: [
        {
          title: "File Form I-751",
          content:
            "The first step is to file Form I-751 with the U.S. Citizenship and Immigration Services (USCIS). You will need to submit a variety of documents, such as proof of a bona fide marriage, joint financial records, and other supporting evidence to show your relationship is legitimate.",
        },
        {
          title: "Prepare Supporting Documents",
          content:
            "You must provide strong evidence that your marriage is real, including:",
          documents: [
            "Joint tax returns",
            "Shared property or lease agreements",
            "Birth certificates of children (if applicable)",
            "Photos of you and your spouse together",
            "Affidavits from friends and family verifying your relationship",
          ],
        },
        {
          title: "Attend the Biometrics Appointment",
          content:
            "After submitting your I-751 form, USCIS will schedule a biometrics appointment where you will provide fingerprints, photos, and a signature for identity verification.",
        },
        {
          title: "Wait for USCIS to Review",
          content:
            "USCIS will process your application, which can take several months. During this time, you can work and travel in the U.S. if you filed your I-751 petition before your conditional green card expires.",
        },
        {
          title: "Conditional Green Card Extension",
          content:
            "Once USCIS accepts your I-751 petition, they will grant an extension of your conditional permanent residency for up to 18 months, allowing you to remain in the U.S. legally while the petition is pending.",
        },
        {
          title: "Interview (If Necessary)",
          content:
            "In some cases, USCIS may require you and your spouse to attend an interview. This happens if they need further proof that your marriage is legitimate or if there are concerns about the information provided.",
        },
        {
          title: "Decision",
          content:
            "After processing your I-751 petition, USCIS will either approve it and remove the conditions on your green card or deny it. If approved, you will receive a new 10-year green card.",
        },
      ],
      faqs: [
        {
          question:
            "1. How long does it take to remove conditions on a marriage-based green card?",
          answer:
            "It typically takes between 12 to 18 months for USCIS to process your I-751 petition. However, times can vary based on the USCIS caseload and your specific situation.",
        },
        {
          question: "2. What happens if I don't file Form I-751?",
          answer:
            "Failing to file Form I-751 within the designated time frame (usually within the 90 days before your green card expires) can result in the loss of your permanent resident status and possible deportation.",
        },
        {
          question: "3. Can I file I-751 if my spouse and I are separated?",
          answer:
            "Yes, it's possible to file for the removal of conditions if you're separated or divorced from your spouse. However, you must show that your marriage was genuine and not fraudulent. You will need to submit extra documentation to support your claim, such as evidence of the dissolution of the marriage or other circumstances that led to the separation.",
        },
        {
          question: "4. Do I need an attorney to file I-751?",
          answer:
            "While an attorney is not required, it can be helpful to have one, especially if there are complexities in your case, such as a divorce, separation, or other unique situations. An immigration attorney can guide you through the filing process, help prepare your evidence, and ensure that all necessary steps are followed.",
        },
        {
          question:
            "5. What documents should I include with my I-751 petition?",
          answer:
            "Some key documents to include are:\n\n• Your conditional green card and passport.\n• A copy of your marriage certificate.\n• Evidence of a genuine relationship (tax records, bank statements, photos, etc.).\n• Proof of joint residence or shared property.\n• Any affidavits or letters from friends, family, or colleagues that can attest to the authenticity of your marriage.",
        },
        {
          question: "6. What happens if USCIS denies my I-751 petition?",
          answer:
            "If your petition is denied, you may be asked to leave the U.S. or face removal proceedings. You can appeal the decision or provide additional evidence if new evidence is provided.",
        },
        {
          question: "7. Can I travel while my I-751 petition is pending?",
          answer:
            "Yes, you can travel while your petition is pending, but you must ensure you have valid travel documents, such as a valid passport and advance parole if needed. Without this, you might face issues re-entering the U.S.",
        },
      ],
      conclusion: {
        content:
          "Filing Form I-751 is an essential step in securing permanent resident status after being granted a conditional green card. The process requires careful preparation of supporting documents, timely filing, and potentially attending an interview. By following the outlined steps in this blog, you can ensure a smoother and more efficient experience with USCIS.",
        advice:
          "If you're looking for more information on the process, the I-751 petition, or legal support for your green card journey, don't hesitate to reach out to an immigration lawyer or expert.",
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
  const post = blogContent["remove-conditions-marriage-based-green-card-i751"];

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

          {/* I-751 Remove Conditions Content */}
          <>
            {/* What Is Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                {post.content.whatIs.title}
              </h2>
              <p className="text-blue-950/60 leading-relaxed">
                {post.content.whatIs.content}
              </p>
            </section>

            {/* Why Remove Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                {post.content.whyRemove.title}
              </h2>
              <p className="text-blue-950/60 leading-relaxed">
                {post.content.whyRemove.content}
              </p>
            </section>

            {/* Steps Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-8">
                Steps to Remove Conditions on a Marriage-Based Green Card
              </h2>
              <div className="space-y-8">
                {post.content.steps.map((step: any, index: number) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold text-blue-950 mb-4">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-blue-950/60 mb-4">{step.content}</p>

                    {step.documents && (
                      <div className="bg-muted/50 p-4 rounded-md">
                        <ul className="space-y-2">
                          {step.documents.map(
                            (doc: string, docIndex: number) => (
                              <li
                                key={docIndex}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-blue-950/60 text-sm">
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

            {/* Common Questions Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-8">
                Common Questions About Removing Conditions
              </h2>
              <p className="text-blue-950/60 mb-6 leading-relaxed">
                Here are some of the most frequently asked questions (FAQ) about
                the process of removing conditions on a marriage-based green
                card.
              </p>
              <div className="space-y-6">
                {post.content.faqs.map((faq: any, index: number) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-blue-950 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-blue-950/60 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                Conclusion
              </h2>
              <p className="text-blue-950/60 mb-4 leading-relaxed">
                {post.content.conclusion.content}
              </p>
              <p className="text-blue-950/60 leading-relaxed">
                {post.content.conclusion.advice}
              </p>
            </section>

          </>

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
