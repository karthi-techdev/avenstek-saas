
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Book, Code2, Terminal, Layers, Menu, X, Copy, Check } from 'lucide-react';
import productCreate from "../public/assets/images/product-create.png";

const SECTIONS = [
  {
    category: "Getting Started",
    items: [
      { id: 'intro', label: 'Introduction' },
      { id: 'quickstart', label: 'Quick Start' },
      { id: 'installation', label: 'Installation' },
    ]
  },
  {
    category: "Core Concepts",
    items: [
      { id: 'workspaces', label: 'Workspaces' },
      { id: 'projects', label: 'Projects & Boards' },
      { id: 'automations', label: 'Automations' },
    ]
  },
  {
    category: "API Reference",
    items: [
      { id: 'auth', label: 'Authentication' },
      { id: 'endpoints', label: 'Endpoints' },
      { id: 'webhooks', label: 'Webhooks' },
    ]
  }
];

const CodeBlock: React.FC<{ code: string; language: string }> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-[#0D0F11] border border-white/10 font-mono text-sm my-6 group">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1A1D21] border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
        </div>
        <div className="text-xs text-gray-500 uppercase">{language}</div>
      </div>
      <div className="p-4 overflow-x-auto text-gray-300">
        <pre>{code}</pre>
      </div>
      <button 
        onClick={handleCopy}
        className="absolute top-12 right-4 p-2 rounded bg-white/5 hover:bg-white/10 text-gray-400 transition-opacity opacity-0 group-hover:opacity-100"
      >
        {copied ? <Check size={16} className="text-green-500"/> : <Copy size={16} />}
      </button>
    </div>
  );
};

const CONTENT: Record<string, React.ReactNode> = {
  'intro': (
    <div className="space-y-6">
      <h1 className="text-4xl font-black text-white mb-6">Introduction</h1>
      <p className="text-xl text-gray-400 leading-relaxed">
        Flownyx is a next-generation project management platform designed for high-velocity engineering teams. It combines the flexibility of Kanban with the power of automated workflows.
      </p>
      
      <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl my-8">
        <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
          <Layers size={18} /> Note
        </h4>
        <p className="text-gray-300 text-sm">
          Flownyx is currently in v2.0. If you are migrating from v1, please check our migration guide.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Flownyx?</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li><strong className="text-white">Speed:</strong> Built with Rust and WebAssembly for sub-30ms interactions.</li>
        <li><strong className="text-white">Simplicity:</strong> A UI that gets out of your way.</li>
        <li><strong className="text-white">Intelligence:</strong> AI-driven sorting, summarizing, and reporting.</li>
      </ul>
    </div>
  ),
  'quickstart': (
    <div className="space-y-6">
      <h1 className="text-4xl font-black text-white mb-6">Quick Start</h1>
      <p className="text-lg text-gray-400">
        Get up and running with Flownyx in less than 5 minutes.
      </p>
      
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Create an Account</h2>
      <p className="text-gray-400">Sign up for a free account. No credit card required.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Create your first Project</h2>
      <p className="text-gray-400 mb-4">Click the "+" button in the sidebar and select "New Project". Choose the "Engineering" template.</p>
      
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
         <img src={productCreate} alt="UI" className="w-full" />
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Invite your Team</h2>
      <p className="text-gray-400">Go to Settings Members and invite your colleagues via email.</p>
    </div>
  ),
  'auth': (
    <div className="space-y-6">
      <h1 className="text-4xl font-black text-white mb-6">Authentication</h1>
      <p className="text-gray-400 mb-6">
        The Flownyx API uses API keys to authenticate requests. You can view and manage your API keys in the Dashboard.
      </p>

      <CodeBlock language="bash" code={`curl https://api.flownyx.com/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY"`} />

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Generating an API Key</h2>
      <p className="text-gray-400">
         Navigate to <code>Settings  API</code> to generate a new key. Keep this key secure.
      </p>
    </div>
  )
};

const Documentation: React.FC = () => {
  const [activeId, setActiveId] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fallback for missing content
  const ActiveContent = CONTENT[activeId] || (
    <div className="py-20 text-center">
      <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
      <p className="text-gray-400">This documentation section is currently being written.</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-[#0A0B0C] flex flex-col md:flex-row"
    >
      {/* Mobile Menu Toggle */}
      <div className="md:hidden p-4 border-b border-white/10 flex items-center justify-between sticky top-20 bg-[#0A0B0C] z-30">
        <span className="font-bold text-white">Documentation</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside 
        className={`
          fixed md:sticky top-20 md:top-24 h-[calc(100vh-80px)] w-full md:w-72 bg-[#0A0B0C] border-r border-white/5 overflow-y-auto z-20 transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-6">
          <div className="relative mb-8">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
             <input 
               type="text" 
               placeholder="Search docs..." 
               className="w-full bg-[#121417] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" 
             />
          </div>

          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.category}>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{section.category}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveId(item.id);
                          setIsMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`
                          w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group
                          ${activeId === item.id 
                            ? 'bg-primary/10 text-primary font-bold' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'}
                        `}
                      >
                        {item.label}
                        {activeId === item.id && <ChevronRight size={14} />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
           <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight size={14} />
              <span>Documentation</span>
              <ChevronRight size={14} />
              <span className="text-white">
                {SECTIONS.flatMap(s => s.items).find(i => i.id === activeId)?.label}
              </span>
           </div>

           <motion.div
             key={activeId}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
           >
             {ActiveContent}
           </motion.div>

           <div className="mt-20 pt-8 border-t border-white/5 flex justify-between">
              <div className="text-sm text-gray-500">
                 Last updated: March 15, 2024
              </div>
              <div className="flex gap-4">
                 <button className="text-sm text-gray-400 hover:text-white hover:underline">Edit this page</button>
                 <button className="text-sm text-gray-400 hover:text-white hover:underline">Report an issue</button>
              </div>
           </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Documentation;
