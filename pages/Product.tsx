
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FEATURES_LIST } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Particles } from '../components/Particles';
import { BookDemoModal } from '../components/BookDemoModal';
import { Link } from 'react-router-dom';

const Product: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  // Split features into detailed highlight features and a grid for the rest
  const highlightFeatures = FEATURES_LIST.slice(0, 3);
  const gridFeatures = FEATURES_LIST.slice(3);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-19 pb-20 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 text-center overflow-hidden h-[100dvh] flex items-center">
         <Particles />
         {/* Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[800px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />
         
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="container mx-auto max-w-5xl relative z-10"
         >
           <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-8">
             The operating system for <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9503] to-orange-600">high-velocity teams.</span>
           </h1>
           <p className="text-base md:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed font-light px-4">
             Flownyx unifies your entire engineering workflow. From issue tracking to sprint planning and CI/CD integration, everything happens in one place.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="h-12 px-8 bg-white text-black font-bold rounded-[.50rem] hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
               Start Building Free
             </button>
             <Link to="/docs" className="h-12 flex flex-col justify-center items-center px-8 bg-white/5 border border-white/10 text-white font-bold rounded-[.50rem] hover:bg-white/10 transition-colors">
               View Documentation
             </Link>
           </div>
         </motion.div>
      </section>

      {/* Deep Dive Features (Alternating) */}
      <section className="py-20 container mx-auto px-6 space-y-32">
        {highlightFeatures.map((feature, idx) => (
          <motion.div 
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
          >
            {/* Text Side */}
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <feature.icon size={14} />
                  {feature.title}
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{feature.title}</h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">
                 {feature.description} Experience seamless state management, real-time updates, and an interface designed specifically for speed and developer ergonomics.
               </p>
               
               <ul className="space-y-4 mb-8">
                 {['Advanced capability enabled', 'Real-time sync across devices', 'Enterprise-grade security'].map((text, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-300">
                     <CheckCircle2 size={18} className="text-primary" />
                     <span>{text}</span>
                   </li>
                 ))}
               </ul>

               <button className="group flex items-center gap-2 text-white font-bold hover:text-primary transition-colors">
                 Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            {/* Image Side (Image Container) */}
           <div className="flex-1 w-full">
              <div className="relative rounded-2xl bg-[#121417] border border-white/10 p-2 shadow-2xl group overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="bg-[#0E1012] aspect-[4/3] rounded-xl overflow-hidden relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-left-top transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Grid Features */}
      <section className="py-24 bg-[#0E1012] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Everything else you need</h3>
            <p className="text-gray-400">Packed with power-user features to help your team succeed, without the clutter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridFeatures.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#141619] border border-white/5 p-8 rounded-2xl hover:border-white/10 hover:bg-[#1A1D21] transition-all group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Enhanced CTA Section */}
       <section className="py-24 container mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden bg-[#0E1012] border border-white/10 shadow-2xl group">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none opacity-30" />
             
             {/* Grid Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-20 gap-16">
                
                {/* Text Content */}
                <div className="max-w-xl text-center md:text-left flex-1">
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-8 backdrop-blur-md"
                   >
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FE9503]" />
                      <span>Limited time offer</span>
                   </motion.div>
                   
                   <motion.h2 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight"
                   >
                      Start building <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9503] to-orange-500">for free.</span>
                   </motion.h2>
                   
                   <motion.p 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="text-xl text-gray-400 mb-10 leading-relaxed"
                   >
                      Join high-performing teams who have switched to Flownyx. 14-day trial, no credit card required.
                   </motion.p>
                   
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                     className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                   >
                      <button className="h-14 px-8 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center">
                         Get Started Now <ArrowRight size={20} />
                      </button>
                      <button 
                        onClick={() => setIsDemoModalOpen(true)}
                        className="h-14 px-8 bg-transparent text-white border border-white/10 font-bold rounded-xl hover:bg-white/5 transition-colors w-full sm:w-auto justify-center"
                      >
                         Book Demo
                      </button>
                   </motion.div>

                   <motion.div 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.5 }}
                     className="mt-10 flex items-center justify-center md:justify-start gap-6 pt-8 border-t border-white/5"
                   >
                      <div className="flex -space-x-3">
                         {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#121417] bg-gray-700 overflow-hidden">
                               <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                            </div>
                         ))}
                      </div>
                      <div className="text-left">
                          <div className="flex gap-1 mb-1">
                              {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 text-primary fill-current">★</div>)}
                          </div>
                          <p className="text-sm text-gray-400"><strong className="text-white">4.9/5</strong> from 500+ reviews</p>
                      </div>
                   </motion.div>
                </div>

                {/* Right Visual - 3D Card Effect */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative w-full max-w-md hidden md:block"
                >
                   <div className="relative aspect-square">
                      {/* Abstract Card Layer 1 (Back) */}
                      <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-[#1A1D21] border border-white/5 rounded-3xl transform rotate-6 opacity-60"></div>
                      
                      {/* Abstract Card Layer 2 (Middle) */}
                      <div className="absolute top-4 right-4 w-[90%] h-[90%] bg-[#1A1D21] border border-white/5 rounded-3xl transform rotate-3 opacity-80 shadow-2xl"></div>
                      
                      {/* Main Card (Front) */}
                      <div className="absolute top-8 right-8 w-[90%] h-[90%] bg-[#121417] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                         {/* Header */}
                         <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                            <div className="flex gap-2">
                               <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                               <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                               <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-xs text-gray-500 font-mono">dashboard.tsx</div>
                         </div>
                         
                         {/* Content */}
                         <div className="p-6 flex-1 flex flex-col gap-4 relative">
                            {/* Glowing orb in card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-[40px] rounded-full pointer-events-none"></div>
                            
                            <div className="h-4 w-2/3 bg-white/10 rounded-full animate-pulse"></div>
                            <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                            <div className="mt-auto flex gap-3">
                               <div className="h-20 flex-1 bg-white/5 rounded-lg border border-white/5"></div>
                               <div className="h-20 flex-1 bg-white/5 rounded-lg border border-white/5"></div>
                            </div>
                         </div>
                      </div>

                      {/* Floating Element */}
                      <motion.div 
                         animate={{ y: [0, 15, 0] }}
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                         className="absolute -bottom-4 -left-4 bg-[#1A1D21] border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 pr-8 backdrop-blur-xl z-20"
                      >
                         <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 border border-green-500/20">
                            <CheckCircle2 size={24} />
                         </div>
                         <div>
                            <div className="text-white font-bold">All Systems Go</div>
                            <div className="text-gray-500 text-xs mt-1">Ready for launch</div>
                         </div>
                      </motion.div>
                   </div>
                </motion.div>

             </div>
          </div>
       </section>
      
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </motion.div>
  );
};

export default Product;
