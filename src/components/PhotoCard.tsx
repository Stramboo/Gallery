import { useState } from "react";
import type { Photo } from "@/types";
import { getCategoryName } from "@/data/categories";

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotoCard({ photo, onClick }: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="masonry-item group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden bg-ink-800">
        {/* 加载占位 */}
        {!loaded && <div className="absolute inset-0 img-placeholder" />}

        <img
          src={photo.thumbnail}
          alt={photo.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full block transition-all duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } group-hover:scale-105`}
        />

        {/* 悬停遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* 悬停内容 */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-xs tracking-[0.2em] text-gold-400 mb-1.5">
            {getCategoryName(photo.category).toUpperCase()}
          </p>
          <h3 className="font-serif text-xl text-paper-100 mb-1">{photo.title}</h3>
          {photo.location && (
            <p className="text-xs text-paper-400">{photo.location}</p>
          )}
        </div>

        {/* 边框装饰 */}
        <div className="absolute inset-2 border border-paper-100/0 transition-all duration-500 group-hover:inset-3 group-hover:border-paper-100/20" />
      </div>
    </div>
  );
}
