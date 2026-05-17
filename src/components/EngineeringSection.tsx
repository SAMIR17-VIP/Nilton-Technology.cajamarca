import { motion } from "motion/react";

const ENG_SOFTWARE = [
  { name: "AutoCAD", icon: "📐", img: `${import.meta.env.BASE_URL}images/software/autocad.png` },
  { name: "Revit", icon: "🏛️", img: `${import.meta.env.BASE_URL}images/software/revit.png` },
  { name: "Civil 3D", icon: "🛣️", img: `${import.meta.env.BASE_URL}images/software/civil3d.png` },
  { name: "ETABS", icon: "🏗️", img: `${import.meta.env.BASE_URL}images/software/etabs.png` },
  { name: "SAP2000", icon: "⚙️", img: `${import.meta.env.BASE_URL}images/software/sap2000.png` },
  { name: "SketchUp", icon: "🏘️", img: `${import.meta.env.BASE_URL}images/software/sketchup.png` },
  { name: "3ds Max", icon: "🎭", img: `${import.meta.env.BASE_URL}images/software/3dsmax.png` },
  { name: "Inventor", icon: "🔩", img: `${import.meta.env.BASE_URL}images/software/inventor.png` },
  { name: "Maya", icon: "🎬", img: `${import.meta.env.BASE_URL}images/software/maya.png` },
];

export function EngineeringSection() {
  return (
    <section id="ingenieria" className="py-24 container mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase">
          Software de Ingeniería
        </h2>
        <p className="text-on-surface/60">Herramientas de alta precisión para arquitectos e ingenieros.</p>
        <div className="mt-4 w-20 h-1 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {ENG_SOFTWARE.map((sw, idx) => (
          <motion.div
            key={sw.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass glass-hover p-4 rounded-xl flex flex-col items-center justify-center gap-3 aspect-square text-center group"
          >
            <div className="w-24 h-24 flex items-center justify-center relative bg-white/5 rounded-2xl p-3 mb-2">
              <img 
                src={sw.img} 
                alt={sw.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <span className="text-5xl hidden">{sw.icon}</span>
            </div>
            <span className="text-sm font-medium text-white">{sw.name}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass glass-hover p-4 rounded-xl flex flex-col items-center justify-center gap-3 aspect-square bg-primary/10 border-primary/30 cursor-pointer"
        >
          <div className="text-2xl text-primary font-bold">+</div>
          <span className="text-sm font-bold text-primary uppercase">Muchos más</span>
        </motion.div>
      </div>
    </section>
  );
}
