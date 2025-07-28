import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:bansalshorya13@gmail.com",
    label: "Email"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shorya-bansal-621586312",
    label: "LinkedIn"
  },
  {
    icon: Twitter,
    href: "https://x.com/Shorya_codes",
    label: "Twitter"
  },
  {
    icon: Github,
    href: "https://github.com/shoryabansalgithub",
    label: "GitHub"
  }
];

export const AboutMe = () => {
  return (
    <div id="about" className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-8">
      <div className="max-w-lg w-full">
        {/* About Me Content */}
        <div className="space-y-6">
          <h1 className="font-display text-lg md:text-xl font-medium mb-4 px-4">
            About Me
          </h1>
          
          <div className="space-y-4 text-zinc-600 px-4">
            <p className="leading-relaxed">
              I love to tinker with new technologies and build new things. You can find me actively yapping on x.com .I currently reside in Jaipur India .
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                OPEN TO WORK
              </span>
              <span className="text-xs text-zinc-500">( both on-site and remote)</span>
            </div>
          </div>

          {/* Skills Section */}
          <div className="pt-4 px-4">
            <h2 className="font-display text-lg font-medium mb-4">
              What I work with
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React", "TypeScript", "Node.js", "Next.js", 
                "Tailwind CSS", "PostgreSQL", "Framer Motion",
                "Figma", "Git", "AWS"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};