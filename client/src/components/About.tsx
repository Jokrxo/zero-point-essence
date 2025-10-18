import { CheckCircle2 } from "lucide-react";
import teamMeetingImg from "@/assets/team-meeting.jpg";

export default function About() {
  const businessModelSteps = [
    {
      number: 1,
      title: "With the End in Mind",
      description: "From requirements gathering to development and deployment, we work with our clients to ensure a successful outcome."
    },
    {
      number: 2,
      title: "Our Approach",
      description: "We map the solution while ensuring that all legal and other prescripts will be fully complied with when using the solutions"
    },
    {
      number: 3,
      title: "Technically",
      description: "We strive to automate manual processes while at the same time limiting the input areas to the bearest minimum"
    },
    {
      number: 4,
      title: "Modelling",
      description: "We model and code our prototypes with simplicity as a guiding philosophy."
    },
    {
      number: 5,
      title: "Testing",
      description: "We offer our completed systems free of charge to users and monitor feedback"
    },
    {
      number: 6,
      title: "Roll out to Market",
      description: "We put to market systems that have worked in a controlled environment and thoroughly tested."
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center text-burgundy" data-testid="text-about-title">
          About Us
        </h1>

        {/* Background Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2 tracking-wider">WHO WE ARE</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-burgundy mb-6">
                  Background
                </h2>
              </div>
              
              <div className="space-y-4 text-foreground leading-relaxed mb-8">
                <p>
                  Formed in <span className="font-semibold text-burgundy">2020</span> <span className="font-semibold">Stella Lumen</span> focuses on providing simple business solutions to respond to various challenges faced by our clients. Collectively its management has over 50 years of experience in financial management, governance, risk management and related disciplines.
                </p>
                <p>
                  Stella Lumen specializes in the conceptualization and development of software and provides easy to use solutions in the following areas:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  "Financial Management",
                  "Governance",
                  "Internal Audit",
                  "Risk Management",
                  "Customised Business Solutions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-burgundy flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img 
                  src={teamMeetingImg} 
                  alt="Stella Lumen team collaboration"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-burgundy/20 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Business Model Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-burgundy mb-12 text-center">
            Our Business Model
          </h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-burgundy/20 via-burgundy/40 to-burgundy/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {businessModelSteps.map((step, idx) => (
                <div 
                  key={step.number}
                  className="relative"
                  style={{ paddingLeft: idx > 0 ? `${idx * 2}rem` : '0' }}
                >
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full border-4 border-burgundy bg-background flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-burgundy">{step.number}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
