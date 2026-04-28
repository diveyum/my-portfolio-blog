import Link from "next/link";

export const metadata = {
  title: "Blog | Divyam Arora",
  description: "Essays, tutorials, and interactive guides on Data Science and AI.",
};

export default function BlogIndex() {
  const posts = [
    {
      date: "March 18, 2026",
      title: "An Illustrated Guide to Model Distillation",
      category: "Interactive Guide",
      description: "How large neural networks teach smaller ones what they know. A visual walkthrough of theory, temperature scaling, dark knowledge, and interactive math.",
      href: "/model-distillation/",
    }
    {
      slug: 'tabicl',
      title: 'The Illustrated Tabular Foundation Model',
      description: 'A visual deep dive into TabICLv2 — how a single forward pass replaces gradient descent on tabular data.',
      date: '2026-04-28',
      readTime: '18 min',
      href: '/tabicl/',
    }
  ];

  return (
    <div className="space-y-12">
      <header className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Blog</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-light">
          Exploring the mechanics of machine learning, agentic AI, and statistical systems. A digital garden dedicated to technical deep dives and production-ready data science.
        </p>
      </header>
      
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="group p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300 flex flex-col h-full relative">
            <div className="flex justify-between items-start mb-3">
              <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                {post.category}
              </div>
              <div className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                {post.date}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              <Link href={post.href} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                {post.title}
              </Link>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {post.description}
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-center text-sm font-bold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                Read guide 
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
