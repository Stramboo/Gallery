import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "首页" },
    { to: "/gallery", label: "作品集" },
    { to: "/about", label: "关于" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink-900/90 backdrop-blur-md py-4 border-b border-ink-700/50"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="h-px w-8 bg-gold-400 transition-all duration-300 group-hover:w-12" />
          <span className="font-serif text-2xl tracking-wider text-paper-100">
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
                    isActive
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
        >
          <span
            className={cn(
              "h-px w-6 bg-paper-100 transition-all duration-300",
              menuOpen && "rotate-45 translate-y-[7px]"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-paper-100 transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-paper-100 transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-[7px]"
            )}
          />
        </button>
      </nav>

      {/* 移动端展开菜单 */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-6 py-4 space-y-4 bg-ink-900/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "block text-lg font-serif tracking-wide transition-colors",
                    isActive ? "text-gold-400" : "text-paper-200"
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
