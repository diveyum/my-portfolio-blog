"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-700" />; 
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-200 dark:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label="Toggle Dark Mode"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`${
          isDark ? "translate-x-8 bg-slate-950" : "translate-x-1 bg-white"
        } flex items-center justify-center h-5 w-5 transform rounded-full transition-transform duration-200 ease-in-out shadow-sm`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-cyan-400" />
        ) : (
          <Sun className="h-3 w-3 text-orange-400" />
        )}
      </span>
    </button>
  );
}
