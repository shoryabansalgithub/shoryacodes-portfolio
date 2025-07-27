import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:shorya@example.com",
    label: "Email"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/shorya-bansal",
    label: "LinkedIn"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/shorya_bansal",
    label: "Twitter"
  },
  {
    icon: Github,
    href: "https://github.com/shorya-bansal",
    label: "GitHub"
  }
];

export const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 tracking-tight">
            I am Shorya Bansal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Developer by the day, Designer by the night
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.5 + index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </header>
  );
};