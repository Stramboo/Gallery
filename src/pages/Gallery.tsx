import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import FilterBar from "@/components/FilterBar";
import PhotoCard from "@/components/PhotoCard";
import Lightbox from "@/components/Lightbox";
import ScrollReveal from "@/components/ScrollReveal";
import { photos as allPhotos } from "@/data/photos";

export default function Gallery() {
  const { category: urlCategory } = useParams();
  const [active, setActive] = useState(urlCategory ?? "all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (urlCategory) {
      setActive(urlCategory);
    } else {
      setActive("all");
    }
  }, [urlCategory]);

  const filteredPhotos = useMemo(() => {
    if (active === "all") return allPhotos;
    return allPhotos.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="relative z-10 min-h-screen pt-24">
      {/* 标题区 */}
      <ScrollReveal className="px-6 py-16 text-center">
        <p className="text-xs tracking-[0.3em] text-gold-400 mb-3">PORTFOLIO</p>
        <h1 className="font-serif text-5xl md:text-6xl text-paper-100">作品集</h1>
        <p className="mt-4 text-paper-400 max-w-xl mx-auto">
          {filteredPhotos.length} 件作品 · 按分类浏览
        </p>
      </ScrollReveal>

      {/* 筛选栏 */}
      <FilterBar active={active} onChange={setActive} />

      {/* 瀑布流画廊 */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="masonry">
          {filteredPhotos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-32 text-paper-400">
            <p className="font-serif text-2xl">暂无作品</p>
          </div>
        )}
      </div>

      {/* 灯箱 */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={filteredPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
