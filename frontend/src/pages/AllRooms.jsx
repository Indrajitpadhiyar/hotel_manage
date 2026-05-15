import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { roomData } from '../data/roomData';
import location from '../assets/location.webp';
import { motion } from 'framer-motion';

const AllRooms = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get('destination') || '';
  const guests = parseInt(searchParams.get('guests')) || 1;
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const hasFilter = destination || checkIn || checkOut;

  const filtered = React.useMemo(() => {
    if (!destination) return roomData;
    return roomData.filter(r => r.city?.toLowerCase().includes(destination.toLowerCase()));
  }, [destination]);

  const clearFilters = () => setSearchParams({});

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F0] to-white">
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-24 md:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#C8A24B]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A24B] ring-1 ring-[#C8A24B]/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A24B] animate-pulse" />{filtered.length} rooms
          </span>
          <h1 className="font-playfair text-4xl md:text-[48px] text-slate-900">Hotel Rooms</h1>
          <p className="mt-3 text-sm text-slate-500 md:text-base max-w-xl">Take advantage of our limited-time offers and special packages.</p>
        </motion.div>

        {hasFilter && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-[#C8A24B]/20 bg-[#C8A24B]/5 px-5 py-4">
            <div className="flex flex-wrap gap-2 text-sm text-slate-700">
              {destination && <span className="rounded-full bg-white px-3.5 py-1 shadow-sm font-medium border border-black/5">📍 {destination}</span>}
              {guests > 1 && <span className="rounded-full bg-white px-3.5 py-1 shadow-sm font-medium border border-black/5">👥 {guests} guests</span>}
              {checkIn && <span className="rounded-full bg-white px-3.5 py-1 shadow-sm font-medium border border-black/5">📅 {checkIn}</span>}
              {checkOut && <span className="rounded-full bg-white px-3.5 py-1 shadow-sm font-medium border border-black/5">→ {checkOut}</span>}
            </div>
            <button onClick={clearFilters} className="ml-auto rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all">Clear ✕</button>
          </motion.div>
        )}

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <div className="h-20 w-20 rounded-3xl bg-[#C8A24B]/8 flex items-center justify-center">
                  <svg className="h-10 w-10 text-[#C8A24B]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <p className="text-xl font-bold text-slate-700">No rooms found in "{destination}"</p>
                <button onClick={clearFilters} className="mt-2 rounded-full bg-[#C8A24B] px-6 py-2.5 text-sm font-semibold text-white">View all rooms</button>
              </div>
            ) : (
              filtered.map((room, i) => (
                <motion.div key={room._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.6 }}
                  className="group flex flex-col gap-6 border-b border-slate-100 py-10 last:border-0 md:flex-row md:items-start">
                  <div className="relative overflow-hidden rounded-2xl md:w-1/2">
                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
                      onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }}
                      src={room.image} alt={room.name} className="h-64 w-full cursor-pointer object-cover shadow-lg" />
                  </div>
                  <div className="flex flex-col gap-2 md:w-1/2">
                    <span className="text-xs font-semibold text-[#C8A24B] uppercase tracking-wider">{room.city}</span>
                    <p onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }} className="cursor-pointer font-playfair text-3xl text-slate-800 hover:text-[#C8A24B] transition-colors">{room.name}</p>
                    <div className="flex items-center gap-2"><StarRating /><p className="text-sm text-slate-400">200+ reviews</p></div>
                    <div className="flex items-center gap-1.5 text-sm text-slate-500"><img src={location} alt="loc" className="h-4 w-4 opacity-60" /><span>{room.hotel?.address || 'N/A'}</span></div>
                    {room.amenities && <div className="mt-2 flex flex-wrap gap-2">{room.amenities.map((a, j) => <span key={j} className="rounded-full border border-[#C8A24B]/15 bg-[#C8A24B]/5 px-3 py-1 text-xs text-[#9e7a2e] font-medium">{a}</span>)}</div>}
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <p><span className="text-3xl font-bold text-slate-800">${room.price.toFixed(2)}</span><span className="ml-1 text-sm text-slate-400">/night</span></p>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }}
                        className="rounded-full bg-gradient-to-r from-[#C8A24B] to-[#b8922e] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_18px_-4px_rgba(200,162,75,0.5)]">View room →</motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="w-full shrink-0 rounded-3xl border border-black/8 bg-white/80 p-7 backdrop-blur-sm lg:sticky lg:top-28 lg:w-72 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.06)]">
            <p className="font-playfair text-xl text-slate-900 font-bold">Filters</p>
            <p className="mt-1 mb-5 text-sm text-slate-400">Refine your search.</p>
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">City</label>
                <input type="text" defaultValue={destination} placeholder="e.g. Mumbai"
                  onKeyDown={e => { if (e.key === 'Enter') { const v = e.target.value.trim(); setSearchParams(prev => { const n = new URLSearchParams(prev); if (v) n.set('destination', v); else n.delete('destination'); return n; }); }}}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#C8A24B] transition-all" />
                <p className="mt-1.5 text-[11px] text-slate-400">Press Enter to filter</p>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Price Range</label>
                <div className="flex justify-between text-sm text-slate-500 mb-2"><span>$70</span><span>$1,200</span></div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ delay: 0.5, duration: 0.8 }} className="h-full rounded-full bg-gradient-to-r from-[#C8A24B] to-[#e8d48a]" /></div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;