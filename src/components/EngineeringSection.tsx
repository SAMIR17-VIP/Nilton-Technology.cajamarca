import { motion } from "motion/react";
import { Sparkles, Wrench } from "lucide-react";

const ENG_SOFTWARE = [
  { name: "AutoCAD",  icon: "📐", img: "/images/software/autocad.png",  color: "from-red-500/20 to-orange-500/5",    border: "hover:border-red-500/40"    },
  { name: "Revit",    icon: "🏛️", img: "/images/software/revit.png",    color: "from-blue-500/20 to-cyan-500/5",     border: "hover:border-blue-500/40"   },
  { name: "Civil 3D", icon: "🛣️", img: "/images/software/civil3d.png",  color: "from-amber-500/20 to-yellow-500/5",  border: "hover:border-amber-500/40"  },
  { name: "ETABS",    icon: "🏗️", img: "/images/software/etabs.png",    color: "from-violet-500/20 to-purple-500/5", border: "hover:border-violet-500/40" },
  { name: "SAP2000",  icon: "⚙️", img: "/images/software/sap2000.png",  color: "from-teal-500/20 to-emerald-500/5",  border: "hover:border-teal-500/40"   },
  { name: "SketchUp", icon: "🏘️", img: "/images/software/sketchup.png", color: "from-green-500/20 to-lime-500/5",    border: "hover:border-green-500/40"  },
  { name: "3ds Max",  icon: "🎭", img: "/images/software/3dsmax.png",   color: "from-blue-600/20 to-indigo-500/5",   border: "hover:border-blue-600/40"   },
  { name: "Inventor", icon: "🔩", img: "/images/software/inventor.png", color: "from-orange-500/20 to-red-500/5",    border: "hover:border-orange-500/40" },
  { name: "Maya",     icon: "🎬", img: "/images/software/maya.png",     color: "from-cyan-500/20 to-blue-500/5",     border: "hover:border-cyan-500/40"   },
];

export function EngineeringSection() {
  return (
    <section id="ingenieria" className="py-28 container mx-auto px-6 relative">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 relative z-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-primary/60" />
          <Wrench className="w-3.5 h-3.5 text-primary/70" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/70">
            Herramientas Profesionales
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-3">
          Software de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Ingeniería
          </span>
        </h2>
        <p className="text-on-surface/50 text-lg max-w-xl">
          Instalamos y configuramos las herramientas más potentes para arquitectos, ingenieros y diseñadores.
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 relative z-10">
        {ENG_SOFTWARE.map((sw, idx) => (
          <motion.div
            key={sw.name}
            initial={{ opacity: 0, y: 28, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`
              glass rounded-2xl flex flex-col items-center justify-center gap-4
              p-5 aspect-square text-center group cursor-pointer
              border border-white/8 ${sw.border}
              transition-colors duration-300 relative overflow-hidden
            `}
          >
            {/* Per-card gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${sw.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

            {/* Shine sweep */}
            <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/6 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[350%] transition-all duration-700 ease-in-out" />

            {/* Image */}
            <div className="w-full flex-1 flex items-center justify-center min-h-0 relative z-10">
              <div className="w-[74%] aspect-square flex items-center justify-center rounded-xl bg-white/5 p-3 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 relative">
                <img
                  src={sw.img}
                  alt={sw.name}
                  className="w-full h-full object-contain drop-shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fb = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fb) fb.classList.remove("hidden");
                  }}
                />
                <span className="text-5xl hidden leading-none">{sw.icon}</span>
              </div>
            </div>

            {/* Label */}
            <span className="text-sm font-bold text-white/80 group-hover:text-white tracking-wide leading-tight relative z-10 transition-colors duration-200">
              {sw.name}
            </span>
          </motion.div>
        ))}

        {/* "Muchos más" card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: ENG_SOFTWARE.length * 0.06, duration: 0.45 }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="glass rounded-2xl flex flex-col items-center justify-center gap-4 p-5 aspect-square cursor-pointer group border border-primary/25 bg-primary/8 relative overflow-hidden"
        >
          {/* Pulsing glow */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 bg-primary/10 blur-xl rounded-2xl"
          />

          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center relative z-10"
          >
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>

          <span className="text-xs font-black text-primary uppercase tracking-widest relative z-10">
            Muchos más
          </span>
        </motion.div>
      </div>
    </section>
  );
}