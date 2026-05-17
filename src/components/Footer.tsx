import { motion } from "motion/react";
import { MessageCircle, Music2, Instagram, Facebook, ArrowUpRight, Zap, Shield, Globe } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/51901120575",
    icon: MessageCircle,
    color:
      "hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@g.nilton17",
    icon: Music2,
    color:
      "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/g.nilton17",
    icon: Instagram,
    color:
      "hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61583456990529",
    icon: Facebook,
    color:
      "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400",
  },
];

const NAV_LINKS = [
  { label: "Inicio",     href: "#inicio"    },
  { label: "Ingeniería", href: "#ingenieria"},
  { label: "Diseño",     href: "#diseno"    },
  { label: "Seguridad",  href: "#seguridad" },
  { label: "Productos",  href: "#productos" },
];

const STATS = [
  { icon: Zap,    value: "500+", label: "Equipos instalados" },
  { icon: Shield, value: "100%", label: "Clientes satisfechos"},
  { icon: Globe,  value: "24/7", label: "Soporte disponible" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Top accent bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* ── Stats strip ── */}
      <div className="bg-white/2 border-b border-white/5">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {STATS.map(({ icon: Icon, value, label }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-2xl font-black text-white tracking-tight">{value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface/40">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <span className="text-2xl font-black tracking-tighter text-white">
                NILTON<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TECHNOLOGY</span>
              </span>
              <p className="text-sm text-on-surface/50 mt-3 leading-relaxed max-w-xs">
                Soporte técnico remoto profesional. Instalamos, optimizamos y protegemos tu equipo sin importar dónde estés.
              </p>
            </div>

            {/* Live status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                Soporte Activo
              </span>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-on-surface/30 mb-6">
              Navegación
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm font-semibold text-on-surface/50 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-4 h-px bg-primary/40 group-hover:w-6 group-hover:bg-primary transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-on-surface/30 mb-6">
              Redes Sociales
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center gap-2.5 px-4 py-3 rounded-xl
                    bg-white/5 border border-white/8 text-on-surface/50
                    transition-all duration-300 group ${color}
                  `}
                >
                  <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-xs font-bold">{label}</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-surface/30 font-medium">
            © {new Date().getFullYear()} NILTONTECHNOLOGY. Todos los derechos reservados.
          </p>
          <p className="text-xs text-on-surface/20 font-medium tracking-widest uppercase">
            Cajamarca, Perú 🇵🇪
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
}