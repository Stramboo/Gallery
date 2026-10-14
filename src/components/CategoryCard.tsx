import { Link } from "react-router-dom";
import type { CategoryInfo } from "@/types";

interface CategoryCardProps {
  category: CategoryInfo;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <Link
      to={`/gallery/${category.id}`}
      className="group relative block overflow-hidden bg-ink-800"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={category.coverImage}
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
      </div>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

      {/* 内容 */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p className="text-xs tracking-[0.3em] text-gold-400 mb-2 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {category.nameEn.toUpperCase()}
        </p>
        <h3 className="font-serif text-3xl text-paper-100 mb-2">{category.name}</h3>
        <p className="text-sm text-paper-400 leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-20">
          {category.description}
        </p>
      </div>

      {/* 边框装饰 */}
      <div className="absolute inset-3 border border-gold-400/0 transition-all duration-500 group-hover:inset-4 group-hover:border-gold-400/30" />
    </Link>
  );
}
