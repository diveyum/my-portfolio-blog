import type { Metadata } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} ${mono.variable} font-sans antialiased bg-[#fafafa] text-slate-900 min-h-screen flex flex-col selection:bg-rose-200 selection:text-rose-900`}
      >
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-slate-200/50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-rose-500 text-white flex items-center justify-center font-bold font-mono group-hover:rotate-12 transition-transform shadow-sm">
                D
              </div>
              <span className="text-lg font-bold text-slate-800 tracking-tight">
                Divyam<span className="text-rose-500">.</span>
              </span>
            </Link>
            <nav className="hidden sm:flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/blog" className="hover:text-rose-500 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all">Writing</Link>
              <Link href="/projects" className="hover:text-rose-500 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all">Lab</Link>
              <Link href="/resume" className="hover:text-rose-500 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all">Resume</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 sm:py-20">
          {children}
        </main>

        <footer className="w-full border-t border-slate-200 mt-auto bg-white/50">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-mono">
            <div>&copy; {new Date().getFullYear()} Divyam Arora</div>
            <div className="flex gap-4">
              <a href="https://github.com/diveyum" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/divyama" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
