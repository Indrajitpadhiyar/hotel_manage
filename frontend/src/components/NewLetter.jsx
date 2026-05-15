import React from 'react'
import arrow from '../assets/arrow.png'
import Title from './Title'
import { motion } from 'framer-motion'

const NewLetter = () => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="bg-white px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto my-24 flex max-w-5xl flex-col items-center rounded-[2.5rem] border border-[#C8A24B]/15 px-6 py-20 text-slate-900 relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at top, rgba(200,162,75,0.1), transparent 60%), linear-gradient(135deg, #ffffff, #fdfbf7)',
          boxShadow: '0 40px 100px -30px rgba(200,162,75,0.2), 0 0 60px -20px rgba(200,162,75,0.08)'
        }}
      >
        {/* Animated decorative orbs */}
        <motion.div 
          animate={{ x: [-10, 10, -10], y: [-10, 10, -10], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C8A24B]/8 blur-[80px]" 
        />
        <motion.div 
          animate={{ x: [10, -10, 10], y: [10, -10, 10], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#C8A24B]/8 blur-[80px]" 
        />

        {/* Decorative rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 h-32 w-32 rounded-full border border-[#C8A24B]/8 hidden md:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 left-8 h-20 w-20 rounded-full border border-[#C8A24B]/10 hidden md:block"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C8A24B]/15 to-[#C8A24B]/5 ring-1 ring-[#C8A24B]/20"
          >
            <svg className="w-7 h-7 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </motion.div>

          <Title
            title="Stay Inspired"
            subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."
            font="font-playfair"
          />

          <form onSubmit={handleSubmit} className="mt-10 flex w-full max-w-md flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-black/8 bg-white/70 px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#C8A24B] focus:shadow-[0_0_0_3px_rgba(200,162,75,0.08)] transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter your email address"
                required
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-magnetic group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-8 py-4 text-sm font-bold text-white transition-all duration-500 bg-gradient-to-r from-[#C8A24B] via-[#d4b35c] to-[#9e7a2e] shadow-[0_8px_25px_-8px_rgba(200,162,75,0.5)] hover:shadow-[0_12px_35px_-8px_rgba(200,162,75,0.7)] shrink-0 w-full sm:w-auto"
            >
              {submitted ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  ✓ Subscribed!
                </motion.span>
              ) : (
                <>
                  <span>Subscribe</span>
                  <img
                    src={arrow}
                    alt="arrow icon"
                    className="w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </>
              )}
            </motion.button>
          </form>
          <p className="mt-6 text-center text-xs text-slate-500 max-w-sm">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default NewLetter