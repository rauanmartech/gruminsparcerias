import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logoGrumins from "@/assets/logo-grumins.png";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Tenho interesse em conhecer mais sobre a GRUMINS e entender como podemos desenvolver uma parceria estratégica."
    );
    window.open(`https://wa.me/5531995376067?text=${message}`, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logoGrumins}
              alt="GRUMINS - Grupo Mineiro de Negócios"
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                theme === "dark" ? "brightness-0 invert" : ""
              }`}
            />
          </a>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA */}
            <Button
              variant="gold"
              size="default"
              onClick={handleWhatsApp}
              className="hidden md:inline-flex"
            >
              <MessageCircle className="w-4 h-4" />
              Iniciar Conversa
            </Button>

            {/* Mobile CTA */}
            <Button
              variant="gold"
              size="sm"
              onClick={handleWhatsApp}
              className="md:hidden"
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
