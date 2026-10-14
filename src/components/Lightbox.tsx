import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Info, MapPin, Camera, Aperture, Clock, Gauge, Focus } from "lucide-react";
import type { Photo } from "@/types";
import { getCategoryName } from "@/data/categories";

interface LightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const [showInfo, setShowInfo] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const photo = photos[index];
  const touchStartX = useRef(0);

  const goPrev = useCallback(() => {
    setLoaded(false);
    onNavigate(index === 0 ? photos.length - 1 : index - 1);
  }, [index, photos.length, onNavigate]);

  const goNext = useCallback(() => {
    setLoaded(false);
    onNavigate(index === photos.length - 1 ? 0 : index + 1);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [goPrev, goNext, onClose]);

  useEffect(() => {
    setLoaded(false);
  }, [index]);

  if (!photo) return null;

  const exifItems = [
    { icon: Camera, label: "机身", value: photo.exif.camera },
    { icon: Focus, label: "镜头", value: photo.exif.lens },
    { icon: Aperture, label: "光圈", value: photo.exif.aperture },
    { icon: Clock, label: "快门", value: photo.exif.shutterSpeed },
    { icon: Gauge, label: "ISO", value: String(photo.exif.iso) },
    { icon: Focus, label: "焦距", value: photo.exif.focalLength },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink-950/97 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(diff) > 50) {
          diff > 0 ? goPrev() : goNext();
        }
      }}
    >
      {/* 顶部栏 */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5">
        <p className="font-serif text-lg text-paper-200">
          {photo.title}
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => { e.stopPropagation(); setShowInfo(!showInfo); }}
            className="text-paper-300 hover:text-gold-400 transition-colors"
            aria-label="拍摄信息"
          >
            <Info className="w-5 h-5" strokeWidth={1} />
          </button>
          <button
            onClick={onClose}
            className="text-paper-300 hover:text-gold-400 transition-colors"
            aria-label="关闭"
          >
            <X className="w-6 h-6" strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* 导航箭头 */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-paper-300 hover:text-gold-400 transition-colors p-2"
        aria-label="上一张"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-paper-300 hover:text-gold-400 transition-colors p-2"
        aria-label="下一张"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
      </button>

      {/* 图片 */}
      <div
        className="absolute inset-0 flex items-center justify-center px-16 md:px-24 pb-32"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && <div className="absolute w-64 h-64 img-placeholder" />}
        <img
          src={photo.url}
          alt={photo.title}
          onLoad={() => setLoaded(true)}
          className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* 底部信息面板 */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-950 to-transparent transition-all duration-500 ${
          showInfo ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto max-w-5xl px-6 pb-8 pt-12">
          <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-gold-400 mb-2">
                {getCategoryName(photo.category)} · {photo.shootDate}
              </p>
              <h2 className="font-serif text-3xl text-paper-100 mb-2">{photo.title}</h2>
              {photo.description && (
                <p className="text-sm text-paper-300 max-w-lg leading-relaxed">
                  {photo.description}
                </p>
              )}
              {photo.location && (
                <p className="flex items-center gap-1.5 text-xs text-paper-400 mt-3">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1} />
                  {photo.location}
                </p>
              )}
            </div>

            {/* EXIF 信息 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 shrink-0">
              {exifItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-3.5 h-3.5 text-paper-500 shrink-0" strokeWidth={1} />
                  <span className="text-xs text-paper-500">{item.label}</span>
                  <span className="text-xs text-paper-200">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 计数器 */}
          <div className="mt-6 flex items-center gap-3">
            <span className="font-serif text-gold-400">{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px flex-1 max-w-[60px] bg-ink-600" />
            <span className="text-xs text-paper-500">{String(photos.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
