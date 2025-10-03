import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  FileText,
  Heart,
  Clock,
  CheckCircle,
  Calendar,
  User,
  Phone,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Step by Step Guide to Applying for a U.S. Visitor Visa B1/B2",
    excerpt:
      "A comprehensive guide to applying for U.S. visitor visas for business and tourism purposes.",
    category: "Visitor Visas",
    slug: "step-by-step-guide-us-visitor-visa-b1-b2",
    author: "Sarah Martinez, Esq.",
    date: "September 22, 2025",
    readTime: "8 min read",
    image: "/blog1.jpeg",
    tags: ["B-1", "B-2", "Tourism", "Business"],
  },
  {
    id: 2,
    title: "Green Card 101: Types, Timelines, and What to Expect",
    excerpt:
      "A comprehensive guide to U.S. green cards including types, application process, timelines, and what to expect.",
    category: "Green Cards",
    author: "Michael Chen, Esq.",
    date: "September 24, 2025",
    readTime: "6 min read",
    slug: "green-card-101-types-timelines-what-to-expect",
    image: "/blog2.jpeg",
    tags: ["B-1", "Business", "Requirements"],
  },
  {
    id: 3,
    title: "Top 7 Mistakes That Can Derail Your U.S. Citizenship Application",
    excerpt:
      "Learn about the most common errors applicants make when applying for U.S. citizenship and how to avoid them.",
    category: "Family Immigration",
    author: "Lisa Rodriguez, Esq.",
    date: "September 26, 2025",
    readTime: "7 min read",
    slug: "top-7-mistakes-us-citizenship-application",
    image: "/blog3.jpeg",
    tags: ["B-2", "Citizenship", "Travel"],
  },
  {
    id: 4,
    title: "Family Immigration: Immediate Relatives vs Preference Categories Explained",
    excerpt:
      "Understanding the difference between Immediate Relatives and Preference Categories can be a crucial factor in determining your immigration pathway.",
    category: "Family Immigration",
    author: "David Kim, Esq.",
    date: "September 29, 2025",
    slug: "family-immigration-immediate-relatives-vs-preference-categories",
    readTime: "10 min read",
    image: "/blog4.jpeg",
    tags: ["I-130", "Family", "Petition"],
  },
  {
    id: 5,
    title:
      "K-1 Fiancé Visa vs Spouse Visa: Which One Is Right for You?",
    excerpt:
      "Understanding the differences between the K-1 Fiancé Visa and the Spouse Visa to make an informed decision for your situation.",
    category: "Family Immigration",
    author: "Jennifer Park, Esq.",
    date: "October 2, 2025",
    readTime: "9 min read",
    slug: "k1-fiance-visa-vs-spouse-visa",
    image: "/blog5.jpeg",
    tags: ["Consular Processing", "Adjustment of Status", "Green Card"],
  },
  {
    id: 6,
    title: "How to Remove Conditions on a Marriage-Based Green Card (I-751)",
    excerpt:
      "A comprehensive guide to understanding and completing the I-751 petition process to remove conditions from your marriage-based green card.",
    category: "Green Cards & Citizenship",
    author: "Robert Thompson, Esq.",
    date: "October 4, 2025",
    readTime: "5 min read",
    slug: "remove-conditions-marriage-based-green-card-i751",
    image: "/calendar-timeline-immigration-process.jpg",
    tags: ["Timeline", "Processing Times", "Family"],
  },
  {
    id: 7,
    title: "Asylum in the United States: Understanding Your Rights and Options",
    excerpt:
      "Comprehensive guide to asylum eligibility, application process, and what to expect during your asylum case.",
    category: "Humanitarian Options",
    author: "Maria Gonzalez, Esq.",
    date: "November 30, 2024",
    readTime: "12 min read",
    slug: "step-by-step-guide-us-visitor-visa-b1-b2",
    image: "/diverse-people-seeking-protection-and-safety.jpg",
    tags: ["Asylum", "Protection", "Rights"],
  },
  {
    id: 8,
    title:
      "Temporary Protected Status (TPS): Current Designations and How to Apply",
    excerpt:
      "Latest updates on TPS designations and step-by-step application process for eligible nationals.",
    category: "Humanitarian Options",
    author: "Ahmed Hassan, Esq.",
    date: "November 28, 2024",
    readTime: "8 min read",
    slug: "step-by-step-guide-us-visitor-visa-b1-b2",
    image: "/world-map-showing-countries-with-humanitarian-cris.jpg",
    tags: ["TPS", "Temporary Protection", "Humanitarian"],
  },
  {
    id: 9,
    title:
      "VAWA and U-Visa: Protection for Victims of Crime and Domestic Violence",
    excerpt:
      "Understanding immigration relief options for victims of domestic violence, sexual assault, and other qualifying crimes.",
    category: "Humanitarian Options",
    author: "Catherine Williams, Esq.",
    date: "November 25, 2024",
    readTime: "11 min read",
    slug: "step-by-step-guide-us-visitor-visa-b1-b2",
    image: "/supportive-hands-offering-help-and-protection.jpg",
    tags: ["VAWA", "U-Visa", "Victim Protection"],
  },
];

export default function BlogSection() {
  return (
    <div className="bg-background">
      <img
        src="/hero.jpg"
        alt="Notary seal stamping official legal documents"
        className="hidden md:block  fixed bottom-0 -z-10  w-screen left-0"
      />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Latest Immigration Insights
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Stay informed with our expert analysis and practical guides on
                U.S. immigration law
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-lg pt-0 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full top-0 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-blue-950 text-primary-foreground text-xs"
                      >
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-blue-950 font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`} >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full cursor-pointer group-hover:bg-blue-950 hover:bg-blue-950 hover:text-white group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent"
              >
                View All Blog Posts
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 bg-secondary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl text-blue-950 font-bold mb-4">
                Ready to Start Your Immigration Journey?
              </h3>
              <p className="text-lg mb-8 text-blue-950/60 text-pretty">
                Our experienced immigration attorneys are here to guide you
                through every step of the process. Schedule your consultation
                today.
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
          </div>

          {/* Recent Updates Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Recent Immigration Updates
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock className="h-4 w-4" />
                    <span>December 2024</span>
                  </div>
                  <CardTitle className="text-lg">
                    New B-1/B-2 Processing Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    USCIS has updated processing guidelines for visitor visas,
                    affecting documentation requirements and interview
                    procedures.
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock className="h-4 w-4" />
                    <span>November 2024</span>
                  </div>
                  <CardTitle className="text-lg">
                    Family Immigration Priority Date Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The latest visa bulletin shows significant movement in
                    family-based immigration categories for several countries.
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
