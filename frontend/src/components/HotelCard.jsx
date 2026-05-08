import React from "react";
import menu from "../assets/menu.png"
import { Link } from "react-router-dom"


const HotelCard = ({ room, index }) => {
  return (

    <div className="group max-w-sm w-full overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-[var(--shadow-soft)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">

      <div className="relative">
        <img
          src={room.image[0]}
          alt=""
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        {index % 2 === 0 && (
          <p className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold tracking-wide text-slate-900 ring-1 ring-black/10 backdrop-blur">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-slate-900">{room.name}</p>
          <span className="text-sm font-semibold text-slate-800">⭐ 4.5</span>
        </div>

        <p className="mt-1 text-sm text-slate-600">{room?.Hotel?.address}</p>

        <div className="flex justify-between mt-3">
          <p className="font-semibold text-slate-900">
            <span className="text-sm text-slate-600">$</span>
            {room.pricePerNight}
            <span className="text-sm font-medium text-slate-600">/night</span>
          </p>
          <button className="rounded-full border border-black/15 bg-white/50 px-4 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-white/70">
            Book Now
          </button>
        </div>
      </div>

    </div>

  )
}
export default HotelCard;