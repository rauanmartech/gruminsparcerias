import ScrollReveal from "./ScrollReveal";

const WavesDivider = () => {
  return (
    <section
      aria-hidden="true"
      className="bg-gradient-to-b from-background via-background to-secondary/90"
    >
      <div className="container-wide mx-auto px-0">
        <ScrollReveal>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20 md:h-24 lg:h-28"
        >
          <defs>
            <linearGradient id="wave-line-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(47 71% 55%)" stopOpacity="0.15" />
              <stop offset="50%" stopColor="hsl(47 71% 42%)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(47 71% 32%)" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Three minimal wave lines */}
          <path
            d="M0 60 C 180 40 360 80 540 60 C 720 40 900 80 1080 60 C 1260 40 1380 70 1440 60"
            fill="none"
            stroke="url(#wave-line-gold)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 72 C 200 52 380 92 560 72 C 740 52 920 92 1100 72 C 1280 52 1400 82 1440 72"
            fill="none"
            stroke="url(#wave-line-gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M0 84 C 220 64 400 104 580 84 C 760 64 940 104 1120 84 C 1300 64 1420 94 1440 84"
            fill="none"
            stroke="url(#wave-line-gold)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WavesDivider;
