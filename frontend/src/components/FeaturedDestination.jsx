import React from 'react'
import HotelCard from './HotelCard'
import { roomDummyData } from '../data/roomDummyData'
import Title from './Title'

import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <section className='relative overflow-hidden py-20'>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(15,118,110,0.12),transparent_55%)]" />
      <div className='relative flex flex-col items-center px-6 md:px-24'>

      <Title title="Featured Destinations" subTitle="Discover our handpicked selection of exceptional
      propertics around the world, affering unparalleled luxury and unforgettable experiences." />
      <div className='flex flex-wrap items-center justify-center gap-5 mt-20'>
        {roomDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button onClick={() => {
        navigate('/destinations');
        scrollTo(0, 0);
      }}
        className='lux-button-ghost my-10 cursor-pointer'>View All Destinations</button>
      </div>
    </section>
  )
}

export default FeaturedDestination