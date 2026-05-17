import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { MessageSquare, Menu, X } from "lucide-react";

const NAV_ITEMS = [

  { label: "Inicio", href: "#inicio" },
  { label: "Ingeniería", href: "#ingenieria" },
  { label: "Diseño", href: "#diseno" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Productos", href: "#productos" }, // NUEVO
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Mouse position for glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Track active section via scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("inicio");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for the glow
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = navRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 sm:top-4 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[94%] max-w-5xl"
    >
      <div
        ref={navRef}
        onMouseMove={handleMouseMove}
        className="relative px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl md:rounded-2xl flex items-center justify-between overflow-hidden"
        style={{
          background: "rgba(8,8,20,0.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Cursor glow that follows mouse */}
        <motion.div
          className="hidden lg:block absolute pointer-events-none rounded-full"
          style={{
            width: 180,
            height: 180,
            left: springX,
            top: springY,
            x: "-50%",
            y: "-50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />

        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 relative z-10 flex-shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="text-sm sm:text-base md:text-lg font-black tracking-tighter text-white whitespace-nowrap">
            NILTON{" "}
            <motion.span
              style={{
                background: "linear-gradient(90deg, #A855F7, #FF6B35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              TECHNOLOGY
            </motion.span>
          </span>
        </motion.div>

        {/* Desktop Menu (Oculto en Móvil y Tablet, visible solo desde lg: 1024px) */}
        <div className="hidden lg:flex items-center gap-1 relative z-10">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            const isHovered = hoveredItem === id;

            return (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredItem(id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 outline-none select-none"
                style={{
                  color: isActive
                    ? "#ffffff"
                    : isHovered
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.4)",
                }}
              >
                {/* Active / hover pill background */}
                <AnimatePresence>
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(255,107,53,0.15))"
                          : "rgba(255,255,255,0.06)",
                        border: isActive
                          ? "1px solid rgba(168,85,247,0.4)"
                          : "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Active dot indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      style={{ background: "#A855F7" }}
                    />
                  )}
                </AnimatePresence>

                {/* Hover shimmer line (Arreglado el error de sintaxis 'linear-gradient') */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.span
                      className="absolute bottom-1 left-2 right-2 h-px rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                      }}
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* CTA Button + Mobile & Tablet Trigger */}
        <div className="flex items-center gap-2 relative z-10 flex-shrink-0">
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1.5 py-1.5 sm:py-2 px-3 sm:px-4 text-[11px] sm:text-xs font-bold rounded-lg text-white relative overflow-hidden select-none"
            style={{
              background: "linear-gradient(135deg, #A855F7, #FF6B35)",
            }}
          >
            <motion.span
              className="absolute inset-0 pointer-events-none"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
              }}
            />
            <MessageSquare className="w-3.5 h-3.5 hidden sm:block" />
            <span>Contacto</span>
          </motion.a>

          {/* Hamburger Trigger (Activo para Móviles y Tablets, se oculta en lg) */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg outline-none flex items-center justify-center"
            style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)" }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={18} className="sm:w-5 sm:h-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={18} className="sm:w-5 sm:h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile & Tablet Vertical Menu Panel (Afecta a todo lo menor que lg) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mt-2 rounded-xl overflow-hidden"
            style={{
              background: "rgba(8,8,20,0.94)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex flex-col p-3 sm:p-4 gap-1">
              {NAV_ITEMS.map((item, idx) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex items-center gap-3 px-3.5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors select-none"
                    style={{
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(255,107,53,0.1))"
                        : "transparent",
                      border: isActive ? "1px solid rgba(168,85,247,0.3)" : "1px solid transparent",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: isActive ? "#A855F7" : "rgba(255,255,255,0.2)" }}
                    />
                    {item.label}
                    {isActive && (
                      <motion.span
                        className="ml-auto text-[10px]"
                        style={{ color: "rgba(168,85,247,0.7)" }}
                        layoutId="mobile-active"
                      >
                        ●
                      </motion.span>
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}