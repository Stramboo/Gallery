import { Aperture } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero-copy">
        <h1 id="home-title"><Aperture aria-hidden="true" strokeWidth={1.7} />光影集</h1>
        <p className="home-hero-subtitle">用镜头记录世界，用光影书写故事。</p>
        <p className="home-hero-detail">风景 · 人像 · 街拍 · 建筑 · 黑白</p>
        <div className="home-actions">
          <Link to="/gallery" className="home-button">浏览作品</Link>
          <Link to="/about" className="home-button home-button-outline">关于我</Link>
        </div>
      </div>
      <div className="home-photo-stage" aria-label="摄影主题展示">
        <Link to="/gallery/landscape" className="home-print home-print-left" aria-label="浏览风景摄影">
          <img src="/photos/forest.jpg" alt="雾中的古树与森林" fetchPriority="high" width="420" height="540" />
          <span>风景 <span lang="en">Landscape</span></span>
        </Link>
        <Link to="/gallery/street" className="home-print home-print-center" aria-label="浏览街头摄影">
          <img src="/photos/city.jpg" alt="夜色中被霓虹照亮的街道" fetchPriority="high" width="480" height="620" />
          <span>街拍 <span lang="en">Street</span></span>
        </Link>
        <Link to="/gallery/monochrome" className="home-print home-print-right" aria-label="浏览黑白摄影">
          <img src="/photos/mist.jpg" alt="薄雾中的田野与两棵树" width="420" height="540" />
          <span>黑白 <span lang="en">Monochrome</span></span>
        </Link>
      </div>
      <p className="home-demo-note">当前图片为排版示意，非本人摄影作品。</p>
    </section>
  );
}
