import { Button } from '@/components/ui/button';
import { Phone, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900">
      <div className="max-w-7xl mx-auto  text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to move forward?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Take the next step in your immigration journey with confidence. 
            Our experienced team is here to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <Link
                href="/consult"
                className="bg-gradient-to-r rounded-md from-blue-950 to-blue-800  group-hover:shadow-lg transition-all"
              >
              <Button  
                size="lg" 
                variant="outline" 
                className="bg-white text-lg text-black px-8 py-4 mb-3">
                <Phone className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              </Link>
              <p className="text-primary-foreground/80 text-sm">
                Speak with an expert today
              </p>
            </div>

            <div className="text-primary-foreground/60 hidden sm:block">
              or
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-black  text-lg px-8 py-4 mb-3"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Start Here – Free Guides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-primary-foreground/80 text-sm">
                Not sure where to start?
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm max-w-2xl mx-auto">
              Join hundreds of individuals and families who have successfully navigated 
              their immigration journey with our guidance and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
