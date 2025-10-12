import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <div className="bg-card py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="breadcrumb">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Contact</span>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
