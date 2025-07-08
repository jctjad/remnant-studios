import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className={`absolute top-0 left-0 w-full text-white flex items-center justify-between px-8 py-1 z-50 ${isHomePage ? 'bg-transparent' : 'bg-black'}`}>
            
            <Link to="/">
            <img
                src="/remnant-logo.png"
                alt="Remnant Studios"
                className="w-[75px] h-[75px] object-contain"
            />
            </Link>
            
            <nav className="flex gap-6 text-lg font-light" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif"}}>
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/security" className="hover:underline">Security</Link>
                <Link to="/cowabunga" className="hover:underline">Cowabunga</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
        </header>
    );
}