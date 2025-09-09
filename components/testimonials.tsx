import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Quote, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const TestimonialsAndTrust = () => {
  const testimonials = [
    {
      quote: "TPL Global made the K-1 process clear and manageable. Their guidance was invaluable throughout our journey.",
      author: "A.B., Los Angeles",
      location: "Los Angeles"
    },
    {
      quote: "Professional, responsive, and thorough. They kept us informed every step of the way.",
      author: "J.K., New York", 
      location: "New York"
    },
    {
      quote: "Excellent service for our family immigration case. Highly recommend their expertise.",
      author: "M.R., Chicago",
      location: "Chicago"
    }
  ];

  const whyChooseUs = [
    {
      icon: MessageSquare,
      title: "We respond quickly and keep you updated",
      description: "Regular communication throughout your case"
    },
    {
      icon: Clock,
      title: "We set realistic timelines", 
      description: "Clear expectations based on current processing times"
    },
    {
      icon: CheckCircle,
      title: "We file carefully and thoroughly",
      description: "Attention to detail reduces delays and RFEs"
    }
  ];

  const caseSnapshots = [
    "Helped a fiancé secure a K-1 within expected timeframe despite prior delays.",
    "Supported an asylum seeker with strong documentation, resulting in approval."
  ];

  return (
    <section className="mx-auto max-w-7xl ">
      <div className="section-container ">
        {/* Client Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Proof & Trust
          </h2>
          <p className="text-xl text-blue-950/60 max-w-2xl mx-auto">
            See what our clients say about their experience working with us.
          </p>
        </div>

        <div className="mb-16">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 h-72">
                  <Card className="border border-border rounded-lg h-full shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Quote className="h-8 w-8 text-blue-950 mx-auto mb-4" />
                      <blockquote className="text-lg italic text-blue-950 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="text-blue-950/60 font-medium">
                        - {testimonial.author}
                      </cite>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          <p className="text-center text-sm text-blue-950/60 mt-4 max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Results depend on individual facts; no guarantee of outcome.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Clients Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-950/10 rounded-full w-fit">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-blue-950/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Snapshots */}
        <div className="bg-blue-50/80 rounded-lg p-8">
          <h3 className="text-xl font-bold text-center mb-6">Case Snapshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseSnapshots.map((snapshot, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-blue-950">{snapshot}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndTrust;
