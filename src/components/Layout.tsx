import { motion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { navLinks } from "@/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#21304A]/95 border-b border-[#F4D069]/10 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          {/* Gold icon placeholder matching brand */}
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)" }}>
            <span className="text-[#21304A] font-bold text-sm font-mono">L</span>
          </div>
          <span className="text-white font-semibold tracking-[0.15em] text-sm uppercase">
            LIBRATUM
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/70 hover:text-[#F4D069] text-sm tracking-wider uppercase transition-colors duration-200 font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="px-5 py-2 text-sm font-semibold tracking-wider uppercase rounded-md text-[#21304A] transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)" }}
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-[#F4D069] transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-[#21304A]/98 border-t border-[#F4D069]/10 px-6 pb-6 pt-4 space-y-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left text-white/80 hover:text-[#F4D069] text-sm tracking-wider uppercase py-2 transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="w-full px-5 py-3 text-sm font-semibold tracking-wider uppercase rounded-md text-[#21304A] mt-2"
            style={{ background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)" }}
          >
            Get in Touch
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0f1e30] border-t border-[#F4D069]/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-md flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)" }}>
              <span className="text-[#21304A] font-bold text-xs font-mono">L</span>
            </div>
            <span className="text-white font-semibold tracking-[0.15em] text-sm uppercase">LIBRATUM</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Aviation consulting agency. Precision. Performance. Partnership.
          </p>
          <p className="text-white/40 text-xs mt-4">Hong Kong · Asia-Pacific & Global</p>
        </div>

        {/* Links */}
        <div>
          <p className="text-[#F4D069] text-xs tracking-[0.15em] uppercase font-semibold mb-4">Navigation</p>
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-white/50 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[#F4D069] text-xs tracking-[0.15em] uppercase font-semibold mb-4">Contact</p>
          <div className="space-y-2 text-white/50 text-sm">
            <p>Hong Kong SAR</p>
            <p>Asia-Pacific & Global Markets</p>
            <a href="mailto:info@libratum.com" className="flex items-center gap-1 hover:text-[#F4D069] transition-colors mt-3">
              info@libratum.com <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs">© 2025 Libratum Solutions. All rights reserved.</p>
        <p className="text-white/20 text-xs tracking-widest uppercase">Precision · Performance · Partnership</p>
      </div>
    </footer>
  );
}
