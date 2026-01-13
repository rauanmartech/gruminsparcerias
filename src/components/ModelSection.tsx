import { ArrowRight, Building2, Users, Handshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ModelSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de entender melhor como funciona o modelo de parceria da GRUMINS."
    );
    window.open(`https://wa.me/5531995376067?text=${message}`, "_blank");
  };

  const steps = [
    {
      number: "01",
      icon: Handshake,
      title: "Diagnóstico",
      description: "Entendemos seu empreendimento, público-alvo e objetivos comerciais.",
    },
    {
      number: "02",
      icon: Building2,
      title: "Estruturação",
      description: "Desenvolvemos um modelo personalizado de captação e qualificação.",
    },
    {
      number: "03",
      icon: Users,
      title: "Ativação",
      description: "Iniciamos a geração de leads qualificados prontos para negociação.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Fechamento",
      description: "Sua equipe comercial foca apenas em leads com real potencial de compra.",
    },
  ];

  return (
    <section id="modelo" className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          {/* Section Header */}
          <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-line w-8" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Como Funciona
            </span>
            <div className="gold-line w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            Um modelo que <span className="gold-text">gera resultado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estruturamos parcerias baseadas em performance. 
            Você investe em resultado, não em promessas.
          </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border z-0">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                </div>
              )}
              
              <div className="relative bg-card p-8 border border-border shadow-[var(--shadow-card)] hover:border-gold/40 hover:shadow-[var(--shadow-gold)] hover:-translate-y-1 transition-all duration-500 h-full">
                {/* Number */}
                <span className="gold-text text-5xl font-serif font-light opacity-30 group-hover:opacity-60 group-hover:translate-y-[-2px] transition-all duration-500 absolute top-4 right-4">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center border border-gold/30 mb-6 rounded-full bg-gold/5 group-hover:border-gold group-hover:bg-gold/15 transition-all">
                  <step.icon className="w-6 h-6 text-gold transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-serif font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          </div>

          {/* CTA */}
          <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Cada parceria é estruturada individualmente. Converse com nosso time.
          </p>
          <Button
            variant="gold"
            size="xl"
            onClick={handleWhatsApp}
            className="group"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Agendar Conversa
          </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ModelSection;
