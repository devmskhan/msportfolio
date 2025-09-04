import { ReactNode } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectCard({ 
  title, 
  desc, 
  stack, 
  href,
  githubUrl 
}: { 
  title: string; 
  desc: string; 
  stack?: string[]; 
  href?: string;
  githubUrl?: string;
}) {
  return (
    <motion.article 
      className="group bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <div className="flex gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  aria-label="View GitHub repository"
                >
                  <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </a>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  aria-label="View live project"
                >
                  <ExternalLink className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {desc}
          </p>
        </div>
      </div>
      
      {stack && stack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-sm font-medium rounded-full bg-blue-900/50 text-blue-200 border border-blue-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.article>
  );
}