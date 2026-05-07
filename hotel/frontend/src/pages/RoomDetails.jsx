import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomData, roomCommonData } from '../assets/roomData'
import location from '../assets/location.webp'
import StarRating from '../components/StarRating'
import Title from '../components/Title'
import arrow from '../assets/arrow.png'

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

  if (!room) return <p className="py-28 text-center">Room not found</p>

  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* Header */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.name} <span>({room.roomType || "Room"})</span>
        </h1>

        <p className='text-xs font-inter py-1 px-3 text-white bg-orange-500 rounded-full'>
          20% OFF
        </p>
      </div>

      {/* Rating */}
      <div className='flex items-center mt-2'>
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/* Location */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={location} alt='location icon' className='w-5 h-5' />
        <span>{room.address}</span>
      </div>

      {/* Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>

        <div className='lg:w-1/2 w-full'>
          <img
            src={mainImage}
            alt='Main Room'
            className='w-full rounded-xl shadow-lg object-cover'
          />
        </div>

        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images?.length > 0 &&
            room.images.map((image, index) => (
              <img
                key={index}
                onClick={() => setMainImage(image)}
                src={image}
                alt='Room'
                className={`w-full rounded-xl shadow-lg object-cover cursor-pointer ${mainImage === image ? 'outline outline-3' : ''
                  }`}
              />
            ))}
        </div>
      </div>

      {/* Amenities + Price */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>

        <div>
          <h1 className='text-2xl font-playfair mb-4'>
            Experience luxury like never before
          </h1>

          <div className='flex flex-wrap gap-3'>
            {room?.amenities?.length > 0 ? (
              room.amenities.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'
                >
                  <p className='text-sm'>{item}</p>
                </div>
              ))
            ) : (
              <p className='text-gray-400 text-sm'>No amenities available</p>
            )}
          </div>
        </div>

        <p className='text-2xl font-bold mt-6 md:mt-0'>
          ₹ {room.price?.toFixed(2)} / night
        </p>
      </div>

      {/* Booking Form */}
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-lg
      p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

        <div className='flex flex-col md:flex-row gap-4 md:gap-10 text-gray-500'>

          <div>
            <label className='font-medium'>Check-in</label>
            <input type='date'
              className='bg-gray-100 border rounded-md py-2 px-3 mt-1'
              required />
          </div>

          <div>
            <label className='font-medium'>Check-out</label>
            <input type='date'
              className='bg-gray-100 border rounded-md py-2 px-3 mt-1'
              required />
          </div>

          <div>
            <label className='font-medium'>Guests</label>
            <input type='number'
              className='max-w-20 border px-3 py-2 mt-1'
              required />
          </div>
        </div>

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-10 py-3 mt-6 md:mt-0'>
          check Available
        </button>
      </form>
      <div></div>

      <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div className='flex items-start gap-2' key={index}>
            <img src={arrow} alt='' className='w-6.5' />
            <div>
              <p className='text-base'>{spec.Title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>Guests will be allocated on the ground floor according to availability.
          You get a comfortable Two bedroom apartment has a true city feeling.
          The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups.
          The Guests will be allocated ground floor according to availability.
          You get the comfortable two bedroom apartment that has a true city feeling.</p>
      </div>

      <div className='flex flex-col  items-start gap-4'>
        <div className='flex gap-4'>
          <img src='' alt='' className='h-14 w-14 md:h-18 md:w-18 rounded-full' />
          <div>
            <p className='text-lg md:text-xl'>Hosted by {room.hhotel.name}</p>
            <div className='flex items-center mt-1'>
              <StarRating />
              <p className='ml-2'>200+review</p>

            </div>
          </div>
        </div>
      <button className='px-6 py-5 mt-4 rounded text-white n-primary hover:bg-primary-dull transition-all cursor-pointer'>
        contant Now
      </button>
      </div> 
    </div>
  )
}

export default RoomDetails