import { motion } from "framer-motion";
import { Header } from "./portfolio/Header";
import { WorkExperience } from "./portfolio/WorkExperience";
import { Projects } from "./portfolio/Projects";
import { Skills } from "./portfolio/Skills";
import { Education } from "./portfolio/Education";
import { Footer } from "./portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="max-w-container mx-auto px-6">
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;