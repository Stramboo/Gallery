import { Link } from "react-router-dom";
import { Instagram, Mail, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-ink-700/50 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-3">
            <Camera className="w-5 h-5 text-gold-400" strokeWidth={1} />
            <span className="font-serif text-2xl tracking-wider text-paper-100">
              光影集
            </span>
          </div>

          <nav className="flex gap-8 text-sm">
            <Link to="/" className="text-paper-400 hover:text-gold-400 transition-colors">
              首页
            </Link>
            <Link to="/gallery" className="text-paper-400 hover:text-gold-400 transition-colors">
              作品集
            </Link>
            <Link to="/about" className="text-paper-400 hover:text-gold-400 transition-colors">
              关于
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-paper-400 hover:text-gold-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1} />
            </a>
            <a
              href="#"
              className="text-paper-400 hover:text-gold-400 transition-colors"
              aria-label="500px"
            >
              <Camera className="w-5 h-5" strokeWidth={1} />
            </a>
            <a
              href="mailto:contact@gallery.com"
              className="text-paper-400 hover:text-gold-400 transition-colors"
              aria-label="邮箱"
            >
              <Mail className="w-5 h-5" strokeWidth={1} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-paper-500">
          <p>© 2024 光影集. All rights reserved.</p>
          <p className="font-serif italic text-paper-500">
            "Photography is the story I fail to put into words."
          </p>
        </div>
      </div>
    </footer>
  );
}
