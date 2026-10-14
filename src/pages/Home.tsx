import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { getFeaturedPhotos } from "@/data/photos";
import { getCategoryName } from "@/data/categories";

export default function Home() {
  const featuredPhotos = getFeaturedPhotos();

  return (
    <div className="relative z-10">
      <Hero />

      {/* 摄影师引言 */}
      <section className="py-32 md:py-48 px-6">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="font-serif text-6xl text-gold-400/40 leading-none block mb-4">
            "
          </span>
          <p className="font-serif text-2xl md:text-4xl text-paper-100 leading-relaxed text-balance">
            摄影是我观看世界的方式
          </p>
          <p className="mt-6 text-base md:text-lg text-paper-400 leading-relaxed max-w-xl mx-auto">
            每一次按下快门，都是与光线、时间、情感的一次对话。
            我相信，最好的照片不是被拍出来的，而是被等待到的——
            在那个决定性瞬间，万物各归其位。
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400/50" />
            <span className="text-xs tracking-[0.3em] text-gold-400">PHOTOGRAPHER</span>
            <span className="h-px w-12 bg-gold-400/50" />
          </div>
        </ScrollReveal>
      </section>

      {/* 精选作品 */}
      <section className="py-20 px-6 bg-ink-850">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-xs tracking-[0.3em] text-gold-400 mb-3">SELECTED WORKS</p>
                <h2 className="font-serif text-4xl md:text-5xl text-paper-100">精选作品</h2>
              </div>
              <Link
                to="/gallery"
                className="group flex items-center gap-2 text-sm text-paper-300 hover:text-gold-400 transition-colors"
              >
                查看全部作品
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPhotos.map((photo) => (
              <Link
                key={photo.id}
                to="/gallery"
                className="group relative block overflow-hidden bg-ink-800 aspect-[4/3]"
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-xs tracking-[0.2em] text-gold-400 mb-1.5">
                    {getCategoryName(photo.category)}
                  </p>
                  <h3 className="font-serif text-2xl text-paper-100">{photo.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 分类导航 */}
      <section className="py-32 px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-gold-400 mb-3">CATEGORIES</p>
            <h2 className="font-serif text-4xl md:text-5xl text-paper-100">探索分类</h2>
            <p className="mt-4 text-paper-400 max-w-xl mx-auto">
              五个主题，五种观看世界的方式
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 80}>
              <CategoryCard category={cat} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-ink-850">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-paper-100 mb-6 text-balance">
            每一张照片，都是一个未被讲述的故事
          </h2>
          <p className="text-paper-400 mb-10">
            走进作品集，发现更多光影交织的瞬间
          </p>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-3 border border-gold-400/50 px-8 py-3 text-sm tracking-wider text-gold-400 hover:bg-gold-400 hover:text-ink-950 transition-all duration-300"
          >
            进入作品集
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
