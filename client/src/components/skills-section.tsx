import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  skills: Skill[];
  color: string;
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "FRONTEND.sys",
      subtitle: "Frontend Development",
      color: "cyber-blue",
      skills: [
        { name: "JavaScript (ES6+)", level: 90, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "HTML5/CSS3", level: 95, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "React.js", level: 85, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
      ]
    },
    {
      title: "BACKEND.exe",
      subtitle: "Backend Development",
      color: "cyber-pink",
      skills: [
        { name: "Node.js", level: 80, color: "bg-gradient-to-r from-pink-500 to-purple-500" },
        { name: "MongoDB", level: 75, color: "bg-gradient-to-r from-pink-500 to-purple-500" },
        { name: "PostgreSQL", level: 75, color: "bg-gradient-to-r from-pink-500 to-purple-500" },
      ]
    },
    {
      title: "TOOLS.cfg",
      subtitle: "Development Tools",
      color: "cyber-green",
      skills: [
        { name: "Git/GitHub", level: 85, color: "bg-gradient-to-r from-green-500 to-blue-500" },
        { name: "VS Code", level: 90, color: "bg-gradient-to-r from-green-500 to-blue-500" },
        { name: "Postman", level: 80, color: "bg-gradient-to-r from-green-500 to-blue-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-orbitron text-4xl md:text-5xl font-black text-center mb-16 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &gt; SKILL_MATRIX
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="hologram-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className={`font-orbitron text-xl ${category.color} mb-6`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={category.color}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className={`progress-neon h-2 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        style={{
                          boxShadow: `0 0 10px ${skill.color.includes('blue') ? 'hsl(var(--cyber-blue))' : 
                                                  skill.color.includes('pink') ? 'hsl(var(--cyber-pink))' : 
                                                  'hsl(var(--cyber-green))'}`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
