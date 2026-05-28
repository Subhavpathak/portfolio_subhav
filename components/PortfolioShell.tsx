"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MotionProps, Variants } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  Send,
  X
} from "lucide-react";
import {
  achievements,
  certifications,
  experience,
  links,
  profile,
  projects,
  research,
  skillGroups,
  type ProjectCategory
} from "@/lib/data";

const sections = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "research", label: "Research", href: "#research" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "resume", label: "Resume", href: "/resume" },
  { id: "contact", label: "Contact", href: "#contact" }
];

const categories: Array<"All" | ProjectCategory> = ["All", "Research", "Product", "CV", "ML"];

const iconMap: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Codolio: Globe2,
  Email: Mail
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const baseMp: MotionProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-60px" },
  variants: fadeUp,
  transition: { duration: 0.5, ease: "easeOut" }
};

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formError, setFormError] = useState("");
  const reduced = useReducedMotion();
  const mp: MotionProps = reduced ? {} : baseMp;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target.id) setActiveSection(top.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.35, 0.6] }
    );
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const n = formState.name.trim(), em = formState.email.trim(), m = formState.message.trim();
    if (!n || !em || !m) { setFormError("Please fill in all fields."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setFormError("Please enter a valid email."); return; }
    setFormError("");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${n}`)}&body=${encodeURIComponent(`Hi Subhav,\n\n${m}\n\nFrom:\n${n}\n${em}`)}`;
  }

  return (
    <main className="min-h-screen">

      {/* ── HEADER ── */}
      <Header activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ══════════════════════════ HERO (dark) ══════════════════════════ */}
      <section id="home" className="relative min-h-screen scroll-mt-24 overflow-hidden bg-dark text-white">
        <div className="container relative grid min-h-screen items-center gap-12 py-32 lg:grid-cols-[1.15fr_0.85fr]">

          <motion.div {...mp}>
            <p className="text-base font-semibold tracking-wide text-accent">
              AI Research Intern · WSAI, IIT Madras
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <br/>
              <span className="text-accent">Subhav Kumar</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
              {profile.intro}
            </p>

            <div className="mt-8 flex gap-4">
              <a className="btn-primary" href="#projects">Explore My Work</a>
              <a className="btn-outline-light" href="#contact">Get in Touch</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.quickStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
                  <div className="text-xl font-bold text-accent">{stat.value}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...mp} transition={reduced ? undefined : { duration: 0.6, delay: 0.12 }} className="flex flex-col items-center gap-6">
            <div className="h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-accent/30 sm:h-[350px] sm:w-[350px]">
              <Image
                src="/profile-subhav.jpg"
                alt="Subhav Kumar"
                width={800}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {links.map((link) => {
                const Icon = iconMap[link.label] ?? Globe2;
                return (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={link.label} className="social-icon">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ ABOUT (cream) ══════════════════════════ */}
      <Section id="about" label="About Me" title="A bit about myself" bg="bg-cream">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div {...mp}>
            <p className="text-lg leading-8 text-secondary">{profile.about}</p>
            <ul className="mt-6 space-y-3 text-secondary">
              {profile.aboutFocus.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...mp} transition={reduced ? undefined : { duration: 0.5, delay: 0.08 }} className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <div className="text-3xl font-bold text-accent">{profile.cgpa}</div>
              <div className="mt-1 text-sm text-secondary">CGPA</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-accent">{profile.graduation}</div>
              <div className="mt-1 text-sm text-secondary">Graduation</div>
            </div>
            <div className="card text-center col-span-2">
              <div className="text-lg font-semibold text-primary">{profile.education}</div>
              <div className="mt-1 text-sm text-secondary">{profile.location}</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════ RESEARCH (sand) ══════════════════════════ */}
      <Section id="research" label="Research" title="Published and ongoing work" bg="bg-sand">
        <div className="grid gap-5 lg:grid-cols-2">
          {research.map((item, i) => (
            <motion.article key={item.title} {...mp} transition={{ duration: 0.45, delay: i * 0.06 }} className="card">
              <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">{item.label}</span>
                <span className="text-tertiary">{item.venue}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-primary">{item.title}</h3>
              <p className="mt-3 leading-7 text-secondary">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════ EXPERIENCE (cream) ══════════════════════════ */}
      <Section id="experience" label="Experience" title="Where I've worked" bg="bg-cream">
        <div className="space-y-5">
          {experience.map((item, i) => (
            <motion.article key={item.role} {...mp} transition={{ duration: 0.45, delay: i * 0.06 }} className="card grid gap-4 lg:grid-cols-[0.3fr_0.7fr]">
              <div>
                <p className="text-sm font-semibold text-accent">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-primary">{item.role}</h3>
                <p className="mt-1 text-secondary">{item.organization}</p>
              </div>
              <ul className="space-y-2 text-secondary">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-7">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════ PROJECTS (sand) ══════════════════════════ */}
      <Section id="projects" label="Projects" title="Things I've built" bg="bg-sand">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button type="button" key={c} onClick={() => setActiveCategory(c)} className={`filter-btn ${activeCategory === c ? "filter-btn-active" : ""}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <motion.article key={project.title} {...mp} transition={{ duration: 0.45, delay: i * 0.04 }} className="card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{project.category}</span>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-primary">{project.title}</h3>
                </div>
                <span className="shrink-0 rounded-full bg-sand px-3 py-1 text-xs font-medium text-tertiary">{project.year}</span>
              </div>
              <p className="mt-3 leading-7 text-secondary">{project.summary}</p>
              <p className="mt-3 border-l-2 border-accent/30 pl-4 text-sm leading-7 text-tertiary">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((t) => (<span key={t} className="tag">{t}</span>))}
              </div>
              <a className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover" href={project.repository} target="_blank" rel="noreferrer">
                View Repository <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════ SKILLS (cream) ══════════════════════════ */}
      <Section id="skills" label="Skills" title="My technical toolkit" bg="bg-cream">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div key={group.title} {...mp} transition={{ duration: 0.45, delay: i * 0.05 }} className="card">
              <h3 className="text-lg font-semibold text-primary">{group.title}</h3>
              <p className="mt-1 text-sm text-tertiary">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((s) => (<span key={s} className="tag">{s}</span>))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════ CERTIFICATIONS (sand) ══════════════════════════ */}
      <Section id="certifications" label="Certifications" title="Verified credentials" bg="bg-sand">
        <div className="grid gap-3 lg:grid-cols-2">
          {certifications.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="resume-link">
              <span>{item.title}</span>
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════ ACHIEVEMENTS (cream) ══════════════════════════ */}
      <Section id="achievements" label="Achievements" title="Recognition and milestones" bg="bg-cream">
        <div className="card">
          <ul className="space-y-3 text-secondary">
            {achievements.map((a) => (
              <li key={a.text} className="flex gap-3 leading-7">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                <span>
                  {a.text}
                  {a.links ? (
                    <span className="ml-1 inline-flex flex-wrap gap-2">
                      {a.links.map((link) => (
                        <a key={link.href} className="mini-link" href={link.href} target="_blank" rel="noreferrer">
                          {link.label} <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ══════════════════════════ RESUME (sand) ══════════════════════════ */}
      <Section id="resume" label="Resume" title="View my full resume" bg="bg-sand">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a className="btn-outline justify-center" href="/resume">
            <FileText className="h-4 w-4" /> Web Resume
          </a>
          <a className="btn-primary justify-center" href="/resume_subhav_kumar.pdf" target="_blank" rel="noreferrer">
            Download PDF
          </a>
        </div>
      </Section>

      {/* ══════════════════════════ CONTACT (dark) ══════════════════════════ */}
      <section id="contact" className="scroll-mt-24 bg-dark py-20 text-white sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...mp}>
            <p className="section-label-light">Contact</p>
            <h2 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">Let&apos;s connect</h2>
            <p className="mt-4 max-w-md leading-8 text-white/50">
              Open to research collaborations, internships, and interesting product work. Drop a message or reach out directly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link) => {
                const Icon = iconMap[link.label] ?? Globe2;
                return (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="social-icon">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form {...mp} transition={{ duration: 0.45, delay: 0.06 }} onSubmit={handleSubmit} className="contact-form">
            <label>
              <span>Name</span>
              <input value={formState.name} onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))} placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" value={formState.email} onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))} placeholder="you@example.com" />
            </label>
            <label>
              <span>Message</span>
              <textarea value={formState.message} onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))} placeholder="What's on your mind?" rows={5} />
            </label>
            {formError ? <p className="text-sm text-highlight">{formError}</p> : null}
            <button type="submit" className="btn-primary w-full justify-center">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-dark py-8 text-white">
        <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Subhav Kumar</p>
          <div className="flex items-center gap-3">
            {links.map((link) => {
              const Icon = iconMap[link.label] ?? Globe2;
              return (
                <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={link.label} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ────────────────────────────────────── */

function Header({ activeSection, menuOpen, setMenuOpen }: { activeSection: string; menuOpen: boolean; setMenuOpen: (o: boolean) => void }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-dark/95 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          Subhav<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <a key={s.id} href={s.href} className={`nav-link ${activeSection === s.id ? "nav-link-active" : ""}`}>{s.label}</a>
          ))}
        </div>
        <button type="button" className="mobile-menu-btn lg:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-dark px-5 py-4 lg:hidden">
          <div className="grid gap-1">
            {sections.map((s) => (
              <a key={s.id} href={s.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm text-white/60 hover:text-white transition-colors">{s.label}</a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Section({ id, label, title, bg, children }: { id: string; label: string; title: string; bg: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${bg}`}>
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <p className="section-label">{label}</p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-primary sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
