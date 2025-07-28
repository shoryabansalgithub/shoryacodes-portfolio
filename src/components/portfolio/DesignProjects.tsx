import { useState } from "react";

export const DesignProjects = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const designProjects = [
    {
      id: 1,
      title: "Brand Identity System",
      description: "Comprehensive brand identity with consistent design language",
      image: "/designs/GwC5sEVWIAAEFMZ.jpg"
    },
    {
      id: 2,
      title: "Modern Dashboard Design",
      description: "A clean and intuitive dashboard interface with modern UI patterns",
      image: "/designs/GwDFd_tXkAAjzwB.jpg"
    },
    {
      id: 3,
      title: "Mobile App Interface",
      description: "Responsive mobile app design with smooth user experience",
      image: "/designs/Gu38Pr5XAAAW846.png"
    },
    {
      id: 4,
      title: "Web Application UI",
      description: "Professional web application interface with modern design principles",
      image: "/designs/Gu88Z9nXAAAh3Eg.jpg"
    },
    {
      id: 5,
      title: "Landing Page Design",
      description: "Engaging landing page with compelling visual hierarchy",
      image: "/designs/GvxChnQWAAAsd24.jpg"
    }
  ];

  return (
    <>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designProjects.map((project) => (
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <img 
              src={expandedImage} 
              alt="Expanded view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}; 