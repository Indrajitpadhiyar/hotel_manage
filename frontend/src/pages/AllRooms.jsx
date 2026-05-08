import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { roomData } from '../data/roomData';
import location from '../assets/location.webp';

const AllRooms = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  /* ── Read search params from Hero form ── */
  const destination = searchParams.get('destination') || '';
  const guests      = parseInt(searchParams.get('guests')) || 1;
  const checkIn     = searchParams.get('checkIn')  || '';
  const checkOut    = searchParams.get('checkOut') || '';

  const hasFilter = destination || checkIn || checkOut;

  /* ── Filter rooms by city if destination provided ── */
  const filtered = React.useMemo(() => {
    if (!destination) return roomData;
    return roomData.filter(r =>
      r.city?.toLowerCase().includes(destination.toLowerCase())
    );
  }, [destination]);

  const clearFilters = () => setSearchParams({});

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-24 md:px-10 lg:px-16">

        {/* ── Page Heading ── */}
        <div className="mb-4 flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[44px] text-slate-900">
            Hotel Rooms
          </h1>
          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Take advantage of our limited-time offers and special packages to enhance your stay.
          </p>
        </div>

        {/* ── Active Search Banner ── */}
        {hasFilter && (
          <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-[#C8A24B]/25 bg-[#C8A24B]/8 px-5 py-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-[#C8A24B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
            </svg>
            <div className="flex flex-wrap gap-2 text-sm text-slate-700">
              {destination && (
                <span className="rounded-full bg-white px-3 py-1 shadow-sm font-medium">
                  📍 {destination}
                </span>
              )}
              {guests > 1 && (
                <span className="rounded-full bg-white px-3 py-1 shadow-sm font-medium">
                  👥 {guests} guests
                </span>
              )}
              {checkIn && (
                <span className="rounded-full bg-white px-3 py-1 shadow-sm font-medium">
                  📅 {checkIn}
                </span>
              )}
              {checkOut && (
                <span className="rounded-full bg-white px-3 py-1 shadow-sm font-medium">
                  → {checkOut}
                </span>
              )}
            </div>
            <button
              onClick={clearFilters}
              className="ml-auto rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">

          {/* ── Rooms List ── */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-xl font-semibold text-slate-700">No rooms found in "{destination}"</p>
                <p className="text-sm text-slate-500">Try a different destination or clear the filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-2 rounded-full bg-[#C8A24B] px-6 py-2.5 text-sm font-semibold text-white hover:brightness-105 transition"
                >
                  View all rooms
                </button>
              </div>
            ) : (
              filtered.map((room) => (
                <div
                  key={room._id}
                  className="flex flex-col gap-6 border-b border-slate-200 py-10 last:border-0 last:pb-0 md:flex-row md:items-start"
                >
                  {/* Image */}
                  <img
                    onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }}
                    src={room.image}
                    alt={room.name}
                    className="h-60 w-full cursor-pointer rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-[1.02] md:w-1/2"
                  />

                  {/* Content */}
                  <div className="flex flex-col gap-2 md:w-1/2">
                    <p className="text-sm font-medium text-[#C8A24B]">{room.city}</p>

                    <p
                      onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }}
                      className="cursor-pointer font-playfair text-3xl text-slate-800 hover:text-[#C8A24B] transition-colors"
                    >
                      {room.name}
                    </p>

                    <div className="flex items-center gap-2">
                      <StarRating />
                      <p className="text-sm text-slate-500">200+ reviews</p>
                    </div>

                    {/* Location */}
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                      <img src={location} alt="location" className="h-4 w-4" />
                      <span>{room.hotel?.address || 'Address not available'}</span>
                    </div>

                    {/* Amenities */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {room.amenities?.map((item, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4">
                      <p className="text-2xl font-bold text-slate-800">
                        ${room.price.toFixed(2)}
                        <span className="ml-1 text-sm font-normal text-slate-500">/night</span>
                      </p>
                      <button
                        onClick={() => { navigate(`/rooms/${room._id}`); window.scrollTo(0, 0); }}
                        className="rounded-full bg-[#C8A24B] px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_18px_-4px_rgba(200,162,75,0.5)] hover:brightness-105 transition"
                      >
                        View room
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ── Sidebar Filters ── */}
          <aside className="w-full shrink-0 rounded-2xl border border-black/10 bg-white/70 p-6 text-slate-700 shadow-[var(--shadow-soft)] backdrop-blur lg:sticky lg:top-28 lg:mt-0 lg:w-72">
            <p className="font-playfair text-xl text-slate-900">Filters</p>
            <p className="mt-1 mb-4 text-sm text-slate-500">Refine your search.</p>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">City</label>
                <input
                  type="text"
                  defaultValue={destination}
                  placeholder="e.g. Mumbai"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      const v = e.target.value.trim();
                      setSearchParams(prev => {
                        const next = new URLSearchParams(prev);
                        if (v) next.set('destination', v); else next.delete('destination');
                        return next;
                      });
                    }
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-[#C8A24B] transition"
                />
                <p className="mt-1 text-[11px] text-slate-400">Press Enter to filter</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default AllRooms;