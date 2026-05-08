import React from "react";

const experiences = [
  {
    title: "Luxury Rooms",
    desc: "Experience ultimate comfort with our well-designed luxury rooms.",
    img: "https://source.unsplash.com/600x400/?hotel-room",
  },
  {
    title: "Fine Dining",
    desc: "Enjoy world-class cuisine prepared by top chefs.",
    img: "https://source.unsplash.com/600x400/?restaurant-food",
  },
  {
    title: "Spa & Wellness",
    desc: "Relax your body and mind with our premium spa services.",
    img: "https://source.unsplash.com/600x400/?spa",
  },
];

const ExperiencePage = () => {
  return (
    <div className="bg-[color:var(--color-paper)]">
      {/* Hero Section */}
      <div
        className="relative flex h-[60vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?luxury-hotel')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-transparent" />
        <h1 className="relative rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-playfair text-4xl font-semibold text-white backdrop-blur md:text-6xl">
          Our Experiences
        </h1>
      </div>

      {/* Intro */}
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <h2 className="mb-4 font-playfair text-3xl font-semibold">
          Discover Unforgettable Moments
        </h2>
        <p className="text-slate-700">
          We provide a blend of luxury, comfort, and memorable experiences to
          make your stay exceptional.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid gap-8 px-6 pb-16 md:grid-cols-3">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-[var(--shadow-soft)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="p-6">
              <h3 className="mb-2 font-playfair text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.25),transparent_55%),linear-gradient(135deg,#05070c,#0b1220)] text-center text-white py-12">
        <h2 className="mb-4 font-playfair text-3xl font-semibold">
          Ready to Book Your Stay?
        </h2>
        <button className="lux-button-primary px-6 py-3">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ExperiencePage;