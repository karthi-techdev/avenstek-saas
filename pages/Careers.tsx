import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Particles } from '../components/Particles';
import { ArrowRight, Globe, Heart, Zap, Clock, Shield, Smile } from 'lucide-react';
import { JOB_OPENINGS } from '../constants';

const BENEFITS = [
  { icon: Globe, title: "Remote First", desc: "Work from anywhere in the world. We trust you to do your best work." },
  { icon: Zap, title: "High Performance", desc: "We equip you with the latest M3 MacBooks and top-tier software." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance and monthly wellness stipend." },
  { icon: Clock, title: "Flexible Hours", desc: "Set your own schedule. We care about output, not hours tracked." },
  { icon: Shield, title: "Job Security", desc: "Competitive salary, significant equity, and 401(k) matching." },
  { icon: Smile, title: "Annual Retreats", desc: "We fly the whole team out once a year to bond and celebrate." },
];

const Careers: React.FC = () => {
  // Group jobs by department
  const departments = Array.from(new Set(JOB_OPENINGS.map(job => job.department)));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 text-center overflow-hidden min-h-[60vh] flex flex-col justify-center items-center">
        <Particles />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[600px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
           >
             Careers at Flownyx
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-8"
           >
             Join the <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9503] to-orange-600">future of work.</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
           >
             We're looking for ambitious people who want to build the next generation of project management tools.
           </motion.p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-[#0E1012]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#141619] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1A1D21] rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-[#0A0B0C]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400">Come join our fast-growing team.</p>
          </div>

          <div className="space-y-12">
            {departments.map((dept, idx) => {
              const rolesInDept = JOB_OPENINGS.filter(job => job.department === dept);
              return (
                <div key={idx}>
                  <h3 className="text-xl font-bold text-gray-500 mb-6 uppercase tracking-wider">{dept}</h3>
                  <div className="space-y-4">
                    {rolesInDept.map((role, rIdx) => (
                      <motion.div
                        key={role.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: rIdx * 0.1 }}
                      >
                        <Link 
                          to={`/careers/${role.id}`}
                          className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#121417] border border-white/5 rounded-xl hover:border-primary/30 hover:bg-[#1A1D21] transition-all cursor-pointer block"
                        >
                          <div>
                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{role.title}</h4>
                            <div className="flex gap-4 text-sm text-gray-500 mt-1">
                              <span>{role.location}</span>
                              <span>•</span>
                              <span>{role.type}</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                             <ArrowRight className="text-primary" />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-20 text-center">
             <p className="text-gray-400 mb-6">Don't see your role? We're always hiring talented people.</p>
             <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold transition-all">
                Email General Application
             </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;
