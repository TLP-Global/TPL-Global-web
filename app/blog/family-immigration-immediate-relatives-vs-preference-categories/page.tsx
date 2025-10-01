
"use client";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogContent = {
'family-immigration-immediate-relatives-vs-preference-categories': {
    title: 'Family Immigration: Immediate Relatives vs Preference Categories Explained',
    description: 'Understanding the difference between Immediate Relatives and Preference Categories can be a crucial factor in determining your immigration pathway.',
    date: "September 29, 2025",
    readTime: '8 min read',
    category: 'Family Immigration',
    content: {
      intro: 'When it comes to family immigration in the United States, understanding the difference between Immediate Relatives and Preference Categories can be a crucial factor in determining your immigration pathway. Both categories have specific eligibility requirements, processing times, and priority dates that affect the waiting period for family-based immigration.',
      overview: 'In this blog, we will break down the difference between these two categories, provide an overview of family-based immigration, and answer the most commonly asked questions related to the topic.',
      whatIsFamily: {
        title: 'What Is Family-Based Immigration?',
        content: 'Family-based immigration is one of the primary pathways to U.S. permanent residency (green card). U.S. citizens and legal permanent residents (green card holders) can sponsor certain family members for permanent residency. However, the type of family relationship determines the category and processing time for the immigration petition.'
      },
      categories: {
        title: 'Immediate Relatives vs Preference Categories',
        intro: 'The two main family-based categories for immigration to the U.S. are Immediate Relatives and Preference Categories. These categories determine the priority and waiting time for family members applying for a green card.',
        immediateRelatives: {
          title: '1. Immediate Relatives:',
          description: 'Immediate Relatives include close family members of U.S. citizens. The U.S. immigration system prioritizes these relationships, and there is no annual cap on the number of visas issued under this category. This means that immediate relatives are given a higher priority, and their immigration process is generally faster.',
          noLimit: 'Since there is no numerical limit for immediate relatives, they do not have to wait for a visa number to become available. This makes their immigration process relatively quick compared to other family members under preference categories.',
          whoQualifies: {
            title: 'Who Qualifies as an Immediate Relative?',
            list: [
              'Spouse of a U.S. citizen',
              'Children under 21 years of age who are unmarried (both biological and adopted)',
              'Parents of a U.S. citizen (if the U.S. citizen is over 21)'
            ]
          }
        },
        preferenceCategories: {
          title: '2. Preference Categories:',
          description: 'Unlike immediate relatives, Preference Categories have annual limits on the number of visas available. These categories are divided into four preference groups based on the relationship between the applicant and the sponsoring U.S. citizen or permanent resident.',
          categories: [
            {
              title: 'First Preference (F1):',
              description: 'Unmarried adult children (21 years or older) of U.S. citizens.'
            },
            {
              title: 'Second Preference (F2):',
              subsections: [
                'Spouses and children (under 21 years) of lawful permanent residents (green card holders).',
                'Unmarried children (21 years or older) of lawful permanent residents.'
              ]
            },
            {
              title: 'Third Preference (F3):',
              description: 'Married children of U.S. citizens.'
            },
            {
              title: 'Fourth Preference (F4):',
              description: 'Siblings of U.S. citizens (if the U.S. citizen is over 21).'
            }
          ]
        },
        keyDifferences: {
          title: 'Key Differences Between Immediate Relatives and Preference Categories',
          table: [
            {
              factor: 'Who Qualifies',
              immediateRelatives: 'Spouses, children (under 21), parents of U.S. citizens',
              preferenceCategories: 'Various relatives of U.S. citizens and green card holders'
            },
            {
              factor: 'Visa Cap',
              immediateRelatives: 'No annual cap',
              preferenceCategories: 'Subject to annual cap and visa limits'
            },
            {
              factor: 'Processing Time',
              immediateRelatives: 'Faster processing (no wait for visa availability)',
              preferenceCategories: 'Longer processing due to visa availability and wait times'
            },
            {
              factor: 'Priority',
              immediateRelatives: 'High priority',
              preferenceCategories: 'Lower priority, subject to waiting lists'
            }
          ]
        }
      },
      processingTimes: {
        title: 'How Long Does It Take to Immigrate Based on Family?',
        content: 'The processing time for family-based immigration depends heavily on the category under which the applicant is applying. Immediate Relatives typically face shorter wait times since there is no annual cap, while Preference Categories may experience delays due to visa availability.',
        visaBulletin: 'For Preference Categories, the U.S. Department of State\'s Visa Bulletin provides updates on the availability of green cards in each category. Waiting times can range from a few months to several years, depending on the category and country of origin.'
      },
      faqs: [
        {
          question: '1. Can Green Card Holders Sponsor Family Members?',
          answer: 'Yes, green card holders (lawful permanent residents) can sponsor their spouse, unmarried children under 21, and unmarried children 21 years or older under the F2 category.'
        },
        {
          question: '2. What Is the Visa Bulletin, and How Does It Affect My Application?',
          answer: 'The Visa Bulletin is a monthly publication by the U.S. Department of State that provides updates on visa availability for family-based and employment-based green card categories. It indicates the current processing times and priority dates for applicants in preference categories.'
        },
        {
          question: '3. How Do I Know Which Category My Family Member Falls Into?',
          answer: 'The U.S. immigration system has clear guidelines about which relatives fall into which category. Immediate relatives are those closest to a U.S. citizen (spouse, minor children, and parents), while others may fall under one of the preference categories based on their relationship and whether their sponsor is a U.S. citizen or a green card holder.'
        },
        {
          question: '4. How Long Does It Take for a Spouse to Get a Green Card?',
          answer: 'The processing time for a spouse of a U.S. citizen is generally quicker because spouses are considered immediate relatives, which are not subject to visa limits. It can take anywhere from 10 months to 2 years, depending on various factors such as location and application completeness.'
        },
        {
          question: '5. How Can I Speed Up My Family Immigration Process?',
          answer: 'Unfortunately, there is no way to accelerate the process for Preference Categories, as they are subject to visa availability. However, applicants under the Immediate Relative category can expect faster processing times. Ensuring that all documentation is complete and correct can also help avoid delays.'
        }
      ],
      whyImportant: {
        title: 'Why Is Understanding These Categories Important?',
        content: 'Understanding the difference between Immediate Relatives and Preference Categories is vital for those seeking family-based immigration. It directly affects how long one may need to wait for a green card, the eligibility requirements, and the type of family members who can be sponsored.',
        planning: 'By familiarizing yourself with these categories, you can better plan your immigration path and avoid unnecessary delays in the process.'
      },
      conclusion: {
        title: 'Conclusion',
        content: 'Navigating family-based immigration can be complex, but understanding the distinction between Immediate Relatives and Preference Categories is essential. Immediate Relatives receive the fastest processing times and are not subject to numerical limits, while Preference Categories face longer wait times due to annual caps and priority dates.',
        advice: 'If you are considering sponsoring a family member or applying for a family-based green card, consulting with an immigration attorney or expert can help clarify your specific situation and ensure the smooth processing of your application.',
        futureUpdates: 'For more insights on family immigration stay tuned for future updates!'
      },
      expertHelp: {
        title: 'Need Expert Help',
        name: 'Tejas G. Patel, Esq.',
        description: 'founded T.P.L. Global with a simple belief that immigration clients deserve both sharp legal strategy and genuine care. Known for his tenacity, creative problem-solving, and clear communication, Tejas has helped individuals and families navigate complex immigration challenges with confidence.'
      }
    }
  },
};

