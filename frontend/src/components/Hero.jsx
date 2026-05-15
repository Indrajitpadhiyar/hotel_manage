import React from "react";
import heroImage from "../assets/heroimage.jpg";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const CITIES = ["Vadodara", "Ahmedabad", "Surat", "Mumbai", "Delhi", "Bangalore"];

const today = () => new Date().toISOString().split("T")[0];
const tomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, rotateX: 10 },
  visible: { opacity: 1, scale: 1, rotateX: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } }
};

/* Floating particles component */
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#C8A24B]/20"
        style={{
          width: Math.random() * 8 + 4,
          height: Math.random() * 8 + 4,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 4 + 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
  </div>
);

const Hero = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    destination: "",
    guests: 1,
    checkIn: today(),
    checkOut: tomorrow(),
  });
  const [touched, setTouched] = React.useState(false);
  const heroRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSearch = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!form.destination) return;

    const params = new URLSearchParams({
      destination: form.destination,
      guests: form.guests,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
    });
    navigate(`/rooms?${params.toString()}`);
  };

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden text-slate-900">
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          src={heroImage}
          alt="Luxury Hotel"
          className="h-full w-full object-cover"
        />
      </motion.div>
      
      {/* Multi-layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/88 to-[#fdfbf7]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,162,75,0.08),transparent_60%)]" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Animated ambient orbs */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#C8A24B]/15 to-[#e8d48a]/10 blur-[120px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#C8A24B]/20 to-[#0F766E]/10 blur-[100px]" 
      />

      {/* Content */}
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 flex min-h-screen items-center px-6 py-20 md:px-16 lg:px-32"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">

          {/* ── Left: Hero Copy ── */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Badge */}
            <motion.span 
              variants={fadeInUp} 
              className="inline-flex items-center gap-2.5 rounded-full bg-[#C8A24B]/8 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A24B] ring-1 ring-[#C8A24B]/25 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8A24B] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C8A24B]" />
              </span>
              Modern stays · curated hotel escapes
            </motion.span>

            <motion.h1 
              variants={fadeInUp} 
              className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-[4.5rem] font-playfair"
            >
              Discover{" "}
              <span className="relative inline-block">
                <span className="text-gradient-gold">luxury</span>
                {/* 3D underline decoration */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#C8A24B] to-[#e8d48a] origin-left shadow-[0_2px_10px_rgba(200,162,75,0.4)]"
                />
              </span>{" "}
              hotel stays with effortless booking.
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Experience premium hotels, tailored offers, and seamless planning
              in one modern destination. Book your next getaway with confidence
              and style.
            </motion.p>

            {/* Stats - 3D Cards */}
            <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 perspective-container">
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 3, scale: 1.03, z: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-black/8 bg-white/70 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#C8A24B]/30 hover:bg-white/90 hover:shadow-[0_20px_60px_-20px_rgba(200,162,75,0.25)] cursor-default"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8A24B] font-semibold">Top Rating</p>
                <p className="mt-2.5 text-4xl font-bold text-slate-900 font-playfair">4.9 / 5</p>
                <p className="mt-2 text-sm text-slate-500">Guest satisfaction across premium hotels.</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-2xl">⭐</span>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: -3, scale: 1.03, z: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-black/8 bg-white/70 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#C8A24B]/30 hover:bg-white/90 hover:shadow-[0_20px_60px_-20px_rgba(200,162,75,0.25)] cursor-default"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8A24B] font-semibold">Best Deals</p>
                <p className="mt-2.5 text-4xl font-bold text-slate-900 font-playfair">Save 25%</p>
                <p className="mt-2 text-sm text-slate-500">Exclusive offers on curated room selections.</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-2xl">💰</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right: Booking Card (3D) ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            whileHover={{ rotateY: -2, rotateX: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            id="booking"
            className="rounded-3xl border border-black/8 bg-white/85 p-8 backdrop-blur-2xl relative overflow-hidden"
            style={{ 
              transformStyle: 'preserve-3d',
              boxShadow: '0 40px 100px -30px rgba(2,6,23,0.12), 0 0 40px -10px rgba(200,162,75,0.08)'
            }}
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 animate-shimmer rounded-3xl pointer-events-none" />
            
            {/* Card header */}
            <div className="relative mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8A24B] font-semibold">Book your stay</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 font-playfair">Search rooms &amp; dates</h2>
              </div>
              <motion.span 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-gradient-to-r from-[#C8A24B]/15 to-[#e8d48a]/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#9e7a2e] ring-1 ring-[#C8A24B]/25 shadow-sm"
              >
                Fast booking
              </motion.span>
            </div>

            <form onSubmit={handleSearch} className="relative space-y-4" noValidate>

              {/* Destination */}
              <div>
                <label htmlFor="destinationInput" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Destination
                </label>
                <div className={`flex items-center gap-2.5 rounded-xl border bg-white/70 px-4 py-3.5 transition-all duration-300
                  ${touched && !form.destination
                    ? 'border-red-400/60 focus-within:border-red-400 shadow-[0_0_0_3px_rgba(239,68,68,0.08)]'
                    : 'border-black/8 focus-within:border-[#C8A24B] focus-within:shadow-[0_0_0_3px_rgba(200,162,75,0.08)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    list="city-list"
                    id="destinationInput"
                    type="text"
                    value={form.destination}
                    onChange={e => set("destination", e.target.value)}
                    placeholder="Choose city…"
                    className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                  <datalist id="city-list">
                    {CITIES.map(c => <option value={c} key={c} />)}
                  </datalist>
                </div>
                {touched && !form.destination && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs text-red-500"
                  >
                    Please enter a destination.
                  </motion.p>
                )}
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="guestsInput" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Guests
                </label>
                <div className="flex items-center gap-2.5 rounded-xl border border-black/8 bg-white/70 px-4 py-3.5 focus-within:border-[#C8A24B] focus-within:shadow-[0_0_0_3px_rgba(200,162,75,0.08)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    id="guestsInput"
                    type="number"
                    min={1}
                    max={8}
                    value={form.guests}
                    onChange={e => set("guests", e.target.value)}
                    placeholder="2 guests"
                    className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="checkIn" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Check in
                  </label>
                  <div className="flex items-center gap-2.5 rounded-xl border border-black/8 bg-white/70 px-4 py-3.5 focus-within:border-[#C8A24B] focus-within:shadow-[0_0_0_3px_rgba(200,162,75,0.08)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <input
                      id="checkIn"
                      type="date"
                      value={form.checkIn}
                      min={today()}
                      onChange={e => set("checkIn", e.target.value)}
                      className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="checkOut" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Check out
                  </label>
                  <div className="flex items-center gap-2.5 rounded-xl border border-black/8 bg-white/70 px-4 py-3.5 focus-within:border-[#C8A24B] focus-within:shadow-[0_0_0_3px_rgba(200,162,75,0.08)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <input
                      id="checkOut"
                      type="date"
                      value={form.checkOut}
                      min={form.checkIn || today()}
                      onChange={e => set("checkOut", e.target.value)}
                      className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-magnetic group relative mt-3 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-5 py-4 text-sm font-bold text-white transition-all duration-500
                  bg-gradient-to-r from-[#C8A24B] via-[#d4b35c] to-[#9e7a2e]
                  shadow-[0_8px_30px_-8px_rgba(200,162,75,0.6)]
                  hover:shadow-[0_16px_50px_-8px_rgba(200,162,75,0.7)]"
              >
                {/* Animated shine sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
                </svg>
                <span>Search availability</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 tracking-wider uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-[#C8A24B]/30 flex items-start justify-center pt-2"
        >
          <motion.div className="h-2 w-1 rounded-full bg-[#C8A24B]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;