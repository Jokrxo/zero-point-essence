import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#231F20] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Stella Lumen Logo" className="h-10 w-10 object-contain" data-testid="logo-image" />
            <span className="text-xl font-heading font-bold" data-testid="text-footer-logo">
              Stella Lumen
            </span>
          </div>

          <div className="flex gap-3" data-testid="section-footer-social">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/10 text-white"
              onClick={() => console.log("LinkedIn clicked")}
              data-testid="button-social-linkedin"
            >
              <SiLinkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/10 text-white"
              onClick={() => console.log("X/Twitter clicked")}
              data-testid="button-social-twitter"
            >
              <FaXTwitter className="h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-white/70" data-testid="text-footer-copyright">
            © {currentYear} Stella Lumen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
