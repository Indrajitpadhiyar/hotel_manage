import React from 'react'
import Title from './Title'
import testimonials from '../data/testimonials'
import StarRating from './StarRating'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(6px)" },
  visible: { 
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } 
  }
}

const Testimonial = () => {
  return (
    <section className='relative flex flex-col items-center px-6 pt-24 pb-28 md:px-16 lg:px-24 bg-gradient-to-b from-[#fdfbf7] to-white overflow-hidden'>
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(200,162,75,0.06),transparent_50%)]" />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-[#C8A24B]/10 blur-[100px] pointer-events-none" 
      />

      {/* Large decorative quote mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.04, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-16 right-16 text-[200px] font-playfair text-[#C8A24B] leading-none hidden lg:block select-none pointer-events-none"
      >
        "
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <Title 
          title="What Our Guests Say" 
          subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world"
        />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap justify-center items-stretch gap-7 mt-20 w-full perspective-container"
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div 
            variants={itemVariants} 
            key={testimonial.id} 
            whileHover={{ 
              y: -10, 
              rotateY: idx === 1 ? 0 : (idx === 0 ? 3 : -3),
              rotateX: -2,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="group max-w-sm flex-1 min-w-[300px] rounded-3xl border border-[#C8A24B]/15 bg-white/90 p-8 backdrop-blur-sm transition-all duration-500 cursor-default"
            style={{ 
              transformStyle: 'preserve-3d',
              boxShadow: '0 10px 40px -15px rgba(200,162,75,0.1)'
            }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#C8A24B]/5 via-transparent to-[#C8A24B]/3 pointer-events-none" />
            
            <div className="relative" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
              <div className="flex items-center gap-4">
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="h-16 w-16 rounded-2xl ring-2 ring-[#C8A24B]/20 object-cover shadow-md" 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                />
                <div>
                  <p className="font-playfair text-xl font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 flex items-center gap-1 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#C8A24B]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {testimonial.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-5">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote icon */}
              <div className="mt-5 relative">
                <span className="absolute -top-2 -left-1 text-3xl text-[#C8A24B]/20 font-playfair">"</span>
                <p className="mt-2 text-slate-600 leading-relaxed italic pl-4">
                  {testimonial.review}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Testimonial