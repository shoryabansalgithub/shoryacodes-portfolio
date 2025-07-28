import { Header } from "./portfolio/Header";
import { AboutMe } from "./portfolio/AboutMe";
import { WorkExperience } from "./portfolio/WorkExperience";
import { Education } from "./portfolio/Education";
import { Projects } from "./portfolio/Projects";
import { Footer } from "./portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

export default Portfolio; 