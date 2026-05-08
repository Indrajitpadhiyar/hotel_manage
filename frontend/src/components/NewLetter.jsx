import React from 'react'
import arrow from '../assets/arrow.png'
import Title from './Title'

const NewLetter = () => {
  return (
    <div>
      <div className="mx-2 my-24 flex max-w-5xl flex-col items-center rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.25),transparent_55%),linear-gradient(135deg,#05070c,#0b1220)] px-4 py-12 text-white shadow-[0_40px_120px_-70px_rgba(2,6,23,0.9)] md:py-16 lg:mx-auto lg:w-full">
        <Title
          title="Stay Inspired"
          subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."
          font="font-playfair"
        />


        <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
          <input
            type="email"
            className="w-full max-w-80 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[color:var(--color-primary)]"
            placeholder="Enter your email"
          />
          <button className="lux-button-primary group active:scale-[0.98]">
            Subscribe

            <img
              src={arrow}
              alt="arrowicon"
              className="w-3.5 transition group-hover:translate-x-1"
            />
          </button>
        </div>
        <p className="mt-6 text-center text-xs text-white/60">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>




    </div>
  )
}

export default NewLetter