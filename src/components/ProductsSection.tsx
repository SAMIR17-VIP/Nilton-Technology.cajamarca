import { motion } from "motion/react";
import { Key, HardDrive, Laptop, Gamepad2, Cpu, Monitor, ArrowRight, Sparkles, type LucideIcon } from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

const LICENSES = [
  {
    title: "Windows 10 / 11 Pro",
    subtitle: "Licencia Digital Permanente OEM / Retail",
    badge: "Permanente",
    icon: "🪟",
    img: `${import.meta.env.BASE_URL}images/products/windows_license.png`,
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Microsoft Office 365 / 2021",
    subtitle: "Cuentas institucionales y licencias de por vida",
    badge: "Vitalicia",
    icon: "📊",
    img: `${import.meta.env.BASE_URL}images/products/office_license.png`,
    accent: "from-orange-500/20 to-red-500/10",
    border: "border-orange-500/20",
  },
];

const HARDWARE = [
  { title: "Laptops",    icon: Laptop,   img: `${import.meta.env.BASE_URL}images/products/laptop.png`   },
  { title: "PCs Gamer",  icon: Gamepad2, img: `${import.meta.env.BASE_URL}images/products/gamer_pc.png` },
  { title: "SSD / RAM",  icon: Cpu,      img: `${import.meta.env.BASE_URL}images/products/hardware.png` },
  { title: "Monitores",  icon: Monitor,  img: `${import.meta.env.BASE_URL}images/products/monitor.png`  },
];

// ── Section ──────────────────────────────────────────────────────────────────

export function ProductsSection() {
  return (
    <section id="productos" className="py-28 container mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-primary/60" />
          <Sparkles className="w-3.5 h-3.5 text-primary/70" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/70">
            Catálogo Oficial
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-3">
          Productos &amp; Licencias
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Originales</span>
        </h2>
        <p className="text-on-surface/50 text-lg max-w-xl">
          Todo lo que necesitas para equipar tu espacio de trabajo con tecnología real y garantizada.
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* ── Column 1: Licenses ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <Key className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">
              Licencias de Software
            </h3>
          </motion.div>

          <div className="space-y-5">
            {LICENSES.map((lic, idx) => (
              <motion.div
                key={lic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <LicenseCard {...lic} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Column 2: Hardware ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <HardDrive className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">
              Hardware &amp; Equipos
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {HARDWARE.map((hw, idx) => (
              <motion.div
                key={hw.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <HardwareCard {...hw} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── License Card ─────────────────────────────────────────────────────────────

function LicenseCard({
  title, subtitle, badge, icon, img, accent, border,
}: {
  title: string; subtitle: string; badge: string; icon: string;
  img?: string; accent: string; border: string;
}) {
  return (
    <div className={`glass glass-hover rounded-2xl overflow-hidden group cursor-pointer border ${border}`}>
      <div className={`bg-gradient-to-r ${accent} p-6 flex items-center justify-between gap-6`}>

        {/* Image block — big */}
        <div className="shrink-0 w-32 h-32 flex items-center justify-center bg-white/5 rounded-xl p-3 relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const next = target.nextElementSibling as HTMLElement;
              if (next) next.classList.remove('hidden');
            }}
          />
          <span className="text-5xl hidden leading-none">{icon}</span>
          {/* Subtle shine */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-xl" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <span className="inline-block text-[9px] font-black uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full mb-3">
            {badge}
          </span>
          <h4 className="text-lg font-black text-white group-hover:text-primary transition-colors leading-tight mb-1">
            {title}
          </h4>
          <div className="truncate">
             <p className="text-sm text-on-surface/50 leading-snug truncate">{subtitle}</p>
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight className="shrink-0 w-5 h-5 text-on-surface/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
}

// ── Hardware Card ─────────────────────────────────────────────────────────────

function HardwareCard({
  title, icon: Icon, img,
}: {
  title: string; icon: LucideIcon; img?: string;
}) {
  return (
    <div className="glass glass-hover rounded-2xl flex flex-col items-center justify-center gap-5 p-6 aspect-square text-center group cursor-pointer">

      {/* Image — fills ~65% of card */}
      <div className="w-full flex-1 flex items-center justify-center min-h-0">
        <div className="w-[70%] aspect-square flex items-center justify-center bg-white/5 rounded-xl p-4 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-contain drop-shadow-lg"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const next = target.nextElementSibling as HTMLElement;
              if (next) next.classList.remove('hidden');
            }}
          />
          <Icon className="w-12 h-12 text-primary hidden" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-xl" />
        </div>
      </div>

      {/* Label */}
      <span className="text-sm font-black text-white group-hover:text-primary transition-colors uppercase tracking-widest leading-tight">
        {title}
      </span>
    </div>
  );
}
