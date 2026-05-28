"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MotionProps, Variants } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  ScanEye,
  Send,
  ShieldCheck,
  Trophy,
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

const iconForLink = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Codolio: Globe2,
  Email: Mail
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 }
};

const baseMotionProps: MotionProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
  variants: fadeUp,
  transition: { duration: 0.5, ease: "easeOut" }
};

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formError, setFormError] = useState("");
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    if (!name || !email || !message) {
      setFormError("Please fill in your name, email, and message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setFormError("");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Subhav,\n\n${message}\n\nFrom:\n${name}\n${email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const motionProps: MotionProps = reduceMotion ? {} : baseMotionProps;

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Header activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section id="home" className="relative isolate min-h-[92vh] scroll-mt-24 overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-lab-grid bg-[length:34px_34px] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(40,215,162,0.28),transparent_28%),radial-gradient(circle_at_78%_14%,rgba(242,184,75,0.22),transparent_26%),linear-gradient(135deg,rgba(20,20,20,0.1),rgba(20,20,20,0.98)_76%)]" />

        <div className="container relative z-10 grid min-h-[92vh] items-center gap-12 py-28 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div {...motionProps} className="max-w-3xl">
            <div className="mb-6 inline-flex max-w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-mint shadow-line backdrop-blur">
              <span className="truncate">AI Research Intern @ WSAI, IIT Madras</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Subhav Kumar
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#projects">
                <Code2 className="h-5 w-5" />
                Explore Work
              </a>
              <a className="btn-secondary" href="#contact">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.quickStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-line backdrop-blur">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...motionProps}
            transition={reduceMotion ? undefined : { duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="relative min-h-[420px]"
          >
            <div className="relative h-[460px] overflow-hidden rounded-lg border border-white/10 bg-graphite shadow-glow">
              <Image
                src="/hero-embedding-lab.png"
                alt="Abstract embedding research lab visualization"
                fill
                priority
                quality={75}
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-ink/75 p-4 shadow-line backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">What I Bring</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <Metric label="AI + ML" value="Research-grade" />
                  <Metric label="Software" value="Product systems" />
                  <Metric label="Core CS" value="DSA + DAA" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" eyebrow="About" title="A builder who thinks in models, systems, and fundamentals.">
        <div className="grid items-center gap-8 lg:grid-cols-[0.56fr_1.44fr]">
          <motion.div {...motionProps} className="relative mx-auto w-full max-w-[320px]">
            <div className="relative overflow-hidden rounded-lg border border-ink/10 bg-[#e9e5dc] p-2 shadow-[0_22px_64px_rgba(20,20,20,0.11)]">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/55 to-transparent" />
              <Image
                src="/profile-subhav.jpg"
                alt="Subhav Kumar"
                width={640}
                height={640}
                sizes="(min-width: 1024px) 22vw, 72vw"
                className="aspect-square w-full rounded-md object-cover saturate-[0.92] contrast-[1.03]"
              />
              <div className="absolute inset-2 rounded-md ring-1 ring-ink/10" />
            </div>
          </motion.div>

          <motion.div {...motionProps} transition={reduceMotion ? undefined : { duration: 0.5, delay: 0.08, ease: "easeOut" }} className="card">
            <p className="text-lg leading-8 text-graphite/80">{profile.about}</p>
            <div className="mt-7 grid gap-3">
              {profile.aboutFocus.map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-ink/10 bg-paper p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                  <span className="leading-7 text-graphite/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="research" eyebrow="Research" title="Neural privacy, reconstruction, and latent-space reasoning.">
        <div className="grid gap-5 lg:grid-cols-2">
          {research.map((item, index) => (
            <motion.article key={item.title} {...motionProps} transition={{ duration: 0.45, delay: index * 0.08 }} className="card">
              <div className="flex flex-wrap items-center gap-3">
                <span className="pill">{item.label}</span>
                <span className="text-sm font-medium text-graphite/60">{item.venue}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-ink">{item.title}</h3>
              <p className="mt-4 leading-7 text-graphite/75">{item.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Research rigor paired with classroom and code mentorship.">
        <div className="grid gap-5">
          {experience.map((item, index) => (
            <motion.article key={item.role} {...motionProps} transition={{ duration: 0.45, delay: index * 0.08 }} className="timeline-card">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{item.role}</h3>
                <p className="mt-1 text-base font-medium text-graphite/70">{item.organization}</p>
              </div>
              <ul className="space-y-3 text-graphite/80">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-mint" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Case-study style work across AI research, products, CV, and ML.">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-btn ${activeCategory === category ? "filter-btn-active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              {...motionProps}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="project-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="pill">{project.category}</span>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight">{project.title}</h3>
                </div>
                <span className="shrink-0 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">{project.year}</span>
              </div>
              <p className="mt-4 leading-7 text-graphite/80">{project.summary}</p>
              <p className="mt-4 border-l-2 border-mint pl-4 leading-7 text-graphite/70">{project.impact}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a className="mt-7 inline-flex items-center gap-2 font-semibold text-ink transition hover:text-coral" href={project.repository} target="_blank" rel="noreferrer">
                View repository
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Technical Ecosystem" title="A practical stack for model work, product systems, and deployment.">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article key={group.title} {...motionProps} transition={{ duration: 0.45, delay: index * 0.06 }} className="card">
              <div className="flex items-center gap-3">
                <div className="icon-box">
                  {index === 0 ? <BrainCircuit /> : index === 1 ? <Code2 /> : index === 2 ? <Cpu /> : <BookOpen />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="mt-1 text-sm text-graphite/60">{group.description}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="resume" eyebrow="Resume" title="Resume, credentials, and verified proof of work.">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...motionProps} className="card bg-ink text-white">
            <div className="flex items-center gap-3">
              <div className="icon-box bg-white/10 text-mint">
                <GraduationCap />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{profile.education}</h3>
                <p className="mt-1 text-white/60">Class of {profile.graduation}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Metric label="CGPA" value={profile.cgpa} />
              <Metric label="Location" value={profile.location} />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-3 font-semibold text-white transition hover:border-mint hover:text-mint" href="/resume">
                <FileText className="h-5 w-5" />
                Web resume
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-md bg-mint px-4 py-3 font-semibold text-ink transition hover:bg-aqua" href="/resume-subhav-kumar.pdf" target="_blank" rel="noreferrer">
                <ScanEye className="h-5 w-5" />
                View PDF
              </a>
            </div>
          </motion.div>

          <motion.div {...motionProps} transition={{ duration: 0.45, delay: 0.08 }} className="grid gap-5">
            <div className="card">
              <h3 className="text-xl font-semibold">Certifications</h3>
              <div className="mt-5 grid gap-3">
                {certifications.map((item) => (
                  <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="resume-link">
                    <span>{item.title}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Achievements</h3>
              <ul className="mt-5 grid gap-3">
                {achievements.map((achievement) => (
                  <li key={achievement.text} className="flex gap-3 leading-7 text-graphite/80">
                    <Trophy className="mt-1 h-5 w-5 shrink-0 text-amber" />
                    <span>
                      {achievement.text}
                      {achievement.links ? (
                        <span className="mt-2 flex flex-wrap gap-2">
                          {achievement.links.map((link) => (
                            <a key={link.href} className="mini-link" href={link.href} target="_blank" rel="noreferrer">
                              {link.label}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          ))}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      <section id="contact" className="scroll-mt-24 bg-ink py-20 text-white sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...motionProps}>
            <p className="section-eyebrow text-mint">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Let us talk research, internships, or ambitious product work.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/70">
              The form opens a prepared email draft. You can also reach me directly through GitHub, LinkedIn, Codolio, or email.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link) => {
                const Icon = iconForLink[link.label as keyof typeof iconForLink] ?? Globe2;
                return (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="social-link">
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form {...motionProps} transition={{ duration: 0.45, delay: 0.08 }} onSubmit={handleSubmit} className="contact-form">
            <label>
              <span>Name</span>
              <input
                value={formState.name}
                onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))}
                placeholder="Your name"
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={formState.email}
                onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))}
                placeholder="you@example.com"
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                value={formState.message}
                onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))}
                placeholder="What would you like to build or discuss?"
                rows={5}
              />
            </label>
            {formError ? <p className="text-sm font-medium text-coral">{formError}</p> : null}
            <button type="submit" className="btn-primary w-full justify-center">
              <Send className="h-5 w-5" />
              Open Email Draft
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink py-8 text-white">
        <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Subhav Kumar. Built with Next.js.
          </p>
          <div className="flex items-center gap-4">
            {links.map((link) => {
              const Icon = iconForLink[link.label as keyof typeof iconForLink] ?? Globe2;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="text-white/40 transition hover:text-mint"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
            <a
              href="#home"
              className="ml-2 rounded-md border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/50 transition hover:border-mint hover:text-mint"
            >
              ↑ Top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Header({
  activeSection,
  menuOpen,
  setMenuOpen
}: {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-mint text-ink">SK</span>
          <span>Subhav Kumar</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <a key={section.id} href={section.href} className={`nav-link ${activeSection === section.id ? "nav-link-active" : ""}`}>
              {section.label}
            </a>
          ))}
        </div>

        <button type="button" className="mobile-menu-btn lg:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {sections.map((section) => (
              <a key={section.id} href={section.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white">
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${sectionTone(id)}`}>
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function sectionTone(id: string) {
  if (id === "research") {
    return "bg-[linear-gradient(135deg,#f7f4ec_0%,#eef8f3_48%,#f7f4ec_100%)]";
  }

  if (id === "about") {
    return "bg-[linear-gradient(135deg,#f4efe1_0%,#eef8f3_58%,#f7f4ec_100%)]";
  }

  if (id === "projects") {
    return "bg-[linear-gradient(135deg,#f9f4e8_0%,#eef8f3_58%,#f6f0e2_100%)]";
  }

  if (id === "skills") {
    return "bg-[#f0f6f1]";
  }

  if (id === "resume") {
    return "bg-[linear-gradient(135deg,#f7f4ec_0%,#f4efe1_100%)]";
  }

  return "bg-paper";
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <div className="truncate text-lg font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">{label}</div>
    </div>
  );
}
