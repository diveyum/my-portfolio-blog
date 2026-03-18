'use client';

import { useState } from 'react';

export function CustomSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-xl font-bold text-slate-800 font-mono">
        Value: <span className="text-cyan-600">{value}</span>
      </div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={value} 
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full max-w-xs accent-cyan-600 cursor-pointer"
      />
      <p className="text-sm text-slate-500">
        This is a live React component embedded inside markdown.
      </p>
    </div>
  );
}
