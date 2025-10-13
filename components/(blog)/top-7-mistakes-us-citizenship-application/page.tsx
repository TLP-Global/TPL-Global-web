"use client";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogContent = {
  "top-7-mistakes-us-citizenship-application": {
    title: "Top 7 Mistakes That Can Derail Your U.S. Citizenship Application",
    description:
      "Learn about the most common errors applicants make when applying for U.S. citizenship and how to avoid them.",
    date: "September 26, 2025",
    readTime: "7 min read",
    category: "Citizenship",
    content: {
      intro:
        "Applying for U.S. citizenship isn't just paperwork—it's the final step in years of effort, patience, and planning. The process is strict, and even small slip-ups can slow things down or lead to outright denial. The good news is that most mistakes are avoidable if you know what to watch out for.",
      overview:
        "Here are the seven most common errors applicants make, and how to avoid them.",
      mistakes: [
        {
          number: 1,
          title: "Incomplete or Incorrect Forms",
          description:
            "This is the number one reason applications get rejected. USCIS is unforgiving about missing details.",
          howToAvoid: [
            "Always download the newest version of Form N-400 from the USCIS website",
            'Answer every question. If something doesn\'t apply, write "N/A" or "None"',
            "Double-check names, dates, and addresses against past applications",
            "Don't forget signatures and dates",
          ],
        },
        {
          number: 2,
          title: "Missing or Wrong Supporting Documents",
          description:
            "USCIS won't just take your word for it—you have to prove every claim.",
          howToAvoid: [
            "Use the USCIS checklist for Form N-400",
            "Include required items like your green card copy, tax records, marriage or divorce certificates, and full travel history",
            "Translate non-English documents using certified translators",
            "Keep your packet organized and easy to review",
          ],
        },
        {
          number: 3,
          title: "Applying Before You're Eligible",
          description:
            "Some applicants rush the process and file too soon. USCIS will deny you if you don't meet the requirements on the filing date.",
          howToAvoid: [
            "Count your years of permanent residence—five years for most, three if married to a U.S. citizen",
            "Make sure you meet the physical presence requirement and haven't spent too much time abroad",
            'Maintain "good moral character" during the required period (tax compliance, no serious criminal issues, etc.)',
          ],
        },
        {
          number: 4,
          title: "Paying the Wrong Fee",
          description:
            "Application fees change. Submitting the wrong amount is an automatic rejection.",
          howToAvoid: [
            "Confirm the current fee on the USCIS website the day you file",
            "Use an accepted payment method (check, money order, or online payment)",
            "Send the exact amount—no rounding, no errors",
          ],
        },
        {
          number: 5,
          title: "Poor Interview Preparation",
          description:
            "The naturalization interview is where USCIS officers look for clarity, honesty, and consistency.",
          howToAvoid: [
            "Arrive early with your appointment letter and documents",
            "Review your application beforehand—officers will ask you about it directly",
            "Answer clearly and truthfully, even if a question feels uncomfortable",
          ],
        },
        {
          number: 6,
          title: "Underestimating the Citizenship Test",
          description:
            "The civics and English tests are straightforward, but not if you walk in unprepared.",
          howToAvoid: [
            "Study the official 100 civics questions from USCIS",
            "Practice reading, writing, and speaking in English daily",
            "Take practice tests to build confidence and track progress",
          ],
        },
        {
          number: 7,
          title: "Forgetting to Follow Up",
          description:
            "Filing isn't the end of the process. If you ignore follow-ups, your case can stall or be denied.",
          howToAvoid: [
            "Create a USCIS online account to track your case",
            "Respond quickly to any Request for Evidence (RFE)",
            "Keep copies of every document and letter you send or receive",
          ],
        },
      ],
      finalTip:
        "Rely only on official USCIS information. Keep your records organized and your answers consistent. If your case has complications, professional guidance can save time and prevent costly mistakes.",
      expertHelp: {
        name: "Tejas G. Patel, Esq.",
        description:
          "Founded TPL Global with a simple belief that immigration clients deserve both sharp legal strategy and genuine care. Known for his tenacity, creative problem-solving, and clear communication, Tejas has helped individuals and families navigate complex immigration challenges with confidence.",
      },
    },
  },
};

export default function Blog() {
  const post = blogContent["top-7-mistakes-us-citizenship-application"];

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

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-950 mb-8">
              7 Common Mistakes to Avoid
            </h2>
            <div className="space-y-8">
              {post.content.mistakes.map((mistake: any, index: number) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-blue-950 mb-4">
                    {mistake.number}. {mistake.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {mistake.description}
                  </p>

                  <div className="bg-muted/50 p-4 rounded-md">
                    <h4 className="font-semibold text-blue-950 mb-3">
                      How to avoid it:
                    </h4>
                    <ul className="space-y-2">
                      {mistake.howToAvoid.map(
                        (tip: string, tipIndex: number) => (
                          <li key={tipIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {tip}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-950 mb-6">
              Final Tip
            </h2>
            <div className="bg-secondary border border-primary/20 rounded-lg p-6">
              <p className="text-black leading-relaxed">
                {post.content.finalTip}
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Need Expert Help?
            </h2>
            <p className="text-blue-950/60 mb-6 max-w-2xl mx-auto">
              Tejas G. Patel, Esq. founded TPL Global with a simple belief
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
