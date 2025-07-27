import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "C++", "Python"]
  },
  {
    category: "Frameworks",
    skills: ["React", "Node.js", "Express", "Tailwind"]
  },
  {
    category: "Tools",
    skills: ["Git", "MongoDB", "Framer Motion", "GSAP"]
  }
];

export const Skills = () => {
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
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.2,
                ease: "easeOut" 
              }}
              className="text-center"
            >
              <h3 className="text-lg font-medium mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      ease: "easeOut" 
                    }}
                    className="inline-block w-full px-4 py-2 text-sm border border-border bg-muted/50 text-muted-foreground"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};