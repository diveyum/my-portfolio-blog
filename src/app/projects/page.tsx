export const metadata = {
  title: "Projects | Divyam Arora",
  description: "A selection of my recent data science and ML engineering projects.",
};

export default function Projects() {
  const projects = [
    {
      title: "Automated Research & Content Generation Pipeline",
      category: "GenAI & Agentic AI",
      description: "A multi-node LangGraph pipeline using Gemini API and MCP for generating monthly GenAI risk briefings. Features ReAct-based web research, hallucination control via three-stage verification gates, and automated document rendering.",
      tech: ["LangGraph", "Gemini API", "MCP", "Python"],
    },
    {
      title: "Encoder-based Hallucination Detector",
      category: "NLP & Transformers",
      description: "Fine-tuned a ModernBERT transformer for token-level hallucination detection in RAG pipelines. Utilized rotary positional embeddings for long-context sequences, offering a faster and smaller footprint compared to LLM-as-a-judge approaches.",
      tech: ["ModernBERT", "PyTorch", "HuggingFace"],
    },
    {
      title: "GenAI-Enabled Banking Chatbot",
      category: "GenAI & Conversational AI",
      description: "Built a RAG chatbot for document retrieval enabling frontline staff to search regulatory circulars via natural language, reducing customer query resolution time by 30%. Implemented safety guardrails and prompt caching.",
      tech: ["Azure OpenAI", "LangChain", "RAG"],
    },
    {
      title: "Vehicle Image Quality Assurance",
      category: "Computer Vision",
      description: "An image classification pipeline using OpenCV, SIFT, and LightGBM to detect color and rim mismatches in virtual showrooms for a leading German automaker. Deployed on AWS to reduce manual QA time by 50%.",
      tech: ["OpenCV", "LightGBM", "AWS Rekognition"],
    }
  ];

  return (
    <div className="space-y-12">
      <header className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Projects</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-light">
          A collection of machine learning systems, AI agents, and predictive models I've built to solve complex business problems.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300 flex flex-col h-full">
            <div className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-3">
              {p.category}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {p.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
