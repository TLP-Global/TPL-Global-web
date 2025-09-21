"use client";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";
import { blogContent } from "./blogs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !(slug in blogContent)) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-950 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-blue-950/60">
              The blog post you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const post = blogContent[slug as keyof typeof blogContent];

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
                        <span className="text-blue-950/60 text-sm">
                          {item}
                        </span>
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
                className="text-lg hover:bg-transparent bg-transparent text-white px-8 py-4 h-full ">
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
