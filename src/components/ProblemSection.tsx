import { TrendingDown, Target, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Leads que não convertem",
      description:
        "Alto investimento em mídia digital com baixa taxa de qualificação e fechamento.",
    },
    {
      icon: Target,
      title: "Foco disperso",
      description:
        "Equipe comercial sobrecarregada com leads frios que consomem tempo sem gerar resultado.",
    },
    {
      icon: Zap,
      title: "Ciclos longos demais",
      description:
        "Processos de venda estendidos que drenam recursos sem previsibilidade de retorno.",
    },
  ];

  return (
    <section
      id="problema"
      className="section-padding bg-gradient-to-b from-background via-secondary/60 to-background"
    >
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          {/* Section Header */}
          <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-line w-8" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              O Cenário Atual
            </span>
            <div className="gold-line w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            O digital que <span className="gold-text">não gera negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O mercado imobiliário de alto padrão enfrenta uma realidade paradoxal: 
            investimentos crescentes em marketing digital com retorno cada vez mais incerto.
          </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card p-8 border border-border shadow-[var(--shadow-card)] hover:border-gold/40 hover:shadow-[var(--shadow-gold)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 mb-6 rounded-full bg-gold/5 group-hover:border-gold group-hover:bg-gold/15 transition-colors">
                <problem.icon className="w-5 h-5 text-gold transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
