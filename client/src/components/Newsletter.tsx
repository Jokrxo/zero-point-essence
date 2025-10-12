import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema, type Newsletter } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const { toast } = useToast();
  
  const form = useForm<Newsletter>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: Newsletter) {
    console.log("Newsletter signup:", data);
    toast({
      title: "Subscribed!",
      description: "You're now part of our journey to the stars.",
    });
    form.reset();
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-heading font-bold mb-4" data-testid="text-newsletter-title">
            Join Our Newsletter
          </h3>
          <p className="text-muted-foreground mb-6" data-testid="text-newsletter-subtitle">
            Get insights, tips, and success stories delivered to your inbox
          </p>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3" data-testid="form-newsletter">
            <Input
              type="email"
              placeholder="Enter your email"
              {...form.register("email")}
              className="flex-1"
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit" 
              disabled={form.formState.isSubmitting}
              data-testid="button-newsletter-subscribe"
            >
              Subscribe
            </Button>
          </form>
          {form.formState.errors.email && (
            <p className="text-sm text-destructive mt-2" data-testid="text-newsletter-error">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
