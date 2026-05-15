import React from 'react'
import arrow from '../assets/arrow.png'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const footerLinks = {
  company: [
    { name: 'About', href: '/About' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Safety Information', href: '#' },
    { name: 'Cancellation Options', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Accessibility', href: '#' },
  ]
};

const socialLinks = [
  { 
    name: 'Instagram',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
      </svg>
    )
  },
  {
    name: 'Twitter',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
      </svg>
    )
  }
];

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A24B]/30 to-transparent" />
      
      <div className='bg-gradient-to-b from-[#F8F6F0] to-[#F1EDE3] text-gray-500/80 pt-20 px-6 md:px-16 lg:px-24 xl:px-32'>
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,162,75,0.04),transparent_50%)] pointer-events-none" />
        
        <div className='relative flex flex-wrap justify-between gap-12 md:gap-8'>
          {/* Brand */}
          <div className='max-w-80'>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={logo} 
              alt="QuickStay logo" 
              className='mb-5 h-10 w-auto object-contain' 
            />
            <p className='text-sm text-slate-500 leading-relaxed'>
              Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
            </p>
            <div className='flex items-center gap-3 mt-6'>
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name}
                  whileHover={{ scale: 1.15, y: -2 }} 
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  aria-label={social.name}
                  className="w-9 h-9 rounded-xl border border-[#C8A24B]/20 flex items-center justify-center text-[#C8A24B] hover:bg-[#C8A24B]/10 hover:border-[#C8A24B]/40 hover:shadow-[0_4px_15px_-4px_rgba(200,162,75,0.3)] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <p className='font-playfair text-lg text-slate-900 font-semibold'>COMPANY</p>
            <ul className='mt-4 flex flex-col gap-3 text-sm text-slate-600'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="hover:text-[#C8A24B] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <p className='font-playfair text-lg text-slate-900 font-semibold'>SUPPORT</p>
            <ul className='mt-4 flex flex-col gap-3 text-sm text-slate-600'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-[#C8A24B] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className='max-w-80'>
            <p className='font-playfair text-lg text-slate-900 font-semibold'>STAY UPDATED</p>
            <p className='mt-4 text-sm text-slate-500 leading-relaxed'>
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className='flex items-center mt-5 rounded-xl overflow-hidden border border-black/8 bg-white/80 shadow-sm focus-within:border-[#C8A24B] focus-within:shadow-[0_0_0_3px_rgba(200,162,75,0.08)] transition-all duration-300'>
              <input 
                type="email" 
                className='bg-transparent h-11 px-4 outline-none w-full text-sm text-slate-900 placeholder:text-slate-400' 
                placeholder='Your email address' 
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center justify-center bg-gradient-to-r from-[#C8A24B] to-[#b8922e] h-11 w-12 aspect-square transition-all duration-300 hover:brightness-110 shrink-0'
              >
                <img src={arrow} alt="Submit" className='w-4' style={{ filter: 'brightness(0) invert(1)' }}/>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mt-14" />
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between py-6 text-sm text-slate-500'>
          <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
          <ul className='flex items-center gap-6'>
            <li><a href="#" className="hover:text-[#C8A24B] transition-colors duration-300">Privacy</a></li>
            <li><a href="#" className="hover:text-[#C8A24B] transition-colors duration-300">Terms</a></li>
            <li><a href="#" className="hover:text-[#C8A24B] transition-colors duration-300">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer