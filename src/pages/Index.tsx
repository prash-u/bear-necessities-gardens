import { useState } from "react";
import { ActiveLogoProvider } from "@/components/ActiveLogoProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StyleSwitcher from "@/components/StyleSwitcher";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProofSection from "@/components/ProofSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { logoShowcaseModes, structuredData } from "@/data/siteContent";

const Index = () => {
  const [activeMode, setActiveMode] = useState<(typeof logoShowcaseModes)[number]["id"]>(
    "lockup-bear",
  );

  return (
    <ActiveLogoProvider activeMode={activeMode}>
      <div className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header activeMode={activeMode} />
        <HeroSection activeMode={activeMode} />
        <AboutSection />
        <StyleSwitcher activeMode={activeMode} onChange={setActiveMode} />
        <ServicesSection />
        <ProjectTypesSection />
        <ProcessSection />
        <GallerySection />
        <BeforeAfterSection />
        <ProofSection />
        <FaqSection />
        <CTASection />
        <ContactSection />
        <Footer activeMode={activeMode} />
      </div>
    </ActiveLogoProvider>
  );
};

export default Index;
