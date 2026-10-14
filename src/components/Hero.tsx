import { useEffect, useState } from "react";
import { landscapeImg } from "@/data/helpers";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景图 */}
      <div className="absolute inset-0">
        <img
          src={landscapeImg.mountainGolden}
          alt="光影集"
          className={`w-full h-full object-cover transition-transform duration-[2s] ${
            mounted ? "scale-100 animate-slow-zoom" : "scale-110"
          }`}
        />
      </div>

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-transparent" />

      {/* 内容 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.5em] text-gold-400 mb-6 uppercase">
            Photography Portfolio
          </p>
        </div>

        <h1
          className={`font-serif text-6xl md:text-8xl lg:text-9xl text-paper-100 leading-none transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          光影集
        </h1>

        <p
          className={`mt-8 font-serif text-xl md:text-2xl text-paper-300 italic max-w-2xl transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          用镜头记录世界，用光影书写故事
        </p>

        <p
          className={`mt-4 text-sm text-paper-400 tracking-wide max-w-md transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          风景 · 人像 · 街拍 · 建筑 · 黑白
        </p>
      </div>

      {/* 滚动指示器 */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown className="w-6 h-6 text-paper-300 animate-bounce" strokeWidth={1} />
      </div>
    </section>
  );
}
