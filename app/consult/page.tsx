"use client";
import { useEffect } from "react";

const Consult = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white py-44 px-4">
      <img
        src="/hero.jpg"
        alt="Notary seal stamping official legal documents"
        className="hidden md:block  fixed bottom-0 -z-10  w-screen left-0"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-form-label uppercase tracking-wider mb-4">
                CONTACT OUR TEAM
              </p>
              <h1 className="text-5xl font-bold text-foreground leading-tight mb-6">
                Contact T.P.L. Global, LLC
              </h1>
              <p className="text-lg text-form-label leading-relaxed mb-12">
                Ready to discuss your legal needs? Our experienced team is here
                to help. Reach out to us today for a consultation and let us
                guide you through your legal journey.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-foreground">
                On your first 30 minute call, you'll learn how to:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-form-label">
                    Understand the best visa or immigration pathway for your
                    situation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-form-label">
                    Learn how similar clients successfully achieved permanent
                    residence or work authorization
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-form-label">
                    Outline the first steps in building a clear, customized
                    immigration strategy
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="h-[700px] w-full"
            dangerouslySetInnerHTML={{
              __html: `<div
          class="calendly-inline-widget"
          data-url="https://calendly.com/tplglobal/new-meeting"
          style="min-width:320px;height:700px;"
        ></div>`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Consult;
