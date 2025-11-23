
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Particles } from '../components/Particles';
import { User, ArrowRight, Clock, Mail, Zap, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';
import { SubscribeModal } from '../components/SubscribeModal';

const Blog: React.FC = () => {
  const featuredPost = BLOG_POSTS[0];
  const gridPosts = BLOG_POSTS.slice(1);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 overflow-x-hidden"
    >
      <section className="relative px-6 py-20 text-center bg-[#0A0B0C] overflow-hidden">
        <Particles />
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[800px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
           <span className="text-primary font-bold uppercase text-xs tracking-widest mb-4 block">Blog</span>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Insights & Updates</h1>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Latest news, engineering deep dives, and product updates from the Flownyx team.
           </p>
        </div>
      </section>

      <section className="pb-24 bg-[#0A0B0C]">
        <div className="container mx-auto px-6">
          
          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group mb-20 bg-[#121417] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors"
          >
            <Link to={`/blog/${featuredPost.id}`} className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
              <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                 <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                 <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                   <span>{featuredPost.tag}</span>
                   <span className="text-gray-600">•</span>
                   <span className="text-gray-400">{featuredPost.date}</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                 <p className="text-gray-400 text-lg mb-8 leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>
                 
                 <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-[#1A1D21] border border-white/10 flex items-center justify-center text-gray-400">
                         <User size={18} />
                       </div>
                       <div>
                          <div className="text-white text-sm font-bold">{featuredPost.author}</div>
                          <div className="text-gray-500 text-xs">{featuredPost.readTime}</div>
                       </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                       <ArrowRight size={20} />
                    </div>
                 </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#121417] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all group flex flex-col"
              >
                <Link to={`/blog/${post.id}`} className="flex flex-col h-full cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                     <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-3">
                       <span className="text-primary">{post.tag}</span>
                       <span className="text-gray-600">•</span>
                       <span className="text-gray-500">{post.date}</span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                     <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
                     
                     <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                           <User size={14} /> {post.author}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                           <Clock size={14} /> {post.readTime}
                        </div>
                     </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Newsletter Section */}
          <div className="mt-24 relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0E1012] group">
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
             {/* Optional noise texture if available, or just a dark overlay */}
             <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
             
             {/* Animated Beam/Glow */}
             <div className="absolute -left-[20%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-beam opacity-0 group-hover:opacity-100 transition-opacity"></div>

             <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col md:flex-row items-center gap-12">
                
                {/* Left: Content */}
                <div className="flex-1 text-center md:text-left">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      Newsletter
                   </div>
                   <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                      Stories from the <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9503] to-orange-500">cutting edge.</span>
                   </h3>
                   <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
                      Join 50,000+ engineers receiving our weekly digest on software architecture, remote work, and product strategy.
                   </p>
                   
                   <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                      <div className="relative flex-1 group/input">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-primary transition-colors" size={18} />
                         <input 
                           type="email"
                           required
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="Enter your email" 
                           className="w-full bg-[#050607] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner" 
                         />
                      </div>
                      <button type="submit" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] whitespace-nowrap">
                         Subscribe
                      </button>
                   </form>
                   <p className="mt-4 text-xs text-gray-600">
                      No spam. Unsubscribe anytime.
                   </p>
                </div>

                {/* Right: Visual Abstract Decoration */}
                <div className="flex-1 w-full max-w-sm relative hidden md:block">
                   <div className="relative aspect-square flex items-center justify-center">
                      {/* Floating Cards */}
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-4 right-4 z-20 bg-[#1A1D21] border border-white/10 p-4 rounded-2xl shadow-2xl w-48"
                      >
                         <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                               <Zap size={16} />
                            </div>
                            <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                         </div>
                         <div className="space-y-2">
                            <div className="h-2 w-full bg-white/10 rounded-full"></div>
                            <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                         </div>
                      </motion.div>

                      <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-10 left-4 z-10 bg-[#1A1D21] border border-white/10 p-4 rounded-2xl shadow-2xl w-48 backdrop-blur-md bg-opacity-80"
                      >
                         <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                               <MessageSquare size={16} />
                            </div>
                            <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                         </div>
                         <div className="h-2 w-full bg-white/10 rounded-full"></div>
                      </motion.div>
                      
                      {/* Background Circle */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
                      <div className="w-full h-full border border-dashed border-white/10 rounded-full animate-spin-slow opacity-30"></div>
                   </div>
                </div>

             </div>
          </div>

        </div>
      </section>
      <SubscribeModal isOpen={isSubscribeModalOpen} onClose={() => setIsSubscribeModalOpen(false)} />
    </motion.div>
  );
};

export default Blog;
