import React from 'react'
import logo from "../assets/logo.png"
import search from "../assets/search.webp"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import Login from './Login'
import { useNavigate, Link } from 'react-router-dom'



const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/Experience' },
        { name: 'About', path: '/About' },
    ];


    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();



    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/75 shadow-[var(--shadow-soft)] text-slate-900 backdrop-blur-xl py-3 md:py-4 border-b border-black/5" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <img src={logo} alt="Logo" className={`bg-transparent h-9 transition duration-300 ${isScrolled ? "opacity-90" : ""}`} />



            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 font-semibold tracking-wide ${isScrolled ? "text-slate-800" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-[color:var(--color-primary)]" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
                <button className={`rounded-full border px-4 py-1.5 text-sm font-semibold cursor-pointer transition-all ${isScrolled ? "border-black/15 bg-white/50 text-slate-900 hover:bg-white/70" : "border-white/25 bg-white/10 text-white hover:bg-white/15"}`}>
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img src={search} alt='search' className={`${isScrolled ? "" : "invert"} h-7 transition duration-300 opacity-90`} />
                <button onClick={() => navigate("/login")} className={`ml-4 rounded-full px-8 py-2.5 font-semibold transition-all duration-500 ${isScrolled ? "lux-button-primary" : "bg-white text-slate-950 hover:bg-white/90"}`}>
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={menu} alt='Menuicon' className={`${isScrolled ? "" : "invert"} h-4`} />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-[radial-gradient(circle_at_top,rgba(200,162,75,0.18),transparent_55%),linear-gradient(180deg,#ffffff,rgba(250,247,240,0.95))] text-base flex flex-col md:hidden items-center justify-center gap-6 font-semibold text-slate-900 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img src={close} alt='Closeicon' className={"h-7"} />
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                <button className="rounded-full border border-black/15 bg-white/50 px-4 py-1.5 text-sm font-semibold cursor-pointer transition-all hover:bg-white/70">
                    Dashboard
                </button>
                <Link to="/Login">
                    <button onClick={() => navigate("/login")} className="lux-button-primary px-8 py-2.5 transition-all duration-500">
                        Login
                    </button></Link>
            </div>
        </nav>
    );
}


export default Navbar