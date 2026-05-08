import React from 'react'
import arrow from '../assets/arrow.png'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
        <div className='bg-[#F6F9FC] text-gray-500/80 pt-16 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg" alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='text-sm text-slate-500'>
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                    </p>
                    <div className='flex items-center gap-3 mt-6 text-[#C8A24B]'>
                        {/* Instagram */}
                        <motion.a whileHover={{ scale: 1.1, color: '#9e7a2e' }} href="#" className="w-8 h-8 rounded-full border border-[#C8A24B]/30 flex items-center justify-center hover:bg-[#C8A24B]/10 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
                            </svg>
                        </motion.a>
                        {/* Facebook */}
                        <motion.a whileHover={{ scale: 1.1, color: '#9e7a2e' }} href="#" className="w-8 h-8 rounded-full border border-[#C8A24B]/30 flex items-center justify-center hover:bg-[#C8A24B]/10 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
                            </svg>
                        </motion.a>
                        {/* Twitter */}
                        <motion.a whileHover={{ scale: 1.1, color: '#9e7a2e' }} href="#" className="w-8 h-8 rounded-full border border-[#C8A24B]/30 flex items-center justify-center hover:bg-[#C8A24B]/10 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
                            </svg>
                        </motion.a>
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-slate-900 font-semibold'>COMPANY</p>
                    <ul className='mt-4 flex flex-col gap-3 text-sm text-slate-600'>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Press</a></li>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-slate-900 font-semibold'>SUPPORT</p>
                    <ul className='mt-4 flex flex-col gap-3 text-sm text-slate-600'>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Safety Information</a></li>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Cancellation Options</a></li>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-slate-900 font-semibold'>STAY UPDATED</p>
                    <p className='mt-4 text-sm text-slate-600'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-5 shadow-sm rounded-lg overflow-hidden border border-black/10'>
                        <input type="text" className='bg-white h-11 px-4 outline-none w-full text-sm text-slate-900' placeholder='Your email address' />
                        <motion.button whileHover={{ backgroundColor: '#9e7a2e' }} className='flex items-center justify-center bg-[#C8A24B] h-11 w-12 aspect-square transition-colors'>
                            <img src={arrow} alt="arrowicon" className='w-4' style={{ filter: 'brightness(0) invert(1)' }}/>
                        </motion.button>
                    </div>
                </div>
            </div>
            <hr className='border-black/5 mt-12' />
            <div className='flex flex-col md:flex-row gap-4 items-center justify-between py-6 text-sm text-slate-500'>
                <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
                <ul className='flex items-center gap-6'>
                    <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-[#C8A24B] transition-colors">Sitemap</a></li>
                </ul>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer