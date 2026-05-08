import React from 'react';
import logo from '../assets/logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';

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
  const navSolid   = 'bg-white/80 backdrop-blur-2xl shadow-[0_4px_32px_-8px_rgba(2,6,23,0.18)] border-b border-black/5 py-3';
  const navTransp  = 'py-5';

  return (
    <>
      <nav className={`${navBase} ${solidNav ? navSolid : navTransp}`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-10 lg:px-16">

          {/* ── Brand Logo ── */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="LuxStay Logo"
              className={`h-9 w-auto object-contain transition-all duration-300 ${solidNav ? 'opacity-100' : 'brightness-0 invert opacity-90'}`}
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
                      ? solidNav
                        ? 'text-[#C8A24B]'
                        : 'text-[#C8A24B] drop-shadow-sm'
                      : solidNav
                        ? 'text-slate-700 hover:text-slate-900'
                        : 'text-white/90 hover:text-white'
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
                            : 'w-0 group-hover:w-[calc(100%-24px)] ' + (solidNav ? 'bg-[#C8A24B]' : 'bg-white')
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
              className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all duration-300
                ${solidNav
                  ? 'border-black/12 bg-black/5 text-slate-800 hover:bg-black/10'
                  : 'border-white/25 bg-white/10 text-white hover:bg-white/20'}`}
            >
              Dashboard
            </button>

            {/* Login CTA */}
            <Link to="/login">
              <button className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 shadow-sm
                ${solidNav
                  ? 'bg-[#C8A24B] text-white hover:bg-[#b8922e] shadow-[0_4px_18px_-4px_rgba(200,162,75,0.5)]'
                  : 'bg-white text-slate-900 hover:bg-white/90 shadow-[0_4px_18px_-4px_rgba(0,0,0,0.3)]'}`}
              >
                Sign In
              </button>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-1.5 rounded-md"
          >
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 origin-center
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}
              ${solidNav ? 'bg-slate-800' : 'bg-white'}`} />
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300
              ${menuOpen ? 'opacity-0 scale-x-0' : ''}
              ${solidNav ? 'bg-slate-800' : 'bg-white'}`} />
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 origin-center
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}
              ${solidNav ? 'bg-slate-800' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Fullscreen Drawer ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backdropFilter: menuOpen ? 'blur(24px)' : 'none' }}
      >
        {/* frosted backdrop */}
        <div className="absolute inset-0 bg-white/92" />

        {/* drawer content */}
        <div className={`relative flex flex-col h-full pt-24 pb-12 px-8 transition-all duration-500 ${menuOpen ? 'translate-y-0' : '-translate-y-6'}`}>

          {/* Decorative gold accent */}
          <div className="absolute top-20 right-8 h-32 w-32 rounded-full bg-[#C8A24B]/10 blur-3xl pointer-events-none" />

          <ul className="flex flex-col gap-1 mb-10">
            {NAV_LINKS.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3.5 rounded-2xl text-lg font-semibold transition-all duration-200
                    ${isActive
                      ? 'bg-[#C8A24B]/12 text-[#b8922e]'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`
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
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-auto">
            <button
              onClick={() => { navigate('/owner'); setMenuOpen(false); }}
              className="w-full rounded-2xl border border-black/10 bg-white/60 py-3 text-sm font-semibold text-slate-800 hover:bg-white/80 transition-all"
            >
              Dashboard
            </button>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full rounded-2xl py-3 text-sm font-semibold text-white transition-all duration-300
                bg-gradient-to-r from-[#C8A24B] to-[#9e7a2e]
                shadow-[0_6px_24px_-8px_rgba(200,162,75,0.55)]
                hover:shadow-[0_8px_28px_-8px_rgba(200,162,75,0.7)]
                hover:brightness-105"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;