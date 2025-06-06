import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  color: string;
}

export default function TimelineSection() {
  const timelineItems: TimelineItem[] = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Industries",
      period: "2022 - PRESENT",
      description: "Leading development of scalable microservices architecture, mentoring junior developers, and implementing CI/CD pipelines that increased deployment efficiency by 300%.",
      color: "bg-primary"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Nexus Solutions",
      period: "2020 - 2022",
      description: "Built responsive web applications using React and Node.js, collaborated with cross-functional teams, and optimized database performance reducing query times by 60%.",
      color: "bg-accent"
    },
    {
      title: "Junior Developer",
      company: "StartupVault",
      period: "2019 - 2020",
      description: "Started my journey in web development, contributing to frontend interfaces and learning modern development practices in an agile environment.",
      color: "bg-purple-500"
    },
    {
      title: "Computer Science Degree",
      company: "Tech University",
      period: "2015 - 2019",
      description: "Bachelor's in Computer Science with focus on software engineering, algorithms, and artificial intelligence. Graduated Magna Cum Laude.",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-muted/50 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="font-orbitron text-4xl md:text-5xl font-black text-center mb-16 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &gt; CAREER_LOG
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-green-500"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={item.title}
                className="relative pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div 
                  className={`absolute left-6 w-4 h-4 ${item.color} rounded-full animate-neon-pulse`}
                  style={{ marginLeft: '-8px' }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 5px currentColor',
                      '0 0 20px currentColor',
                      '0 0 5px currentColor'
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                />
                
                <motion.div 
                  className="hologram-card p-6 rounded-lg"
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h3 className="font-orbitron text-xl cyber-blue">{item.title}</h3>
                    <span className="cyber-green font-orbitron text-sm">{item.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-3 font-medium">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
