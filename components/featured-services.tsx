import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, Heart, Shield, BookOpen, MessageCircle } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      title: "Visitor Visa (B-1/B-2)",
      icon: Users,
      description: "Business and tourism visas for temporary stays",
      faqs: [
        {
          question: "Who is eligible?", 
          answer: "Foreign nationals seeking to enter the U.S. temporarily for business (B-1) or tourism/medical treatment (B-2). You must demonstrate ties to your home country and intent to return."
        },
        {
          question: "What can and can't you do on this visa?",
          answer: "B-1: Attend meetings, conferences, negotiate contracts. B-2: Tourism, visit family, medical treatment. You cannot work for U.S. employers or study full-time."
        },
        {
          question: "Typical documents needed",
          answer: "Valid passport, DS-160 form, visa fee payment, interview appointment, financial evidence, travel itinerary, ties to home country documentation."
        }
      ]
    },
    {
      title: "Family Immigration",
      icon: Heart,
      description: "Reunite with loved ones through family-based petitions",
      faqs: [
        {
          question: "How the I-130 petition works",
          answer: "U.S. citizens and permanent residents can petition for qualifying family members. The petitioner files Form I-130 to establish the family relationship."
        },
        {
          question: "Consular vs. adjustment of status",
          answer: "Consular processing: Apply at U.S. embassy abroad. Adjustment of status: Apply within the U.S. if eligible. Choice depends on your location and circumstances."
        },
        {
          question: "Typical timelines and what affects them",
          answer: "Processing times vary by relationship and country. Immediate relatives (spouses, unmarried children under 21, parents) have no caps. Other categories have annual limits affecting wait times."
        }
      ]
    },
    {
      title: "Humanitarian Options",
      icon: Shield,
      description: "Protection for those facing persecution or harm",
      faqs: [
        {
          question: "Who qualifies",
          answer: "Individuals unable to return to their home country due to persecution based on race, religion, nationality, political opinion, or membership in a particular social group."
        },
        {
          question: "Basics of required evidence",
          answer: "Personal testimony, country condition evidence, expert reports, medical records, police reports, and corroborating documentation of persecution or well-founded fear."
        },
        {
          question: "Confidentiality and privacy assurances",
          answer: "Your information is protected under attorney-client privilege and confidentiality rules. We understand the sensitive nature of humanitarian cases and maintain strict privacy protocols."
        }
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our most requested immigration services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="card-professional">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <Accordion type="single" collapsible className="mb-6">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-sm font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <BookOpen className="mr-1 h-4 w-4" />
                    Full Guide
                  </Button>
                  <Button size="sm" className="btn-professional flex-1">
                    <MessageCircle className="mr-1 h-4 w-4" />
                    Talk to Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
