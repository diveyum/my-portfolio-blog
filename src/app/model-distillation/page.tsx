import { IframeWrapper } from "@/components/IframeWrapper";

export const metadata = {
  title: "An Illustrated Guide to Model Distillation | Divyam Arora",
  description: "How large neural networks teach smaller ones what they know.",
};

export default function ModelDistillationGuide() {
  return (
    <div className="w-full relative flex flex-col -mt-12 sm:-mt-20 -mb-12 sm:-mb-20">
      <IframeWrapper 
        src="/portfolio/distillation-guide/index.html" 
        title="An Illustrated Guide to Model Distillation" 
      />
    </div>
  );
}
