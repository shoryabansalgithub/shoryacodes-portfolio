export const WorkExperience = () => {
  const experiences = [
    {
      company: "Excelerate",
      role: "Data engineer early intern",
      location: "Remote",
      duration: "Nov 2024 - Nov 2024",
      logo: "/designs/excelerate.jpg" // Using available logo
    },
    {
      company: "Headstarter AI",
      role: "Software Engineer Intern",
      location: "Remote",
      duration: "Aug 2024 - Sep 2024",
      logo: "/designs/theheadstarter_logo.jpg" // Using available logo
    },
    
  ];

  return (
    <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-8">
      <div className="max-w-lg w-full">
        {/* Work Experience Content */}
        <div className="space-y-6">
          <h1 className="font-display text-lg md:text-xl font-medium mb-6 px-4">
            Work Experience
          </h1>
          
          <div className="space-y-8 px-4">
            {experiences.map((experience, index) => (
              <div key={index} className="flex items-start justify-between">
                {/* Left Column - Company Details */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={experience.logo} 
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-black">
                      {experience.company}
                    </h3>
                    <p className="text-black text-sm">
                      {experience.role}
                    </p>
                  </div>
                </div>
                
                {/* Right Column - Location & Dates */}
                <div className="text-right">
                  <p className="text-zinc text-sm">
                    {experience.location}
                  </p>
                  <p className="text-zinc text-sm">
                    {experience.duration}
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