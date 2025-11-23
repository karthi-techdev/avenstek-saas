import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Briefcase, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { JOB_OPENINGS } from '../constants';

const JobView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = JOB_OPENINGS.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Job not found</h1>
        <Link to="/careers" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20 bg-[#0A0B0C]"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/careers" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Back to Careers
        </Link>

        {/* Header Card */}
        <div className="bg-[#121417] border border-white/5 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-4">{job.department}</div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{job.title}</h1>
            
            <div className="flex flex-wrap gap-4 md:gap-8 mb-8 text-gray-300">
               <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <MapPin size={18} className="text-gray-400" />
                  <span>{job.location}</span>
               </div>
               <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <Briefcase size={18} className="text-gray-400" />
                  <span>{job.type}</span>
               </div>
               <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <DollarSign size={18} className="text-gray-400" />
                  <span>Competitive Pay & Equity</span>
               </div>
            </div>

            <button className="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-primary/20">
               Apply for this Role
            </button>
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
             <section>
                <h3 className="text-2xl font-bold text-white mb-4">About the Role</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                   {job.description}
                </p>
             </section>

             <section>
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Do</h3>
                <ul className="space-y-4">
                   {job.responsibilities.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                        <span>{item}</span>
                     </li>
                   ))}
                </ul>
             </section>

             <section>
                <h3 className="text-2xl font-bold text-white mb-6">What We're Looking For</h3>
                <ul className="space-y-4">
                   {job.requirements.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                        <span>{item}</span>
                     </li>
                   ))}
                </ul>
             </section>
             
             {/* Application Form Section */}
             <section className="pt-12 border-t border-white/5" id="apply">
                <h3 className="text-2xl font-bold text-white mb-8">Apply for this Job</h3>
                <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-400">First Name</label>
                         <input type="text" className="w-full bg-[#121417] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-400">Last Name</label>
                         <input type="text" className="w-full bg-[#121417] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email</label>
                      <input type="email" className="w-full bg-[#121417] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Resume/CV</label>
                      <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-white/20 transition-colors cursor-pointer bg-[#121417]">
                         <p className="text-gray-400 text-sm">Drag and drop your resume here, or click to browse</p>
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">LinkedIn URL</label>
                      <input type="text" className="w-full bg-[#121417] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                   </div>

                   <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-500 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                      Submit Application <ArrowRight size={18} />
                   </button>
                </form>
             </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
             <div className="sticky top-32 space-y-6">
                <div className="bg-[#121417] border border-white/5 rounded-2xl p-6">
                   <h4 className="text-white font-bold mb-4">Benefits & Perks</h4>
                   <ul className="space-y-3">
                      {job.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                           <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                           <span>{benefit}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="bg-[#121417] border border-white/5 rounded-2xl p-6">
                   <h4 className="text-white font-bold mb-2">Share this role</h4>
                   <p className="text-gray-500 text-sm mb-4">Know someone who would be a great fit?</p>
                   <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-white/5 rounded border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors">Copy Link</button>
                      <button className="flex-1 py-2 bg-white/5 rounded border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors">Twitter</button>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default JobView;
