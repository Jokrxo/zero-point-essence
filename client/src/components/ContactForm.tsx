import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      goal: "",
    },
  });

  function onSubmit(data: ContactForm) {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "We'll be in touch soon to discuss your journey to success.",
    });
    form.reset();
  }

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-contact-title">
              Start Your Journey
            </h2>
            <p className="text-muted-foreground" data-testid="text-contact-subtitle">
              Ready to unlock your potential? Let's discuss your goals
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Goal</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your goals and how we can help you achieve them..."
                        className="min-h-32"
                        {...field}
                        data-testid="input-goal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={form.formState.isSubmitting}
                data-testid="button-submit"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
