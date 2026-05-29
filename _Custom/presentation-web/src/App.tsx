import { useEffect, useState, useRef } from "react";
import Slide1Hero from "./components/Slide1Hero";
import Slide2Toolchain from "./components/Slide2Toolchain";
import Slide3LOTI from "./components/Slide3LOTI";
import Slide4PhishHunter from "./components/Slide4PhishHunter";
import Slide5Gambling from "./components/Slide5Gambling";
import Slide6Quishing from "./components/Slide6Quishing";
import Slide7Algorithm from "./components/Slide7Algorithm";
import Slide8Impact from "./components/Slide8Impact";

const slides = [
  { id: "hero", label: "01" },
  { id: "toolchain", label: "02" },
  { id: "loti", label: "03" },
  { id: "phishhunter", label: "04" },
  { id: "gambling", label: "05" },
  { id: "quishing", label: "06" },
  { id: "signature", label: "07" },
  { id: "impact", label: "08" },
];

export default function App() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-slide-idx"));
            if (!isNaN(idx)) setActiveIdx(idx);
          }
        }
      },
      { threshold: 0.6 },
    );
    const slides = el.querySelectorAll("[data-slide-idx]");
    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (idx: number) => {
    containerRef.current
      ?.querySelector(`[data-slide-idx="${idx}"]`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative bg-deep">
      <div className="grain-overlay" />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-alert/5 blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse" style={{ animationDuration: "6s" }} />
      </div>

      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            className="group flex items-center gap-3"
          >
            <span
              className={`transition-all duration-500 ${activeIdx === i
                ? "w-3 h-3 bg-white shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                : "w-2 h-2 bg-white/20 group-hover:bg-white/40"
                } rounded-full`}
            />
            <span
              className={`text-[10px] font-mono tracking-widest transition-all duration-500 ${activeIdx === i
                ? "text-white/60"
                : "text-white/10 group-hover:text-white/30"
                }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-2xl">
        <div className="h-px bg-gradient-to-r from-transparent via-alert/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono tracking-wider">
          <span className="text-gray-600">ONDREJ V.</span>
          <span className="text-gray-500">AVAST_INTERN_2026</span>
        </div>
      </div>

      <Slide1Hero idx={0} />
      <Slide2Toolchain idx={1} />
      <Slide3LOTI idx={2} />
      <Slide4PhishHunter idx={3} />
      <Slide5Gambling idx={4} />
      <Slide6Quishing idx={5} />
      <Slide7Algorithm idx={6} />
      <Slide8Impact idx={7} />
    </div>
  );
}
