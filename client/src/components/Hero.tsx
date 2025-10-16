import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import StarField from "./StarField";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#231F20] via-[#1a1718] to-background" />
      
      {/* Starry Sky Animation */}
      <StarField />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <img 
          src={logo} 
          alt="Stella Lumen Logo" 
          className="mx-auto mb-8 w-32 h-32 object-contain"
        />
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6" data-testid="text-hero-title">
          Guiding You to Prosperity
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8" data-testid="text-hero-subtitle">
          Discover a galaxy of stars within you and reach for unparalleled success through innovative leadership coaching and AI-driven goal-tracking tools.
        </p>
        <Link href="/contact">
          <Button 
            size="lg" 
            variant="default"
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            data-testid="button-hero-cta"
          >
            Start Your Journey – Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
