import logoGrumins from "@/assets/logo-grumins.png";
import logoGruminsIcon from "@/assets/logo-grumins-icon.png";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="relative container-wide mx-auto px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
        <img
          src={logoGruminsIcon}
          alt="GRUMINS watermark"
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-y-0 left-[-4rem] h-full w-auto opacity-[0.05] md:opacity-[0.07] lg:opacity-[0.08] dark:opacity-[0.08] dark:md:opacity-[0.1] dark:lg:opacity-[0.12] object-contain"
        />
        <ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logoGrumins}
              alt="GRUMINS"
              className="h-10 w-auto mb-6 footer-logo-grafite"
            />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Grupo Mineiro de Negócios. Estruturamos parcerias estratégicas 
              para o mercado imobiliário de alto padrão.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a
                  href="https://wa.me/5531995376067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato.grumins@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  contato.grumins@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/grumins.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Instagram: @grumins.co
                </a>
              </li>
              <li>Belo Horizonte, MG</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} GRUMINS. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
