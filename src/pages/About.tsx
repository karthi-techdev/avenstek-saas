import React from 'react';
import { motion } from 'framer-motion';
import { Particles } from '../components/Particles';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & CEO",
    image: "https://placehold.co/400x400/1A1D21/FE9503?text=AR",
    bio: "Former VP of Engineering at TechGiant. Obsessed with developer productivity and coffee."
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    image: "https://placehold.co/400x400/1A1D21/FE9503?text=SC",
    bio: "Product visionary with 10+ years shipping SaaS tools. Believes in simplicity above all."
  },
  {
    name: "Marcus Johnson",
    role: "Lead Architect",
    image: "https://placehold.co/400x400/1A1D21/FE9503?text=MJ",
    bio: "Full-stack wizard. Loves Rust, Wasm, and optimizing render cycles."
  },
  {
    name: "Emily Davis",
    role: "Head of Design",
    image: "https://placehold.co/400x400/1A1D21/FE9503?text=ED",
    bio: "Award-winning designer focusing on intuitive UI/UX and accessibility."
  },
  {
    name: "David Kim",
    role: "Customer Success",
    image: "https://placehold.co/400x400/1A1D21/FE9503?text=DK",
    bio: "Dedicated to ensuring every team gets the most out of Flownyx."
  },
  {
    name: "Lisa Patel",
    role: "Marketing Lead",
    image: "https://placehold.co/400x400/1A1D21/FE9503?text=LP",
    bio: "Storyteller connecting engineering teams with the tools they need."
  }
];

const STATS = [
  { label: "Founded", value: "2023" },
  { label: "Tasks Completed", value: "5M+" },
  { label: "Integrations", value: "50+" },
  { label: "Uptime", value: "99.9%" }
];

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-19 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 text-center overflow-hidden min-h-[100vh] flex flex-col justify-center items-center">
        <Particles />
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[600px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />
        
        <div className="container mx-auto relative z-10 max-w-4xl">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
           >
             About Us
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-white mb-6 leading-[1.1] md:leading-[1.05] max-w-4xl mx-auto drop-shadow-2xl"
           >
             Building the tools we <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9503] to-orange-600">always wanted.</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
           >
             Avenstek was born from frustration with clunky, slow project management software. We're a team of engineers, designers, and problem solvers dedicated to removing friction from your workflow.
           </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-[#0E1012]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0A0B0C]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Meet the team</h2>
            <p className="text-gray-400 text-lg">
              We are a distributed team passionately building the future of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#121417] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Inner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-[#1A1D21] border border-white/10 mb-6 overflow-hidden relative group-hover:scale-105 transition-transform">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    "{member.bio}"
                  </p>
                  
                  <div className="flex gap-4 mt-auto">
                    {[Github, Linkedin, Twitter].map((Icon, i) => (
                       <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                         <Icon size={18} />
                       </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-[#0E1012] relative overflow-hidden">
         <div className="container mx-auto px-6 text-center relative z-10">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Join the mission</h2>
           <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
             We're always looking for talented individuals to help us build the future of software development.
           </p>
           <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
             View Open Roles <ArrowRight size={18} />
           </button>
         </div>
      </section>
    </motion.div>
  );
};

export default About;