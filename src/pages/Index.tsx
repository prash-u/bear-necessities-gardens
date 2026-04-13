import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
<<<<<<< Updated upstream
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
=======
import ProjectTypesSection from "@/components/ProjectTypesSection";
import ProcessSection from "@/components/ProcessSection";
>>>>>>> Stashed changes
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import ProofSection from "@/components/ProofSection";
<<<<<<< Updated upstream
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
=======
import FaqSection from "@/components/FaqSection";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <BeforeAfterSection />
=======
      <ProjectTypesSection />
      <ProcessSection />
>>>>>>> Stashed changes
      <GallerySection />
      <ProcessSection />
      <ProofSection />
<<<<<<< Updated upstream
      <CTASection />
      <FAQSection />
=======
      <FaqSection />
>>>>>>> Stashed changes
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
