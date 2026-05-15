import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomData, roomCommonData } from '../data/roomData'
import location from '../assets/location.webp'
import StarRating from '../components/StarRating'
import { motion } from 'framer-motion'

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const foundRoom = roomData.find(r => r._id === id)
    if (foundRoom) {
      setRoom(foundRoom)
      setMainImage(foundRoom.image)
    }
  }, [id])

  if (!room) return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-[#C8A24B]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#C8A24B]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <p className="text-xl font-bold text-slate-700">Room not found</p>
      </motion.div>
    </div>
  )

  return (
    <div className='px-4 py-28 md:px-16 md:py-32 lg:px-24 xl:px-32 max-w-7xl mx-auto'>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className='flex flex-col md:flex-row items-start md:items-center gap-3'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-playfair font-bold'>
          {room.name} <span className='text-slate-400 text-2xl'>({room.roomType || "Room"})</span>
        </h1>
        <motion.span whileHover={{ scale: 1.1 }} className='rounded-full bg-gradient-to-r from-[#C8A24B] to-[#e8d48a] px-4 py-1.5 text-xs font-bold text-slate-900 shadow-[0_4px_15px_-4px_rgba(200,162,75,0.4)]'>
          🔥 20% OFF
        </motion.span>
      </motion.div>

      {/* Rating & Location */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className='mt-3 space-y-2'>
        <div className='flex items-center gap-2'><StarRating /><span className='text-sm text-slate-400'>200+ reviews</span></div>
        <div className='flex items-center gap-1.5 text-slate-500 text-sm'>
          <img src={location} alt='location' className='w-4 h-4 opacity-60' /><span>{room.address}</span>
        </div>
      </motion.div>

      {/* Images */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
        className='flex flex-col lg:flex-row mt-8 gap-4'>
        <div className='lg:w-1/2 w-full overflow-hidden rounded-3xl'>
          <motion.img key={mainImage} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            src={mainImage} alt='Main Room' className='w-full h-[350px] lg:h-[420px] object-cover shadow-lg' />
        </div>
        <div className='grid grid-cols-2 gap-3 lg:w-1/2 w-full'>
          {room?.images?.length > 0 && room.images.map((image, index) => (
            <motion.img key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}
              onClick={() => setMainImage(image)} src={image} alt='Room'
              className={`w-full h-full min-h-[120px] rounded-2xl object-cover cursor-pointer transition-all duration-300 shadow-md
                ${mainImage === image ? 'ring-2 ring-[#C8A24B] ring-offset-2' : 'hover:shadow-lg'}`} />
          ))}
        </div>
      </motion.div>

      {/* Amenities + Price */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className='flex flex-col md:flex-row md:justify-between mt-12 gap-6'>
        <div>
          <h2 className='text-2xl font-playfair font-bold mb-5'>Experience luxury like never before</h2>
          <div className='flex flex-wrap gap-2.5'>
            {room?.amenities?.length > 0 ? (
              room.amenities.map((item, index) => (
                <motion.span key={index} whileHover={{ scale: 1.05 }}
                  className='flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C8A24B]/5 border border-[#C8A24B]/15 text-sm text-[#9e7a2e] font-medium'>
                  {item}
                </motion.span>
              ))
            ) : (
              <p className='text-slate-400 text-sm'>No amenities available</p>
            )}
          </div>
        </div>
        <div className='text-right'>
          <p className='text-sm text-slate-400 mb-1'>Starting from</p>
          <p className='text-4xl font-bold text-gradient-gold font-playfair'>₹{room.price?.toFixed(2)}</p>
          <p className='text-sm text-slate-400'>per night</p>
        </div>
      </motion.div>

      {/* Booking Form */}
      <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className='flex flex-col md:flex-row items-start md:items-end justify-between rounded-3xl mx-auto mt-14 max-w-6xl p-8 gap-6 border border-black/8 bg-white/80 backdrop-blur-sm'
        style={{ boxShadow: '0 20px 60px -20px rgba(200,162,75,0.12)' }}>
        <div className='flex flex-col md:flex-row gap-5 text-slate-600 flex-1'>
          <div className='flex-1'>
            <label className='text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block'>Check-in</label>
            <input type='date' className='w-full rounded-xl border border-black/8 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#C8A24B] transition-all' required />
          </div>
          <div className='flex-1'>
            <label className='text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block'>Check-out</label>
            <input type='date' className='w-full rounded-xl border border-black/8 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#C8A24B] transition-all' required />
          </div>
          <div className='w-full md:w-28'>
            <label className='text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block'>Guests</label>
            <input type='number' min={1} className='w-full rounded-xl border border-black/8 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#C8A24B] transition-all' required />
          </div>
        </div>
        <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} type='submit'
          className='btn-magnetic rounded-2xl bg-gradient-to-r from-[#C8A24B] to-[#9e7a2e] text-white px-8 py-3.5 font-bold text-sm shadow-[0_8px_30px_-8px_rgba(200,162,75,0.5)] w-full md:w-auto'>
          Check Availability
        </motion.button>
      </motion.form>

      {/* Room specs */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className='mt-16 space-y-5'>
        {roomCommonData.map((spec, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: index * 0.08 }} className='flex items-start gap-4 group'>
            <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8A24B]/8 text-[#C8A24B] group-hover:bg-[#C8A24B]/15 transition-colors'>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <p className='text-base font-semibold text-slate-800'>{spec.Title}</p>
              <p className='text-sm text-slate-500 mt-0.5'>{spec.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Description */}
      <div className='my-14 max-w-3xl border-y border-black/8 py-10 text-slate-600 leading-relaxed'>
        <p>Guests will be allocated on the ground floor according to availability.
          You get a comfortable two bedroom apartment that has a true city feeling.
          The price quoted is for two guests, at the guest slot please mark the number of guests to get the exact price for groups.</p>
      </div>

      {/* Host */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className='flex flex-col items-start gap-4 rounded-3xl border border-black/8 bg-white/80 p-8 backdrop-blur-sm max-w-md'
        style={{ boxShadow: '0 15px 40px -15px rgba(2,6,23,0.06)' }}>
        <div className='flex gap-4 items-center'>
          <div className='h-14 w-14 rounded-2xl bg-gradient-to-br from-[#C8A24B]/20 to-[#C8A24B]/5 flex items-center justify-center text-2xl'>🏨</div>
          <div>
            <p className='text-lg font-bold'>Hosted by {room.hhotel?.name || 'QuickStay'}</p>
            <div className='flex items-center gap-2 mt-1'><StarRating /><span className='text-sm text-slate-400'>200+ reviews</span></div>
          </div>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className='lux-button-primary mt-2 px-6 py-3 shadow-[0_4px_18px_-4px_rgba(200,162,75,0.4)]'>
          Contact Now →
        </motion.button>
      </motion.div>
    </div>
  )
}

export default RoomDetails