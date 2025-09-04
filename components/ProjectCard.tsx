import { ReactNode } from "react";

export default function ProjectCard({ title, desc, stack, links }:{ 
  title: string; 
  desc: string; 
  stack?: string[]; 
  links?: ReactNode; 
}) {
  return (
    <article className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{desc}</p>
        </div>
        {links}
      </div>
      {stack && stack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="text-xs px-2 py-1 rounded-full border">{s}</span>
          ))}
        </div>
      )}
    </article>
  );
}
