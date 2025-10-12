import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Stella Lumen's coaching transformed our leadership team and increased revenue by 40% in just 6 months.",
    company: "TechVenture Corp",
    metric: "40% Revenue Increase"
  },
  {
    quote: "The AI-driven goal-tracking tools provided insights we never knew we needed. Our productivity soared by 65%.",
    company: "Innovation Labs",
    metric: "65% Productivity Gain"
  },
  {
    quote: "Working with Stella Lumen was a game-changer. We achieved 3-year goals in just 18 months.",
    company: "Global Dynamics Inc",
    metric: "2x Faster Goal Achievement"
  },
  {
    quote: "The personalized coaching strategies helped us build a high-performing team culture and reduce turnover by 50%.",
    company: "NextGen Solutions",
    metric: "50% Reduced Turnover"
  },
  {
    quote: "Exceptional guidance that led to sustainable growth and market leadership in our industry.",
    company: "Pioneer Enterprises",
    metric: "Market Leader Status"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-card" id="clients">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-testimonials-title">
            Happy Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            See how we've helped organizations achieve extraordinary results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm mb-4 italic" data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm" data-testid={`text-testimonial-company-${index}`}>
                    {testimonial.company}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1" data-testid={`text-testimonial-metric-${index}`}>
                    {testimonial.metric}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
