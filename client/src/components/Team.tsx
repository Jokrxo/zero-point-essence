import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import lusandaImg from "@/assets/team/lusanda.jpg";
import lizoImg from "@/assets/team/lizo.jpg";

const teamMembers = [
  {
    name: "Thabani Zulu - CA (SA)",
    role: "CHAIRMAN",
    image: ceoPortrait,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Lusanda Ntloko (CIA)",
    role: "HEAD OF AUDIT",
    image: lusandaImg,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Lizo Shongwe",
    role: "OFFICE ADMINISTRATION",
    image: lizoImg,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-background" id="team">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-burgundy mb-6">
            Meet The Team
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-burgundy mb-4">
            Our Great Team Is Very Dedicated For You
          </h3>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-muted-foreground/30"></div>
            <p className="text-sm text-muted-foreground tracking-wider">OUR TEAM</p>
            <div className="h-px w-16 bg-muted-foreground/30"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-lg hover-elevate">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Social Media Overlay */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <a 
                      href={member.social.facebook}
                      className="w-10 h-10 bg-burgundy hover:bg-burgundy/90 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="w-10 h-10 bg-burgundy hover:bg-burgundy/90 flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-burgundy hover:bg-burgundy/90 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
                <CardContent className="pt-6 text-center">
                  <p className="text-xs text-burgundy font-semibold mb-1 tracking-wider">
                    {member.role}
                  </p>
                  <h4 className="text-lg font-heading font-semibold">
                    {member.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <Link href="/clients">
              <Button 
                variant="outline" 
                size="lg"
                className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
              >
                VIEW ALL TEAM
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
