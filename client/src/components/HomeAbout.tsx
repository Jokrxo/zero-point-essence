import ceoPortrait from "@/assets/ceo-portrait.jpg";
import techWorkspace from "@/assets/tech-workspace.jpg";

export default function HomeAbout() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Section with Portrait */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-2 tracking-wider">WHO WE ARE?</p>
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-burgundy">
                ABOUT
              </h2>
            </div>
            <div className="w-16 h-16 bg-foreground/80 rotate-45 mt-8 hidden md:block"></div>
          </div>
          
          <div className="border-t-2 border-foreground mb-8"></div>
          
          <div className="flex justify-center">
            <div className="relative max-w-2xl">
              <img 
                src={ceoPortrait} 
                alt="Stella Lumen Leadership"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-foreground text-lg leading-relaxed">
              Discover a galaxy of stars and let us guide you on the path to prosperity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-foreground leading-relaxed mb-6">
                At <span className="font-semibold">Stella Lumen</span>, we believe that every individual and organization has the potential to shine bright like a star. Our mission is to help you reach for the stars and achieve your goals. With our innovative products and solutions, we can help you navigate the challenges of today's world and reach new heights of success.
              </p>
              <div className="h-32 bg-burgundy rounded-lg"></div>
            </div>

            <div className="relative">
              <img 
                src={techWorkspace} 
                alt="Technology and Innovation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-burgundy rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
