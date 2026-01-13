import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import logoIcon from "@/assets/logo-grumins-icon.png";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  const [formData, setFormData] = useState({ name: "", company: "" });

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      formData.name && formData.company
        ? `Olá! Meu nome é ${formData.name} e represento a ${formData.company}. Gostaria de conhecer mais sobre a GRUMINS e avaliar uma possível parceria.`
        : "Olá! Tenho interesse em conhecer mais sobre a GRUMINS e entender como podemos desenvolver uma parceria estratégica."
    );
    window.open(`https://wa.me/5531995376067?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={logoIcon}
          alt=""
          className="w-96 h-auto opacity-[0.03]"
        />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <ScrollReveal>
          {/* Section Header */}
          <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-line w-8" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Próximo Passo
            </span>
            <div className="gold-line w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            Vamos <span className="gold-text">conversar</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A GRUMINS seleciona parceiros estratégicos. 
            Se você busca resultados reais, inicie uma conversa.
          </p>
          </div>

          {/* Form + CTA */}
          <div className="max-w-md mx-auto">
          {/* Optional form fields */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="text-sm text-muted-foreground block mb-2">
                Nome (opcional)
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome"
                className="w-full h-12 px-4 bg-secondary border border-border focus:border-gold/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-2">
                Empresa (opcional)
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Nome da empresa"
                className="w-full h-12 px-4 bg-secondary border border-border focus:border-gold/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Primary CTA */}
          <Button
            variant="gold"
            size="xl"
            onClick={handleWhatsApp}
            className="w-full group"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Iniciar Conversa no WhatsApp
          </Button>

          {/* Alternative */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Prefere email ou Instagram?
            </p>
            <div className="flex flex-col items-center gap-2 text-sm">
              <a
                href="mailto:contato.grumins@gmail.com"
                className="inline-flex items-center gap-2 text-foreground hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato.grumins@gmail.com
              </a>
              <a
                href="https://instagram.com/grumins.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                Instagram: @grumins.co
              </a>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
