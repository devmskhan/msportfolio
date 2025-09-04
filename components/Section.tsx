import { ReactNode } from "react";
import { motion } from "motion/react";

export default function Section({ 
  id, 
  title, 
  children, 
  subtitle 
}: { 
  id?: string, 
  title: string, 
  subtitle?: string, 
  children: ReactNode 
}) {
  return (
    <section id={id} className="container scroll-mt-24 py-16 md:py-24 relative z-10">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="space-y-8">
          {children}
        </div>
      </motion.div>
    </section>
  )
}