import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-orbitron text-4xl md:text-5xl font-black text-center mb-16 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &lt;ABOUT_ME/&gt;
        </motion.h2>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="hologram-card p-8 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="font-orbitron text-2xl cyber-green mb-6">SYSTEM.getCurrentUser()</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hi, I'm Adam D. Finnell II, a passionate full-stack developer originally from Frankfort, KY. In 2024, I joined the Persevere program and began my journey into coding—discovering not just a skill, but a calling. Now based in Tennessee, I specialize in building responsive web applications, exploring creative tech solutions, and mentoring others who are just starting their path.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a full-stack developer with a strong foundation in JavaScript, HTML, and CSS. I've worked with modern frameworks like React and Node.js, and I'm comfortable building full web applications from front to back. My toolbox includes Git, GitHub, VS Code, Postman, and Netlify for deployment, and I've built projects using both MongoDB and PostgreSQL databases.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Beyond the technical, I bring a creative, collaborative energy to every project. Whether I'm debugging a stubborn issue or helping newer devs as a teaching assistant, I approach challenges with curiosity and patience. Whether I'm debugging a JavaScript function or sketching anime fan art, I bring curiosity, precision, and heart to everything I do.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-primary/20 border border-primary text-primary font-orbitron hover:bg-primary/30">
                JAVASCRIPT
              </Badge>
              <Badge className="bg-accent/20 border border-accent text-accent font-orbitron hover:bg-accent/30">
                REACT.JS
              </Badge>
              <Badge className="bg-purple-500/20 border border-purple-500 text-purple-500 font-orbitron hover:bg-purple-500/30">
                NODE.JS
              </Badge>
              <Badge className="bg-green-500/20 border border-green-500 text-green-500 font-orbitron hover:bg-green-500/30">
                TAILWIND CSS
              </Badge>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* Character Portrait */}
            <div className="cyber-border p-4 rounded-lg animate-neon-pulse">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Futuristic developer character illustration" 
                className="w-full rounded-lg" 
              />
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              className="absolute -right-4 top-8 hologram-card p-4"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="cyber-green font-orbitron text-2xl font-bold">4</div>
              <div className="text-sm text-muted-foreground">FCC Certifications</div>
            </motion.div>
            
            <motion.div 
              className="absolute -left-4 bottom-8 hologram-card p-4"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <div className="cyber-pink font-orbitron text-2xl font-bold">2024</div>
              <div className="text-sm text-muted-foreground">Current Role</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
