import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { title: "Luxury Rooms", desc: "Experience ultimate comfort with our well-designed luxury rooms.", icon: "🏨", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
  { title: "Fine Dining", desc: "Enjoy world-class cuisine prepared by top chefs.", icon: "🍽️", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" },
  { title: "Spa & Wellness", desc: "Relax your body and mind with our premium spa services.", icon: "🧖", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600" },
];

const ExperiencePage = () => {
  return (
    <div className="bg-[color:var(--color-paper)]">
      {/* Hero */}
      <div className="relative flex h-[65vh] items-center justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 15, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/40 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="relative text-center px-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/80 backdrop-blur-md mb-4">CURATED EXPERIENCES</span>
          <h1 className="font-playfair text-4xl font-bold text-white md:text-7xl">Our Experiences</h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">Unforgettable moments crafted for discerning travelers</p>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-10 w-6 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"><div className="h-2 w-1 rounded-full bg-white/60" /></div>
        </motion.div>
      </div>

      {/* Intro */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="mb-4 font-playfair text-3xl md:text-4xl font-bold"><span className="text-gradient-gold">Discover</span> Unforgettable Moments</h2>
        <p className="text-slate-600 leading-relaxed">We provide a blend of luxury, comfort, and memorable experiences to make your stay exceptional.</p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-8 px-6 pb-20 md:grid-cols-3 max-w-7xl mx-auto perspective-container">
        {experiences.map((item, idx) => (
          <motion.div key={idx}
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -10, rotateY: idx === 1 ? 0 : (idx === 0 ? 3 : -3), rotateX: -3 }}
            className="group overflow-hidden rounded-3xl border border-black/8 bg-white/80 backdrop-blur-sm transition-all duration-500 cursor-pointer"
            style={{ transformStyle: 'preserve-3d', boxShadow: '0 20px 60px -20px rgba(2,6,23,0.1)' }}>
            <div className="relative overflow-hidden">
              <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} src={item.img} alt={item.title} className="h-60 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute top-4 left-4 text-3xl">{item.icon}</span>
            </div>
            <div className="p-7" style={{ transform: 'translateZ(15px)' }}>
              <h3 className="mb-2 font-playfair text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              <p className="mt-4 text-sm font-semibold text-[#C8A24B] group-hover:translate-x-1 transition-transform">Learn more →</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="relative overflow-hidden text-center text-white py-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.25),transparent_55%),linear-gradient(135deg,#05070c,#0b1220)]" />
        <div className="relative">
          <h2 className="mb-4 font-playfair text-3xl md:text-4xl font-bold">Ready to Book Your Stay?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">Experience the pinnacle of luxury hospitality</p>
          <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
            className="btn-magnetic lux-button-primary px-8 py-4 text-base shadow-[0_8px_30px_-8px_rgba(200,162,75,0.5)]">Book Now</motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;