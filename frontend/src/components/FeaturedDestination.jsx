import React from 'react'
import HotelCard from './HotelCard'
import { roomDummyData } from '../data/roomDummyData'
import Title from './Title'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <section className='relative overflow-hidden py-20 bg-white'>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.08),transparent_60%),radial-gradient(circle_at_bottom,rgba(15,118,110,0.05),transparent_55%)]" />
      <div className='relative flex flex-col items-center px-6 md:px-24'>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Title title="Featured Destinations" subTitle="Discover our handpicked selection of exceptional
        properties around the world, offering unparalleled luxury and unforgettable experiences." />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className='flex flex-wrap items-center justify-center gap-5 mt-20'
      >
        {roomDummyData.slice(0, 4).map((room, index) => (
          <motion.div key={room._id} variants={itemVariants}>
            <HotelCard room={room} index={index} />
          </motion.div>
        ))}
      </motion.div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          navigate('/destinations');
          scrollTo(0, 0);
        }}
        className='lux-button-ghost my-10 cursor-pointer shadow-sm border border-[#C8A24B]/30 text-[#C8A24B] hover:bg-[#C8A24B]/10 hover:border-[#C8A24B] hover:text-[#b8922e]'
      >
        View All Destinations
      </motion.button>
      </div>
    </section>
  )
}

export default FeaturedDestination