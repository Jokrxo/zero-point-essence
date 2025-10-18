import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, LineChart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Leadership Coaching",
    description: "Transform your leadership capabilities with personalized strategies",
    benefits: [
      "Personalized strategies to boost team performance",
      "One-on-one executive coaching sessions",
      "Leadership assessment and development plans",
      "Ongoing support and accountability"
    ]
  },
  {
    icon: Target,
    title: "Goal-Tracking Tools",
    description: "AI-driven solutions to monitor and achieve your objectives",
    benefits: [
      "Real-time progress monitoring and analytics",
      "AI-powered insights and recommendations",
      "Customizable dashboards and reports",
      "Seamless integration with existing workflows"
    ]
  },
  {
    icon: LineChart,
    title: "Business Prosperity Coaching",
    description: "Strategic guidance to accelerate your business growth",
    benefits: [
      "Revenue optimization strategies",
      "Market positioning and competitive analysis",
      "Scalable business model development",
      "Performance metrics and KPI tracking"
    ]
  },
  {
    icon: Sparkles,
    title: "Organizational Development",
    description: "Build high-performing teams and sustainable success",
    benefits: [
      "Team building and culture development",
      "Process optimization and efficiency gains",
      "Change management support",
      "Succession planning and talent development"
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive solutions designed to unlock your full potential and achieve goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading" data-testid={`text-service-title-${index}`}>
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2" data-testid={`list-service-benefits-${index}`}>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✦</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
