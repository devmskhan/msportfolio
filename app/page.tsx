"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import  { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { links } from "@/data/links";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="container pt-16 md:pt-24">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m MS
          </motion.h1>
          <motion.p
            className="mt-3 text-lg text-slate-600 dark:text-slate-300 max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Web Developer & AI Engineer — Building modern applications and smart AI solutions.
          </motion.p>
          <motion.p
            className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I design and develop scalable web applications, AI-powered platforms, and innovative digital experiences.
            With a strong background in Next.js, Firebase, and AI model training, I bridge technology and real-world
            challenges to deliver meaningful solutions.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl border shadow-sm">See Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-xl border">Contact</a>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About Me">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I am a Web Developer and AI Engineer with experience creating digital solutions that combine modern web technologies
            and artificial intelligence. My journey spans crypto mining platforms, political campaign websites, and AI-driven
            educational apps for children. I believe technology should be engaging, impactful, and community-centered.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Whether I&apos;m building a referral system for user engagement, training a multilingual AI model, or designing an
            intuitive user interface, my focus is on applications that are both effective and enjoyable to use.
          </p>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects" subtitle="A selection of things I’ve built and shipped">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} desc={p.desc} stack={p.stack} />
          ))}
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="card">
            <h3 className="font-semibold">Web Development</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "REST APIs"].map(s => <Badge key={s}>{s}</Badge>)}
            </div>
            <h3 className="font-semibold mt-6">AI & Machine Learning</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Hugging Face", "DeepSeek", "OpenAI Whisper", "Data Preprocessing", "Model Fine-tuning", "Multilingual NLP"].map(s => <Badge key={s}>{s}</Badge>)}
            </div>
            <h3 className="font-semibold mt-6">Tools & Platforms</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["GitHub", "VSCode", "Cloud Firestore", "ElevenLabs", "Framer Motion"].map(s => <Badge key={s}>{s}</Badge>)}
            </div>
            <h3 className="font-semibold mt-6">Core Strengths</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Prompt Engineering", "Educational App Development", "Gamification", "Community-Focused Projects"].map(s => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience & Achievements">
          <ul className="card list-disc pl-6 space-y-2">
            <li>Designed and deployed crypto mining game apps with advanced engagement features (referral systems, task unlocks, reward mechanisms).</li>
            <li>Built an AI-powered multilingual kids learning platform with interactive voice conversations and storytelling features.</li>
            <li>Developed political and NGO websites featuring donations, memberships, safeguarding policies, and transparency tools.</li>
            <li>Experienced in training and fine-tuning AI language models with Hausa and other datasets for culturally inclusive solutions.</li>
            <li>Advancing studies in Public Health, applying tech skills to developmental, educational, and community initiatives.</li>
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="card">
            <p className="text-slate-700 dark:text-slate-300">Let’s build something meaningful together.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="px-4 py-2 rounded-xl border shadow-sm" href={`mailto:${links.email}`}>Email</a>
              <a className="px-4 py-2 rounded-xl border" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="px-4 py-2 rounded-xl border" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="px-4 py-2 rounded-xl border" href={links.telegram} target="_blank" rel="noreferrer">Telegram</a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
