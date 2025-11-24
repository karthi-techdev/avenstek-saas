
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Twitter, Github, Linkedin, ChevronRight, ArrowRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';
import { SubscribeModal } from './SubscribeModal';
import logo from '../../public/assets/images/logo.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  return (
    <>
      <div className={`fixed z-[100] left-0 right-0 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'top-6 px-4 pointer-events-none' : 'top-0 px-0 pointer-events-auto'}`}>
        <nav 
          className={`
            pointer-events-auto flex items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-xl border border-white/[0.08]
            ${isScrolled 
              ? 'bg-[#121417]/80 rounded-[.70rem] p-2 pl-4 pr-2 shadow-2xl shadow-black/50 w-full max-w-[90vw] md:max-w-fit' 
              : 'bg-[#0A0B0C]/80 rounded-none border-x-0 border-t-0 py-4 px-6 md:px-8 w-full max-w-full'
            }
          `}
        >
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mr-4 shrink-0">
            <div className="flex items-center justify-center shadow-lg shadow-white/10">
              <img src={logo} alt="Avenstek Logo" className="h-5" />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`px-4 py-2 rounded-[.40rem] text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? 'text-white font-bold' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#2A2E33] rounded-[.40rem] -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-1 shrink-0">
             <Link to="https://kanban-board-test-one.vercel.app/login" className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors">
               Log in
             </Link>
             <Link to="https://kanban-board-test-one.vercel.app/login" className="px-6 py-2.5 bg-white text-darker text-sm font-bold rounded-[.40rem] hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg shadow-white/5">
               Get Started
             </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center ml-auto">
            <button 
              className="text-white p-2 hover:bg-white/10 rounded-[.40rem] transition-colors relative z-50" 
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-[#0A0B0C] flex flex-col px-6 pt-28 md:hidden h-screen overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className="flex items-center justify-between text-3xl font-bold text-gray-200 py-4 border-b border-white/5 active:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <ChevronRight size={24} className="text-gray-600" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4 mt-8 pb-10"
              >
                <Link to="/login" className="w-full py-4 text-center text-gray-300 font-bold bg-white/5 rounded-xl border border-white/5 text-lg">
                  Log in
                </Link>
                <Link to="/signup" className="w-full py-4 text-center text-darker font-bold bg-white rounded-xl shadow-lg shadow-white/20 text-lg">
                  Get Started Free
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer: React.FC = () => {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribeModalOpen(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#050607] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden z-0">
          <img src={logo} alt="Avenstek Logo" className="opacity-5 mb-10 w-[95%] mx-auto" />
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
             <img src={logo} alt="Avenstek Logo" className="h-5" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Empowering teams with next-gen project management tools. Build faster, ship smarter, and streamline your entire workflow.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                      <Icon size={18} />
                  </a>
              ))}
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-8 text-base">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {[
                { name: 'Features', link: '/product' }, 
                { name: 'Pricing', link: '/pricing' },
                { name: 'Changelog', link: '/changelog' },
                { name: 'Documentation', link: '/docs' },
                { name: 'Integrations', link: '#' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.link} className="hover:text-primary transition-colors block hover:translate-x-1 duration-300">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-8 text-base">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Careers', link: '/careers' },
                { name: 'Blog', link: '/blog' },
                { name: 'Contact', link: '/contact' },
                { name: 'Partners', link: '#' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.link} className="hover:text-primary transition-colors block hover:translate-x-1 duration-300">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (Card) */}
          <div className="col-span-1 md:col-span-4">
            <div className="bg-[#121417] border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors"></div>
                
                <h4 className="text-white font-bold mb-2 text-lg relative z-10">Stay in the loop</h4>
                <p className="text-gray-400 text-sm mb-6 relative z-10">Subscribe to our newsletter for the latest feature updates and tips.</p>
                
                <form onSubmit={handleSubscribe} className="relative z-10 space-y-3 group/form">
                  <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/form:text-primary transition-colors" size={16} />
                      <input 
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email" 
                        className="w-full bg-[#0A0B0C] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                      />
                  </div>
                  <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    Subscribe <ArrowRight size={16} />
                  </button>
                </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Avenstek Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
      <SubscribeModal isOpen={isSubscribeModalOpen} onClose={() => setIsSubscribeModalOpen(false)} />
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0A0B0C] text-white selection:bg-primary selection:text-darker overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
