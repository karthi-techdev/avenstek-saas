import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';

const BlogView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  // Create markup for content to render HTML string safely (simulated)
  const createMarkup = () => {
    return { __html: post.content || '' };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20 bg-[#0A0B0C]"
    >
      {/* Hero Image */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl mb-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-white/5 mb-12 relative shadow-2xl">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              {post.tag}
           </div>
           <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{post.title}</h1>
           
           <div className="flex items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                 <Calendar size={16} />
                 <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                 <Clock size={16} />
                 <span>{post.readTime}</span>
              </div>
           </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col lg:flex-row gap-12">
         
         {/* Sidebar / Socials */}
         <div className="lg:w-48 lg:shrink-0 flex flex-col gap-6 lg:items-end lg:pt-4 order-2 lg:order-1">
            <div className="sticky top-32 flex lg:flex-col gap-4">
              <span className="text-xs font-bold uppercase text-gray-500 mb-2 hidden lg:block text-right">Share</span>
              <button className="w-10 h-10 rounded-full bg-[#121417] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                 <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#121417] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                 <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#121417] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                 <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#121417] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                 <Share2 size={18} />
              </button>
            </div>
         </div>

         {/* Article Content */}
         <div className="flex-1 max-w-3xl order-1 lg:order-2">
            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary prose-strong:text-white prose-blockquote:border-primary prose-blockquote:bg-[#121417] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-li:text-gray-300"
              dangerouslySetInnerHTML={createMarkup()}
            />

            {/* Author Bio Box */}
            <div className="mt-16 p-8 bg-[#121417] border border-white/5 rounded-2xl flex items-center gap-6">
               <div className="w-16 h-16 rounded-full bg-[#1A1D21] shrink-0 border border-white/10"></div>
               <div>
                  <h3 className="text-white font-bold text-lg">{post.author}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{post.role}</p>
                  <p className="text-gray-400 text-sm">
                    Writing about product strategy, remote work, and the future of software development at Flownyx.
                  </p>
               </div>
            </div>
         </div>

         {/* Empty right column for balance or Table of Contents if implemented */}
         <div className="lg:w-48 lg:shrink-0 order-3 hidden lg:block"></div>
      </div>
      
      {/* Read Next */}
      <div className="container mx-auto px-6 max-w-5xl mt-24 pt-12 border-t border-white/5">
         <h3 className="text-2xl font-bold text-white mb-8">Read Next</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(p => (
              <Link key={p.id} to={`/blog/${p.id}`} className="group block">
                 <div className="aspect-video rounded-xl overflow-hidden mb-4 border border-white/5">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">{p.title}</h4>
                 <p className="text-gray-500 text-sm">{p.date} • {p.readTime}</p>
              </Link>
            ))}
         </div>
      </div>

    </motion.div>
  );
};

export default BlogView;
