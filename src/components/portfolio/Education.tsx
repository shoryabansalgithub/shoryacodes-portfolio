import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-display font-light mb-16">
          Education
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="border border-border p-8"
        >
          <h3 className="text-xl font-medium mb-2">JECRC University</h3>
          <p className="text-muted-foreground mb-2">2024 – 2028</p>
          <p className="text-lg mb-4">Bachelor of Technology – Computer Science</p>
          <p className="text-sm text-muted-foreground mb-4">Currently pursuing</p>
          <p className="text-sm text-muted-foreground">
            Relevant subjects: C++, Engineering Math, ML, Physics
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};