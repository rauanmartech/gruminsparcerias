import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StrategySection from "@/components/StrategySection";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import WavesDivider from "@/components/WavesDivider";
import ModelSection from "@/components/ModelSection";
import AudienceSection from "@/components/AudienceSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StrategySection />
        <ProblemSection />
        <AboutSection />
        <WavesDivider />
        <ModelSection />
        <AudienceSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
