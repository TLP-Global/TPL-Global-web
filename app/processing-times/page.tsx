import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

const FAQs = () => {
  return (
    <div className="min-h-screen px-4 bg-white py-40">
      <img src="/hero.jpg" alt="" className="hidden md:block fixed bottom-0 -z-10  w-screen left-0" />
      <main className="section-padding ">
        <div className="section-container max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Processing Times & Priority Dates
            </h1>
            <p className="text-xl text-blue-950/60 max-w-3xl mx-auto">
              Immigration cases don’t move at the same speed for everyone. The
              timeline depends on the type of application, where it’s being
              processed, and sometimes even the workload of a specific USCIS
              office or U.S. consulate. Here’s how to make sense of it.
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              USCIS Case Processing Times
            </h3>
            <p className="text-blue-950/60 mb-4">
              USCIS updates its estimates based on the type of application and
              service center handling it. You'll need:
            </p>
            <ul className="list-disc list-inside text-blue-950/60 mb-4 space-y-1">
              <li>The form number (for example, I-130, I-485, N-400).</li>
              <li>
                The field office or service center listed on your receipt
                notice.
              </li>
            </ul>
            <p className="text-blue-950 font-medium flex">
              <a
                href="https://egov.uscis.gov/processing-times/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 underline"
              >
                USCIS Check Case Processing Times
              </a>
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              Visa Bulletin & Priority Date
            </h3>
            <p className="text-blue-950/60 mb-4">
              If you're applying through a family or employment preference
              category, your wait time is tied to your priority date—the date
              USCIS received your petition. The U.S. Department of State
              publishes a monthly Visa Bulletin showing which categories are
              "current" (eligible to move forward).
            </p>
            <p className="text-blue-950 font-medium">
              <br />
              <a
                href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 underline"
              >
                U.S. Department of State Visa Bulletin
              </a>
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              How Priority Dates Work
            </h3>
            <ul className="list-disc list-inside text-blue-950/60 space-y-2">
              <li>
                Immediate relatives of U.S. citizens (spouses, unmarried
                children under 21, parents) do not have priority dates—there's
                no annual cap.
              </li>
              <li>
                Family preference categories (siblings, adult children, certain
                relatives of green card holders) do have priority dates, and
                wait times can be several years or even longer.
              </li>
              <li>
                Your priority date must be "current" in the Visa Bulletin before
                you can complete the green card process.
              </li>
            </ul>
          </div>

          <div className="bg-amber-600/10 border border-accent/20 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              What This Really Means for You
            </h3>
            <ul className="list-disc list-inside text-blue-950/60 space-y-2">
              <li>
                Processing times are estimates, not guarantees. Delays are
                common.
              </li>
              <li>
                A petition can be approved by USCIS, but you may still wait
                years for a visa number if you're in a capped category.
              </li>
              <li>
                Staying on top of these updates is important to avoid missing
                your window to act.
              </li>
            </ul>
          </div>

          <div className="text-center bg-blue-950/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              Need Help Understanding Your Timeline?
            </h3>
            <p className="text-blue-950/60 mb-6">
              If you're not sure how long your case might take—or what your
              priority date means—we can walk you through it during a
              consultation.
            </p>
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQs;
