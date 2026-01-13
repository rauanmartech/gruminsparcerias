import ScrollReveal from "./ScrollReveal";

const SocialProofSection = () => {
  // Placeholder for future partner logos
  const partnerPlaceholders = [1, 2, 3, 4, 5];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gold-line w-8" />
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Parcerias
              </span>
              <div className="gold-line w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Construindo <span className="gold-text">relações estratégicas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com empresas que compartilham nossa visão de qualidade e resultado.
            </p>
          </div>

          {/* Partner Logos - Infinite Carousel */}
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-8 lg:gap-16 logos-scroll w-[200%]">
              {[...partnerPlaceholders, ...partnerPlaceholders].map((_, index) => (
                <div
                  key={index}
                  className="w-32 h-16 md:w-40 md:h-20 border border-border bg-card flex items-center justify-center group hover:border-gold/30 transition-colors shrink-0"
                >
                  <span className="text-xs uppercase tracking-widest text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                    Logo Parceiro
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <div className="gold-line w-16 mx-auto mb-8" />
            <blockquote className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed">
              "Não vendemos serviços. Estruturamos oportunidades reais 
              de negócio para o mercado imobiliário de alto padrão."
            </blockquote>
            <div className="mt-6">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                — GRUMINS
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SocialProofSection;
