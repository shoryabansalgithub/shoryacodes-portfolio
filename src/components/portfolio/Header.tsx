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

export const Header = () => {
  return (
    <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-8">
      <div className="max-w-lg w-full">
        {/* Profile Image */}
        <div className="mb-6 flex px-4">
          <img 
            src="/designs/header.jpg" 
            alt="Shorya Bansal" 
            className="w-20 h-20 rounded-full object-cover border-2 border-border"
          />
        </div>

        {/* Greeting */}
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-2 px-4">
          Hi! 👋
        </h1>
        <h2 className="font-display text-lg md:text-xl font-medium mb-2 px-4">
          I am Shorya 
        </h2>
        <h3 className="font-display text-base md:text-lg font-medium mb-6 px-4 text-zinc-600">
          Developer by the day and Designer by the night
        </h3>
        {/* Social Links */}
        <div className="flex items-center px-4 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('#') ? undefined : "_blank"}
              rel={social.href.startsWith('#') ? undefined : "noopener noreferrer"}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <social.icon className="w-4 h-4" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}; 