import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Mail, Phone } from "lucide-react";
import { ResumeActions } from "@/components/ResumeActions";
import {
  achievements,
  certifications,
  experience,
  links,
  profile,
  projects,
  research,
  skillGroups
} from "@/lib/data";

export const metadata = {
  title: "Resume",
  description: "Resume of Subhav Kumar, AI Research Intern and CSE undergraduate at IIIT Raichur."
};

export default function ResumePage() {
  const github = links.find((link) => link.label === "GitHub");
  const linkedin = links.find((link) => link.label === "LinkedIn");
  const codolio = links.find((link) => link.label === "Codolio");

  return (
    <main className="min-h-screen bg-[#f4f0e7] py-8 text-ink print:bg-white print:py-0">
      <div className="mx-auto w-full max-w-5xl px-5 print:max-w-none print:px-0">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link href="/#home" className="resume-top-link">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <div className="flex flex-wrap gap-3">
            <a className="resume-top-link" href="/resume-subhav-kumar.pdf" target="_blank" rel="noreferrer">
              <FileText className="h-4 w-4" />
              View PDF resume
            </a>
            <ResumeActions />
          </div>
        </div>

        <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-[0_24px_80px_rgba(20,20,20,0.1)] print:rounded-none print:border-0 print:p-0 print:shadow-none sm:p-10">
          <header className="border-b border-ink/10 pb-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{profile.name}</h1>
            <p className="mt-3 text-lg font-medium text-graphite/75">{profile.headline}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-graphite/75">
              <a className="resume-inline" href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <span className="resume-inline">
                <Phone className="h-4 w-4" />
                {profile.phone}
              </span>
              {github ? <ResumeExternal label="GitHub" href={github.href} /> : null}
              {linkedin ? <ResumeExternal label="LinkedIn" href={linkedin.href} /> : null}
              {codolio ? <ResumeExternal label="Codolio" href={codolio.href} /> : null}
            </div>
          </header>

          <ResumeSection title="Education">
            <div className="resume-row">
              <div>
                <h3 className="resume-item-title">B.Tech in Computer Science and Engineering</h3>
                <p className="text-graphite/70">Indian Institute of Information Technology, Raichur</p>
              </div>
              <div className="resume-date">2023 - 2027 | CGPA: {profile.cgpa}</div>
            </div>
          </ResumeSection>

          <ResumeSection title="Experience">
            {experience.map((item) => (
              <div key={item.role} className="resume-block">
                <div className="resume-row">
                  <div>
                    <h3 className="resume-item-title">{item.role}</h3>
                    <p className="text-graphite/70">{item.organization}</p>
                  </div>
                  <div className="resume-date">{item.period}</div>
                </div>
                <ul className="resume-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Research">
            {research.map((item) => (
              <div key={item.title} className="resume-block">
                <div className="resume-row">
                  <div>
                    <h3 className="resume-item-title">{item.title}</h3>
                    <p className="text-graphite/70">{item.venue}</p>
                  </div>
                  <div className="resume-date">{item.label}</div>
                </div>
                <p className="mt-2 leading-7 text-graphite/80">{item.summary}</p>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Projects">
            {projects.map((project) => (
              <div key={project.title} className="resume-block">
                <div className="resume-row">
                  <div>
                    <h3 className="resume-item-title">{project.title}</h3>
                    <p className="text-graphite/70">{project.stack.join(", ")}</p>
                  </div>
                  <div className="resume-date">{project.year}</div>
                </div>
                <p className="mt-2 leading-7 text-graphite/80">{project.summary}</p>
                <a className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-graphite hover:text-coral print:hidden" href={project.repository} target="_blank" rel="noreferrer">
                  Repository <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Technical Skills">
            <div className="grid gap-3 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="resume-item-title text-base">{group.title}</h3>
                  <p className="mt-1 leading-7 text-graphite/80">{group.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Certifications and Achievements">
            <div className="grid gap-4">
              {certifications.map((item) => (
                <a key={item.title} className="resume-cert-link" href={item.href} target="_blank" rel="noreferrer">
                  {item.title}
                  <ExternalLink className="h-4 w-4 print:hidden" />
                </a>
              ))}
              <ul className="resume-list mt-1">
                {achievements.map((achievement) => (
                  <li key={achievement.text}>
                    {achievement.text}
                    {achievement.links ? (
                      <span className="ml-2 inline-flex flex-wrap gap-2 print:hidden">
                        {achievement.links.map((link) => (
                          <a key={link.href} className="font-semibold text-coral" href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        ))}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </ResumeSection>
        </article>
      </div>
    </main>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-ink/10 py-6 last:border-b-0">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-coral">{title}</h2>
      {children}
    </section>
  );
}

function ResumeExternal({ label, href }: { label: string; href: string }) {
  return (
    <a className="resume-inline" href={href} target="_blank" rel="noreferrer">
      {label}
      <ExternalLink className="h-3.5 w-3.5 print:hidden" />
    </a>
  );
}
