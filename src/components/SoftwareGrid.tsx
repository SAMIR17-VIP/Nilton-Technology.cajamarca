import { motion } from "motion/react";
import { LucideIcon, Monitor, Settings, ShieldCheck, Cpu, PenTool, Layers, Wrench, Key, Sparkles, ArrowUpRight } from "lucide-react";

// ── Data with real online images ────────────────────────────────────────────

const SOFTWARE_SERVICES = [
  {
    title: "Microsoft Office",
    description: "Versiones 2019, 2021, LTSC y Microsoft 365 con activación permanente.",
    icon: Monitor,
    img: "/images/services/office.png",
    fallbackImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png",
    color: "from-orange-500/20 to-red-500/5",
    border: "hover:border-orange-500/40",
    glow: "bg-orange-500/25",
    tag: "Más solicitado",
    featured: true,
  },
  {
    title: "Windows OS",
    description: "Instalación y optimización de Windows 10 y 11 Pro/Home.",
    icon: Settings,
    img: "/images/services/windows.png",
    fallbackImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png",
    color: "from-blue-500/20 to-cyan-500/5",
    border: "hover:border-blue-500/40",
    glow: "bg-blue-500/25",
    tag: "Esencial",
    featured: false,
  },
  {
    title: "Drivers & Pack",
    description: "Actualización de controladores para máximo rendimiento del hardware.",
    icon: Cpu,
    img: "/images/services/drivers.png",
    fallbackImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Drivers.svg/240px-Drivers.svg.png",
    color: "from-slate-500/20 to-zinc-500/5",
    border: "hover:border-slate-500/40",
    glow: "bg-slate-500/25",
    tag: "Hardware",
    featured: false,
  },
  {
    title: "Activaciones",
    description: "Activación de software y sistemas operativos mediante licencia digital.",
    icon: Key,
    img: "/images/services/activations.png",
    fallbackImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Key-crypto.svg/240px-Key-crypto.svg.png",
    color: "from-yellow-500/20 to-amber-500/5",
    border: "hover:border-yellow-500/40",
    glow: "bg-yellow-500/25",
    tag: "Licencias",
    featured: false,
  },
  {
    title: "Optimización",
    description: "Aceleración de inicio, limpieza de temporales y mejora de procesos.",
    icon: Wrench,
    img: "/images/services/optimization.png",
    fallbackImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/240px-NewTux.svg.png",
    color: "from-green-500/20 to-emerald-500/5",
    border: "hover:border-green-500/40",
    glow: "bg-green-500/25",
    tag: "Rendimiento",
    featured: false,
  },
  {
    title: "Software Ingeniería",
    description: "AutoCAD, Revit, Civil 3D y suites completas de cálculo estructural.",
    icon: Layers,
    img: "/images/services/engineering.png",
    fallbackImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/AutoCAD_2023_logo.svg/2560px-AutoCAD_2023_logo.svg.png",
    color: "from-red-600/20 to-rose-500/5",
    border: "hover:border-red-600/40",
    glow: "bg-red-600/25",
    tag: "CAD / BIM",
    featured: false,
  },
  {
    title: "Software Diseño",
    description: "Adobe Creative Cloud, CorelDRAW y herramientas de edición profesional.",
    icon: PenTool,
    img: "/images/services/design.png",
    fallbackImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Adobe_Systems_logo_and_wordmark.svg/2560px-Adobe_Systems_logo_and_wordmark.svg.png",
    color: "from-red-500/20 to-pink-500/5",
    border: "hover:border-red-500/40",
    glow: "bg-red-500/25",
    tag: "Creativo",
    featured: false,
  },
  {
    title: "Soporte Remoto",
    description: "Asistencia técnica inmediata vía AnyDesk para cualquier solución.",
    icon: ShieldCheck,
    img: "/images/services/remote.png",
    fallbackImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/AnyDesk_Logo_2020.svg/2560px-AnyDesk_Logo_2020.svg.png",
    color: "from-violet-500/20 to-purple-500/5",
    border: "hover:border-violet-500/40",
    glow: "bg-violet-500/25",
    tag: "Inmediato",
    featured: false,
  },
];

// ── Main section ─────────────────────────────────────────────────────────────

export function SoftwareGrid() {
  return (
    <section id="servicios" className="py-28 container mx-auto px-6 relative">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/6 blur-[140px] rounded-full pointer-events-none" />

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 relative z-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-primary/60" />
          <Sparkles className="w-3.5 h-3.5 text-primary/70" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/70">
            Instalación Profesional
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-3">
          Instalación de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Programas
          </span>
        </h2>
        <p className="text-on-surface/50 text-lg max-w-xl">
          Todo el software que necesitas, instalado y activado de forma remota, segura y sin complicaciones.
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {SOFTWARE_SERVICES.map((service, idx) => (
          <SoftwareCard key={service.title} {...service} index={idx} />
        ))}
      </div>
    </section>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  img: string;
  fallbackImg: string;
  index: number;
  color: string;
  border: string;
  glow: string;
  tag: string;
  featured: boolean;
}

function SoftwareCard({ title, description, icon: Icon, img, fallbackImg, index, color, border, glow, tag, featured }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
      className={`
        glass rounded-2xl flex flex-col gap-0 group cursor-pointer
        border border-white/8 ${border}
        transition-colors duration-300 relative overflow-hidden
        ${featured ? "ring-1 ring-primary/25" : ""}
      `}
    >
      {/* Hover gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

      {/* Shine sweep */}
      <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[350%] transition-all duration-700 ease-in-out" />

      {/* ── Image zone ── */}
      <div className="relative z-10 flex items-center justify-center pt-8 pb-5 px-6">
        <div className="relative">
          {/* Glow behind image */}
          <div className={`absolute inset-0 ${glow} blur-[35px] rounded-full scale-[1.6] opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

          <div className="w-20 h-20 flex items-center justify-center bg-white/6 rounded-2xl p-4 group-hover:bg-white/12 group-hover:scale-110 transition-all duration-300 relative">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-contain drop-shadow-lg"
              onError={(e) => {
                // Try local first, then fallback to wikimedia
                if (e.currentTarget.src !== fallbackImg) {
                  e.currentTarget.src = fallbackImg;
                } else {
                  e.currentTarget.style.display = "none";
                  const fb = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fb) fb.classList.remove("hidden");
                }
              }}
            />
            <Icon className="w-9 h-9 text-primary hidden" />
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 px-6 pb-6 gap-3">

        {/* Tag + featured */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 bg-primary/8 border border-primary/15 px-2.5 py-1 rounded-full">
            {tag}
          </span>
          {featured && (
            <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-amber-400">
              <Sparkles className="w-2.5 h-2.5" />
              Top
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-black text-white group-hover:text-white transition-colors leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-on-surface/50 leading-relaxed flex-1">
          {description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-white/6 group-hover:bg-primary/20 transition-colors" />

        {/* Footer row */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface/25">
            Instalación remota
          </span>
          <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all">
            <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}