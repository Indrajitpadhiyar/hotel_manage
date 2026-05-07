import React from "react";
import menu from "../assets/menu.png"
import { Link } from "react-router-dom"


const HotelCard = ({ room, index }) => {
  return (

    <div className="max-w-sm w-full bg-white rounded-xl overflow-hidden shadow-md">

      <div className="relative">
        <img
          src={room.image[0]}
          alt=""
          className="w-full h-48 object-cover"
        />

        {index % 2 === 0 && (
          <p className="absolute top-3 left-3 bg-white px-3 py-1 text-xs rounded-full">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">{room.name}</p>
          <span>⭐ 4.5</span>
        </div>

        <p className="text-sm text-gray-500">{room.Hotel.address}</p>

        <div className="flex justify-between mt-3">
          <p className="font-bold">${room.pricePerNight}/night</p>
          <button className="border px-3 py-1 rounded hover:bg-gray-100">
            Book Now
          </button>
        </div>
      </div>

    </div>

  )
}
export default HotelCard;