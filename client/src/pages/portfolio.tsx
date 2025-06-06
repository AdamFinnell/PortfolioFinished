import Navigation from "@/components/navigation";
import MatrixBackground from "@/components/matrix-background";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import TimelineSection from "@/components/timeline-section";
import ContactSection from "@/components/contact-section";
import { Twitter, Instagram, MessageCircle, Twitch } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-orbitron cyber-blue mb-4">&copy; 2024 ALEX_CHEN.exe - All Rights Reserved</p>
          <p className="text-muted-foreground text-sm">Designed & Developed in the Cyberpunk Universe</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="cyber-blue hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="cyber-pink hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="cyber-purple hover:text-foreground transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" className="cyber-green hover:text-foreground transition-colors">
              <Twitch className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
