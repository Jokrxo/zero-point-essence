import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import Services from "@/components/Services";
import Team from "@/components/Team";
import ProductCatalogue from "@/components/ProductCatalogue";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <Services />
      <Team />
      <ProductCatalogue />
      <Testimonials />
      <ContactForm />
      <Newsletter />
    </div>
  );
}
