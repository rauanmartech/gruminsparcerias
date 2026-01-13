import impactoImg from "@/assets/impacto.png";
import ScrollReveal from "./ScrollReveal";

const StrategySection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <ScrollReveal className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left - Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-line w-12" />
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Posicionamento Estratégico
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight">
              EXTRAORDINÁRIO POR ESTRATÉGIA
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Em um mercado imobiliário onde a presença digital nem sempre se traduz em negócios, a GRUMINS atua
                como ponte entre projetos de alto padrão e compradores qualificados. Nossa atuação é estratégica:
                estruturamos a entrada, a filtragem e a condução de leads para apoiar o fechamento de vendas de
                condomínios e empreendimentos de alto valor.
              </p>
              <p>
                Utilizamos tecnologia e inteligência de dados para qualificar a demanda, organizar o fluxo comercial
                e garantir que apenas oportunidades reais cheguem ao time de vendas. O resultado é um processo mais
                eficiente, previsível e alinhado ao perfil do público investidor.
              </p>
              <p className="text-foreground font-medium tracking-[0.08em] uppercase">
                BEM-VINDO À GRUMINS, ONDE O DIGITAL DEIXA DE SER PRESENÇA E PASSA A SER NEGÓCIO.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-full min-h-[260px] rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
            <img
              src={impactoImg}
              alt="Representação de impacto e estratégia digital da GRUMINS"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StrategySection;
