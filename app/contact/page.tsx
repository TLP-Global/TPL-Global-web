"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, BookOpen } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background py-32">
      <img
        src="/hero.jpg"
        alt=""
        className="hidden md:block  fixed bottom-0 -z-10  w-screen left-0"
      />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6 text-balance">
            Contact T.P.L. Global
          </h1>
          <p className="text-lg text-blue-950/60 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your legal needs? Our experienced team is here to
            help. Reach out to us today for a consultation and let us guide you
            through your legal journey.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-950" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      Office Locations
                    </h3>
                    <div className="text-muted-foreground space-y-2">
                      <p>100 Tradecenter Dr., Suite G700, Woburn, MA 01801</p>
                      <p>
                        Sankalp square 3B, office 1217, Sindhu Bhavan Marg.,
                        Ahmedabad, Gujarat 380058
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-950" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      Phone Numbers
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Client: +1 (216) 777-7731</p>
                      <p>Office: +1 (617) 391-7741</p>
                    </div>
                  </div>
                </div>

                {/* 
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-950" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground">team@tplglobal.net</p>
                  </div>
                </div>
                */}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-950" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">
                      Business Hours
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-950">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your legal needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-950 hover:bg-blue-950/90 text-white text-lg py-3 font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Find Our Offices
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at any of our convenient locations across the United
              States.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm mb-4">
                  100 Tradecenter Dr., Suite G700, Woburn, MA 01801
                </p>
                <Button variant="outline" size="sm">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm mb-4">
                   Sankalp square 3B, office 1217, Sindhu Bhavan Marg.,
                  Ahmedabad, Gujarat 380058
                </p>
                <Button variant="outline" size="sm">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.1234567890123!2d-81.60123456789012!3d41.50123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMwJzA0LjQiTiA4McKwMzYnMDQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="T.P.L. Global Office Locations"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16  text-blue-950-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait to get the legal help you need. Contact T.P.L. Global
            today for expert legal representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button variant="outline" size="lg" className="text-black">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Here – Free Guides
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
