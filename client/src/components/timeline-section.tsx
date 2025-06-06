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
      title: "Peer Facilitator",
      company: "Persevere",
      period: "2024 - PRESENT",
      description: "Provide instructional support and mentoring to students learning front-end development. Assist with coursework in JavaScript, HTML, CSS, and Data Structures. Guide students in debugging code and understanding object-oriented programming principles.",
      color: "bg-primary"
    },
    {
      title: "Clerk",
      company: "T.C.A.T.",
      period: "2021 - 2024",
      description: "Created Word documents and Excel spreadsheets, utilized Microsoft Office programs effectively, and operated printer and scanner equipment in an educational environment.",
      color: "bg-accent"
    },
    {
      title: "Library Assistant",
      company: "State of Tennessee",
      period: "2019 - 2021",
      description: "Utilized Excel spreadsheets for data management, typed memos using Microsoft Word, and performed inventory duties. Developed strong organizational and computer literacy skills.",
      color: "bg-purple-500"
    },
    {
      title: "General Construction Diploma",
      company: "Tennessee College of Applied Technologies",
      period: "2022",
      description: "Graduated with a 4.0 GPA from TCAT Dickson, developing strong problem-solving skills and attention to detail that translate well to programming and web development.",
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
