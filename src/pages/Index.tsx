import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import ProofSection from "@/components/ProofSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { structuredData } from "@/data/siteContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectTypesSection />
      <ProcessSection />
      <GallerySection />
      <ProofSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
