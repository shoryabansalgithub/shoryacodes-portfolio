import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export const LandingPages = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const landingPageProjects = [
    {
      id: 1,
      title: "IKEA Landing Page",
      description: "A modern hero section for IKEA with clean design and smooth animations",
      image: "/designs/ikea.png", // Using actual IKEA project image
      liveUrl: "https://ikea-teal.vercel.app/",
      githubUrl: "https://github.com/shoryabansalgithub/ikea",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      features: ["Hero Section", "Responsive Design", "Smooth Animations"]
    },
    {
      id: 2,
      title: "Luxury Vision - Destination Planner",
      description: "Hero section for a luxury destination planning service with elegant design",
      image: "/luxury.png", // Using actual Luxury Vision project image
      liveUrl: "https://luxury-vision-intro.vercel.app/",
      githubUrl: null,
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      features: ["Hero Section", "Luxury Design", "Destination Planning"]
    }
  ];

  return (
    <>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {landingPageProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video overflow-hidden cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center" onClick={() => setExpandedImage(project.image)}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-medium text-gray-700 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Landing Page Preview
                    </p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200 flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded-md transition-colors duration-200 flex items-center gap-1">
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {expandedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setExpandedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <img src={expandedImage} alt="Expanded view" className="w-full h-full object-contain rounded-lg" />
            <button onClick={() => setExpandedImage(null)} className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200">
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}; 