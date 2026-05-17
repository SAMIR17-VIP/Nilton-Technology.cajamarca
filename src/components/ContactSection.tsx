import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare, Send, Instagram, Facebook, Globe,
  Youtube, Music2, Sparkles, CheckCircle2, Phone,
  Clock, Zap, ArrowRight
} from "lucide-react";

// ── WhatsApp message builder ────────────────────────────────────────────────

function buildWhatsAppMessage(nombre: string, software: string, mensaje: string) {
  const lines = [
    "🔧 *NUEVA SOLICITUD — NILTON TECHNOLOGY*",
    "━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    `👤 *Nombre:* ${nombre}`,
    `💻 *Software / Servicio:* ${software}`,
    "",
    `📝 *Detalle del requerimiento:*`,
    `${mensaje}`,
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━",
    "📲 Mensaje enviado desde *niltontechnology.com*",
  ];
  return encodeURIComponent(lines.join("\n"));
}

// ── Data ────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://www.instagram.com/g.nilton17/",                       label: "Instagram", color: "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400"     },
  { icon: Facebook,  href: "https://www.facebook.com/profile.php?id=61583456990529",       label: "Facebook",  color: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"     },
  { icon: Youtube,   href: "https://www.youtube.com/@nilton_oficial",                      label: "YouTube",   color: "hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"       },
  { icon: Music2,    href: "https://www.tiktok.com/@g.nilton17",                           label: "TikTok",    color: "hover:border-white/40 hover:bg-white/10 hover:text-white"             },
  { icon: Globe,     href: "https://niltonquintana.github.io/peru/",                       label: "Web",       color: "hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400"    },
];

const TRUST_ITEMS = [
  { icon: Zap,          text: "Respuesta en minutos"     },
  { icon: CheckCircle2, text: "Soporte 100% garantizado" },
  { icon: Clock,        text: "Disponible todos los días"},
];

// ── Component ────────────────────────────────────────────────────────────────

export function ContactSection() {
  const [formData, setFormData] = useState({ nombre: "", software: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildWhatsAppMessage(formData.nombre, formData.software, formData.mensaje);
    window.open(`https://wa.me/51901120575?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contacto"
      className="
        /* móvil */   py-14 px-4
        /* tablet */  sm:py-20 sm:px-6
        /* desktop */ lg:py-28 lg:px-8
        container mx-auto relative
      "
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] lg:w-[700px] lg:h-[500px] bg-primary/8 blur-[120px] lg:blur-[140px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 relative z-10">

        {/* ══ LEFT: Info ══ */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-7 sm:space-y-9 lg:space-y-10"
        >
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className="h-px w-8 bg-primary/60" />
              <Sparkles className="w-3.5 h-3.5 text-primary/70" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/70">
                Soporte Directo
              </span>
            </div>

            {/* Título: más pequeño en móvil, grande en desktop */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight mb-2">
              Contacto
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase leading-none tracking-tight">
              Oficial
            </h2>
            <div className="mt-5 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* WhatsApp CTA card */}
          <motion.a
            href="https://wa.me/51901120575"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="glass rounded-2xl p-5 sm:p-6 lg:p-7 flex items-center gap-4 sm:gap-6 group hover:border-green-500/40 transition-all duration-300 relative overflow-hidden block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Ícono: más pequeño en móvil */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors duration-300 relative z-10">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 group-hover:text-white transition-colors" />
            </div>

            <div className="relative z-10 flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-on-surface/40 mb-1">
                WhatsApp Oficial
              </p>
              <p className="text-xl sm:text-2xl font-black text-white group-hover:text-green-400 transition-colors truncate">
                +51 901 120 575
              </p>
              <p className="text-xs text-on-surface/40 mt-1">Toca para abrir WhatsApp</p>
            </div>

            <ArrowRight className="w-5 h-5 text-on-surface/20 group-hover:text-green-400 group-hover:translate-x-1 transition-all relative z-10 shrink-0" />
          </motion.a>

          {/* Trust items */}
          <div className="space-y-2.5 sm:space-y-3">
            {TRUST_ITEMS.map(({ icon: Icon, text }, idx) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-on-surface/60">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-on-surface/25 mb-3 sm:mb-4">
              Síguenos en redes
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`
                    w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass border border-white/8 flex items-center justify-center
                    text-on-surface/40 transition-all duration-200 hover:scale-110 active:scale-95 ${color}
                  `}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══ RIGHT: Form ══ */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative">
            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

            <div className="p-6 sm:p-8 md:p-10">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Enviar Solicitud</p>
                  <p className="text-[10px] text-on-surface/40 font-medium">Te contactamos por WhatsApp</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                {/* Nombre */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-white/70 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1 h-3 bg-primary rounded-full inline-block" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/60 focus:bg-primary/5 transition-all duration-200"
                  />
                </div>

                {/* Software */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-white/70 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1 h-3 bg-secondary rounded-full inline-block" />
                    Software / Servicio
                  </label>
                  <input
                    type="text"
                    name="software"
                    required
                    value={formData.software}
                    onChange={handleChange}
                    placeholder="Ej. AutoCAD 2024, Windows 11 Pro..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/60 focus:bg-primary/5 transition-all duration-200"
                  />
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-white/70 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1 h-3 bg-primary/60 rounded-full inline-block" />
                    Mensaje / Detalles
                  </label>
                  <textarea
                    rows={4}
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describe tu problema o requerimiento técnico con detalle..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/60 focus:bg-primary/5 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Preview box */}
                {(formData.nombre || formData.software) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-green-500/8 border border-green-500/20 rounded-xl p-3 sm:p-4 text-xs font-mono text-green-300/70 leading-relaxed"
                  >
                    <p className="text-[9px] font-black uppercase tracking-widest text-green-400/60 mb-2">Vista previa del mensaje WhatsApp:</p>
                    <p>🔧 <span className="text-green-300">NUEVA SOLICITUD — NILTON TECHNOLOGY</span></p>
                    {formData.nombre   && <p>👤 <span className="text-white/60">Nombre:</span> {formData.nombre}</p>}
                    {formData.software && <p>💻 <span className="text-white/60">Software:</span> {formData.software}</p>}
                    {formData.mensaje  && <p>📝 <span className="text-white/60">Detalle:</span> {formData.mensaje.slice(0, 60)}{formData.mensaje.length > 60 ? "…" : ""}</p>}
                  </motion.div>
                )}

                {/* Submit */}
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full py-3.5 sm:py-4 rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center gap-3 text-green-400 font-black text-sm uppercase tracking-widest"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      ¡Abriendo WhatsApp!
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full py-3.5 sm:py-4 text-sm font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 group"
                    >
                      <MessageSquare className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Enviar por WhatsApp
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                  )}
                </AnimatePresence>

                <p className="text-center text-[10px] text-on-surface/20 font-medium tracking-wider">
                  Al enviar, se abrirá WhatsApp con tu mensaje listo ✓
                </p>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}