import React from 'react'
import arrow from '../assets/arrow.png'
import Title from './Title'
import { motion } from 'framer-motion'

const NewLetter = () => {
  return (
    <div className="bg-white px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto my-24 flex max-w-5xl flex-col items-center rounded-[2.5rem] border border-[#C8A24B]/20 bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.15),transparent_60%),linear-gradient(135deg,#ffffff,#fdfbf7)] px-6 py-16 text-slate-900 shadow-[0_40px_100px_-30px_rgba(200,162,75,0.25)] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#C8A24B]/10 blur-[80px]" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#C8A24B]/10 blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <Title
            title="Stay Inspired"
            subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."
            font="font-playfair"
          />

          <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex w-full max-w-md flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              className="w-full rounded-2xl border border-black/10 bg-white/60 px-5 py-4 text-sm text-slate-900 shadow-inner outline-none placeholder:text-slate-500 focus:border-[#C8A24B] transition-all"
              placeholder="Enter your email address"
              required
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-8 py-4 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#C8A24B] to-[#9e7a2e] shadow-[0_8px_25px_-8px_rgba(200,162,75,0.5)] hover:shadow-[0_12px_30px_-8px_rgba(200,162,75,0.7)] hover:brightness-105 shrink-0 w-full sm:w-auto"
            >
              <span>Subscribe</span>
              <img
                src={arrow}
                alt="arrow icon"
                className="w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
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