import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Headstarter AI",
    role: "Software Engineer Intern",
    period: "Jul 2024 – Sep 2024",
    location: "Remote (New York Area)",
    achievements: [
      "Spearheaded the development of 5 AI-driven products using large language models (LLMs).",
      "Built scalable solutions with MERN stack.",
      "Integrated AI to enhance user experience and performance."
    ]
  },
  {
    company: "Excelerate",
    role: "Data Visualization Early Intern",
    period: "Nov 2024 – Nov 2024",
    location: "Remote (Dublin, Ireland)",
    achievements: [
      "Structured and cleaned large datasets.",
      "Applied data mining to find actionable patterns.",
      "Collaborated cross-functionally to build data-driven dashboards."
    ]
  },
  {
    company: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    period: "Oct 2024 – Oct 2024",
    location: "Remote",
    achievements: [
      "Contributed to open-source repositories.",
      "Participated in collaborative coding sessions and PR reviews."
    ]
  }
];

export const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-light mb-16 text-center">
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              className="border-l-2 border-border pl-8 relative"
            >
              <div className="absolute w-3 h-3 bg-foreground rounded-full -left-2 top-0"></div>
              
              <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium mb-1">{exp.company}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{exp.role}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                </div>
                
                <div className="md:col-span-2">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};