"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200/30">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">MS<span className="opacity-60">.dev</span></Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <button className="md:hidden px-3 py-2 rounded-lg border" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200/30">
          <div className="container py-3 flex flex-col gap-3">
            <a href="#about" onClick={()=>setOpen(false)}>About</a>
            <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
            <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
            <a href="#experience" onClick={()=>setOpen(false)}>Experience</a>
            <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
