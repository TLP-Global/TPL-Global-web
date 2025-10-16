"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Download,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const BlogAndResources = () => {
  const blogPosts = [
    {
      title: "Immigrant Advocacy in 2025: How Communities Are Fighting Back",
      excerpt:
        "In 2025, stronger advocacy networks and tech-driven support are empowering Indian immigrants to navigate complex U.S. immigration rules.",
      date: "March 15, 2024",
      readTime: "5 min read",
      link:"https://blog.tplglobal.net/post/immigrant-advocacy-2025"
    },
    {
      title: "How New US Immigration Policies in 2025 Are Affecting Families and Children",
      excerpt:
        "In 2025, stricter U.S. immigration policies and digital case tracking have improved efficiency but created new challenges for Indian families seeking visas and reunification.",
      date: "March 10, 2024",
      readTime: "7 min read",
      link:"https://blog.tplglobal.net/post/us-immigration-policy-2025-family-impact"
    },
    {
      title: "Naturalization Under Scrutiny - Neighborhood Investigations and Expanded Vetting",
      excerpt:
        "In 2025, tighter U.S. immigration screening and digital tracking aim to boost efficiency but have created mixed outcomes for Indian families seeking visas and reunification.",
      date: "March 5, 2024",
      readTime: "6 min read",
      link:"https://blog.tplglobal.net/post/naturalization-under-scrutiny-expanded-vetting-2025"
    },
  ];

  const resources = [
    {
      title: "Start Here: Find your path",
      description: "Interactive guide to determine your immigration options",
      type: "Interactive Guide",
      action: "Start Guide",
    },
    {
      title: "Green card through family: step-by-step",
      description: "Complete checklist for family-based permanent residence",
      type: "Free Checklist PDF",
      action: "Download",
    },
    {
      title: "Citizenship interview prep",
      description: "Practice questions and preparation worksheet",
      type: "Free Worksheet",
      action: "Download",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl bg-gradient-subtle px-4 py-20">
      <div className="section-container">
        <div className="flex flex-col gap-24">
          {/* Resources Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">
                Resources Spotlight
              </h2>
              <p className="text-blue-950/60">
                Free guides and tools to help you navigate your immigration
                journey.
              </p>
            </div>

            <div className="md:space-x-12 items-center  flex flex-col md:flex-row space-y-4">
              {resources.map((resource) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="card-service justify-between flex flex-col w-96 h-60 group hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-xs font-medium text-amber-600 bg-amber-500/10 px-2 py-1 rounded-full inline-block mb-2">
                            {resource.type}
                          </div>
                          <CardTitle className="text-lg">
                            {resource.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {resource.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r  from-blue-950 to-blue-800 w-full group-hover:shadow-lg transition-all"
                      >
                        {resource.action === "Download" ? (
                          <Download className="mr-2 h-4 w-4" />
                        ) : (
                          <ExternalLink className="mr-2 h-4 w-4" />
                        )}
                        {resource.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Blog Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">
                Latest from the Blog
              </h2>
              <p className="text-blue-950/60">
                Stay informed with practical immigration insights and updates.
              </p>
            </div>

            <div className="space-y-6">
              {blogPosts.map((post) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5 }}
                  key={post.title}
                >
                  <Card className="card-professional bg-secondary group cursor-pointer hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      {/*
                      <div className="flex items-center gap-2 text-sm text-blue-950/60 mb-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                        */
                      }
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={post.link}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-gradient-to-r from-blue-900 to-blue-700 hover:text-white group-hover:text-white p-0"
                        >
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link href={"https://blog.tplglobal.net/"}>
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View All Blog Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndResources;
