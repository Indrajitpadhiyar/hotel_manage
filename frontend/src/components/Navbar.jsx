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
  const navBase    = 'fixed top-0 left-0 w-full z-50 transition-all duration-500';
  const navSolid   = 'bg-white/90 backdrop-blur-2xl shadow-[0_4px_32px_-8px_rgba(2,6,23,0.08)] border-b border-black/5 py-3';
  const navTransp  = 'py-5 bg-transparent';

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${navBase} ${solidNav ? navSolid : navTransp}`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-10 lg:px-16">

          {/* ── Brand Logo ── */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="LuxStay Logo"
              className={`h-9 w-auto object-contain transition-all duration-300 opacity-100`}
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 text-sm font-semibold tracking-wide rounded-lg transition-colors duration-200 group
                    ${isActive
                      ? 'text-[#C8A24B]'
                      : 'text-slate-700 hover:text-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {name}
                      {/* animated underline */}
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-300
                          ${isActive
                            ? 'w-[calc(100%-24px)] bg-[#C8A24B]'
                            : 'w-0 group-hover:w-[calc(100%-24px)] bg-[#C8A24B]'
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── Desktop Right Controls ── */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dashboard pill */}
            <button
              onClick={() => navigate('/owner')}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all duration-300 border-black/10 bg-white/50 text-slate-800 hover:bg-black/5 hover:border-black/20`}
            >
              Dashboard
            </button>

            {/* Login CTA */}
            <Link to="/login">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 shadow-sm bg-[#C8A24B] text-white hover:bg-[#b8922e] shadow-[0_4px_18px_-4px_rgba(200,162,75,0.4)]`}
              >
                Sign In
              </motion.button>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-1.5 rounded-md"
          >
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 origin-center bg-slate-800
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 bg-slate-800
              ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 origin-center bg-slate-800
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
            className={`fixed inset-0 z-40 md:hidden pointer-events-auto backdrop-blur-xl`}
          >
            {/* frosted backdrop */}
            <div className="absolute inset-0 bg-white/95" />

            {/* drawer content */}
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className={`relative flex flex-col h-full pt-24 pb-12 px-8`}
            >

              {/* Decorative gold accent */}
              <div className="absolute top-20 right-8 h-32 w-32 rounded-full bg-[#C8A24B]/15 blur-3xl pointer-events-none" />

              <ul className="flex flex-col gap-1 mb-10">
                {NAV_LINKS.map(({ name, path }, i) => (
                  <motion.li 
                    key={path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      to={path}
                      end={path === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3.5 rounded-2xl text-lg font-semibold transition-all duration-200
                        ${isActive
                          ? 'bg-[#C8A24B]/10 text-[#C8A24B]'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-[#C8A24B] shrink-0" />
                          )}
                          {name}
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 mt-auto">
                <button
                  onClick={() => { navigate('/owner'); setMenuOpen(false); }}
                  className="w-full rounded-2xl border border-black/10 bg-white/60 py-3 text-sm font-semibold text-slate-800 hover:bg-white/80 transition-all shadow-sm"
                >
                  Dashboard
                </button>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <button className="w-full rounded-2xl py-3 text-sm font-semibold text-white transition-all duration-300
                    bg-gradient-to-r from-[#C8A24B] to-[#9e7a2e]
                    shadow-[0_6px_24px_-8px_rgba(200,162,75,0.4)]
                    hover:shadow-[0_8px_28px_-8px_rgba(200,162,75,0.6)]
                    hover:brightness-105"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;