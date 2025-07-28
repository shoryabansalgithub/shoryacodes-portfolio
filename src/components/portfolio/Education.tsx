export const Education = () => {
  const education = [
    {
      institution: "JECRC University",
      degree: "B.Tech in Computer Science",
      location: "Jaipur, India",
      duration: "2024 - 2028",
      logo: "/designs/unnamed.jpg",
      cgpa: "6.9"
    }
  ];

  return (
    <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-8">
      <div className="max-w-lg w-full">
        {/* Education Content */}
        <div className="space-y-6">
          <h1 className="font-display text-lg md:text-xl font-medium mb-6 px-4">
            Education
          </h1>
          
          <div className="space-y-8 px-4">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start justify-between">
                {/* Left Column - Institution Details */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-black">
                      {edu.institution}
                    </h3>
                    <p className="text-black text-sm">
                      {edu.degree}
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">
                      CGPA: {edu.cgpa}
                    </p>
                  </div>
                </div>
                
                {/* Right Column - Location & Dates */}
                <div className="text-right">
                  <p className="text-zinc text-sm">
                    {edu.location}
                  </p>
                  <p className="text-zinc text-sm">
                    {edu.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 