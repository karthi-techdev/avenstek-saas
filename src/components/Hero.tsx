import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Particles } from './Particles';
import heroBanner from '../../public/assets/images/hero-home.png'

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotateX = useTransform(scrollY, [0, 500], [10, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <div className="relative min-h-[100vh] flex flex-col items-center pt-28 md:pt-40 overflow-hidden bg-[#0A0B0C]">
      <Particles />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[800px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />
      
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-gray-300 mb-8 hover:bg-white/[0.08] transition-colors cursor-pointer backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>Flownyx 2.0 is now live</span>
          <ChevronRight size={12} className="text-gray-500" />
        </motion.div>

        {/* Hero Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-white mb-6 leading-[1.1] md:leading-[1.05] max-w-4xl mx-auto drop-shadow-2xl"
        >
          Work Moves Faster With 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"> Flownyx</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed font-light px-4"
        >
          Bring your team’s workflow together using smarter boards, cleaner design, and effortless collaboration tools.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-16 md:mb-20 px-6 sm:px-0 justify-center"
        >
          <Link 
            to="/signup"
            className="h-12 px-8 bg-primary text-white font-bold text-sm rounded-lg shadow-[0_0_20px_-5px_rgba(254,149,3,0.5)] hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Start free trial
            <ChevronRight size={16} strokeWidth={3} />
          </Link>
          <button className="h-12 px-8 bg-[#1A1D21] border border-white/10 text-white font-bold text-sm rounded-lg hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2">
            <Play size={16} className="fill-white" />
            Watch demo
          </button>
        </motion.div>

        {/* Dashboard Screenshot Container */}
        <motion.div 
          style={{ y: y1, rotateX, scale }}
          className="w-full max-w-6xl mx-auto perspective-[2000px] group px-0 md:px-2 pb-20"
        >
          <div className="relative transform-style-3d bg-[#0F1113] border border-white/10 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] ring-1 ring-white/5 flex flex-col">
            
            {/* Window Header */}
            <div className="h-8 md:h-12 border-b border-white/5 bg-[#141619] flex items-center px-4 md:px-6 justify-between shrink-0">
               <div className="flex gap-1.5 md:gap-2">
                 <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FF5F57]"></div>
                 <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FEBC2E]"></div>
                 <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#28C840]"></div>
               </div>
               <div className="h-5 md:h-6 w-1/3 max-w-[200px] md:max-w-[300px] bg-black/40 rounded border border-white/5 flex items-center justify-center">
                 <div className="w-12 md:w-20 h-1 bg-white/10 rounded-full"></div>
               </div>
               <div className="w-8 md:w-10"></div> 
            </div>

            {/* Application Screenshot */}
            <div className="relative flex-1 bg-[#0B0D0E] w-full h-full overflow-hidden">
                <img 
                    src={heroBanner}
                    alt="Flownyx Dashboard" 
                    className="w-full h-full object-cover object-left-top"
                />
            </div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};