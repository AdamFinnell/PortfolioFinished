import { motion } from "framer-motion";
import { Download, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000" 
          alt="Digital matrix code background with binary patterns" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-orbitron text-5xl md:text-7xl font-black mb-6 animate-glow"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            ADAM <span className="cyber-pink">FINNELL</span>
          </motion.h1>
          
          <div className="cyber-border inline-block px-6 py-3 mb-8">
            <p className="font-orbitron text-xl md:text-2xl cyber-green">
              &gt; FULLSTACK_DEVELOPER.exe
            </p>
          </div>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Currently: Full-stack dev IRL. Mentally: An S-rank support character in a team of dreamers. 
            Let's build something epic together.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="cyber-button px-8 py-3 font-orbitron font-bold">
              <Download className="mr-2 h-4 w-4" />
              DOWNLOAD_CV
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-primary px-8 py-3 font-orbitron font-bold hover:bg-primary/20 transition-all"
              onClick={scrollToProjects}
            >
              <Rocket className="mr-2 h-4 w-4" />
              VIEW_PROJECTS
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="particle animate-float absolute"
          style={{ left: '10%', top: '20%' }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="particle animate-float absolute"
          style={{ left: '80%', top: '30%' }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="particle animate-float absolute"
          style={{ left: '60%', top: '70%' }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="particle animate-float absolute"
          style={{ left: '30%', top: '80%' }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>
    </section>
  );
}
