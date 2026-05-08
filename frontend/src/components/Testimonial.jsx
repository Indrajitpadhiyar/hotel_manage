import React from 'react'
import Title from './Title'
import testimonials from '../data/testimonials'
import StarRating from './StarRating'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Testimonial = () => {
    return (
        <section className='flex flex-col items-center px-6 pt-20 pb-24 md:px-16 lg:px-24 bg-[#fdfbf7]'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Title title="What Our Guests Say" subTitle="Discover why discerning travelers consistently
              choose QuickStay for their exclusive and luxurious accommodations around the world"/>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap justify-center items-stretch gap-6 mt-20 w-full"
            >
                {testimonials.map((testimonial) => (
                    <motion.div variants={itemVariants} key={testimonial.id} className="group max-w-sm flex-1 min-w-[300px] rounded-2xl border border-[#C8A24B]/20 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(200,162,75,0.15)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(200,162,75,0.25)]">
                        <div className="flex items-center gap-4">
                            <img className="h-14 w-14 rounded-full ring-2 ring-[#C8A24B]/30 object-cover" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl font-semibold text-slate-900">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-5">
                            <StarRating />
                        </div>
                        <p className="mt-5 text-slate-700 leading-relaxed italic">"{testimonial.review}"</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Testimonial