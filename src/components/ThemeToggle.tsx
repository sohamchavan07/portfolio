import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const THEME_KEY = "theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem(THEME_KEY);
      if (raw) return raw === "dark";
      // Default to light mode when there's no stored preference
      return false;
    } catch (e) {
      return false;
    }
  });
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  // Ensure initial class is set as early as possible on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(THEME_KEY);
      if (raw) {
        if (raw === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      } else {
        // default to light if no preference
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    // Only listen to system preference changes if the user has not explicitly set a theme
    const hasStored = (() => {
      try {
        return localStorage.getItem(THEME_KEY) !== null;
      } catch (e) {
        return false;
      }
    })();

    if (hasStored) return;

    const onSystemChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        if (typeof mq.addEventListener === "function") {
          mq.addEventListener("change", onSystemChange);
        } else {
          const legacy = mq as unknown as {
            addListener?: (l: (e: MediaQueryListEvent) => void) => void;
          };
          if (typeof legacy.addListener === "function") legacy.addListener(onSystemChange);
        }
      } catch (e) {
        // ignore
      }
    return () => {
      try {
        if (mq.removeEventListener) mq.removeEventListener("change", onSystemChange);
          else {
            const legacy = mq as unknown as {
              removeListener?: (l: (e: MediaQueryListEvent) => void) => void;
            };
            if (typeof legacy.removeListener === "function") legacy.removeListener(onSystemChange);
          }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div className="relative group">
        <button
          aria-label="Toggle theme"
          onClick={() => setIsDark((s) => !s)}
          className="w-12 h-12 flex items-center justify-center rounded-full glass border border-primary/10 hover:scale-105 transition-transform relative overflow-hidden"
        >
          {/* Two icons stacked and crossfaded for smooth transition */}
          <Sun
            className={`absolute w-5 h-5 text-foreground transition-opacity duration-400 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-75"}`}
            style={{ transitionDuration: "300ms" }}
          />
          <Moon
            className={`absolute w-5 h-5 text-foreground transition-opacity duration-400 ${isDark ? "opacity-0 -rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"}`}
            style={{ transitionDuration: "300ms" }}
          />
        </button>

        {/* Tooltip */}
        <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-popover text-popover-foreground text-xs py-1 px-2 rounded-md glass border border-primary/10">
            Switch to {isDark ? "light" : "dark"}
          </div>
        </div>
      </div>
    </div>
  );
}
