import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mx-auto w-full max-w-screen-sm px-4 py-8 pb-16">
      <div className="max-w-lg w-full">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              by Shorya
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 