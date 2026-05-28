export type ProjectCategory = "Research" | "Product" | "CV" | "ML";

export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  year: string;
  category: ProjectCategory;
  summary: string;
  impact: string;
  stack: string[];
  repository: string;
};

export type Achievement = {
  text: string;
  links?: LinkItem[];
};

export const profile = {
  name: "Subhav Kumar",
  headline: "AI Research Intern, Full-Stack Engineer, and CSE undergraduate",
  location: "IIIT Raichur",
  email: "subhavpathak18@gmail.com",
  phone: "+91-9142660162",
  education: "B.Tech in Computer Science and Engineering, IIIT Raichur",
  cgpa: "8.99 / 10.00",
  graduation: "2027",
  intro:
    "I design intelligent systems that connect machine learning depth, strong computer science fundamentals, and product-grade software engineering.",
  about:
    "I am a Computer Science undergraduate at IIIT Raichur who enjoys turning hard technical ideas into usable systems. My work sits across AI research, full-stack engineering, and algorithmic problem solving, with a preference for projects that have both depth and practical value.",
  aboutFocus: [
    "Applied AI and ML systems with research-grade evaluation",
    "Full-stack products with clean APIs, secure access, and useful dashboards",
    "Strong CS fundamentals through DSA, DAA, DBMS, and competitive problem solving"
  ],
  quickStats: [
    { label: "CGPA", value: "8.99" },
    { label: "DSA problems", value: "400+" },
    { label: "Amazon ML", value: "Top 1200" },
    { label: "Research paper", value: "ICCSE 2026" }
  ]
};

export const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/Subhavpathak" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/subhav-kumar-706401200/" },
  { label: "Codolio", href: "https://codolio.com/profile/cKbipTYD" },
  { label: "Email", href: "mailto:subhavpathak18@gmail.com" }
];

export const research = [
  {
    title:
      "PCA-based Defense Against Embedding Inversion and User History Leakage in Recommendation Systems",
    label: "Paper Accepted",
    venue: "IEEE ICCSE 2026, Budapest, Hungary",
    summary:
      "Proposed a PCA-based dimensionality reduction defense that reduces embedding inversion and membership inference risk while preserving recommendation quality.",
    tags: ["Neural Privacy", "PCA", "Recommendation Systems", "Embedding Security"]
  },
  {
    title: "Semantic Text Reconstruction from Embeddings",
    label: "Ongoing Research",
    venue: "WSAI, IIT Madras",
    summary:
      "Investigating decoder-based methods to recover semantically faithful natural language from dense sentence embeddings.",
    tags: ["NLP", "Transformers", "PyTorch", "Latent Space"]
  }
];

export const experience = [
  {
    role: "AI Research Intern",
    organization: "WSAI, IIT Madras",
    period: "May 2026 - Present",
    points: [
      "Researching semantic text reconstruction from embeddings with decoder-based recovery methods.",
      "Building Python evaluation tooling for reconstruction fidelity, semantic similarity, and latent-space geometry.",
      "Running large-scale experiments on HPC/GPU clusters with throughput and memory optimizations."
    ]
  },
  {
    role: "Undergraduate Teaching Assistant",
    organization: "IIIT Raichur",
    period: "Aug 2025 - Apr 2026",
    points: [
      "Conducted weekly DSA and DAA problem-solving sessions for 100+ students.",
      "Reviewing code submissions, debugging logic, and mentoring peers on cleaner optimized solutions."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Semantic Text Reconstruction from Embeddings",
    year: "Ongoing",
    category: "Research",
    summary:
      "Decoder-only transformer pipeline that reconstructs natural language text from sentence embeddings.",
    impact:
      "Implemented embedding injection, attention masking, beam search decoding, and BLEU/cosine/semantic-equivalence evaluation.",
    stack: ["PyTorch", "Transformers", "NLP", "Beam Search"],
    repository: "https://github.com/Subhavpathak/Semantic_reconstruction_vec2text"
  },
  {
    title: "Student Analytics Dashboard",
    year: "Aug - Sep 2025",
    category: "Product",
    summary:
      "Full-stack analytics platform with secure multi-user access and interactive student-performance views.",
    impact:
      "Delivered JWT authentication, RBAC, REST APIs, input validation, error handling, and optimized MongoDB queries.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    repository: "https://github.com/Subhavpathak/Student_Analytics_Dashboard"
  },
  {
    title: "CCTV Face Enhancement System",
    year: "Nov 2025 - Jan 2026",
    category: "CV",
    summary:
      "Computer vision pipeline for detecting, cropping, and enhancing low-resolution faces from CCTV footage.",
    impact:
      "Integrated OpenCV face detection with super-resolution modules and optimized near real-time inference latency.",
    stack: ["OpenCV", "Super Resolution", "Python", "Computer Vision"],
    repository: "https://github.com/Subhavpathak/sentio-poc-face-enhancement"
  },
  {
    title: "Heart Disease Prediction",
    year: "2025",
    category: "ML",
    summary:
      "Machine learning project for heart-disease risk prediction with a deployable Flask application layer.",
    impact:
      "Applied feature engineering and ensemble modeling to create an interpretable prediction workflow.",
    stack: ["Scikit-learn", "Flask", "Python", "Feature Engineering"],
    repository: "https://github.com/Subhavpathak/Heart_Disease_prediction"
  }
];

export const skillGroups = [
  {
    title: "Intelligence Layer",
    description: "Systems for language, vision, and neural model evaluation.",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "NLP", "Computer Vision", "LoRA"]
  },
  {
    title: "Application Layer",
    description: "Product-grade web apps, APIs, and analytics workflows.",
    skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Django", "REST APIs", "Tailwind CSS"]
  },
  {
    title: "Infrastructure Layer",
    description: "Deployment, data, and experiment execution environments.",
    skills: ["Docker", "Linux", "AWS", "MongoDB", "PostgreSQL", "Git", "HPC/GPU Clusters"]
  },
  {
    title: "Core Languages",
    description: "Primary languages for research, systems, and product work.",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "SQL"]
  }
];

export const achievements: Achievement[] = [
  { text: "Amazon ML Challenge 2025: Top 1200 out of 80,000+ participants." },
  { text: "Solved 400+ DSA problems across LeetCode, GFG, Codeforces, and Codolio." },
  {
    text: "Hackathon experience through Walmart Sparkathon and Adobe India Hackathon.",
    links: [
      {
        label: "Walmart Certificate",
        href: "https://drive.google.com/file/d/1_XCno3wdvcZGzlNRLiyDxduSlaj-yayL/view?usp=drive_link"
      },
      {
        label: "Adobe Certificate",
        href:
          "https://unstop.com/certificate-preview/ed65d33b-f782-46ba-9efa-8fa0d33c6a2b?utm_campaign=site-emails"
      }
    ]
  },
  { text: "PRMO Qualified." }
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    href:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E1D757E1942079179DA838DA0A9649A2702532BDFE6057578080E2D8445F6291"
  },
  {
    title: "Master SQL and DBMS - Scaler",
    href: "https://tinyurl.com/scadbms"
  }
];
