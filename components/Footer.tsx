import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-400 flex items-center gap-2 justify-center md:justify-start">
              © {new Date().getFullYear()} MS. Built with 
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              and lots of coffee.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">
              Thanks for visiting!
            </span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}