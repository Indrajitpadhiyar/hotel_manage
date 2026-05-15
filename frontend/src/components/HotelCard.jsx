import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HotelCard = ({ room, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      className="perspective-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ 
          rotateY: -4, 
          rotateX: 3, 
          z: 30,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        className="group max-w-sm w-full overflow-hidden rounded-3xl border border-black/8 bg-white/80 backdrop-blur-sm transition-all duration-500"
        style={{ 
          transformStyle: 'preserve-3d',
          boxShadow: isHovered 
            ? '0 30px 60px -15px rgba(200,162,75,0.2), 0 0 20px rgba(200,162,75,0.05)' 
            : '0 18px 55px -30px rgba(2,6,23,0.3)'
        }}
      >
        {/* Image container with overlay */}
        <div className="relative overflow-hidden">
          <motion.img
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            src={room.image[0]}
            alt={room.name}
            className="h-56 w-full object-cover"
          />
          {/* Gradient overlay on hover */}
          <motion.div 
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          />

          {index % 2 === 0 && (
            <motion.p 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute left-3 top-3 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#C8A24B] ring-1 ring-[#C8A24B]/20 backdrop-blur-md shadow-sm"
            >
              ✨ Best Seller
            </motion.p>
          )}

          {/* Quick view button on hover */}
          <motion.div
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-3 right-3"
          >
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur-sm shadow-md">
              Quick View →
            </span>
          </motion.div>
        </div>

        <div className="p-5 space-y-3" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
          <div className="flex justify-between items-start">
            <p className="text-lg font-bold text-slate-900 font-playfair">{room.name}</p>
            <motion.span 
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="flex items-center gap-1 text-sm font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full"
            >
              ⭐ 4.5
            </motion.span>
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-[#C8A24B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            {room?.Hotel?.address}
          </p>

          <div className="flex justify-between items-center pt-2 border-t border-black/5">
            <p className="font-bold text-slate-900">
              <span className="text-sm text-slate-500 font-normal">$</span>
              <span className="text-xl">{room.pricePerNight}</span>
              <span className="text-sm font-medium text-slate-500">/night</span>
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-[#C8A24B] to-[#b8922e] px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_15px_-4px_rgba(200,162,75,0.5)] hover:shadow-[0_8px_25px_-4px_rgba(200,162,75,0.6)] transition-all duration-300"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HotelCard;