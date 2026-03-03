import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import TrailMap from "@/components/landing/TrailMap";
import FeatureCards from "@/components/landing/FeatureCards";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrailMap />
        <FeatureCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
