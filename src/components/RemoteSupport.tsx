import { motion } from "motion/react";
import { Download } from "lucide-react";

const REMOTE_TOOLS = [
  {
    name: "AnyDesk",
    icon: "🌐",
    img: `${import.meta.env.BASE_URL}images/remote/anydesk.png`,
    url: "https://download.anydesk.com/AnyDesk.exe",
    tag: "Recomendado",
    desc: "Conexión ultrarrápida con baja latencia. El más usado por nuestros técnicos.",
    color: "from-red-500/20 to-orange-500/5",
    border: "hover:border-red-500/40",
    glow: "bg-red-500/20",
    badge: "bg-red-500/15 border-red-500/25 text-red-400",
    featured: true,
  },
  {
    name: "TeamViewer",
    icon: "🖥️",
    img: `${import.meta.env.BASE_URL}images/remote/teamviewer.png`,
    url: "https://download.teamviewer.com/download/TeamViewer_Setup.exe",
    tag: "Clásico",
    desc: "Herramienta profesional con soporte multiplataforma y conexión estable.",
    color: "from-blue-500/20 to-cyan-500/5",
    border: "hover:border-blue-500/40",
    glow: "bg-blue-500/20",
    badge: "bg-blue-500/15 border-blue-500/25 text-blue-400",
    featured: false,
  },
  {
    name: "RustDesk",
    icon: "🦀",
    img: `${import.meta.env.BASE_URL}images/remote/rustdesk.png`,
    url: "https://rustdesk.com/download",
    tag: "Open Source",
    desc: "Alternativa segura y de código abierto. Privacidad total garantizada.",
    color: "from-orange-500/20 to-amber-500/5",
    border: "hover:border-orange-500/40",
    glow: "bg-orange-500/20",
    badge: "bg-orange-500/15 border-orange-500/25 text-orange-400",
    featured: false,
  },
];

const FEATURES = [
  { icon: Wifi,             label: "Conexión encriptada SSL" },
  { icon: MonitorSmartphone,label: "Compatible con PC y Mac"  },
  { icon: CheckCircle2,     label: "Sin instalación permanente" },
];

export function RemoteSupport() {
  return (
    <section id="soporte" className="py-28 relative overflow-hidden">

      {/* Ambient bg */}
      <div className="absolute inset-0 bg-surface-container/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-px w-10 bg-primary/50" />
            <Sparkles className="w-3.5 h-3.5 text-primary/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/70">
              Acceso Remoto Seguro
            </span>
            <Sparkles className="w-3.5 h-3.5 text-primary/70" />
            <div className="h-px w-10 bg-primary/50" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-4">
            Soporte{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Remoto
            </span>
          </h2>
          <p className="text-on-surface/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Descarga la herramienta de tu preferencia. Nos conectamos a tu equipo en segundos y solucionamos cualquier problema técnico al instante.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-white/60">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REMOTE_TOOLS.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 32, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`
                glass rounded-[2rem] flex flex-col items-center p-8 group cursor-pointer
                border border-white/8 ${tool.border} transition-colors duration-300
                relative overflow-hidden
                ${tool.featured ? "ring-1 ring-primary/30" : ""}
              `}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-[2rem]`} />

              {/* Shine sweep */}
              <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[350%] transition-all duration-700 ease-in-out" />

              {/* Featured crown */}
              {tool.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/25">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary">Top</span>
                </div>
              )}

              {/* Image — large */}
              <div className="relative z-10 mb-7 w-full flex justify-center">
                <div className="relative">
                  {/* Glow behind image */}
                  <div className={`absolute inset-0 ${tool.glow} blur-[40px] rounded-full scale-150 opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                  <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center bg-white/5 rounded-3xl p-6 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105 relative">
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fb = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fb) fb.classList.remove("hidden");
                      }}
                    />
                    <span className="text-7xl hidden leading-none">{tool.icon}</span>
                  </div>
                </div>
              </div>

              {/* Tag badge */}
              <span className={`relative z-10 text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full border ${tool.badge} mb-3`}>
                {tool.tag}
              </span>

              {/* Name */}
              <h3 className="relative z-10 text-2xl font-black text-white group-hover:text-white transition-colors mb-3">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-on-surface/45 text-center leading-relaxed mb-8 max-w-[220px]">
                {tool.desc}
              </p>

              {/* Download button */}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 w-full flex items-center justify-center gap-2.5 bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-primary hover:text-white px-6 py-3.5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all duration-300 group/btn"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-4 h-4 transition-transform group-hover/btn:translate-y-0.5" />
                Descargar
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-on-surface/25 mt-12 font-medium uppercase tracking-widest"
        >
          Todas las herramientas son gratuitas y seguras · Sin acceso permanente a tu equipo
        </motion.p>
      </div>
    </section>
  );
}
