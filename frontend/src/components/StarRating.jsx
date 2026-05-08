import React from 'react'
import testimonials from '../data/testimonials'

const StarRating = ({ rating = 4 }) => {
    return (
        <div className="flex items-center gap-1">
            {Array(5).fill(0).map((_, index) => (

                <img
                    key={index}
                    src={rating > index
                        ? "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                        : "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
                    }
                    alt="star"
                    className='w-4.5 h-4.5' />
            ))}
        </div>
    )
}

export default StarRating