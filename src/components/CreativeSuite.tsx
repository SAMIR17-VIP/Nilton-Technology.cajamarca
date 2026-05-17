import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useRef, useState } from "react";

const CREATIVE_APPS = [
  {
    title: "Adobe Photoshop & Illustrator",
    description:
      "Edición fotográfica y diseño vectorial profesional con todas las funciones activas.",
    image: "/images/creative-1.jpg",
    fallback:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
    accent: "#FF6B35",
    icon: "✦",
    tag: "FOTO · VECTOR",
    number: "01",
  },
  {
    title: "Premiere Pro & After Effects",
    description:
      "Producción de video y efectos visuales de alta calidad para cine y redes sociales.",
    image: "/images/creative-2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80",
    accent: "#A855F7",
    icon: "◈",
    tag: "VIDEO · VFX",
    number: "02",
  },
  {
    title: "Audition & CorelDRAW",
    description:
      "Edición de audio profesional y diseño gráfico versátil para imprenta y web.",
    image: "/images/creative-3.jpg",
    fallback:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
    accent: "#00D9C8",
    icon: "◎",
    tag: "AUDIO · DISEÑO",
    number: "03",
  },
];

function TiltCard({ item, idx }: { item: (typeof CREATIVE_APPS)[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const glowX = useTransform(x, [-0.5, 0.5], ["10%", "90%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["10%", "90%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className="relative rounded-3xl overflow-hidden cursor-pointer"
        animate={{ boxShadow: hovered ? `0 32px 80px -12px ${item.accent}55` : "0 8px 32px -8px rgba(0,0,0,0.5)" }}
        transition={{ duration: 0.4 }}
      >
        {/* Glass border gradient */}
        <div
          className="absolute inset-0 rounded-3xl z-20 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${item.accent}33 0%, transparent 50%, ${item.accent}22 100%)`,
            border: `1px solid ${item.accent}44`,
          }}
        />

        {/* Dynamic glow follow */}
        {hovered && (
          <motion.div
            className="absolute w-40 h-40 rounded-full pointer-events-none z-10"
            style={{
              left: glowX,
              top: glowY,
              transform: "translate(-50%,-50%)",
              background: `radial-gradient(circle, ${item.accent}55 0%, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />
        )}

        {/* Image section */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onError={(e) => { e.currentTarget.src = item.fallback; }}
          />

          {/* Dark overlay with gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(8,8,20,0.95) 0%, rgba(8,8,20,0.3) 60%, transparent 100%)`,
            }}
          />

          {/* Floating number */}
          <div
            className="absolute top-4 left-5 font-mono text-xs font-bold tracking-widest"
            style={{ color: `${item.accent}cc` }}
          >
            {item.number}
          </div>

          {/* Tag chip */}
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest backdrop-blur-md"
            style={{
              background: `${item.accent}22`,
              border: `1px solid ${item.accent}55`,
              color: item.accent,
            }}
          >
            {item.tag}
          </div>

          {/* Icon badge */}
          <motion.div
            className="absolute bottom-4 right-5 text-3xl font-bold"
            animate={{ rotate: hovered ? 90 : 0, scale: hovered ? 1.3 : 1 }}
            transition={{ duration: 0.4 }}
            style={{ color: item.accent }}
          >
            {item.icon}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-7 relative z-10" style={{ background: "rgba(8,8,20,0.85)" }}>
          <motion.h3
            className="text-xl font-bold mb-3 leading-tight tracking-tight"
            animate={{ color: hovered ? item.accent : "#ffffff" }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {item.title}
          </motion.h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            {item.description}
          </p>

          {/* Animated underline */}
          <motion.div
            className="mt-5 h-[2px] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: hovered ? "100%" : "30%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: `linear-gradient(to right, ${item.accent}, transparent)` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CreativeSuite() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(180deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .float-1 { animation: float 6s ease-in-out infinite; }
        .float-2 { animation: float 8s ease-in-out infinite 1s; }
        .float-3 { animation: float 7s ease-in-out infinite 2s; }
      `}</style>

      <section
        id="diseno"
        className="relative py-32 overflow-hidden"
        style={{ background: "radial-gradient(ellipse 120% 80% at 50% -10%, #1a0a2e 0%, #080814 50%, #000008 100%)" }}
      >
        {/* Animated grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute top-20 left-16 w-72 h-72 rounded-full pointer-events-none float-1"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-20 right-16 w-96 h-96 rounded-full pointer-events-none float-2"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none float-3"
          style={{
            background: "radial-gradient(circle, rgba(0,217,200,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Decorative floating shapes */}
        <div className="absolute top-24 right-32 text-5xl float-1 pointer-events-none" style={{ color: "rgba(255,107,53,0.15)" }}>✦</div>
        <div className="absolute bottom-32 left-24 text-4xl float-2 pointer-events-none" style={{ color: "rgba(168,85,247,0.15)" }}>◈</div>
        <div className="absolute top-1/2 right-12 text-3xl float-3 pointer-events-none" style={{ color: "rgba(0,217,200,0.15)" }}>◎</div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow label */}
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full"
              style={{
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.3)",
                fontFamily: "'Space Mono', monospace",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs tracking-widest text-purple-300 font-bold">SOFTWARE CREATIVO</span>
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            </motion.div>

            <h2
              className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.5) 50%, #A855F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SUITE<br />
              <span style={{
                background: "linear-gradient(135deg, #FF6B35, #A855F7, #00D9C8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>CREATIVA</span>
            </h2>

            <p
              className="text-base max-w-xl mx-auto leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Space Mono', monospace" }}
            >
              Instalación garantizada de las herramientas más potentes para creadores, fotógrafos y diseñadores.
            </p>

            {/* Animated divider */}
            <div className="flex items-center justify-center gap-4">
              <motion.div
                className="h-px rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ background: "linear-gradient(to right, transparent, #FF6B35)" }}
              />
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <motion.div
                className="h-px rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ background: "linear-gradient(to left, transparent, #00D9C8)" }}
              />
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CREATIVE_APPS.map((item, idx) => (
              <TiltCard key={item.title} item={item} idx={idx} />
            ))}
          </div>

          {/* Bottom stats bar */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {[
              { value: "100%", label: "Funciones activas" },
              { value: "24/7", label: "Soporte técnico" },
              { value: "∞", label: "Actualizaciones" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center py-5 px-4 rounded-2xl backdrop-blur-md"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="text-3xl font-black mb-1"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: "linear-gradient(135deg, #FF6B35, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Space Mono', monospace" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}