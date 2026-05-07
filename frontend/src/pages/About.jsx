import React from "react";
import heroimage from '../assets/heroimage.jpg'

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Hotel</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Experience comfort, luxury, and seamless hotel management services.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={heroimage}
          alt="Hotel"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="mb-4">
            Our hotel management system is designed to simplify operations and
            enhance guest experiences. We provide smooth booking, real-time
            availability, and efficient service management.
          </p>
          <p>
            Whether you're traveling for business or leisure, we ensure your stay
            is comfortable, secure, and memorable.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p>Quick and hassle-free room booking system.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p>Check room availability instantly.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>Safe and reliable payment options.</p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="max-w-2xl mx-auto">
          To become a trusted hospitality platform by combining modern
          technology with excellent customer service.
        </p>
      </div>


    </div>
  );
};

export default About;