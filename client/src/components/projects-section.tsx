import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  categoryColor: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "FreeCodeCamp Projects",
      description: "Responsive web design projects including tribute pages, product landing pages, and technical documentation sites built with HTML5, CSS3, and responsive design principles.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["HTML5", "CSS3", "Responsive Design"],
      category: "WEB DESIGN",
      categoryColor: "bg-primary/80"
    },
    {
      title: "JavaScript Algorithm Solutions",
      description: "Comprehensive collection of JavaScript algorithm and data structure solutions covering functional programming, object-oriented programming, and ES6+ features.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["JavaScript", "ES6+", "Algorithms"],
      category: "ALGORITHMS",
      categoryColor: "bg-accent/80"
    },
    {
      title: "React Frontend Applications",
      description: "Modern frontend applications built with React, Redux, and SASS. Features component-based architecture, state management, and responsive user interfaces.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tags: ["React", "Redux", "SASS"],
      category: "FRONTEND",
      categoryColor: "bg-purple-500/80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-orbitron text-4xl md:text-5xl font-black text-center mb-16 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &lt;PROJECT_ARCHIVES/&gt;
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="hologram-card rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image}
                  alt={project.description}
                  className="w-full h-48 object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${project.categoryColor} text-xs font-orbitron`}>
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-orbitron text-xl cyber-blue mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 cyber-button py-2 text-sm font-orbitron">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    DEMO
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary py-2 text-sm font-orbitron hover:bg-primary/20 transition-all"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    CODE
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
