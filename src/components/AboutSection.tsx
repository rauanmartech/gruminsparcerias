import quemSomosImg from "@/assets/quem-somos.jpeg";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-wide mx-auto">
        <ScrollReveal className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto relative overflow-hidden rounded-lg border border-gold/20">
              <img
                src={quemSomosImg}
                alt="Equipe e estrutura da GRUMINS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-line w-12" />
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Quem Somos
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-8 leading-tight">
              Uma nova estrutura<br />
              <span className="gold-text">para gerar negócios</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A GRUMINS é um grupo de negócios focado em intermediar leads 
                qualificados para o mercado imobiliário de alto padrão. 
                Não somos uma imobiliária. Não somos uma agência de marketing.
              </p>
              <p>
                Atuamos como parceiros estratégicos de incorporadoras, imobiliárias 
                e loteadoras, estruturando modelos de negócio que conectam 
                oportunidades reais a compradores qualificados.
              </p>
              <p className="text-foreground font-medium">
                Nosso papel é simples: criar condições para que vendas aconteçam.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="gold-text text-3xl md:text-4xl font-serif font-medium">B2B</span>
                <p className="text-sm text-muted-foreground mt-2">Modelo de negócio</p>
              </div>
              <div>
                <span className="gold-text text-3xl md:text-4xl font-serif font-medium">MG</span>
                <p className="text-sm text-muted-foreground mt-2">Atuação inicial</p>
              </div>
              <div>
                <span className="gold-text text-3xl md:text-4xl font-serif font-medium">Alto</span>
                <p className="text-sm text-muted-foreground mt-2">Padrão</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
