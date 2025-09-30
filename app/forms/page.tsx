import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, ExternalLink, AlertCircle } from "lucide-react";
import Link from "next/link";

const Forms = () => {
  const formCategories = [
    {
      title: "Family-Based Immigration",
      forms: [
        {
          name: "Form I-130, Petition for Alien Relative",
          url: "https://www.uscis.gov/i-130",
        },
        {
          name: "Form I-485, Application to Register Permanent Residence or Adjust Status",
          url: "https://www.uscis.gov/i-485",
        },
        {
          name: "Form I-864, Affidavit of Support",
          url: "https://www.uscis.gov/i-864",
        },
        {
          name: "Form I-751, Petition to Remove Conditions on Residence",
          url: "https://www.uscis.gov/i-751",
        },
      ],
    },
    {
      title: "Humanitarian Relief",
      forms: [
        {
          name: "Form I-589, Application for Asylum and Withholding of Removal",
          url: "https://www.uscis.gov/i-589",
        },
        {
          name: "Form I-918, Petition for U Nonimmigrant Status (U Visa)",
          url: "https://www.uscis.gov/i-918",
        },
        {
          name: "Form I-914, Application for T Nonimmigrant Status (T Visa)",
          url: "https://www.uscis.gov/i-914",
        },
        {
          name: "Form I-360, Petition for Amerasian, Widow(er), or Special Immigrant (VAWA & SIJ cases)",
          url: "https://www.uscis.gov/i-360",
        },
      ],
    },
    {
      title: "Green Cards & Citizenship",
      forms: [
        {
          name: "Form N-400, Application for Naturalization",
          url: "https://www.uscis.gov/n-400",
        },
        {
          name: "Form I-90, Application to Replace Permanent Resident Card (Green Card Renewal/Replacement)",
          url: "https://www.uscis.gov/i-90",
        },
      ],
    },
  ];

  const templates = [
    "Family Green Card Checklist – key documents to gather for I-130 and I-485.",
    "Citizenship Interview Prep Worksheet – common questions and space to practice answers.",
    "Visitor Visa (B-1/B-2) Travel Prep Sheet – what to carry and how to answer at the port of entry.",
  ];

  return (
    <div className="min-h-screen bg-white flex py-40 flex-col">
      <img
        src="/hero.jpg"
        alt="Notary seal stamping official legal documents"
        className="hidden md:block fixed bottom-0 -z-10  w-screen left-0"
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className=" py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl text-blue-950 md:text-5xl font-bold mb-6 text-center">
              Forms & Document Templates
            </h1>
            <p className="text-lg text-blue-950/60 text-center mb-8">
              Immigration paperwork can be confusing. To help you get oriented,
              we've listed the most commonly used forms and templates here.
              These are official USCIS forms—always free to download.
            </p>

            <div className="mb-8 bg-red-800/10 p-4 rounded-md">
              <div className="h-4 w-4" />
              <div className="font-bold">Important!</div>
              <div>
                The information below is for general educational purposes only.
                Using the correct form is just the first step; how you prepare
                it and what evidence you include can make or break a case.
                Before you file, consider booking a consultation so we can help
                you avoid delays or denials.
              </div>
            </div>
          </div>
        </section>

        {/* Forms Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            {formCategories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-3xl text-blue-950 font-bold mb-6">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.forms.map((form, formIdx) => (
                    <Card key={formIdx} className="bg-secondary">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-950">
                          {form.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="outline" className="gap-2">
                          <a
                            href={form.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-4 w-4" />
                            USCIS Form & Instructions
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl text-blue-950 font-bold mb-6">
              Templates & Checklists (Provided by Our Office)
            </h2>
            <p className="text-blue-950/60 mb-8">
              To make things easier, we've also prepared plain-English templates
              and checklists that many clients find helpful:
            </p>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4 mb-6">
                  {templates.map((template, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Download className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{template}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
                >
                  <Link href="/contact">Get Free Templates</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Note */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-blue-950/5">
              <CardHeader>
                <CardTitle className=" text-center text-2xl text-blue-950">Final Note</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-blue-950/60 text-center">
                  Having the right form is only the start. Success comes from
                  knowing how to complete it, what evidence to attach, and how
                  to tell your story in a way that USCIS understands. That's
                  where we come in.
                </p>
                <Button  size="lg" 
                  className="bg-gradient-to-r from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
                >
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Forms;
