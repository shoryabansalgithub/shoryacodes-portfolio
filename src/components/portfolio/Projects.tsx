import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = {
  development: [
    {
      title: "noob.js",
      description: "React-like library in vanilla JS.",
      tags: ["JavaScript", "DOM", "Framework Design"],
      link: "#"
    },
    {
      title: "damn",
      description: "AI image enhancer using React & Framer Motion.",
      tags: ["AI", "Image", "React", "Tailwind"],
      link: "#"
    }
  ],
  designs: [
    {
      title: "BrandKit UI",
      description: "Sleek identity manager for startups.",
      tags: ["Figma", "Minimal", "Design Systems"],
      link: "#"
    }
  ],
  "landing-pages": [
    {
      title: "dev",
      description: "Agency website with scroll reveal and responsive layout.",
      tags: ["Next.js", "Tailwind", "GSAP"],
      link: "#"
    }
  ]
};

const tabs = [
  { id: "development", label: "Development" },
  { id: "designs", label: "Designs" },
  { id: "landing-pages", label: "Landing Pages" }
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("development");
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
          Things I've Built
        </h2>

        <div className="mb-12">
          <div className="flex justify-center">
            <div className="relative flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 text-sm transition-colors duration-200 ${
                    activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects[activeTab as keyof typeof projects].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className="group"
              >
                <div className="border border-border p-6 transition-all duration-200 hover:border-foreground/20">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-block text-sm border border-border px-3 py-1 transition-all duration-200 hover:bg-muted"
                  >
                    View
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};