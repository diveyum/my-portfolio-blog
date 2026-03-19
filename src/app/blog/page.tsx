import Link from "next/link";

export const metadata = {
  title: "Blog | Divyam Arora",
  description: "Essays, tutorials, and interactive guides on Data Science and AI.",
};

export default function BlogIndex() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blog</h1>
      <p className="text-slate-600 dark:text-slate-400">Essays, tutorials, and interactive guides on Data Science and AI.</p>
      
      <div className="space-y-6 mt-8">
        <article className="group block p-6 -mx-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 mb-2">March 18, 2026</p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            <Link href="/model-distillation/" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true"></span>
              An Illustrated Guide to Model Distillation
            </Link>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            How large neural networks teach smaller ones what they know. A visual walkthrough of theory, temperature scaling, dark knowledge, and interactive math.
          </p>
        </article>
      </div>
    </div>
  );
}
