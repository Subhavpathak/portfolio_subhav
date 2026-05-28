import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Subhav Kumar | AI Researcher and Full-Stack Engineer",
    template: "%s | Subhav Kumar"
  },
  description:
    "Portfolio of Subhav Kumar, AI Research Intern at IIT Madras, IIIT Raichur CSE student, ICCSE 2026 paper author, and full-stack engineer.",
  keywords: [
    "Subhav Kumar",
    "AI Research Intern",
    "IIT Madras",
    "IIIT Raichur",
    "Semantic Text Reconstruction",
    "Machine Learning",
    "Full-Stack Engineer",
    "Next.js",
    "PyTorch"
  ],
  authors: [{ name: "Subhav Kumar" }],
  creator: "Subhav Kumar",
  metadataBase: new URL("https://subhavpathak.github.io"),
  openGraph: {
    title: "Subhav Kumar | AI Researcher and Full-Stack Engineer",
    description:
      "AI research, neural privacy, full-stack systems, and applied intelligence projects by Subhav Kumar.",
    url: "https://subhavpathak.github.io",
    siteName: "Subhav Kumar Portfolio",
    images: [
      {
        url: "/hero-embedding-lab.png",
        width: 1200,
        height: 630,
        alt: "Abstract AI research lab visual for Subhav Kumar portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhav Kumar | AI Researcher and Full-Stack Engineer",
    description:
      "AI research intern, ICCSE 2026 paper author, and full-stack engineer.",
    images: ["/hero-embedding-lab.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
