import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProductsSection from "@/components/ProductsSection";
import ProcessSection from "@/components/ProcessSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import FounderSection from "@/components/FounderSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <PhilosophySection />
    <ProductsSection />
    <ProcessSection />
    <ImpactMetrics />
    <TestimonialsSection />
    <CertificationsSection />
    <FounderSection />
    <FAQSection />
  </Layout>
);

export default Index;
