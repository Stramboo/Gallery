import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Aperture } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = isHome ? [
    { to: "/gallery", label: "作品集" },
    { to: "/gallery/landscape", label: "风景" },
    { to: "/gallery/portrait", label: "人像" },
    { to: "/gallery/street", label: "街拍" },
    { to: "/gallery/architecture", label: "建筑" },
    { to: "/gallery/monochrome", label: "黑白" },
    { to: "/about", label: "关于" },
  ] : [
    { to: "/", label: "首页" },
    { to: "/gallery", label: "作品集" },
    { to: "/about", label: "关于" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isHome ? "home-header" : scrolled
          ? "bg-ink-900/90 backdrop-blur-md py-4 border-b border-ink-700/50"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          {isHome ? <Aperture size={22} strokeWidth={1.7} aria-hidden="true" /> : <span className="h-px w-8 bg-gold-400 transition-all duration-300 group-hover:w-12" />}
          <span className={isHome ? "home-nav-brand" : "font-serif text-2xl tracking-wider text-paper-100"}>
            光影集
          </span>
        </Link>

        {/* 桌面导航 */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative text-sm tracking-wide transition-colors duration-300",
                    isHome ? "home-nav-link" : isActive
                      ? "text-gold-400"
                      : "text-paper-300 hover:text-paper-100"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-2 left-0 h-px bg-gold-400 transition-all duration-300",
                        isActive ? "w-full" : "w-0"
                      )}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 移动端菜单按钮 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="菜单"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={cn(
              "h-px w-6 transition-all duration-300",
              isHome ? "bg-ink-900" : "bg-paper-100",
              menuOpen && "rotate-45 translate-y-[7px]"
            )}
          />
          <span
            className={cn(
              "h-px w-6 transition-all duration-300",
              isHome ? "bg-ink-900" : "bg-paper-100",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-px w-6 transition-all duration-300",
              isHome ? "bg-ink-900" : "bg-paper-100",
              menuOpen && "-rotate-45 -translate-y-[7px]"
            )}
          />
        </button>
      </nav>

      {/* 移动端展开菜单 */}
      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500",
          menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className={cn("px-6 py-4 space-y-4", isHome ? "bg-white" : "bg-ink-900/95 backdrop-blur-md")}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "block text-lg font-serif tracking-wide transition-colors",
                    isHome ? "home-nav-link" : isActive ? "text-gold-400" : "text-paper-200"
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
