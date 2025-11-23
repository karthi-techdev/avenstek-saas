import React from 'react';
import { motion } from 'framer-motion';
import { Particles } from '../components/Particles';
import { Mail, MessageSquare, MapPin, ArrowRight, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 text-center overflow-hidden min-h-[100vh] flex flex-col justify-center items-center">
        <Particles />
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[600px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
           >
             Contact Us
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-8"
           >
             Let's start a <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9503] to-orange-600">conversation.</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
           >
             Have questions about Flownyx? We're here to help you simplify your workflow and ship faster.
           </motion.p>
        </div>
      </section>

      {/* Content Container */}
      <section className="py-12 md:py-24 bg-[#0A0B0C] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info / Cards */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Whether you have a question about features, trials, pricing, or need a demo, our team is ready to answer all your questions.
                </p>
              </div>

              {/* Cards */}
              <div className="grid gap-6">
                {[
                  { title: 'Chat to Sales', desc: 'Speak to our friendly sales team.', link: 'sales@avenstek.com', icon: MessageSquare },
                  { title: 'Customer Support', desc: 'We’re here to help with any issues.', link: 'support@avenstek.com', icon: Mail },
                  { title: 'Visit our Office', desc: '100 Smith Street, Collingwood VIC 3066 AU', link: 'View on Maps', icon: MapPin },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-[#121417] border border-white/5 hover:border-white/10 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-[#1A1D21] text-primary group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                      <a href="#" className="text-primary font-medium text-sm hover:underline flex items-center gap-1">
                        {item.link} <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#121417] border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send us a message</h3>
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">First name</label>
                    <input type="text" className="w-full bg-[#1A1D21] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Last name</label>
                    <input type="text" className="w-full bg-[#1A1D21] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email address</label>
                  <input type="email" className="w-full bg-[#1A1D21] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea rows={4} className="w-full bg-[#1A1D21] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors resize-none" placeholder="Tell us how we can help..."></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;