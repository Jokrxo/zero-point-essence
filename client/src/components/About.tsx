import { Rocket } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center" data-testid="text-about-title">
            Who We Are
          </h1>
          
          <div className="prose prose-lg max-w-none mb-12" data-testid="text-about-content">
            <p className="text-lg leading-relaxed mb-6">
              Stella Lumen guides individuals and organizations to prosperity through innovative leadership coaching and AI-driven goal-tracking tools. We believe that within every person and every organization lies a galaxy of untapped potential—brilliant stars waiting to illuminate the path to success.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our unique approach combines cutting-edge technology with time-tested coaching methodologies to create transformative experiences. We don't just help you set goals; we provide the tools, insights, and support to achieve them with unprecedented clarity and efficiency.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Through personalized strategies, AI-powered analytics, and dedicated mentorship, we empower leaders to unlock their full potential, drive team performance, and achieve business goals that once seemed out of reach. Discover a galaxy of stars within you and reach for unparalleled success.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-8 hover-elevate" data-testid="section-founder">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-heading font-bold" data-testid="text-founder-title">
                Journey to the Stars
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-founder-bio">
              Founded by visionary leaders with decades of combined experience in executive coaching, organizational development, and technology innovation, Stella Lumen was born from a simple yet powerful belief: that success is not a destination, but a guided journey. Our founders have helped hundreds of organizations navigate complex challenges, scale effectively, and achieve sustainable prosperity. Today, we continue that mission with an ever-expanding constellation of tools and strategies designed for the modern leader.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
