"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { links } from "@/data/links";
import { motion } from "motion/react";
import { ArrowRight, Download, Github, ExternalLink, Mail, MapPin, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <Header />

      <main className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"></div>
          <div className="absolute top-40 -left-40 w-60 h-60 rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-600/10 to-blue-600/10 blur-2xl"></div>
        </div>

        {/* Hero */}
        <section className="container pt-20 md:pt-32 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-sm font-medium text-slate-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Available for new opportunities
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 p-1 bg-gradient-to-r from-blue-500 to-purple-500">
                  <img
                    src="/api/placeholder/160/160"
                    alt="MS - Web Developer & AI Engineer"
                    className="w-full h-full rounded-full object-cover bg-slate-700"
                    onError={(e) => {
                      // Fallback to a placeholder div if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden w-full h-full rounded-full bg-gradient-to-br from-slate-600 to-slate-700 items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-3xl font-bold text-white">MS</span>
                  </div>
                </div>
                {/* Animated ring around image */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"></div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm MS
            </motion.h1>
            
            <motion.p
              className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Web Developer & AI Engineer — Building modern applications and smart AI solutions that bridge technology with real-world impact.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                See My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="mt-12 flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4+</div>
                <div className="text-sm text-slate-400">Projects Built</div>
              </div>
              <div className="w-px bg-slate-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="w-px bg-slate-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">∞</div>
                <div className="text-sm text-slate-400">Lines of Code</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About Me" subtitle="Get to know me better">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I am a passionate Web Developer and AI Engineer who creates digital solutions that combine cutting-edge web technologies with artificial intelligence. My journey spans from crypto mining platforms to AI-driven educational apps for children.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I believe technology should be engaging, impactful, and community-centered. Whether I&apos;m building referral systems, training multilingual AI models, or designing intuitive interfaces, my focus is always on creating applications that are both effective and delightful to use.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Based in Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">2+ Years in Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Open Source Contributor</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects" subtitle="A selection of things I've built and shipped">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Technologies">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend",
                icon: "🎨",
                skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
              },
              {
                title: "Backend",
                icon: "⚡",
                skills: ["Firebase", "REST APIs", "Cloud Firestore", "Authentication"]
              },
              {
                title: "AI/ML",
                icon: "🤖",
                skills: ["Hugging Face", "OpenAI Whisper", "Model Fine-tuning", "NLP"]
              },
              {
                title: "Tools",
                icon: "🛠️",
                skills: ["GitHub", "VSCode", "ElevenLabs", "Framer Motion"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Badge key={skill} className="bg-blue-900/50 text-blue-200 border-blue-800/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience & Achievements">
          <motion.div
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                "Designed and deployed crypto mining game apps with advanced engagement features including referral systems, task unlocks, and reward mechanisms",
                "Built an AI-powered multilingual kids learning platform with interactive voice conversations and storytelling features",
                "Developed political and NGO websites featuring donation systems, membership registration, and transparency tools",
                "Trained and fine-tuned AI language models with Hausa and other datasets for culturally inclusive solutions",
                "Currently advancing studies in Public Health while applying tech skills to community-focused initiatives"
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-slate-700/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                  <p className="text-slate-300 leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Let's Work Together">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold mb-4 text-white">Ready to build something amazing?</h3>
              <p className="text-lg text-slate-300 mb-8">
                Let's discuss your next project and create something meaningful together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" 
                  href={`mailto:${links.email}`}
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
                <a 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white" 
                  href={links.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white" 
                  href={links.github} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}