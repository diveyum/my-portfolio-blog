import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="space-y-8 pt-8 sm:pt-12">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold tracking-wide uppercase border border-orange-200 shadow-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Based in Gurugram, India
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">agentic AI systems</span><br className="hidden sm:block" />
          and craft <span className="font-serif italic text-slate-600 font-medium">data-driven products.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light">
          Hi, I'm Divyam. I'm a Data Scientist with 2.5+ years of experience shipping GenAI and ML systems across financial services and consulting—from document intelligence pipelines to computer vision and credit risk models.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Link href="/resume" className="inline-flex justify-center items-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-slate-900/20">
            View Resume
          </Link>
          <Link href="/projects" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 font-semibold rounded-xl hover:border-slate-900 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
            Explore Lab Work
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="space-y-8 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500/50 to-transparent rounded-full"></div>
        <div className="pl-6">
          <h2 className="text-sm font-mono font-bold text-rose-500 uppercase tracking-widest mb-6">Featured Writing</h2>
          
          <div className="group relative p-8 sm:p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono font-bold mb-4">
                Interactive Essay
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-rose-500 transition-colors">
                <Link href="/blog/hello-world" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  An Illustrated Guide to Model Distillation
                </Link>
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
                How large neural networks teach smaller ones what they know. A deep dive into temperature scaling, dark knowledge, and interactive math.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-rose-500 group-hover:translate-x-2 transition-transform">
                Read the guide 
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack / Interests Terminal */}
      <section className="bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl text-slate-300 font-mono text-sm overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="pt-6 space-y-4">
          <p><span className="text-rose-400">divyam@macbook</span> <span className="text-orange-400">~ %</span> cat skills.json</p>
          <div className="pl-4 border-l-2 border-slate-700 space-y-2">
            <p><span className="text-teal-400">"gen_ai_and_agents"</span>: ["Agentic AI", "MCP", "LangChain", "LangGraph", "RAG", "LLM Evaluation", "Prompt Engineering", "HuggingFace"],</p>
            <p><span className="text-teal-400">"ml_and_cv"</span>: ["Scikit-learn", "XGBoost", "LightGBM", "OpenCV", "spaCy", "Classification", "Regression", "Clustering"],</p>
            <p><span className="text-teal-400">"languages_and_tools"</span>: ["Python", "SQL", "Pandas", "NumPy", "AWS", "Azure OpenAI", "MLflow", "Databricks"],</p>
            <p><span className="text-teal-400">"focus"</span>: "Bridging the gap between research and real-world deployment."</p>
          </div>
          <p><span className="text-rose-400">divyam@macbook</span> <span className="text-orange-400">~ %</span> <span className="animate-pulse">_</span></p>
        </div>
      </section>
    </div>
  );
}
