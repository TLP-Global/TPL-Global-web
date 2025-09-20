import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Review the terms of use for accessing and using TPL Global Immigration Law Firm's website and services.",
  alternates: {
    canonical: "https://tplglobal.net/terms-of-use",
  },
};
const TermsOfUse = () => {
  return (
    <div>
      <main className="section-container max-w-7xl mx-auto py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          <p className="text-blue-950/60 mb-8">Last updated: 10.09.2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <p>
              Welcome to the website of T.P.L. Global ("we," "our," or "us"). By
              accessing or using this site, you agree to the following terms.
              Please read them carefully.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">No Legal Advice</h2>
              <p>
                The information on this site is for general informational
                purposes only. It is not legal advice and should not be relied
                on as such. Reading this website or contacting us through it
                does not create an attorney–client relationship. An
                attorney–client relationship is only formed once we have a
                signed agreement to represent you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Use of the Website
              </h2>
              <p className="mb-4">
                You agree to use this site only for lawful purposes and in a way
                that does not harm or interfere with the rights of others.
              </p>
              <p className="mb-4">You may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Attempt to gain unauthorized access to this site or our
                  systems.
                </li>
                <li>Use this site to transmit harmful or malicious code.</li>
                <li>
                  Copy or republish material from this site without permission.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this site—including text, graphics, logos, and
                design—is owned by or licensed to T.P.L. Global. You may view
                and download content for personal use, but you may not
                reproduce, distribute, or use it for commercial purposes without
                prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
              <p>
                Our website may link to external sites for convenience. We are
                not responsible for the content or policies of those third-party
                sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Limitation of Liability
              </h2>
              <p>
                We strive to keep the information on this site accurate and up
                to date, but we make no guarantees. We are not responsible for
                any losses or damages resulting from reliance on the content of
                this site or from the use of this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms of Use from time to time. Updates will
                be posted on this page with the revised date. Continued use of
                the site after changes means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p>
                These terms are governed by the laws of the Commonwealth of
                Massachusetts, without regard to conflict of law rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about these Terms of Use, please contact
                us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold">T.P.L. Global</p>
                <p>Email: Tejas.p@tplglobal.net</p>
                <p>Office: 617-391-7741</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
