import { useState } from "react";

export const DevelopmentProjects = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const developmentProjects = [
    {
      id: 1,
      title: "noob.js",
      description: "A pure javascript library written to teach you how react works under the hood",
      image: "/designs/noobjs.png",
      liveUrl: null,
      githubUrl: "https://github.com/shoryabansalgithub/noob.js",
      tech: ["Javascript"]
    },
    {
      id: 2,
      title: "DAMN",
      description: "An AI image enhancer",
      image: "/designs/damn.png",
      liveUrl: "https://damn12.vercel.app",
      githubUrl: "https://github.com/shoryabansalgithub/damn12",
      tech: ["React", "Tailwind", "Framer Motion"]
    },
    {
      id: 3,
      title: "Lamborghini Exhibition",
      description: "Frontend of a lamborghini exhibition with stunning visuals and animations",
      image: "/designs/lambo.png",
      liveUrl: "https://lambo-eight.vercel.app/",
      githubUrl: "https://github.com/shoryabansalgithub/lamborghini_showcase",
      tech: ["React", "Tailwind CSS", "Framer Motion"]
    }
  ];

  return (
    <>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {developmentProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video overflow-hidden cursor-pointer" onClick={() => setExpandedImage(project.image)}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition-colors duration-200">
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded-md transition-colors duration-200">
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
            <button onClick={() => setExpandedImage(null)} className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"></button>
          </div>
        </div>
      )}
    </>
  );
}; 