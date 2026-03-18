"use client";

import { useEffect, useState } from "react";

export function IframeWrapper({ src, title }: { src: string; title: string }) {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    let currentHeight = 0;
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "resize" && event.data.height) {
        const newHeight = event.data.height;
        if (Math.abs(newHeight - currentHeight) > 1) {
          currentHeight = newHeight;
          setHeight(`${newHeight}px`);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe 
      src={src} 
      style={{ height, width: '100%' }}
      className="border-none bg-transparent overflow-hidden block" 
      scrolling="no"
      title={title}
    />
  );
}
