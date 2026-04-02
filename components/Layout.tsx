
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, Menu, X, Instagram, ChevronRight, MessageCircle, ArrowRight, Mail, Phone } from 'lucide-react';

const AnnouncementBar: React.FC = () => (
  <div className="bg-[#333] text-[#fcf9f4] py-2 px-4 text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] font-medium uppercase text-center w-full whitespace-nowrap overflow-hidden">
    <div className="animate-pulse">Free Shipping on Orders Above ₹499</div>
  </div>
);

// Define navLinks outside components to share between Header and Footer
const navLinks = [
  { name: 'Shop All', path: '/shop' },
  { name: 'Collections', path: '/collections' },
  { name: 'Our Story', path: '/story' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const WHATSAPP_NUMBER = "919995133495";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    document.body.style.overflow = (isMenuOpen || isSearchOpen) ? 'hidden' : 'auto';
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      localStorage.setItem('thriya_shop_search', searchQuery.trim());
      navigate('/shop');
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <AnnouncementBar />
      <header 
        className={`sticky top-0 z-[60] w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
            : 'bg-[#fcf9f4] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Desktop Navigation - Left */}
            <nav className="hidden lg:flex items-center gap-10 flex-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`text-xs uppercase tracking-[0.25em] font-light transition-all duration-300 relative group ${
                    location.pathname === link.path 
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] bg-[#e2b4b4] transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Logo - Center */}
            <Link 
              to="/" 
              className="absolute left-1/2 transform -translate-x-1/2 flex items-center group"
            >
              <img 
                src="/thriya_logo.png" 
                alt="Thriya Jewels" 
                className={`transition-all duration-500 object-contain ${
                  isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
                } group-hover:opacity-80`}
              />
            </Link>

            {/* Right Side - Navigation & Icons */}
            <div className="flex items-center gap-6 md:gap-8 flex-1 justify-end">
              {/* Desktop Navigation - Right */}
              <nav className="hidden lg:flex items-center gap-10">
                {navLinks.slice(2).map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className={`text-xs uppercase tracking-[0.25em] font-light transition-all duration-300 relative group ${
                      location.pathname === link.path 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-[1px] bg-[#e2b4b4] transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.path ? 'w-full' : ''
                    }`}></span>
                  </Link>
                ))}
              </nav>
              
              {/* Action Icons */}
              <div className="flex items-center gap-4 md:gap-6">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative group" 
                  aria-label="Search"
                >
                  <Search size={20} strokeWidth={1.5} className="transition-transform group-hover:scale-110" />
                </button>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative group"
                  aria-label="Contact on WhatsApp"
                >
                  <MessageCircle size={20} strokeWidth={1.5} className="transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-white transition-all duration-500 flex flex-col items-center justify-start md:justify-center ${
          isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-400 hover:text-black p-3"
        >
          <X size={32} strokeWidth={1} />
        </button>
        
        <div className="w-full max-w-2xl px-6 pt-24 md:pt-0">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#e2b4b4] text-center mb-8 md:mb-12 font-bold">
            Searching for elegance
          </p>
          <form onSubmit={handleSearchSubmit} className="relative group">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Start typing..."
              className="w-full bg-transparent border-b border-gray-100 py-4 md:py-6 text-xl md:text-5xl serif italic text-gray-900 focus:border-[#e2b4b4] transition-colors outline-none placeholder:text-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute right-0 bottom-4 md:bottom-6 text-gray-300 group-hover:text-[#e2b4b4] transition-colors"
            >
              <ArrowRight size={32} strokeWidth={1} />
            </button>
          </form>
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 w-full text-center mb-2">Popular</p>
            {['Rings', 'Necklaces', 'Diamonds', 'Earrings'].map(tag => (
              <button 
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  localStorage.setItem('thriya_shop_search', tag);
                  navigate('/shop');
                  setIsSearchOpen(false);
                }}
                className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 hover:text-black border border-gray-100 px-4 py-2 rounded-full hover:border-gray-300 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-[70] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[360px] bg-white z-[80] shadow-2xl transition-transform duration-500 ease-in-out transform md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full safe-bottom">
          {/* Mobile Menu Header */}
          <div className="p-8 flex justify-between items-center border-b border-gray-100">
            <img 
              src="/thriya_logo.png" 
              alt="Thriya Jewels" 
              className="h-12 w-auto object-contain"
            />
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-gray-400 hover:text-gray-900 p-2 transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="flex-grow py-8 px-8 space-y-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`flex items-center justify-between group py-4 border-b border-gray-50 transition-colors ${
                  location.pathname === link.path ? 'text-gray-900' : 'text-gray-600'
                }`}
              >
                <span className="text-base uppercase tracking-[0.2em] font-light group-hover:text-gray-900 transition-colors">
                  {link.name}
                </span>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-900 transition-colors" />
              </Link>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className="p-8 bg-[#fcf9f4] border-t border-gray-100">
            <div className="flex items-center justify-center gap-8 text-gray-500 mb-6">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 hover:text-gray-900 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} strokeWidth={1.5} />
              </a>
              <a 
                href="https://www.instagram.com/thriya.a?igsh=cHF3NGpiY3F3YXE2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a 
                href="mailto:thriyajewels@gmail.com" 
                className="p-2 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} strokeWidth={1.5} />
              </a>
              <a 
                href="tel:+919995133495" 
                className="p-2 hover:text-gray-900 transition-colors"
                aria-label="Phone"
              >
                <Phone size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fcf9f4] border-t border-gray-100 pt-20 md:pt-28 pb-8 md:pb-12 px-6 md:px-8 mt-auto safe-bottom">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center md:text-left">
            <img 
              src="/thriya_logo.png" 
              alt="Thriya Jewels" 
              className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-6 object-contain"
            />
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed tracking-wide mb-8 max-w-md mx-auto md:mx-0">
              Exclusive jewelry designs that celebrate modern femininity and timeless elegance. Each piece is a testament to exquisite craftsmanship.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-gray-500">
              <a href="https://www.instagram.com/thriya.a?igsh=cHF3NGpiY3F3YXE2" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={22} className="cursor-pointer hover:text-[#e2b4b4] transition-colors" />
              </a>
              <a href={`https://wa.me/9995133495`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={22} className="cursor-pointer hover:text-[#e2b4b4] transition-colors" />
              </a>
              <a href="mailto:thriyajewels@gmail.com" aria-label="Email">
                <Mail size={22} className="cursor-pointer hover:text-[#e2b4b4] transition-colors" />
              </a>
              <a href="tel:+919995133495" aria-label="Phone">
                <Phone size={22} className="cursor-pointer hover:text-[#e2b4b4] transition-colors" />
              </a>
            </div>
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="https://chat.whatsapp.com/HM6bFlBf51WFD54hEXAWn8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#20bd5a] transition-all"
              >
                Join WhatsApp Community
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900 mb-6">Explore</h3>
            <ul className="space-y-3 text-xs tracking-wide text-gray-600">
              <li>
                <Link to="/shop" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#e2b4b4] transition-colors inline-block">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#e2b4b4] transition-colors inline-block">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/story" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#e2b4b4] transition-colors inline-block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#e2b4b4] transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900 mb-6">Support</h3>
            <ul className="space-y-3 text-xs tracking-wide text-gray-600">

              <li>
                <Link to="/faq" className="hover:text-[#e2b4b4] transition-colors inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#e2b4b4] transition-colors inline-block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-gray-500 tracking-[0.15em] uppercase text-center md:text-left order-2 md:order-1">
              © {new Date().getFullYear()} THRIYA JEWELS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6 text-[9px] text-gray-500 tracking-[0.15em] uppercase order-1 md:order-2">
              <Link to="/privacy" className="hover:text-[#e2b4b4] transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-[#e2b4b4] transition-colors">Terms</Link>
            </div>
          </div>
          {/* Made by BookYourSolution */}
          <div className="flex items-center justify-center gap-2 pt-6 mt-6 border-t border-gray-200/50">
            <span className="text-gray-400 text-[8px] tracking-wide">Made by</span>
            <a 
              href="https://bookyoursolution.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img 
                src="/bookyoursolution.png" 
                alt="BookYourSolution" 
                className="h-3 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const WHATSAPP_NUMBER = "919995133495";
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:scale-110 transition-transform"
        >
          <path 
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.77.966-.944 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" 
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};
