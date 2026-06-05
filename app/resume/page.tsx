import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Mail, Phone } from "lucide-react";
import { ResumeActions } from "@/components/ResumeActions";
import { achievements, certifications, experience, links, profile, projects, research, skillGroups } from "@/lib/data";

export const metadata = { title: "Resume", description: "Resume of Subhav Kumar, AI Research Intern and CSE undergraduate at IIIT Raichur." };

export default function ResumePage() {
  const github = links.find((l) => l.label === "GitHub");
  const linkedin = links.find((l) => l.label === "LinkedIn");
  const codolio = links.find((l) => l.label === "Codolio");

  return (
    <main className="min-h-screen bg-cream py-8 text-primary print:bg-white print:py-0">
      <div className="mx-auto w-full max-w-5xl px-5 print:max-w-none print:px-0">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link href="/#home" className="resume-top-link"><ArrowLeft className="h-4 w-4" /> Back to portfolio</Link>
          <div className="flex flex-wrap gap-3">
            <a className="resume-top-link" href="/resume_subhav.pdf" target="_blank" rel="noreferrer"><FileText className="h-4 w-4" /> View PDF</a>
            <ResumeActions />
          </div>
        </div>
        <article className="rounded-xl border border-warm bg-white p-6 shadow-card print:rounded-none print:border-0 print:p-0 print:shadow-none sm:p-10">
          <header className="border-b border-warm pb-6">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{profile.name}</h1>
            <p className="mt-3 text-lg text-secondary">{profile.headline}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-secondary">
              <a className="resume-inline" href={`mailto:${profile.email}`}><Mail className="h-4 w-4" /> {profile.email}</a>
              <span className="resume-inline"><Phone className="h-4 w-4" /> {profile.phone}</span>
              {github ? <Ext label="GitHub" href={github.href} /> : null}
              {linkedin ? <Ext label="LinkedIn" href={linkedin.href} /> : null}
              {codolio ? <Ext label="Codolio" href={codolio.href} /> : null}
            </div>
          </header>
          <RS title="Education"><div className="resume-row"><div><h3 className="resume-item-title">B.Tech in Computer Science and Engineering</h3><p className="text-secondary">Indian Institute of Information Technology, Raichur</p></div><div className="resume-date">2023 - 2027 | CGPA: {profile.cgpa}</div></div></RS>
          <RS title="Experience">{experience.map((item) => (<div key={item.role} className="resume-block"><div className="resume-row"><div><h3 className="resume-item-title">{item.role}</h3><p className="text-secondary">{item.organization}</p></div><div className="resume-date">{item.period}</div></div><ul className="resume-list">{item.points.map((p) => (<li key={p}>{p}</li>))}</ul></div>))}</RS>
          <RS title="Research">{research.map((item) => (<div key={item.title} className="resume-block"><div className="resume-row"><div><h3 className="resume-item-title">{item.title}</h3><p className="text-secondary">{item.venue}</p></div><div className="resume-date">{item.label}</div></div><p className="mt-2 leading-7 text-secondary">{item.summary}</p></div>))}</RS>
          <RS title="Projects">{projects.map((p) => (<div key={p.title} className="resume-block"><div className="resume-row"><div><h3 className="resume-item-title">{p.title}</h3><p className="text-secondary">{p.stack.join(", ")}</p></div><div className="resume-date">{p.year}</div></div><p className="mt-2 leading-7 text-secondary">{p.summary}</p><a className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover print:hidden" href={p.repository} target="_blank" rel="noreferrer">Repository <ExternalLink className="h-3.5 w-3.5" /></a></div>))}</RS>
          <RS title="Technical Skills"><div className="grid gap-3 sm:grid-cols-2">{skillGroups.map((g) => (<div key={g.title}><h3 className="resume-item-title text-base">{g.title}</h3><p className="mt-1 leading-7 text-secondary">{g.skills.join(", ")}</p></div>))}</div></RS>
          <RS title="Certifications & Achievements"><div className="grid gap-4">{certifications.map((c) => (<a key={c.title} className="resume-cert-link" href={c.href} target="_blank" rel="noreferrer">{c.title} <ExternalLink className="h-4 w-4 print:hidden" /></a>))}<ul className="resume-list mt-1">{achievements.map((a) => (<li key={a.text}>{a.text}{a.links ? (<span className="ml-2 inline-flex flex-wrap gap-2 print:hidden">{a.links.map((l) => (<a key={l.href} className="font-semibold text-accent" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>))}</span>) : null}</li>))}</ul></div></RS>
        </article>
      </div>
    </main>
  );
}

function RS({ title, children }: { title: string; children: React.ReactNode }) {
  return (<section className="border-b border-warm py-6 last:border-b-0"><h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{title}</h2>{children}</section>);
}

function Ext({ label, href }: { label: string; href: string }) {
  return (<a className="resume-inline" href={href} target="_blank" rel="noreferrer">{label} <ExternalLink className="h-3.5 w-3.5 print:hidden" /></a>);
}
