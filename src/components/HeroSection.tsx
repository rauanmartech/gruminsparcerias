import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import ScrollReveal from "./ScrollReveal";

const backgrounds = [heroBg1, heroBg2, heroBg3];

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", company: "" });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      formData.name && formData.company
        ? `Olá! Meu nome é ${formData.name} e represento a ${formData.company}. Gostaria de conhecer mais sobre a GRUMINS e avaliar uma possível parceria.`
        : "Olá! Tenho interesse em conhecer mais sobre a GRUMINS e entender como podemos desenvolver uma parceria estratégica."
    );
    window.open(`https://wa.me/5531995376067?text=${message}`, "_blank");
  };

  const scrollToNext = () => {
    document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {backgrounds.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover hero-zoom transition-opacity duration-1000 ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <ScrollReveal className="relative z-10 container-wide mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Left: Narrative */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <div className="gold-line w-12" />
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Grupo Mineiro de Negócios
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] mb-6 animate-fade-in-up [animation-delay:0.1s]">
              Estruturamos negócios <br />
              <span className="gold-text">que fecham vendas</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl animate-fade-in-up [animation-delay:0.2s]">
              Intermediação estratégica de leads qualificados para o mercado 
              imobiliário de alto padrão. Sem marketing tradicional. 
              Com resultado real.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.3s]">
              <Button
                variant="gold"
                size="xl"
                onClick={handleWhatsApp}
                className="group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                Iniciar Conversa
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={scrollToNext}
              >
                Conhecer o Modelo
              </Button>
            </div>
          </div>

          {/* Right: Hero Form */}
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 md:p-8 shadow-[var(--shadow-card)] animate-fade-in-up [animation-delay:0.25s]">
            <h3 className="text-xl md:text-2xl font-serif font-medium mb-4">
              Comece uma conversa
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Deixe seus dados para iniciarmos uma possível parceria estratégica.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs md:text-sm text-muted-foreground block mb-2">
                  Nome (opcional)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full h-11 md:h-12 px-4 bg-secondary/60 border border-border focus:border-gold/50 focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs md:text-sm text-muted-foreground block mb-2">
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nome da empresa"
                  className="w-full h-11 md:h-12 px-4 bg-secondary/60 border border-border focus:border-gold/50 focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <Button
              variant="gold"
              size="xl"
              onClick={handleWhatsApp}
              className="w-full group"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Iniciar conversa no WhatsApp
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default HeroSection;
