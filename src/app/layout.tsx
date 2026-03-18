import type { Metadata } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github, Linkedin, Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Divyam Arora | Portfolio",
  description: "Data Scientist & Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} ${mono.variable} font-sans antialiased bg-[#fafafa] dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col selection:bg-cyan-200 selection:text-cyan-900 dark:selection:bg-cyan-900 dark:selection:text-cyan-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Subtle dot matrix background that adapts to dark mode */}
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-20"></div>
          
          <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="group flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-cyan-500 dark:to-cyan-700 text-white flex items-center justify-center font-bold font-mono group-hover:rotate-12 transition-transform shadow-sm">
                  D
                </div>
                <span className="text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                  Divyam<span className="text-cyan-600 dark:text-cyan-400">.</span>
                </span>
              </Link>
              <div className="flex items-center gap-6">
                <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                  <Link href="/blog" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 dark:after:bg-cyan-400 hover:after:w-full after:transition-all">Writing</Link>
                  <Link href="/projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 dark:after:bg-cyan-400 hover:after:w-full after:transition-all">Lab</Link>
                  <Link href="/resume" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 dark:after:bg-cyan-400 hover:after:w-full after:transition-all">Resume</Link>
                  <div className="flex items-center gap-5 pl-4 border-l border-slate-200 dark:border-slate-700">
                    <a href="mailto:divyamkotaarora2@gmail.com" className="text-slate-400 hover:text-cyan-600 dark:text-slate-500 dark:hover:text-cyan-400 transition-colors" aria-label="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/diveyum" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-600 dark:text-slate-500 dark:hover:text-cyan-400 transition-colors" aria-label="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="https://linkedin.com/in/divyama" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-600 dark:text-slate-500 dark:hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </nav>
                <div className="pl-4 sm:pl-6 sm:border-l border-slate-200 dark:border-slate-700 flex items-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 sm:py-20">
            {children}
          </main>

          <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-auto bg-white/50 dark:bg-slate-950/50">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-mono">
              <div>&copy; {new Date().getFullYear()} Divyam Arora</div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
