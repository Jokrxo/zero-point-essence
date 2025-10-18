import { Card, CardContent } from "@/components/ui/card";
import { Palette, Monitor, Grid3x3, Box, Lightbulb, Headphones } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Creative Design",
    description: "Creative design is the marketing of products or services using digital technologies"
  },
  {
    icon: Monitor,
    title: "Web Development",
    description: "Retina ready design in the marketing of products or services using digital technologies"
  },
  {
    icon: Grid3x3,
    title: "Pixel Perfect",
    description: "Vector design is the marketing of products or services using digital technologies"
  },
  {
    icon: Box,
    title: "Digital Products",
    description: "Digital products is the marketing of products or services using digital technologies"
  },
  {
    icon: Lightbulb,
    title: "Incredible Idea",
    description: "Incredible idea is the marketing of products or services using digital technologies"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Free support is the marketing of products or services using digital technologies"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-muted-foreground/30"></div>
            <p className="text-sm text-muted-foreground tracking-wider">OUR SERVICES</p>
            <div className="h-px w-16 bg-muted-foreground/30"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-none shadow-md hover-elevate text-center" data-testid={`card-service-${index}`}>
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
