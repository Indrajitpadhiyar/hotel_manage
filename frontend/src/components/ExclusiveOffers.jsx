import React from 'react'
import Title from './Title'
import { exclusivedoffer } from '../assets/exclusivedoffer'
import arrow from '../assets/arrow.png'

const ExclusiveOffers = () => {
    return (
        <section className='flex flex-col items-center px-6 pt-20 pb-24 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <Title align='left' title="Exclusive Offers" subTitle='Take advantage of our 
            limited-time offers and special packeages to enhance your stay and create unforgettable
            memories.' />
                <button className='group flex items-center gap-2 font-semibold text-slate-900 cursor-pointer max-md:mt-12'>View All Offers
                    <img src={arrow} alt='arrow-icon'
                        className=' w-4 h-4 group-hover:translate-x-1 transition-all' />
                </button>
            </div>
            <div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {exclusivedoffer.map((item) => (
                    <div
                        key={item._id}
                        className='group relative flex flex-col items-start justify-between gap-2 overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center px-5 pt-12 text-white shadow-[0_28px_90px_-65px_rgba(2,6,23,0.85)] transition duration-300 hover:-translate-y-1'
                        style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent" />
                        <p className='absolute top-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900 ring-1 ring-black/10 backdrop-blur'> {item.priceOff}% Off</p>
                        <div>
                            <p className='relative text-2xl font-semibold font-playfair'>{item.title}</p>
                            <p className='relative mt-1 text-sm text-white/85'>{item.description}</p>
                            <p className='relative mt-3 text-xs text-white/70'> Expires: {item.expiryData}</p>
                        </div>
                        <button className='relative mb-6 mt-4 flex items-center gap-2 font-semibold cursor-pointer'>
                            View offers
                            <img className=' w-4 h-4 invert group-hover:translate-x-1 transition-all' src={arrow} alt='arrow-icon' />
                        </button>
                    </div>
                ))}</div>

        </section>
    )
}

export default ExclusiveOffers