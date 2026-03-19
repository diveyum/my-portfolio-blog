export const metadata = {
  title: "Resume | Divyam Arora",
  description: "Data Scientist experience and education.",
};

export default function Resume() {
  return (
    <div className="space-y-12">
      <header className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Resume</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <p className="text-xl text-slate-600 dark:text-slate-400 font-serif italic">Data Scientist</p>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <a href="mailto:divyamkotaarora2@gmail.com" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors underline decoration-slate-200 underline-offset-4">Email</a>
            <a href="https://github.com/diveyum" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors underline decoration-slate-200 underline-offset-4">GitHub</a>
            <a href="https://linkedin.com/in/divyama" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors underline decoration-slate-200 underline-offset-4">LinkedIn</a>
          </div>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-3xl">
          Data Scientist with 2.5+ years experience in shipping GenAI and ML systems across financial services and consulting. Built computer vision systems, document intelligence pipelines, and predictive models from development through deployment.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 flex items-center justify-center text-sm">💼</span>
              Experience
            </h2>
            
            <div className="space-y-12">
              {/* Amex Senior Analyst */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                <div className="absolute w-2 h-2 bg-cyan-500 rounded-full -left-[3.5px] top-2.5 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#020617]"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Data Science Senior Analyst</h3>
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400">Mar 2026 – Present</span>
                </div>
                <p className="text-sm font-bold text-cyan-600 dark:text-cyan-500 mb-4 uppercase tracking-wider">American Express – Gurugram</p>
                <p className="font-semibold text-slate-700 dark:text-slate-300 mb-3 italic">Automated Research and Content Generation Pipeline</p>
                <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                  <li>Built an automated research and content generation pipeline using LangGraph, Gemini API, and MCP, reducing monthly GenAI risk briefing production time from 8+ hours to under 2 hours.</li>
                  <li>Designed a multi-node workflow for ReAct-based web research, weighted topic scoring, and structured drafting with human-in-the-loop review.</li>
                  <li>Implemented hallucination control via three-stage verification: tracing claims to URLs, flagging conflicts, and validating links before final output.</li>
                  <li>Integrated Model Context Protocol (MCP) for dynamic access to web search and document parsing, alongside automated Python-based document rendering.</li>
                </ul>
              </div>

              {/* Amex Analyst */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                <div className="absolute w-2 h-2 bg-slate-300 dark:bg-slate-700 rounded-full -left-[3.5px] top-2.5 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#020617]"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Data Science Analyst</h3>
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400">Sept 2024 – Feb 2026</span>
                </div>
                <p className="text-sm font-bold text-cyan-600 dark:text-cyan-500 mb-4 uppercase tracking-wider">American Express – Gurugram</p>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 italic">Encoder-based Hallucination Detector</p>
                  <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                    <li>Fine-tuned ModernBERT transformer for token-level hallucination detection in RAG pipelines, achieving 79% F1 score.</li>
                    <li>Achieved significantly smaller footprint than LLM-based judges using encoder-only architecture, enabling real-time inference.</li>
                    <li>Leveraged rotary positional embeddings to handle long-context RAG sequences beyond standard encoder token limits.</li>
                  </ul>
                </div>
              </div>

              {/* Accenture */}
              <div className="relative pl-8">
                <div className="absolute w-2 h-2 bg-slate-300 dark:bg-slate-700 rounded-full -left-[3.5px] top-2.5 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#020617]"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Data Science Associate</h3>
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400">Aug 2023 – Sept 2024</span>
                </div>
                <p className="text-sm font-bold text-cyan-600 dark:text-cyan-500 mb-4 uppercase tracking-wider">Accenture Strategy & Consulting – Gurugram</p>
                
                <div className="mb-6">
                  <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 italic">GenAI-Enabled Banking Chatbot</p>
                  <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                    <li>Built a RAG chatbot for a leading public-sector Indian bank using Azure OpenAI and LangChain, reducing customer query resolution time by 30%.</li>
                    <li>Optimized inference costs through strategic chunking of text/tabular data and response caching.</li>
                    <li>Implemented Responsible AI guardrails including PII filtering, toxicity detection, and human feedback loops.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 italic">Vehicle Image Quality Assurance System</p>
                  <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                    <li>Built an image classification model for a leading German automaker to detect color and rim mismatches in virtual showrooms.</li>
                    <li>Performed feature engineering using OpenCV and SIFT, with LightGBM and AWS Rekognition for classification.</li>
                    <li>Deployed on AWS Glue and Athena with multiprocessing, reducing processing time by 50% over manual workflows.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">GenAI & Agents</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">LangGraph, LangChain, RAG, LLM Evaluation, Prompt Engineering, HuggingFace, MCP</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">ML & Computer Vision</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Scikit-learn, XGBoost, LightGBM, OpenCV, spaCy, Classification, Regression</p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">Languages & Tools</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Python, SQL, Pandas, NumPy, AWS, Azure OpenAI, MLflow, Databricks, Git</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Publications</h2>
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">Agentic AI Validation Framework</h4>
              <p className="text-xs text-cyan-600 mb-2">Amex (Internal Whitepaper) 2025</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Enterprise standards for autonomous AI agents aligned to SR 11-7 requirements.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Education</h2>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">B.Sc. Economics (Honors)</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Symbiosis International University</p>
              <p className="text-xs font-mono text-slate-400 mt-1">2020 – 2023</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
