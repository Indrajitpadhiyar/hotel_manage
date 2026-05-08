import React from "react";
import search from "../assets/search.webp"
import calender from "../assets/calender.webp"
import heroImage from "../assets/heroimage.jpg";

const Hero = () => {

    const cities = [
        "Vadodara",
        "Ahmedabad",
        "Surat",
        "Mumbai",
        "Delhi",
        "Bangalore"
    ];
    return (
        <section className="relative min-h-screen overflow-hidden text-white">
            <div
                className="absolute inset-0 bg-cover bg-center brightness-90"
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/40 to-cyan-950/55" />

            <div className="relative z-10 flex min-h-screen items-center px-6 py-12 md:px-16 lg:px-32">
                <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div className="space-y-6 lg:pr-10">
                        <span className="inline-flex rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-semibold tracking-[0.15em] text-cyan-200 ring-1 ring-cyan-300/20 backdrop-blur-sm">Modern stays • curated hotel escapes</span>
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-[4.5rem] md:leading-[4.75rem]">
                            Discover luxury hotel stays with effortless booking.
                        </h1>
                        <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                            Experience premium hotels, tailored offers, and seamless planning in one modern destination. Book your next getaway with confidence and style.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_75px_-45px_rgba(15,23,42,0.9)]">
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Top rating</p>
                                <p className="mt-3 text-3xl font-semibold text-white">4.9/5</p>
                                <p className="mt-2 text-sm text-slate-300">Guest satisfaction across premium hotels.</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_75px_-45px_rgba(15,23,42,0.9)]">
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Best deals</p>
                                <p className="mt-3 text-3xl font-semibold text-white">Save up to 25%</p>
                                <p className="mt-2 text-sm text-slate-300">Exclusive offers on curated room selections.</p>
                            </div>
                        </div>
                    </div>

                    <div id="booking" className="rounded-[32px] border border-white/10 bg-slate-950/75 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Book your stay</p>
                                <h2 className="mt-2 text-3xl font-semibold text-white">Search rooms & dates</h2>
                            </div>
                            <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase text-cyan-100">Fast booking</span>
                        </div>
                        <form className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 inline-block text-sm font-medium text-slate-300">Destination</span>
                                    <div className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 focus-within:border-cyan-400">
                                        <img src={calender} alt="destination icon" className="h-4 w-4 flex-shrink-0" />
                                        <input list="destinations" id="destinationInput" type="text" className="min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500" placeholder="Choose city" required />
                                    </div>
                                </label>
                                <label className="block">
                                    <span className="mb-2 inline-block text-sm font-medium text-slate-300">Guests</span>
                                    <input min={1} max={8} id="guests" type="number" className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500" placeholder="2 guests" />
                                </label>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 inline-block text-sm font-medium text-slate-300">Check in</span>
                                    <input id="checkIn" type="date" className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none" />
                                </label>
                                <label className="block">
                                    <span className="mb-2 inline-block text-sm font-medium text-slate-300">Check out</span>
                                    <input id="checkOut" type="date" className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none" />
                                </label>
                            </div>

                            <datalist id="destinations">
                                {cities.map((city, index) => (
                                    <option value={city} key={index} />
                                ))}
                            </datalist>

                            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                                <img src={search} alt="search icon" className="h-5 w-5" />
                                <span>Search availability</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;