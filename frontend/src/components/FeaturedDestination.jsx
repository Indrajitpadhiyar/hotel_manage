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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(6px)" },
  visible: { 
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)", 
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } 
  }
};

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <section className='relative overflow-hidden py-24 bg-white'>
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,162,75,0.06),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(15,118,110,0.04),transparent_50%)]" />
      
      {/* Floating decorative shapes */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 h-24 w-24 rounded-full border border-[#C8A24B]/15 hidden lg:block"
      />
      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 h-16 w-16 rounded-2xl border border-[#C8A24B]/10 rotate-45 hidden lg:block"
      />

      <div className='relative flex flex-col items-center px-6 md:px-16 lg:px-24'>

        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <Title 
            title="Featured Destinations" 
            subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences." 
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className='flex flex-wrap items-center justify-center gap-6 mt-20'
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
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate('/rooms');
            scrollTo(0, 0);
          }}
          className='btn-magnetic my-12 cursor-pointer rounded-full px-8 py-3.5 text-sm font-semibold border border-[#C8A24B]/30 text-[#C8A24B] bg-[#C8A24B]/5 hover:bg-[#C8A24B]/10 hover:border-[#C8A24B]/50 hover:text-[#9e7a2e] transition-all duration-500 shadow-sm hover:shadow-[0_8px_30px_-10px_rgba(200,162,75,0.3)]'
        >
          View All Destinations →
        </motion.button>
      </div>
    </section>
  )
}

export default FeaturedDestination