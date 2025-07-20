import CreatorShowcase from "@/components/pages/landing-page/CreatorShowcase";
import CredibilityShowcase from "@/components/pages/landing-page/CredibilityShowcase";
import HeroSection from "@/components/pages/landing-page/Hero";
import SkillBitesShowcase from "@/components/pages/landing-page/SkillBitesShowcase";
import RecommendedCourses from "@/components/pages/landing-page/RecommendedCourses";
import Cta from "@/components/pages/landing-page/Cta";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <CredibilityShowcase />
      <SkillBitesShowcase />
      <CreatorShowcase />
      <RecommendedCourses />
      <Cta />
    </>
  );
}
