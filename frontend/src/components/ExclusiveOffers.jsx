import React from 'react'
import Title from './Title'
import { exclusivedoffer } from '../data/exclusivedoffer'
import arrow from '../assets/arrow.png'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
}

const ExclusiveOffers = () => {
    return (
        <section className='flex flex-col items-center px-6 pt-20 pb-24 md:px-16 lg:px-24 xl:px-32 bg-white'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row items-center justify-between w-full'
            >
                <Title align='left' title="Exclusive Offers" subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' />
                <button className='group flex items-center gap-2 font-semibold text-[#C8A24B] cursor-pointer max-md:mt-12 transition-all hover:text-[#b8922e]'>View All Offers
                    <img src={arrow} alt='arrow-icon'
                        className='w-4 h-4 group-hover:translate-x-1 transition-all' style={{ filter: 'invert(65%) sepia(54%) saturate(464%) hue-rotate(6deg) brightness(88%) contrast(85%)' }} />
                </button>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full'
            >
                {exclusivedoffer.map((item) => (
                    <motion.div
                        variants={cardVariants}
                        key={item._id}
                        className='group relative flex flex-col items-start justify-between gap-2 overflow-hidden rounded-2xl border border-black/5 bg-cover bg-center px-5 pt-12 text-white shadow-[0_28px_90px_-65px_rgba(2,6,23,0.15)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_90px_-50px_rgba(200,162,75,0.3)]'
                        style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                        <p className='absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#C8A24B] ring-1 ring-[#C8A24B]/30 backdrop-blur shadow-sm'> {item.priceOff}% Off</p>
                        <div className='relative z-10'>
                            <p className='text-2xl font-semibold font-playfair'>{item.title}</p>
                            <p className='mt-1 text-sm text-white/90'>{item.description}</p>
                            <p className='mt-3 text-xs text-white/70'> Expires: {item.expiryData}</p>
                        </div>
                        <button className='relative z-10 mb-6 mt-4 flex items-center gap-2 font-semibold cursor-pointer text-[#C8A24B] group-hover:text-[#e8c96b] transition-colors'>
                            View offer
                            <img className='w-4 h-4 transition-all group-hover:translate-x-1' style={{ filter: 'invert(65%) sepia(54%) saturate(464%) hue-rotate(6deg) brightness(88%) contrast(85%)' }} src={arrow} alt='arrow-icon' />
                        </button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
export default ExclusiveOffers