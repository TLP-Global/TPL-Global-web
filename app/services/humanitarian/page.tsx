"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  CreditCard,
  Flag,
  Phone,
  BookOpen,
  Shield,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { NextSeo } from "next-seo";

const Humanitarian = () => {
  return (
    <div className="min-h-screen px-4 bg-white">
      <NextSeo
        title="Our Immigration Services for Humanitarian"
        description="Explore our immigration services, including visa applications, green cards, work permits, and citizenship support."
        canonical="https://tplglobal.net/services/humanitarian"
      />
      <img
        src="/hero.jpg"
        alt="Notary seal stamping official legal documents"
        className="hidden md:block fixed bottom-0 -z-10  w-screen left-0"
      />
      <main className="py-44">
        <div className="section-container max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Humanitarian Immigration Options
            </h1>
            <p className="text-xl text-blue-950/60 max-w-3xl mx-auto leading-relaxed">
              Immigration law offers protection to people who have faced danger,
              violence, or abuse. These pathways are designed to keep families
              safe and give individuals a chance to rebuild their lives in the
              United States. Each option has strict requirements, but with the
              right guidance, you can move forward with confidence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-12  lg:gap-16">
            <Card className="md:p-8 py-4 " id="asylum">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">Asylum</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  If you fear persecution in your home country because of your{" "}
                  <strong>
                    {" "}
                    race, religion, nationality, political opinion, or
                    membership in a particular social group
                  </strong>
                  , you may qualify for asylum.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2 text-blue-950/60">
                      <li>
                        • You must apply within one year of arriving in the U.S.
                        (with some exceptions).
                      </li>
                      <li>
                        • You’ll need to show evidence of your fear of return.
                      </li>
                      <li>
                        • If granted, asylum allows you to live and work in the
                        U.S., and eventually apply for a green card.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-blue-950 to-blue-800 w-full rounded-lg p-4 text-white shadow-lg">
                  We help clients prepare strong, well-documented applications
                  while protecting their privacy and dignity.
                </div>
              </CardContent>
            </Card>

            <Card className="md:p-8 py-4 " id="u-visa">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <CreditCard className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    U Visa (Victims of Crime)
                  </CardTitle>
                </div>
                <CardDescription className="text-lg">
                  The U visa is for victims of certain crimes who have suffered
                  significant harm and are willing to assist law enforcement.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • Qualifying crimes include domestic violence, sexual
                      assault, kidnapping, and others.
                    </li>
                    <li>
                      • You must have information that can help authorities
                      investigate or prosecute.
                    </li>
                    <li>
                      •Approved U visa holders can receive work authorization
                      and later apply for permanent residence.{" "}
                    </li>
                  </ul>
                </div>

                <div className="text-center bg-gradient-to-r from-blue-950 to-blue-800 w-full rounded-lg p-4 text-white shadow-lg">
                  We work carefully with survivors to gather evidence while
                  keeping safety at the center of the process.
                </div>
              </CardContent>
            </Card>

            <Card className="md:p-8 py-4 " id="t-visa">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <CreditCard className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    T Visa (Human Trafficking Survivors)
                  </CardTitle>
                </div>
                <CardDescription className="text-lg">
                  The T visa provides protection to individuals who were brought
                  to the U.S. or kept here through force, fraud, or coercion.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      •It allows survivors of trafficking to remain in the U.S.
                      and receive work authorization.
                    </li>
                    <li>
                      • You may be eligible even if you entered without status
                      or documents.
                    </li>
                    <li>
                      • T visa holders can eventually apply for a green card.
                    </li>
                  </ul>
                </div>

                <div className="text-center bg-gradient-to-r from-blue-950 to-blue-800 w-full rounded-lg p-4 text-white shadow-lg">
                  Our role is to help survivors present their story clearly and
                  confidentially so they can secure stability and safety.
                </div>
              </CardContent>
            </Card>

            <Card className="md:p-8 py-4 " id="vawa">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    VAWA (Violence Against Women Act – Self-Petition)
                  </CardTitle>
                </div>
                <CardDescription className="text-lg">
                  VAWA allows certain spouses, children, or parents of U.S.
                  citizens or green card holders to apply for status without
                  relying on the abuser.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • You can self-petition for a green card without the
                      abuser’s knowledge or involvement.
                    </li>
                    <li>
                      • Qualifying abuse may be physical, emotional, or
                      psychological.
                    </li>
                    <li>
                      • Approved applicants can receive work authorization and
                      lawful status.
                    </li>
                  </ul>
                </div>

                <div className="text-center bg-gradient-to-r from-blue-950 to-blue-800 w-full rounded-lg p-4 text-white shadow-lg">
                  We approach these cases with sensitivity, ensuring your
                  application is secure and private.
                </div>
              </CardContent>
            </Card>

            <Card className="md:p-8 py-4 " id="sij">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-950 rounded-lg">
                    <Flag className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl">
                    SIJ (Special Immigrant Juvenile Status)
                  </CardTitle>
                </div>
                <CardDescription className="text-lg">
                  SIJ is for children in the U.S. who cannot return to their
                  home country because of abuse, neglect, or abandonment by one
                  or both parents.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <ul className="space-y-2 text-blue-950/60">
                    <li>
                      • Must be under 21 (and unmarried) at the time of filing.
                    </li>
                    <li>
                      • Requires a state court order confirming the child cannot
                      reunite with one or both parents.
                    </li>
                    <li>• SIJ status can lead to permanent residence.</li>
                  </ul>
                </div>

                <div className="text-center bg-gradient-to-r from-blue-950 to-blue-800 w-full rounded-lg p-4 text-white shadow-lg">
                  We guide families and guardians through the legal and court
                  steps needed to protect vulnerable children.
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-16" />

          {/* Why Work With Us */}
          <div className="text-center mb-12 py-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Sensitive Case Expertise
                </h4>
                <p className="text-sm text-blue-950/60">
                  Privacy and care guaranteed
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Clear Guidance
                </h4>
                <p className="text-sm text-blue-950/60">
                  Know what evidence is needed
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Respectful Support
                </h4>
                <p className="text-sm text-blue-950/60">
                  Compassion for survivors and families
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Strong Filings
                </h4>
                <p className="text-sm text-blue-950/60">
                  Anticipate USCIS requirements
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Next Step
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consult"
                className="bg-gradient-to-r rounded-md from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
              >
                <Button
                  size="lg"
                  className="bg-transparent  group-hover:shadow-lg transition-all"
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Humanitarian;
