import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Phone } from "lucide-react";
import Link from "next/link";

const FAQs = () => {
  const generalFAQs = [
    {
      question: "Do you handle cases outside of your city or state?",
      answer:
        "Yes. Most immigration matters are federal, which means we can work with clients anywhere in the U.S. or abroad. Consultations are available by phone or video.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "We offer paid strategy consultations. This way you get real, tailored advice—not just a sales pitch. If you decide to work with us, the consultation fee is often applied toward your case.",
    },
    {
      question: "How do I get started?",
      answer:
        "Book a consultation online or contact us. We'll review your situation, explain your options, and outline next steps.",
    },
  ];

  const familyFAQs = [
    {
      question: "How long does it take to bring a spouse to the U.S.?",
      answer:
        "It depends. If your spouse is abroad, the consular process can take 12–18 months or longer. If they're in the U.S. and eligible for adjustment of status, it may be faster. Timelines vary based on USCIS and consulate backlogs.",
    },
    {
      question: "Can I sponsor my sibling?",
      answer:
        "Yes, if you are a U.S. citizen over 21. But sibling petitions have some of the longest wait times—often many years. We'll help you understand realistic timelines and alternatives.",
    },
    {
      question:
        "What's the difference between a K-1 fiancé visa and a marriage (CR/IR-1) visa?",
      answer:
        "A K-1 visa lets your fiancé come to the U.S. to marry you within 90 days, then apply for a green card. A CR/IR-1 is for couples already married and usually leads directly to a green card. The right choice depends on your timing and circumstances.",
    },
  ];

  const greenCardFAQs = [
    {
      question: "Can I apply for a green card while on a visitor visa?",
      answer:
        "Sometimes. It depends on your intent at entry, your relationship, and eligibility. A consultation is the best way to avoid missteps.",
    },
    {
      question:
        "Do I need a lawyer for the naturalization (citizenship) process?",
      answer:
        "Not always—but many people prefer guidance. A lawyer can help catch small mistakes, prepare you for the interview, and deal with complications (like prior travel or criminal history).",
    },
  ];

  const humanitarianFAQs = [
    {
      question: "What if I missed the one-year deadline for asylum?",
      answer:
        "You may still qualify if you can show changed circumstances or extraordinary reasons for the delay. Each case is fact-specific.",
    },
    {
      question:
        "Is information I share about abuse or crimes kept confidential?",
      answer:
        "Yes. USCIS and our office treat these cases with strict confidentiality. Safety and privacy are always priorities.",
    },
    {
      question:
        "Can children apply for Special Immigrant Juvenile (SIJ) status by themselves?",
      answer:
        "Usually, a trusted adult—like a parent, relative, or guardian—helps with the process. It also requires a state court order, so legal representation is important.",
    },
  ];

  const workingFAQs = [
    {
      question: "How much do your services cost?",
      answer:
        "It depends on the type of case. We'll explain fees clearly during your consultation, and offer flat-fee options whenever possible.",
    },
    {
      question: "How do you keep me updated on my case?",
      answer:
        "You'll receive regular updates and have direct access to ask questions. We know silence is stressful, so we keep communication open.",
    },
    {
      question: "What if my case gets denied?",
      answer:
        "A denial doesn't always mean the end. Depending on the situation, you may be able to refile, appeal, or try another path. We'll review your options honestly.",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-40 bg-white">
      <img
        src="/hero.jpg"
        alt=""
        className="hidden md:block  fixed bottom-0 -z-10 w-screen left-0"
      />
      <main className="section-padding">
        <div className="section-container">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-950/60 max-w-3xl mx-auto">
              Find answers to common questions about immigration law, our
              services, and working with our team. Can't find what you're
              looking for? We're here to help.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* General */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-950 mb-6">
                General
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {generalFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`general-${index}`}
                    className=" rounded-lg px-6 shadow-lg"
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-blue-950/60">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Family Immigration */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-950 mb-6">
                Family Immigration
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {familyFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`family-${index}`}
                    className=" rounded-lg px-6 shadow-lg"
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-blue-950/60">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Green Cards & Citizenship */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-950 mb-6">
                Green Cards & Citizenship
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {greenCardFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`greencard-${index}`}
                    className=" rounded-lg px-6 shadow-lg"
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-blue-950/60">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Humanitarian Options */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-950 mb-6">
                Humanitarian Options
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {humanitarianFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`humanitarian-${index}`}
                    className=" rounded-lg px-6 shadow-lg"
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-blue-950/60">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Working With Us */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-950 mb-6">
                Working With Us
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {workingFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`working-${index}`}
                    className=" rounded-lg px-6 shadow-lg"
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-blue-950/60">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* CTA Section */}
          <section className="text-center mt-16 pt-12 border-t">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-950/60 mb-8">
              We'd be happy to talk through your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consult"
                className="bg-gradient-to-r rounded-md from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Here – Free Guides
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FAQs;
