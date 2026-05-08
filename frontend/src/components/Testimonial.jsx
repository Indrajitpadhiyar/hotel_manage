import React from 'react'
import Title from './Title'
import testimonials from '../data/testimonials'
import StarRating from './StarRating'

const Testimonial = () => {
    return (
        <section className='flex flex-col items-center px-6 pt-20 pb-24 md:px-16 lg:px-24'>
            <Title title="What Our Guests Say" subTitle="Discover why discerning travelers consistently
        choose QuickStay for their exclusive and luxurious accommodations around the world"/>

            <div className="flex flex-wrap items-center  gap-6 mt-20 ">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="group max-w-xs rounded-2xl border border-black/10 bg-white/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                        <div className="flex items-center gap-3">
                            <img className="h-12 w-12 rounded-full ring-2 ring-black/10" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl text-slate-900">{testimonial.name}</p>
                                <p className="text-slate-600">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <StarRating />
                        </div>
                        <p className="mt-4 max-w-90 text-slate-600">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>

        </section>

    )
}

export default Testimonial