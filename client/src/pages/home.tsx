import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductCatalogue from "@/components/ProductCatalogue";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ProductCatalogue />
      <Testimonials />
      <ContactForm />
      <Newsletter />
    </div>
  );
}
