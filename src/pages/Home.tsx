import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import "@/styles/home.css";

const themes = [
  { id: "landscape", title: "山川之间", description: "山川湖海，日出日落。", image: "/photos/forest.jpg", alt: "雾气笼罩的树林" },
  { id: "monochrome", title: "留白，也是一种表达。", description: "褪去色彩，回归光影本身。", image: "/photos/mist.jpg", alt: "极简的雾中田野" },
];

export default function Home() {
  return (
    <div className="portfolio-home">
      <div className="home-intro-strip">
        <p>摄影是我观看世界的方式。<Link to="/gallery">探索作品集 <ArrowRight size={13} aria-hidden="true" /></Link></p>
      </div>
      <Hero />
      <section className="home-feature home-feature-dark" aria-labelledby="street-title">
        <div className="home-section-copy">
          <h2 id="street-title">城市入夜，故事未眠。</h2>
          <p>街头巷尾的烟火，光影交织的瞬间。</p>
          <Link to="/gallery/street" className="home-text-link">探索街拍 <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <Link to="/gallery/street" className="home-feature-photo" aria-label="进入街拍作品集">
          <img src="/photos/night.jpg" alt="大阪街道上的灯光与行人" width="1800" height="1000" loading="lazy" />
        </Link>
      </section>
      <div className="home-theme-grid">
        {themes.map((theme) => (
          <section className="home-theme" key={theme.id} aria-labelledby={`theme-${theme.id}`}>
            <div className="home-section-copy">
              <h2 id={`theme-${theme.id}`}>{theme.title}</h2>
              <p>{theme.description}</p>
              <Link to={`/gallery/${theme.id}`} className="home-text-link">浏览作品 <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
            <Link to={`/gallery/${theme.id}`} className="home-theme-photo" aria-label={`浏览${theme.id === "landscape" ? "风景" : "黑白"}摄影`}>
              <img src={theme.image} alt={theme.alt} width="1000" height="800" loading="lazy" />
            </Link>
          </section>
        ))}
      </div>
      <section className="home-closing" aria-labelledby="closing-title">
        <h2 id="closing-title">每一张照片，<br />都是一个未被讲述的故事。</h2>
        <p>走进作品集，发现更多光影交织的瞬间。</p>
        <Link to="/gallery" className="home-button">查看全部作品</Link>
      </section>
      <div className="home-photo-credit">
        <p>示意照片：<a href="https://unsplash.com/photos/zGocRrMrGQY" target="_blank" rel="noreferrer">Jay lee</a>、<a href="https://unsplash.com/photos/0mySAxvSp8I" target="_blank" rel="noreferrer">Fabian Jones</a>、<a href="https://unsplash.com/photos/KCmP8IAuQP4" target="_blank" rel="noreferrer">Martin Katler</a>、<a href="https://unsplash.com/photos/AABX5Lu6ldw" target="_blank" rel="noreferrer">Alex Robertson</a> / Unsplash。作品页面仍使用现有演示内容。</p>
      </div>
    </div>
  );
}
