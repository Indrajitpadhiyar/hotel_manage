import React from 'react'
import Title from './Title'
import { exclusivedoffer } from '../data/exclusivedoffer'
import arrow from '../assets/arrow.png'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40, rotateX: 10 },
  visible: { 
    opacity: 1, scale: 1, y: 0, rotateX: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
  }
}

const ExclusiveOffers = () => {
  return (
    <section className='relative flex flex-col items-center px-6 pt-24 pb-28 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-white via-[#fdfbf7] to-white overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,75,0.04),transparent_60%)]" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#C8A24B]/10 blur-[100px] pointer-events-none" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className='relative flex flex-col md:flex-row items-center justify-between w-full gap-6'
      >
        <Title 
          align='left' 
          title="Exclusive Offers" 
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' 
        />
        <motion.button 
          whileHover={{ scale: 1.05, x: 3 }}
          whileTap={{ scale: 0.95 }}
          className='group flex items-center gap-2.5 font-semibold text-[#C8A24B] cursor-pointer max-md:mt-8 transition-all hover:text-[#b8922e] shrink-0'
        >
          View All Offers
          <motion.img 
            src={arrow} 
            alt='arrow-icon'
            className='w-4 h-4 transition-all' 
            style={{ filter: 'invert(65%) sepia(54%) saturate(464%) hue-rotate(6deg) brightness(88%) contrast(85%)' }} 
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14 w-full perspective-container'
      >
        {exclusivedoffer.map((item, idx) => (
          <motion.div
            variants={cardVariants}
            key={item._id}
            whileHover={{ 
              y: -12, 
              rotateY: idx === 1 ? 0 : (idx === 0 ? 3 : -3),
              rotateX: -3,
              transition: { type: "spring", stiffness: 300, damping: 20 } 
            }}
            className='group relative flex flex-col items-start justify-between gap-2 overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center min-h-[320px] px-6 pt-14 text-white cursor-pointer'
            style={{ 
              backgroundImage: `url(${item.image})`,
              transformStyle: 'preserve-3d',
              boxShadow: '0 28px 90px -55px rgba(2,6,23,0.35)'
            }}
          >
            {/* Multi-gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/30 transition-all duration-700 group-hover:from-black/85 group-hover:via-black/55 group-hover:to-black/35" />
            
            {/* Animated shimmer on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-[#C8A24B]/10 via-transparent to-transparent" />

            {/* Discount badge */}
            <motion.p 
              whileHover={{ scale: 1.1 }}
              className='absolute top-4 left-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-[#C8A24B] ring-1 ring-[#C8A24B]/25 backdrop-blur-md shadow-lg z-10'
              style={{ transform: 'translateZ(30px)' }}
            >
              🔥 {item.priceOff}% Off
            </motion.p>

            {/* Content */}
            <div className='relative z-10 mt-auto' style={{ transform: 'translateZ(20px)' }}>
              <p className='text-2xl font-bold font-playfair leading-tight'>{item.title}</p>
              <p className='mt-2 text-sm text-white/85 leading-relaxed'>{item.description}</p>
              <p className='mt-3 text-xs text-white/60 flex items-center gap-1.5'>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Expires: {item.expiryData}
              </p>
            </div>
            
            <motion.button 
              whileHover={{ x: 5 }}
              className='relative z-10 mb-6 mt-4 flex items-center gap-2 font-semibold cursor-pointer text-[#C8A24B] group-hover:text-[#e8d48a] transition-colors duration-300'
              style={{ transform: 'translateZ(25px)' }}
            >
              View offer
              <img 
                className='w-4 h-4 transition-all group-hover:translate-x-1' 
                style={{ filter: 'invert(65%) sepia(54%) saturate(464%) hue-rotate(6deg) brightness(88%) contrast(85%)' }} 
                src={arrow} 
                alt='arrow-icon' 
              />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ExclusiveOffers