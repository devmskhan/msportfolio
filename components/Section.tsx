import { ReactNode } from "react";

export default function Section({ id, title, children, subtitle }:{ id?: string, title: string, subtitle?: string, children: ReactNode }) {
  return (
    <section id={id} className="container scroll-mt-24 mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-1 text-slate-500">{subtitle}</p>}
      <div className="mt-6 grid gap-6">{children}</div>
    </section>
  )
}
