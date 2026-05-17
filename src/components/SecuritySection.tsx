import { motion } from "motion/react";
import { Shield, Lock, CheckCircle2, Zap, Eye, Wifi } from "lucide-react";

const ANTIVIRUS_LIST = [
  {
    name: "ESET NOD32",
    img: "/images/antivirus/eset.png",
    tag: "Ligero & Rápido",
    color: "from-blue-500/15 to-cyan-500/5",
    border: "border-blue-500/25",
    dot: "bg-blue-400",
  },
  {
    name: "Kaspersky",
    img: "/images/antivirus/kaspersky.png",
    tag: "Protección Total",
    color: "from-green-500/15 to-emerald-500/5",
    border: "border-green-500/25",
    dot: "bg-green-400",
  },
  {
    name: "Avast Premium",
    img: "/images/antivirus/avast.png",
    tag: "Anti-Ransomware",
    color: "from-orange-500/15 to-amber-500/5",
    border: "border-orange-500/25",
    dot: "bg-orange-400",
  },
];

const FEATURES = [
  { icon: Zap,          label: "Detección en tiempo real"       },
  { icon: Eye,          label: "Monitoreo 24/7"                 },
  { icon: Wifi,         label: "Protección en red"              },
  { icon: CheckCircle2, label: "Eliminación garantizada"        },
];

export function SecuritySection() {
  return (
    <section id="seguridad" className="py-28 container mx-auto px-6">
      <div className="glass rounded-[2.5rem] overflow-hidden relative">

        {/* ── Ambient background ── */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        {/* ── Top accent bar ── */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-70" />

        <div className="p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 relative z-10">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex-1 space-y-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                Protección Certificada
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                Seguridad
              </h2>
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase tracking-tight leading-none">
                Total
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-on-surface/65 leading-relaxed max-w-lg"
            >
              Protegemos tu equipo contra virus, malware y ataques cibernéticos con los mejores motores de detección y protección en tiempo real.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-2 gap-3"
            >
              {FEATURES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/8">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-white/80">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Antivirus cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3 pt-2"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30 mb-4">
                Soluciones disponibles
              </p>
              {ANTIVIRUS_LIST.map((av, idx) => (
                <motion.div
                  key={av.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + idx * 0.08 }}
                  className={`flex items-center gap-5 px-5 py-4 rounded-2xl bg-gradient-to-r ${av.color} border ${av.border} group hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
                >
                  {/* Logo — large */}
                  <div className="shrink-0 w-16 h-16 flex items-center justify-center bg-white/8 rounded-xl p-2.5 group-hover:bg-white/15 transition-colors">
                    <img
                      src={av.img}
                      alt={av.name}
                      className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fb = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fb) fb.classList.remove("hidden");
                      }}
                    />
                    <Shield className="w-8 h-8 text-primary hidden" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-white text-base leading-tight">{av.name}</p>
                    <p className="text-xs text-on-surface/50 mt-0.5">{av.tag}</p>
                  </div>

                  {/* Live dot */}
                  <div className="shrink-0 flex items-center gap-1.5">
                    <span className={`relative flex h-2.5 w-2.5`}>
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${av.dot} opacity-60`} />
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${av.dot}`} />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Live</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ══ RIGHT COLUMN — visual ══ */}
          <div className="flex-1 flex justify-center items-center relative py-10 md:py-0">
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Pulsing rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.15 + i * 0.1, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.6 }}
                  className="absolute rounded-full border border-primary/30"
                  style={{ width: 160 + i * 70, height: 160 + i * 70 }}
                />
              ))}

              {/* Glow blob */}
              <div className="absolute w-64 h-64 bg-primary/25 blur-[70px] rounded-full" />

              {/* Icon container */}
              <div className="relative z-10 w-44 h-44 md:w-56 md:h-56 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Lock className="w-24 h-24 md:w-32 md:h-32 text-primary drop-shadow-[0_0_40px_rgba(37,99,235,0.6)]" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:top-0 md:-right-8 flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/15 border border-green-500/30 backdrop-blur-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-xs font-bold text-green-300 whitespace-nowrap">Sistema Limpio</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:bottom-0 md:-left-8 flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/15 border border-primary/30 backdrop-blur-sm"
              >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-primary whitespace-nowrap">100% Protegido</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}