export default function Blog() {
  const post = blogContent["family-immigration-immediate-relatives-vs-preference-categories"];

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
            <h2 className="text-3xl font-semibold text-blue-950 mb-6">Overview</h2>
            <p className="text-blue-950/60 leading-relaxed">
              {post.content.overview}
            </p>
          </section>
          {/* Family Immigration Content */}
            <>
              {/* What Is Family-Based Immigration */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                  {post.content.whatIsFamily.title}
                </h2>
                <p className="text-blue-950/60 leading-relaxed">
                  {post.content.whatIsFamily.content}
                </p>
              </section>

              {/* Immediate Relatives vs Preference Categories */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-8">
                  {post.content.categories.title}
                </h2>
                <p className="text-blue-950/60 mb-8 leading-relaxed">
                  {post.content.categories.intro}
                </p>

                {/* Immediate Relatives */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-blue-950 mb-4">
                    {post.content.categories.immediateRelatives.title}
                  </h3>
                  <p className="text-blue-950/60 mb-4 leading-relaxed">
                    {post.content.categories.immediateRelatives.description}
                  </p>
                  <p className="text-blue-950/60 mb-6 leading-relaxed">
                    {post.content.categories.immediateRelatives.noLimit}
                  </p>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-950 mb-4">
                      {post.content.categories.immediateRelatives.whoQualifies.title}
                    </h4>
                    <ul className="space-y-3">
                      {post.content.categories.immediateRelatives.whoQualifies.list.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-950/60">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Preference Categories */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-blue-950 mb-4">
                    {post.content.categories.preferenceCategories.title}
                  </h3>
                  <p className="text-blue-950/60 mb-6 leading-relaxed">
                    {post.content.categories.preferenceCategories.description}
                  </p>

                  <div className="space-y-6">
                    {post.content.categories.preferenceCategories.categories.map((category: any, index: number) => (
                      <div key={index} className="border border-border rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-blue-950 mb-3">{category.title}</h4>
                        {category.description && (
                          <p className="text-blue-950/60 mb-3">{category.description}</p>
                        )}
                        {category.subsections && (
                          <ul className="space-y-2">
                            {category.subsections.map((subsection: string, subIndex: number) => (
                              <li key={subIndex} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-blue-950/60 text-sm">{subsection}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Differences Table */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-blue-950 mb-6">
                    {post.content.categories.keyDifferences.title}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-border rounded-lg">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="p-4 text-left font-semibold text-blue-950 border-b border-border">Factor</th>
                          <th className="p-4 text-left font-semibold text-blue-950 border-b border-border">Immediate Relatives</th>
                          <th className="p-4 text-left font-semibold text-blue-950 border-b border-border">Preference Categories</th>
                        </tr>
                      </thead>
                      <tbody>
                        {post.content.categories.keyDifferences.table.map((row: any, index: number) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                            <td className="p-4 font-medium text-blue-950 border-b border-border">{row.factor}</td>
                            <td className="p-4 text-blue-950/60 border-b border-border">{row.immediateRelatives}</td>
                            <td className="p-4 text-blue-950/60 border-b border-border">{row.preferenceCategories}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Processing Times */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                  {post.content.processingTimes.title}
                </h2>
                <p className="text-blue-950/60 mb-4 leading-relaxed">
                  {post.content.processingTimes.content}
                </p>
                <p className="text-blue-950/60 leading-relaxed">
                  {post.content.processingTimes.visaBulletin}
                </p>
              </section>

              {/* Why Important */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                  {post.content.whyImportant.title}
                </h2>
                <p className="text-blue-950/60 mb-4 leading-relaxed">
                  {post.content.whyImportant.content}
                </p>
                <p className="text-blue-950/60 leading-relaxed">
                  {post.content.whyImportant.planning}
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-950 mb-6">
                  {post.content.conclusion.title}
                </h2>
                <p className="text-blue-950/60 mb-4 leading-relaxed">
                  {post.content.conclusion.content}
                </p>
                <p className="text-blue-950/60 mb-4 leading-relaxed">
                  {post.content.conclusion.advice}
                </p>
                <p className="text-blue-950/60 leading-relaxed">
                  {post.content.conclusion.futureUpdates}
                </p>
              </section>
            </>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-950 mb-8">Common Questions</h2>
            <div className="space-y-6">
              {post.content.faqs.map((faq: any, index: number) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-blue-950 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-blue-950/60">
                    {faq.answer}
                  </p>
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
