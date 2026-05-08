import React from "react";
import heroimage from '../assets/heroimage.jpg'

const About = () => {
  return (
    <div className="bg-[color:var(--color-paper)] text-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 py-18 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.30),transparent_55%),linear-gradient(135deg,#05070c,#0b1220)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mx-auto inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/85 backdrop-blur">
            Heritage hospitality • modern comfort
          </p>
          <h1 className="mt-5 font-playfair text-4xl font-semibold md:text-6xl">About Our Hotel</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Experience comfort, luxury, and seamless hotel management services.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2">
        <img
          src={heroimage}
          alt="Hotel"
          className="rounded-3xl border border-black/10 shadow-[var(--shadow-card)]"
        />

        <div>
          <h2 className="font-playfair text-3xl font-semibold">Who We Are</h2>
          <p className="mt-4 text-slate-700">
            Our hotel management system is designed to simplify operations and
            enhance guest experiences. We provide smooth booking, real-time
            availability, and efficient service management.
          </p>
          <p className="mt-4 text-slate-700">
            Whether you're traveling for business or leisure, we ensure your stay
            is comfortable, secure, and memorable.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-14">
        <h2 className="text-center font-playfair text-3xl font-semibold">
          What We Offer
        </h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="group rounded-2xl border border-black/10 bg-white/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
            <h3 className="font-playfair text-xl font-semibold">Easy Booking</h3>
            <p className="mt-2 text-slate-700">Quick and hassle-free room booking system.</p>
          </div>

          <div className="group rounded-2xl border border-black/10 bg-white/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
            <h3 className="font-playfair text-xl font-semibold">Real-Time Updates</h3>
            <p className="mt-2 text-slate-700">Check room availability instantly.</p>
          </div>

          <div className="group rounded-2xl border border-black/10 bg-white/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
            <h3 className="font-playfair text-xl font-semibold">Secure Payments</h3>
            <p className="mt-2 text-slate-700">Safe and reliable payment options.</p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="border-t border-black/5 px-6 py-14 text-center">
        <h2 className="font-playfair text-3xl font-semibold">Our Vision</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-700">
          To become a trusted hospitality platform by combining modern
          technology with excellent customer service.
        </p>
      </div>


    </div>
  );
};

export default About;