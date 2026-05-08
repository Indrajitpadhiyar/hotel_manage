import React from "react";
import heroImage from "../assets/heroimage.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CITIES = ["Vadodara", "Ahmedabad", "Surat", "Mumbai", "Delhi", "Bangalore"];

const today = () => new Date().toISOString().split("T")[0];
const tomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    destination: "",
    guests: 1,
    checkIn: today(),
    checkOut: tomorrow(),
  });
  const [touched, setTouched] = React.useState(false);

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSearch = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!form.destination) return; // destination required

    const params = new URLSearchParams({
      destination: form.destination,
      guests: form.guests,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
    });
    navigate(`/rooms?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen overflow-hidden text-slate-900">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay - White & Golden theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-[#fdfbf7]/90" />

      {/* Subtle animated glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#C8A24B]/15 blur-[120px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#C8A24B]/20 blur-[100px]" 
      />

      <div className="relative z-10 flex min-h-screen items-center px-6 py-20 md:px-16 lg:px-32">
        <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">

          {/* ── Left: Hero Copy ── */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Badge */}
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-[#C8A24B]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A24B] ring-1 ring-[#C8A24B]/30 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A24B] animate-pulse" />
              Modern stays · curated hotel escapes
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl md:text-[4.25rem] font-playfair">
              Discover{" "}
              <span className="bg-gradient-to-r from-[#C8A24B] to-[#b8922e] bg-clip-text text-transparent">
                luxury
              </span>{" "}
              hotel stays with effortless booking.
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Experience premium hotels, tailored offers, and seamless planning
              in one modern destination. Book your next getaway with confidence
              and style.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#C8A24B]/40 hover:bg-white/80 hover:shadow-lg">
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8A24B]">Top Rating</p>
                <p className="mt-2.5 text-3xl font-bold text-slate-900">4.9 / 5</p>
                <p className="mt-1.5 text-sm text-slate-500">Guest satisfaction across premium hotels.</p>
              </div>
              <div className="group rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#C8A24B]/40 hover:bg-white/80 hover:shadow-lg">
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8A24B]">Best Deals</p>
                <p className="mt-2.5 text-3xl font-bold text-slate-900">Save 25%</p>
                <p className="mt-1.5 text-sm text-slate-500">Exclusive offers on curated room selections.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Booking Card ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            id="booking"
            className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_40px_100px_-30px_rgba(2,6,23,0.15)] backdrop-blur-2xl"
          >
            {/* Card header */}
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#C8A24B]">Book your stay</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 font-playfair">Search rooms &amp; dates</h2>
              </div>
              <span className="rounded-full bg-[#C8A24B]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9e7a2e] ring-1 ring-[#C8A24B]/30">
                Fast booking
              </span>
            </div>

            <form onSubmit={handleSearch} className="space-y-4" noValidate>

              {/* Destination */}
              <div>
                <label htmlFor="destinationInput" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Destination
                </label>
                <div className={`flex items-center gap-2 rounded-xl border bg-white/60 px-4 py-3 transition-all duration-200
                  ${touched && !form.destination
                    ? 'border-red-500/60 focus-within:border-red-400'
                    : 'border-black/10 focus-within:border-[#C8A24B] shadow-inner'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  <p className="mt-1 text-xs text-red-500">Please enter a destination.</p>
                )}
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="guestsInput" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Guests
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 px-4 py-3 focus-within:border-[#C8A24B] shadow-inner transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 px-4 py-3 focus-within:border-[#C8A24B] shadow-inner transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
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
                  <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 px-4 py-3 focus-within:border-[#C8A24B] shadow-inner transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative mt-2 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-5 py-4 text-sm font-bold text-white transition-all duration-300
                  bg-gradient-to-r from-[#C8A24B] to-[#9e7a2e]
                  shadow-[0_8px_30px_-8px_rgba(200,162,75,0.6)]
                  hover:shadow-[0_12px_40px_-8px_rgba(200,162,75,0.75)]
                  hover:brightness-110"
              >
                {/* shine sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <circle cx="11" cy="11" r="8"/>
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
                </svg>
                <span>Search availability</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;