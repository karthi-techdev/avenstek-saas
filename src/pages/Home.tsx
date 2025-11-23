
import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BookDemoModal } from '../components/BookDemoModal';

const Home: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Social Proof Strip */}
      <div className="border-y border-white/5 bg-darker py-10">
         <div className="container mx-auto px-6">
            <p className="text-center text-gray-500 text-sm font-medium mb-6 uppercase tracking-widest">Trusted by engineering teams at</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos (using text for now as SVG assets aren't provided) */}
               {['ACME Corp', 'Globex', 'Soylent', 'Initech', 'Umbrella'].map(name => (
                 <span key={name} className="text-xl font-black text-white">{name}</span>
               ))}
            </div>
         </div>
      </div>

      <Features />
      <Pricing showParticles={false} />
      
      {/* Enhanced CTA Section */}
      <section className="py-32 bg-[#0A0B0C] relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-[#121417] border border-white/5 p-12 md:p-24 text-center group"
          >
            
            {/* Background Gradients & Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                Ready to build the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9503] to-orange-500">future of work?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join 10,000+ engineering teams moving faster with Flownyx. 
                Start your 14-day free trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <button className="h-14 px-8 rounded-[.50rem] bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] flex items-center gap-2">
                  Get Started Now <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="h-14 px-8 rounded-[.50rem] bg-transparent border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-all"
                >
                  Book a Demo
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> No credit card required</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Cancel anytime</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> SSO included</span>
              </div>
            </div>

            {/* Decorative Beams/Border */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </motion.div>
  );
};

export default Home;
