import Link from "next/link";

export const metadata = {
  title: "Blog | Divyam Arora",
  description: "Writings on software, AI, and engineering.",
};

export default function BlogIndex() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">Blog</h1>
      <p className="text-slate-600">Essays, tutorials, and interactive guides.</p>
      
      <div className="space-y-6">
        <article className="group">
          <p className="text-sm text-slate-500 mb-1">March 18, 2026</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
            <Link href="/blog/hello-world">Hello MDX: Interactive Markdown</Link>
          </h2>
          <p className="text-slate-600">
            A test post demonstrating how MDX allows us to embed React components right inside our markdown content.
          </p>
        </article>
      </div>
    </div>
  );
}
