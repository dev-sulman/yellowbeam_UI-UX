import AboutSection from '@/components/home/about-section';
import AiAdvisorSection from '@/components/home/ai-advisor-section';
import ConsultationSection from '@/components/home/consultation-section';
import ExpertiseSection from '@/components/home/expertise-section';
import HeroSection from '@/components/home/hero-section';
import IndustriesSection from '@/components/home/industries-section';
import LatestProjectsSection from '@/components/home/latest-projects-section';
import MarqueeSection from '@/components/home/marquee-section';
import ServicesSection from '@/components/home/services-section';

export default function Home() {
  return (
    <div className="font-body text-base">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <IndustriesSection />
      <LatestProjectsSection />
      <AiAdvisorSection />
      <MarqueeSection />
      <ConsultationSection />
    </div>
  );
}
