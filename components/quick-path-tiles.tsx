import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Heart, 
  Baby, 
  UserPlus, 
  Shield, 
  Scale, 
  HandHeart, 
  UserCheck,
  CreditCard,
  Flag
} from 'lucide-react';

const QuickPathTiles = () => {
  const pathways = [
    {
      category: "Individuals",
      icon: Users,
      items: [
        {
          title: "Visitor Visas (B-1/B-2)",
          description: "Short-term travel options and what to expect.",
          icon: Users
        }
      ]
    },
    {
      category: "Families", 
      icon: Heart,
      items: [
        {
          title: "Spouse & Fiancé(e) (IR/CR-1, K-1, K-3)",
          description: "Marriage-based options explained simply.",
          icon: Heart
        },
        {
          title: "Parents & Children",
          description: "Family petitions and who qualifies.",
          icon: Baby
        },
        {
          title: "Siblings",
          description: "How family preference categories work.",
          icon: UserPlus
        }
      ]
    },
    {
      category: "Humanitarian",
      icon: Shield,
      items: [
        {
          title: "Asylum",
          description: "Protection if you fear harm in your home country.",
          icon: Shield
        },
        {
          title: "U Visa",
          description: "For victims of certain crimes.",
          icon: Scale
        },
        {
          title: "T Visa", 
          description: "For survivors of trafficking.",
          icon: HandHeart
        },
        {
          title: "VAWA",
          description: "Self-petition for victims of abuse.",
          icon: UserCheck
        },
        {
          title: "SIJ",
          description: "Status for children facing hardship.",
          icon: Baby
        }
      ]
    },
    {
      category: "Green Card",
      icon: CreditCard,
      items: [
        {
          title: "Permanent Residence",
          description: "Step-by-step pathways to permanent residence.",
          icon: CreditCard
        }
      ]
    },
    {
      category: "Citizenship",
      icon: Flag,
      items: [
        {
          title: "U.S. Citizenship",
          description: "Becoming a U.S. citizen and preparing for the interview.",
          icon: Flag
        }
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Find Your Path
          </h2>
          <p className="text-xl text-blue-950/60 max-w-2xl mx-auto">
            Navigate U.S. immigration with confidence. Choose your pathway to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathways.map((pathway) => (
            <div key={pathway.category} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-950 rounded-lg">
                  <pathway.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {pathway.category}
                </h3>
              </div>

              <div className="space-y-4">
                {pathway.items.map((item) => (
                  <Card key={item.title} className="bg-gradient-to-br from-blue-100 to-blue-50 group h-48">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-blue-950 group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPathTiles;
