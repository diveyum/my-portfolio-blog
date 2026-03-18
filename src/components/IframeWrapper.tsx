"use client";

import { useEffect, useState } from "react";

export function IframeWrapper({ src, title }: { src: string; title: string }) {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "resize" && event.data.height) {
        setHeight(`${event.data.height}px`);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe 
      src={src} 
      style={{ height, minHeight: '100vh' }}
      className="w-full border-none bg-transparent overflow-hidden block" 
      scrolling="no"
      title={title}
    />
  );
}
