import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm text-muted-foreground">
          Built by Shorya Bansal — 2025
        </p>
      </motion.div>
    </footer>
  );
};