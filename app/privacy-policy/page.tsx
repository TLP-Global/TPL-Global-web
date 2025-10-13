import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read our privacy policy to understand how we protect client data and personal information.",
  alternates: {
    canonical: "https://tplglobal.net/privacy-policy",
  },
};

const PrivacyPolicy = () => {
  return (
    <div>
    <main className="min-h-screen px-4 py-40 bg-white">
        <img
          src="/hero.jpg"
          alt="Notary seal stamping official legal documents"
          className="hidden md:block  fixed bottom-0 -z-10  w-screen left-0"
        />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-blue-950/60 mb-8">Last updated: 10.09.2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <p>
              TPL Global ("we," "our," or "us") respects your privacy. This
              policy explains how we collect, use, and protect your information
              when you visit our website or interact with us.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                When you use our site or contact us, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Personal information you provide:</strong> name,
                  email, phone number, and any details you share through forms
                  or consultation requests.
                </li>
                <li>
                  <strong>Technical information:</strong> IP address, browser
                  type, device type, and browsing activity collected through
                  cookies or analytics tools.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to inquiries and provide consultations.</li>
                <li>Improve our website and services.</li>
                <li>
                  Communicate with you about updates, resources, or events (if
                  you opt in).
                </li>
                <li>Meet legal or regulatory requirements.</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Cookies and Analytics
              </h2>
              <p>
                Our website may use cookies or similar technologies to
                understand how visitors use the site and improve user
                experience. You can adjust your browser settings to refuse
                cookies, but some features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Confidentiality of Legal Inquiries
              </h2>
              <p>
                Information you share with us through our website or in initial
                consultations is treated with respect and confidentiality.
                However, sending us information does not create an
                attorney–client relationship. An attorney–client relationship is
                only formed once we have a signed agreement to represent you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We take reasonable steps to protect your information from
                unauthorized access, use, or disclosure. No system is completely
                secure, so we cannot guarantee absolute security of data
                transmitted online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-4">
                Depending on where you live, you may have rights to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal data we hold about you.</li>
                <li>Request corrections or updates.</li>
                <li>
                  Ask us to delete your information (subject to legal and
                  ethical obligations).
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
              <p>
                Our site may include links to external websites. We are not
                responsible for the privacy practices or content of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with the updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or how your
                information is handled, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold">TPL Global</p>
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

export default PrivacyPolicy;
