import React from 'react';
import logo from '../assets/logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home',       path: '/' },
  { name: 'Hotels',     path: '/rooms' },
  { name: 'Experience', path: '/Experience' },
  { name: 'About',      path: '/About' },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = React.useState(false);
  const [menuOpen,    setMenuOpen]    = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const solidNav   = scrolled || menuOpen;

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out
          ${solidNav 
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_4px_32px_-8px_rgba(2,6,23,0.08)] border-b border-black/5 py-3' 
            : 'py-5 bg-transparent'}`}
        style={{ willChange: 'transform, background-color' }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-10 lg:px-16">

          {/* ── Brand Logo ── */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group" onClick={() => setMenuOpen(false)}>
            <motion.img
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              src={logo}
              alt="QuickStay Logo"
              className="h-9 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map(({ name, path }, i) => (
              <motion.li 
                key={path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              >
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 group
                    ${isActive
                      ? 'text-[#C8A24B]'
                      : 'text-slate-700 hover:text-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{name}</span>
                      {/* Animated background on hover */}
                      <motion.span
                        className="absolute inset-0 rounded-xl bg-[#C8A24B]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={isActive ? "nav-active" : undefined}
                      />
                      {/* animated underline */}
                      <span
                        className={`absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-all duration-500 ease-out
                          ${isActive
                            ? 'w-[calc(100%-32px)] bg-gradient-to-r from-[#C8A24B] to-[#e8d48a]'
                            : 'w-0 group-hover:w-[calc(100%-32px)] bg-[#C8A24B]/60'
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* ── Desktop Right Controls ── */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dashboard pill */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/owner')}
              className="rounded-full px-5 py-2 text-xs font-semibold border transition-all duration-300 border-black/10 bg-white/50 text-slate-800 hover:bg-black/5 hover:border-black/20 hover:shadow-md"
            >
              Dashboard
            </motion.button>

            {/* Login CTA */}
            <Link to="/login">
              <motion.button 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-magnetic rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 shadow-sm bg-gradient-to-r from-[#C8A24B] to-[#b8922e] text-white hover:shadow-[0_8px_30px_-4px_rgba(200,162,75,0.5)]"
              >
                Sign In
              </motion.button>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-black/5 transition-colors"
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 rounded-full bg-slate-800 origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-0.5 w-6 rounded-full bg-slate-800"
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 rounded-full bg-slate-800 origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Fullscreen Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden pointer-events-auto"
          >
            {/* frosted backdrop */}
            <motion.div 
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(30px)' }}
              className="absolute inset-0 bg-white/90"
            />

            {/* drawer content */}
            <motion.div 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex flex-col h-full pt-24 pb-12 px-8"
            >
              {/* Decorative gold accent orbs */}
              <div className="absolute top-20 right-8 h-40 w-40 rounded-full bg-[#C8A24B]/10 blur-[60px] pointer-events-none animate-float" />
              <div className="absolute bottom-32 left-4 h-32 w-32 rounded-full bg-[#C8A24B]/15 blur-[50px] pointer-events-none animate-float-delayed" />

              <ul className="flex flex-col gap-1 mb-10">
                {NAV_LINKS.map(({ name, path }, i) => (
                  <motion.li 
                    key={path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <NavLink
                      to={path}
                      end={path === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-300
                        ${isActive
                          ? 'bg-gradient-to-r from-[#C8A24B]/15 to-[#C8A24B]/5 text-[#C8A24B] shadow-sm'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:translate-x-2'}`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <motion.span 
                              layoutId="mobile-active"
                              className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#C8A24B] to-[#e8d48a] shrink-0 shadow-[0_0_10px_rgba(200,162,75,0.5)]" 
                            />
                          )}
                          {name}
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-3 mt-auto"
              >
                <button
                  onClick={() => { navigate('/owner'); setMenuOpen(false); }}
                  className="w-full rounded-2xl border border-black/10 bg-white/60 py-3.5 text-sm font-semibold text-slate-800 hover:bg-white/80 transition-all shadow-sm backdrop-blur-sm"
                >
                  Dashboard
                </button>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <button className="w-full rounded-2xl py-3.5 text-sm font-bold text-white transition-all duration-500
                    bg-gradient-to-r from-[#C8A24B] via-[#d4b35c] to-[#9e7a2e]
                    shadow-[0_8px_30px_-8px_rgba(200,162,75,0.5)]
                    hover:shadow-[0_12px_40px_-8px_rgba(200,162,75,0.7)]
                    hover:brightness-110 active:scale-[0.98]"
                  >
                    Sign In
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;