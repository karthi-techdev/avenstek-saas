
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Zap, Bug, Settings, GitCommit } from 'lucide-react';
import { Particles } from '../components/Particles';

const RELEASES = [
  {
    version: "v2.1.0",
    date: "March 12, 2024",
    title: "AI Automations & Smart Sorting",
    description: "This release introduces our new generative AI engine that helps you sort backlogs automatically.",
    changes: [
      { type: 'feature', text: "Smart Sort: One-click prioritization based on deadlines." },
      { type: 'feature', text: "Auto-Summaries: Generate daily standup text from completed tasks." },
      { type: 'improvement', text: "Reduced initial load time by 40% using Rust-based compilation." },
      { type: 'fix', text: "Fixed an issue where dark mode preferences weren't persisting across sessions." }
    ]
  },
  {
    version: "v2.0.4",
    date: "February 28, 2024",
    title: "The Performance Update",
    description: "We focused entirely on speed and reliability in this patch, squashing bugs and optimizing render cycles.",
    changes: [
      { type: 'improvement', text: "Kanban board now handles 10,000+ cards without dropping frames." },
      { type: 'improvement', text: "New keyboard shortcuts for rapid ticket creation (Press 'C')." },
      { type: 'fix', text: "Resolved drag-and-drop ghosting on Safari." },
      { type: 'fix', text: "Fixed WebSocket reconnection logic on flaky networks." }
    ]
  },
  {
    version: "v2.0.0",
    date: "February 10, 2024",
    title: "Flownyx 2.0: Rebuilt from Scratch",
    description: "A complete overhaul of the user interface and backend architecture.",
    changes: [
      { type: 'feature', text: "Brand new UI design language." },
      { type: 'feature', text: "Added 'Teams' functionality for enterprise accounts." },
      { type: 'feature', text: "Native GitHub and GitLab integrations." },
      { type: 'feature', text: "Dark mode is now the default experience." }
    ]
  }
];

const TypeBadge: React.FC<{ type: string }> = ({ type }) => {
  let color = "bg-gray-800 text-gray-300 border-gray-700";
  let Icon = Settings;

  if (type === 'feature') {
    color = "bg-primary/10 text-primary border-primary/20";
    Icon = Sparkles;
  } else if (type === 'improvement') {
    color = "bg-blue-500/10 text-blue-400 border-blue-500/20";
    Icon = Zap;
  } else if (type === 'fix') {
    color = "bg-red-500/10 text-red-400 border-red-500/20";
    Icon = Bug;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${color} uppercase tracking-wide`}>
      <Icon size={10} />
      {type}
    </span>
  );
};

const Changelog: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 overflow-x-hidden bg-[#0A0B0C]"
    >
      {/* Header */}
      <section className="relative px-6 py-20 text-center">
        <Particles />
        <div className="relative z-10 max-w-4xl mx-auto">
           <span className="text-primary font-bold uppercase text-xs tracking-widest mb-4 block">Changelog</span>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-6">What's New</h1>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Stay up to date with the latest features, improvements, and bug fixes.
           </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-32 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl relative">
          
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -ml-[0.5px]"></div>

          <div className="space-y-24">
            {RELEASES.map((release, idx) => (
              <motion.div 
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-0 group"
              >
                 {/* Timeline Dot */}
                 <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0B0C] border-2 border-primary z-10 shadow-[0_0_10px_rgba(254,149,3,0.5)]"></div>

                 {/* Date (Left side on desktop) */}
                 <div className="md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0 pt-0.5">
                    <div className="inline-flex items-center gap-2 text-primary font-mono font-bold mb-1">
                       <GitCommit size={14} />
                       {release.version}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">{release.date}</div>
                 </div>

                 {/* Content (Right side on desktop) */}
                 <div className="md:w-1/2 md:pl-12 pl-20">
                    <div className="bg-[#121417] border border-white/5 p-6 md:p-8 rounded-2xl relative hover:border-white/10 transition-colors">
                       {/* Arrow pointing to timeline */}
                       <div className="absolute top-5 -left-2 w-4 h-4 bg-[#121417] border-l border-b border-white/5 transform rotate-45 hidden md:block"></div>
                       
                       <h3 className="text-xl font-bold text-white mb-2">{release.title}</h3>
                       <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {release.description}
                       </p>
                       
                       <ul className="space-y-3">
                          {release.changes.map((change, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                               <div className="mt-0.5 shrink-0">
                                  <TypeBadge type={change.type} />
                               </div>
                               <span className="text-gray-300 leading-relaxed">{change.text}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-500 text-sm">
                End of history. <Link to="/" className="text-primary hover:underline">Go back home</Link>
             </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default Changelog;
