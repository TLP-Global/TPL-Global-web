"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Download } from "lucide-react";

const Infographics = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedInfographic, setSelectedInfographic] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email?.trim()) {
        setLoading(false);
        toast.warning("Email is required");
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        toast.warning("Invalid email address");
        setLoading(false);
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
      }
      toast.promise(
        fetch("/api/infographics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, selectedInfographic }),
        }),
        {
          loading: "Sending...",
          success: (res) => {
            if (res.ok) {
              setLoading(false);
              setEmail("");
              return `Email sent successfully`;
            }
          },
          error: "Error",
        },
      );
      setIsDialogOpen(false);
    } catch (e) {
      toast("Something went wrong");
      setLoading(false);
      setIsDialogOpen(false);
      console.log("error", e);
    }
  };

  const handleDownloadClick = (title: string) => {
    setSelectedInfographic(title);
    setIsDialogOpen(true);
  };

  const infographics = [
    {
      title: "Green Card Pathways",
      pdfUrl: "/assets/preview1.png",
    },
    {
      title: "Visitor VISA Process Timeline",
      pdfUrl: "/assets/preview2.png",
    },
    {
      title: "K-1 vs CR-1",
      pdfUrl: "/assets/preview3.png",
    },
    {
      title: "Family Preference Chart Simplified",
      pdfUrl: "/assets/preview4.png",
    },
    {
      title: "U.S. Citizenship Process Roadmap",
      pdfUrl: "/assets/preview5.png",
    },
    {
      title: "Asylum Application Flow in the U.S",
      pdfUrl: "/assets/preview6.png",
    },
    {
      title: "U Visa Benefits Breakdown",
      pdfUrl: "/assets/preview7.png",
    },
    {
      title: "T Visa Protections Explained",
      pdfUrl: "/assets/preview8.png",
    },
    {
      title: "Visitor Visa Denial Reasons",
      pdfUrl: "/assets/preview9.png",
    },
    {
      title: "Marriage Green Card Document Checklist",
      pdfUrl: "/assets/preview10.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <img
        src="/hero.jpg"
        alt="Notary seal stamping official legal documents"
        className="hidden md:block fixed bottom-0 -z-10  w-screen left-0"
      />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Immigration Infographics & Resources
              </h1>
              <p className="text-lg text-muted-foreground">
                Visual guides to help you understand U.S. immigration processes,
                visa requirements, and timelines for Indian nationals.
              </p>
            </div>
          </div>
        </section>

        {/* Infographics Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {infographics.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-secondary border border-border rounded-lg p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative bg-muted h-64 overflow-hidden">
                      <img
                        src={`${item.pdfUrl}`}
                        className="border-none  object-center pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <Button
                          variant="default"
                          size="sm"
                          className="gap-2 bg-gradient-to-r w-full from-blue-950 to-blue-800"
                          onClick={() => handleDownloadClick(item.title)}
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <div
        className={`bg-black/50 z-10 top-0 left-0 h-screen w-screen ${isDialogOpen ? "fixed" : "hidden"}`}
      >
        {/* Email Dialog */}
        <dialog
          open={isDialogOpen}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 px-12 py-8 rounded-lg"
        >
          <div>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center p-4">
              Download Infographic
            </h4>
            <p className="text-neutral-600">
              Enter your email address to receive "{selectedInfographic}" as a
              PDF.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <Input
                placeholder="your.email@example.com"
                type="email"
                className="h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary w-1/2 text-white hover:cursor-pointer transition-all"
                onClick={() => {
                  setIsDialogOpen(false);
                  setEmail("");
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r w-1/2 from-blue-950 to-blue-800 hover:cursor-pointer group-hover:shadow-lg transition-all"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? "Sending..." : "Send Me the Infographics"}
              </Button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Infographics;
