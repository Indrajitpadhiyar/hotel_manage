import React from "react";

const experiences = [
  {
    title: "Luxury Rooms",
    desc: "Experience ultimate comfort with our well-designed luxury rooms.",
    img: "https://source.unsplash.com/600x400/?hotel-room",
  },
   {
    title: "Luxury hotel",
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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?luxury-hotel')",
        }}
      >
        <h1 className="text-4xl md:text-6xl text-white font-bold bg-black/50 px-6 py-3 rounded-xl">
          Our Experiences
        </h1>
      </div>

      {/* Intro */}
      <div className="text-center py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">
          Discover Unforgettable Moments
        </h2>
        <p className="text-gray-600">
          We provide a blend of luxury, comfort, and memorable experiences to
          make your stay exceptional.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 pb-16">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-black text-white text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Book Your Stay?
        </h2>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ExperiencePage;
