import React from "react";
import heroimage from '../assets/heroimage.jpg';
import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Luxury Rooms" },
  { number: "50+", label: "Cities Worldwide" },
  { number: "98%", label: "Guest Satisfaction" },
  { number: "24/7", label: "Concierge Service" },
];

const features = [
  { title: "Easy Booking", desc: "Quick and hassle-free room booking system.", icon: "📱" },
  { title: "Real-Time Updates", desc: "Check room availability instantly.", icon: "⚡" },
  { title: "Secure Payments", desc: "Safe and reliable payment options.", icon: "🔒" },
];

const About = () => {
  return (
    <div className="bg-[color:var(--color-paper)] text-slate-900">
      {/* Hero */}
      <div className="relative overflow-hidden px-6 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.30),transparent_55%),linear-gradient(135deg,#05070c,#0b1220)]" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }} className="relative mx-auto max-w-4xl">
          <span className="mx-auto inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/80 backdrop-blur mb-5">
            Heritage hospitality · modern comfort
          </span>
          <h1 className="font-playfair text-4xl font-bold md:text-6xl lg:text-7xl">About <span className="text-gradient-gold">QuickStay</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70 leading-relaxed">Experience comfort, luxury, and seamless hotel management services.</p>
        </motion.div>

        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full bg-[#C8A24B]/20"
            style={{ width: 6 + i * 2, height: 6 + i * 2, left: `${20 + i * 20}%`, top: `${30 + i * 15}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="relative -mt-10 mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl border border-black/8 bg-white/90 backdrop-blur-xl p-6 md:p-8"
          style={{ boxShadow: '0 30px 80px -20px rgba(200,162,75,0.15)' }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold font-playfair">{s.number}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* About Content */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative perspective-container">
          <motion.img whileHover={{ rotateY: -3, rotateX: 2, scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }}
            src={heroimage} alt="Hotel" className="rounded-3xl border border-black/8 w-full object-cover"
            style={{ transformStyle: 'preserve-3d', boxShadow: '0 30px 80px -20px rgba(2,6,23,0.2)' }} />
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border-2 border-[#C8A24B]/20 -z-10 hidden md:block" />
          <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full border-2 border-[#C8A24B]/15 -z-10 hidden md:block" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A24B]">Our Story</span>
          <h2 className="mt-3 font-playfair text-3xl md:text-4xl font-bold">Who We Are</h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-[#C8A24B] to-[#e8d48a]" />
          <p className="mt-6 text-slate-600 leading-relaxed">Our hotel management system is designed to simplify operations and enhance guest experiences. We provide smooth booking, real-time availability, and efficient service management.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Whether you're traveling for business or leisure, we ensure your stay is comfortable, secure, and memorable.</p>
          <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
            className="mt-8 btn-magnetic rounded-full bg-gradient-to-r from-[#C8A24B] to-[#b8922e] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_-8px_rgba(200,162,75,0.5)]">
            Learn More →
          </motion.button>
        </motion.div>
      </div>

      {/* Features */}
      <div className="px-6 py-20 bg-gradient-to-b from-white to-[#fdfbf7]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">What We <span className="text-gradient-gold">Offer</span></h2>
          <p className="mt-3 text-slate-500 max-w-lg mx-auto">Premium services crafted for the modern traveler</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 perspective-container">
          {features.map((f, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7 }}
              whileHover={{ y: -8, rotateY: idx === 1 ? 0 : (idx === 0 ? 3 : -3) }}
              className="group rounded-3xl border border-black/8 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500"
              style={{ transformStyle: 'preserve-3d', boxShadow: '0 18px 55px -30px rgba(2,6,23,0.12)' }}>
              <span className="text-4xl mb-4 block">{f.icon}</span>
              <h3 className="font-playfair text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.desc}</p>
              <div className="mt-4 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-[#C8A24B] to-[#e8d48a] rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="px-6 py-20 text-center bg-white">
        <div className="mx-auto max-w-3xl">
          <span className="text-4xl mb-4 block">🌟</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">Our Vision</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#C8A24B] to-[#e8d48a] mx-auto" />
          <p className="mx-auto mt-6 max-w-2xl text-slate-600 leading-relaxed text-lg">To become a trusted hospitality platform by combining modern technology with excellent customer service.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;