import AboutSection from "./components/AboutSection";
import ContactCTA from "./components/ContactCTA";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactCTA />
    </div>

  );
}
