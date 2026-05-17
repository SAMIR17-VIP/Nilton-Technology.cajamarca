import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { MessageSquare, Cpu, ShieldCheck, Zap, Globe, Terminal, ArrowRight, Sparkles } from "lucide-react";

/* ── Floating particle ── */
function Particle({ delay, x, size, color }: { delay: number; x: number; size: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, bottom: "-10px", width: size, height: size, background: color, filter: "blur(1px)" }}
      animate={{ y: [0, -900], opacity: [0, 0.8, 0.6, 0] }}
      transition={{ duration: 7 + Math.random() * 6, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  delay: i * 0.45,
  x: Math.random() * 100,
  size: 2 + Math.random() * 4,
  color: i % 3 === 0 ? "rgba(168,85,247,0.7)" : i % 3 === 1 ? "rgba(255,107,53,0.6)" : "rgba(0,217,200,0.5)",
}));

/* ── Glitch text ── */
export function GlitchText({ children, className }: { children: string; className?: string }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
    }, 3200 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {glitch && (
        <>
          <span
            className="absolute inset-0 pointer-events-none"
            style={{ color: "#00D9C8", clipPath: "inset(30% 0 40% 0)", transform: "translateX(-3px)", opacity: 0.8 }}
          >
            {children}
          </span>
          <span
            className="absolute inset-0 pointer-events-none"
            style={{ color: "#FF6B35", clipPath: "inset(55% 0 10% 0)", transform: "translateX(3px)", opacity: 0.8 }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}

/* ── Stat box ── */
function StatBox({ icon: Icon, title, sub, accent, idx }: { icon: any; title: string; sub: string; accent: string; idx: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65 + idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center md:items-start text-center md:text-left gap-3 group cursor-default"
    >
      <motion.div
        animate={{
          background: hovered ? `${accent}22` : "rgba(255,255,255,0.04)",
          borderColor: hovered ? `${accent}55` : "rgba(255,255,255,0.08)",
          boxShadow: hovered ? `0 0 24px ${accent}44` : "none",
        }}
        transition={{ duration: 0.3 }}
        className="p-3.5 rounded-2xl border"
      >
        <motion.div animate={{ rotate: hovered ? 12 : 0 }} transition={{ type: "spring", stiffness: 300 }}>
          <Icon className="w-6 h-6" style={{ color: accent }} />
        </motion.div>
      </motion.div>
      <div>
        <h4 className="text-white font-bold text-sm tracking-tight mb-1">{title}</h4>
        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>{sub}</p>
      </div>

      {/* glow line */}
      <motion.div
        className="h-px rounded-full"
        animate={{ width: hovered ? "100%" : "0%", opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
      />
    </motion.div>
  );
}

const STATS = [
  { icon: Zap,         title: "Entrega Inmediata", sub: "AnyDesk Support", accent: "#A855F7" },
  { icon: ShieldCheck, title: "100% Seguro",        sub: "SSL Encrypted",  accent: "#00D9C8" },
  { icon: Globe,       title: "Soporte Global",     sub: "Remote Works",   accent: "#FF6B35" },
  { icon: Terminal,    title: "Ingeniería",          sub: "CAD Specialist", accent: "#A855F7" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Parallax for orbs
  const orb1X = useTransform(springX, [0, 1], [-40, 40]);
  const orb1Y = useTransform(springY, [0, 1], [-30, 30]);
  const orb2X = useTransform(springX, [0, 1], [40, -40]);
  const orb2Y = useTransform(springY, [0, 1], [30, -30]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="inicio"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-0"
    >
      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes scan {
          0%   { transform: translateY(-100%); opacity: 0.04; }
          50%  { opacity: 0.08; }
          100% { transform: translateY(100vh); opacity: 0.04; }
        }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease infinite; }
        .scanline { animation: scan 6s linear infinite; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0" style={{ background: "#030712" }}>
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`}
          alt="Technical Remote Support"
          className="w-full h-full object-cover mix-blend-luminosity scale-110"
          style={{ opacity: 0.18 }}
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"; }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          }}
        />

        {/* Scanline */}
        <div className="scanline absolute left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.06), transparent)" }} />

        {/* Parallax orbs */}
        <motion.div
          style={{ x: orb1X, y: orb1Y, background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)", filter: "blur(80px)" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 70%)", filter: "blur(90px)" }} />
        </motion.div>

        {/* Particles */}
        {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

        {/* Bottom fade */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, #030712 100%)" }} />
      </div>

      {/* ── Content ── */}
      <div className="container relative z-10 px-6 pt-28 pb-16 md:pt-32 md:pb-20 flex flex-col items-center max-w-7xl mx-auto">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3 px-6 py-2.5 rounded-full backdrop-blur-md relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          whileHover={{ scale: 1.04, borderColor: "rgba(168,85,247,0.4)" }}
        >
          {/* shimmer sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.12), transparent)", width: "60%" }}
          />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.3em]">System Status: ONLINE</span>
          <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.1)" }} />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#A855F7" }}>Verified Elite Support</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-5"
          >
            <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.6))" }} />
            <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4" style={{ color: "rgba(168,85,247,0.7)" }} />
            </motion.div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: "rgba(168,85,247,0.7)" }}>Professional IT Services</span>
            <motion.div animate={{ rotate: [360, 180, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4" style={{ color: "rgba(168,85,247,0.7)" }} />
            </motion.div>
            <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, rgba(168,85,247,0.6))" }} />
          </motion.div>

          {/* NILTON with letter stagger */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-[4rem] font-bold mb-3 text-white leading-none uppercase"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.04em" }}
            >
              {"NILTON".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-[4rem] font-bold leading-none uppercase animate-gradient-x"
              style={{
                letterSpacing: "0.04em",
                background: "linear-gradient(90deg, #A855F7, #FF6B35, #00D9C8, #A855F7)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(168,85,247,0.4))",
              }}
            >
              {"TECHNOLOGY".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-4xl text-center mb-14"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-6 uppercase tracking-widest flex flex-wrap items-center justify-center gap-3" style={{ color: "rgba(255,255,255,0.9)" }}>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
              <Cpu className="w-7 h-7" style={{ color: "#A855F7" }} />
            </motion.div>
            Soporte de{" "}
            <span className="italic" style={{ color: "#FF6B35" }}>Alto Rendimiento</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
            Realizamos instalaciones profesionales y seguras{" "}
            <span className="text-white font-bold underline decoration-purple-500 underline-offset-8">
              directamente en tu equipo
            </span>
            . Sin importar dónde estés, optimizamos tu laptop o PC para ingeniería, diseño y productividad.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://wa.me/51901120575"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 px-10 py-5 text-lg rounded-2xl font-bold text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #A855F7, #FF6B35)",
              boxShadow: "0 0 40px rgba(168,85,247,0.45), 0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)", width: "50%" }}
            />
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{ boxShadow: ["0 0 0 0 rgba(168,85,247,0.5)", "0 0 0 18px rgba(168,85,247,0)"] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
            <span className="relative z-10">Soporte Remoto Ahora</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl">
          {/* Top divider */}
          <motion.div
            className="col-span-2 lg:col-span-4 h-px"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.3), rgba(255,107,53,0.3), transparent)" }}
          />
          {STATS.map((s, i) => <StatBox key={s.title} {...s} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
