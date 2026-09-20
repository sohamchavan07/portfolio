import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Target and interpolated coordinates
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch / coarse pointer
    const checkTouch = () => {
      const isTouch =
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    mediaQuery.addEventListener?.("change", checkTouch);

    return () => {
      mediaQuery.removeEventListener?.("change", checkTouch);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    document.body.classList.add("has-custom-cursor");

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      const targetEl = e.target as HTMLElement | null;
      if (!targetEl) return;

      // Check if over text input / textarea
      const inputEl = targetEl.closest("input, textarea, [contenteditable='true']");
      setIsOverInput(Boolean(inputEl));

      // Check if over project card or project link
      const projectCard = targetEl.closest(
        "article[role='button'], [data-cursor='view'], #projects article, .project-card"
      );
      if (projectCard) {
        setCursorText("View");
        setIsHoveringInteractive(true);
        return;
      }

      setCursorText(null);

      // Check if over interactive element (links, buttons, interactive controls)
      const interactiveEl = targetEl.closest(
        "a, button, [role='button'], select, label, [role='tab']"
      );
      setIsHoveringInteractive(Boolean(interactiveEl));
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const render = () => {
      // Inner dot follows swiftly (near-instant response)
      dotPos.current.x = lerp(dotPos.current.x, target.current.x, 0.75);
      dotPos.current.y = lerp(dotPos.current.y, target.current.y, 0.75);

      // Outer ring follows with smooth easing / spring-like lag
      ringPos.current.x = lerp(ringPos.current.x, target.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, target.current.y, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice, isVisible]);

  if (isTouchDevice) return null;

  const showViewText = Boolean(cursorText);
  const showCursor = isVisible && !isOverInput;

  return (
    <>
      {/* Outer Lagging Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-200 flex items-center justify-center ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full transition-all duration-300 ease-out flex items-center justify-center text-center select-none ${
            showViewText
              ? "w-16 h-16 bg-white text-zinc-950 font-semibold text-[11px] tracking-wider uppercase shadow-2xl scale-100 border border-white"
              : isHoveringInteractive
              ? "w-11 h-11 border border-white/80 bg-white/10 backdrop-blur-[1px] scale-110 shadow-lg"
              : isMouseDown
              ? "w-8 h-8 border border-white/90 bg-white/15 scale-90"
              : "w-9 h-9 border border-white/50 bg-transparent"
          }`}
        >
          {showViewText && <span>{cursorText}</span>}
        </div>
      </div>

      {/* Inner Pinpoint Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-150 flex items-center justify-center ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ease-out ${
            showViewText
              ? "opacity-0 scale-0"
              : isHoveringInteractive
              ? "w-1.5 h-1.5 opacity-90 scale-75"
              : isMouseDown
              ? "w-2 h-2 opacity-100 scale-125"
              : "w-1.5 h-1.5 opacity-100"
          }`}
        />
      </div>
    </>
  );
}

