import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import profileBg1 from "@/assets/profile-bg-1.jpg";
import profileBg2 from "@/assets/profile-bg-2.jpg";

const AudienceSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgrounds = [profileBg1, profileBg2];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [backgrounds.length]);
  const forWhom = [
    "Incorporadoras com empreendimentos de alto padrão",
    "Imobiliárias que buscam leads qualificados",
    "Loteadoras focadas em condomínios de luxo",
    "Diretores comerciais que buscam eficiência",
    "Empresas que valorizam parcerias estratégicas",
  ];

  const notForWhom = [
    "Empresas que buscam volume sem qualificação",
    "Quem espera resultados sem envolvimento comercial",
    "Negócios focados em imóveis populares",
    "Empresas sem estrutura de vendas própria",
  ];

  return (
    <section id="para-quem" className="section-padding relative overflow-hidden">
      {/* Animated Background Slider */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Background perfil de parceiro"
            className={`absolute inset-0 w-full h-full object-cover hero-zoom transition-opacity duration-1000 ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <ScrollReveal>
          {/* Section Header */}
          <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-line w-8" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Perfil de Parceiro
            </span>
            <div className="gold-line w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">
            Para quem <span className="gold-text">construímos parcerias</span>
          </h2>
          </div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* For Whom */}
          <div className="bg-card/90 border border-border p-8 lg:p-12 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-full">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-medium">Para quem é</h3>
            </div>
            <ul className="space-y-5">
              {forWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Whom */}
          <div className="bg-secondary/85 border border-border p-8 lg:p-12 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 flex items-center justify-center bg-muted-foreground/10 rounded-full">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-medium">Para quem não é</h3>
            </div>
            <ul className="space-y-5">
              {notForWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AudienceSection;
