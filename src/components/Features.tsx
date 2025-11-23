
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { KanbanSquare, BarChart3, Users, Zap, ArrowRight, Search, GitBranch } from 'lucide-react';
import productMarketplace from '../../public/assets/images/product-marketplace.png'

// Reusable Bento Card Container
const BentoCard: React.FC<{ 
  title: string; 
  description: string; 
  icon?: React.ElementType; 
  className?: string; // For Grid Spanning
  children?: React.ReactNode;
  delay?: number;
}> = ({ title, description, icon: Icon, className, children, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={`group relative bg-[#121417] border border-white/5 rounded-3xl overflow-hidden flex flex-col ${className}`}
  >
    {/* Inner Glow */}
    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    {/* Content Area */}
    <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col">
      <div className="mb-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/20 transition-all">
            {Icon && <Icon size={20} />}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
      
      {/* Animation Container */}
      <div className="mt-8 relative w-full h-[180px] md:h-[220px] bg-[#0A0C0E] border border-white/5 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  </motion.div>
);

// --- ANIMATION COMPONENTS ---

// 1. Interactive Kanban: Drag & Drop
const AnimatedKanban = () => {
  const [activeCol, setActiveCol] = useState(2); // Start in 3rd column to match screenshot
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Determine column based on drag position
  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const dropX = info.point.x - containerRef.current.getBoundingClientRect().left;
    
    // Simple logic: divide container into 3 zones
    if (dropX < containerWidth / 3) {
      setActiveCol(0);
    } else if (dropX < (containerWidth / 3) * 2) {
      setActiveCol(1);
    } else {
      setActiveCol(2);
    }
  };

  return (
    <div ref={containerRef} className="w-full h-full p-4 flex gap-3 select-none items-stretch relative">
      {[0, 1, 2].map((colIdx) => (
        <div 
          key={colIdx} 
          className={`
            flex-1 h-full rounded-xl border flex flex-col gap-3 p-3 transition-colors duration-300
            ${isDragging && activeCol !== colIdx ? 'bg-white/[0.02] border-white/10' : 'bg-transparent border-white/[0.05]'}
          `}
        >
          {/* Column Header */}
          <div className="w-8 h-1.5 bg-white/10 rounded-full mb-1" />
          
          {/* Static/Ghost Cards (Visual Filler) */}
          <div className="w-full h-12 bg-[#1A1D21] rounded-lg border border-white/5 opacity-30" />
          {colIdx === 1 && <div className="w-full h-12 bg-[#1A1D21] rounded-lg border border-white/5 opacity-30" />}
          
          {/* The Active Draggable Card */}
          {activeCol === colIdx && (
            <motion.div
              layoutId="draggable-card"
              drag
              dragConstraints={containerRef}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileHover={{ scale: 1.02, cursor: "grab" }}
              whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50 }}
              className="w-full h-14 bg-[#1A1D21] rounded-lg border border-primary/50 shadow-[0_0_15px_rgba(254,149,3,0.1)] relative overflow-hidden group"
            >
              {/* Orange Left Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              
              <div className="p-3 pl-4 flex flex-col justify-between h-full">
                 {/* Pill Title */}
                 <div className="w-16 h-2 bg-white/20 rounded-full" />
                 
                 {/* Bottom Right Avatar */}
                 <div className="self-end w-4 h-4 rounded-full bg-white/10" />
              </div>

              {/* Hover Highlight */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

// 2. Chart Animation: Interactive Bars with Perfect Tooltips
const AnimatedAnalytics = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const data = [35, 60, 45, 85, 55, 95, 65];

  return (
    <div className="w-full h-full flex items-end justify-center gap-2 md:gap-3 px-4 pb-4 pt-12">
      {data.map((height, i) => {
         const isPrimary = i === 5;
         const isHovered = hovered === i;
         const isDimmed = hovered !== null && hovered !== i;

         return (
          <div 
            key={i} 
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative w-full max-w-[28px] h-full flex items-end justify-center group"
          >
             <AnimatePresence>
               {isHovered && (
                 <motion.div
                   initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                   exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                   // Position relatively to the bar height
                   style={{ bottom: `${height}%` }}
                   className="absolute mb-2 left-1/2 z-50 pointer-events-none"
                 >
                    <div className="relative bg-[#2A2E33] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] whitespace-nowrap flex items-center justify-center">
                       {height}%
                       {/* Tooltip Arrow */}
                       <div className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2A2E33] border-r border-b border-white/10 rotate-45"></div>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>

             <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05, type: "spring", stiffness: 100, damping: 20 }}
              className={`w-full rounded-t-sm cursor-pointer transition-all duration-300 ${
                isDimmed ? 'opacity-30' : 'opacity-100'
              } ${isPrimary ? 'bg-primary shadow-[0_0_15px_rgba(254,149,3,0.3)]' : 'bg-white/10 group-hover:bg-white/20'}`}
            />
          </div>
         )
      })}
    </div>
  );
};

// 3. Automation Animation: Interactive Click Trigger
const AnimatedAutomation = () => {
  const controls = useAnimation();
  
  const triggerAnimation = async () => {
    await controls.start({ 
      x: "100%", 
      transition: { duration: 0.8, ease: "easeInOut" } 
    });
    controls.set({ x: "-100%" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
        triggerAnimation();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full" onClick={() => triggerAnimation()}>
      {/* Node A */}
      <motion.div 
        whileTap={{ scale: 0.9 }}
        className="z-10 w-12 h-12 rounded-xl bg-[#1A1D21] border border-white/10 flex items-center justify-center shadow-lg cursor-pointer hover:border-white/30 transition-colors"
      >
        <GitBranch size={20} className="text-gray-400" />
      </motion.div>

      {/* Connecting Line Container */}
      <div className="w-24 h-12 flex items-center justify-center relative -mx-1 pointer-events-none">
        {/* Track */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
           {/* Beam */}
           <motion.div 
              initial={{ x: "-100%" }}
              animate={controls}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
           />
        </div>
      </div>

      {/* Node B */}
      <motion.div 
        whileTap={{ scale: 0.9 }}
        className="z-10 w-12 h-12 rounded-xl bg-primary border border-white/10 flex items-center justify-center cursor-pointer hover:bg-orange-500 transition-colors"
      >
        <Zap size={20} className="text-black" />
      </motion.div>
    </div>
  );
};

// 4. Team Animation: Click to Add
const AnimatedCollaboration = () => {
  const [members, setMembers] = useState([
    { color: 'bg-pink-500', initial: 'S' }, 
    { color: 'bg-blue-500', initial: 'M' }, 
    { color: 'bg-amber-500', initial: 'J' }
  ]);

  const addMember = () => {
    if (members.length > 5) {
        setMembers(members.slice(0, 3)); // Reset
        return;
    }
    const colors = ['bg-emerald-500', 'bg-purple-500', 'bg-rose-500'];
    const initials = ['D', 'K', 'R'];
    const nextIdx = members.length - 3;
    setMembers([...members, { color: colors[nextIdx % 3], initial: initials[nextIdx % 3] }]);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
       <div className="flex -space-x-4 relative z-10 p-4">
          <AnimatePresence mode='popLayout'>
            {members.map((user, i) => (
               <motion.div 
                 key={`${user.initial}-${i}`}
                 layout
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0, opacity: 0 }}
                 whileHover={{ 
                   y: -8, 
                   scale: 1.1, 
                   zIndex: 30,
                   transition: { type: 'spring', stiffness: 400, damping: 20 }
                 }}
                 className={`relative w-12 h-12 rounded-full border-[3px] border-[#121417] ${user.color} flex items-center justify-center text-base font-bold text-white shadow-2xl cursor-pointer`}
               >
                  {user.initial}
                  {i === members.length - 1 && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-[2px] border-[#121417] rounded-full"></span>
                  )}
               </motion.div>
            ))}
          </AnimatePresence>
          
          <motion.button 
            layout
            onClick={addMember}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full border-[3px] border-[#121417] bg-[#2A2E33] flex items-center justify-center text-xs font-bold text-gray-400 shadow-xl relative z-0 hover:text-white transition-colors"
          >
             +{15 - members.length}
          </motion.button>
       </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0A0B0C] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Features</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Build faster with <br className="hidden md:block"/>
            <span className="text-gray-500">Intelligent Tools</span>
          </h3>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            A cohesive operating system designed to replace your fragmented toolset.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* 1. Kanban (Span 4) */}
          <BentoCard 
            title="Fluid Kanban Boards" 
            description="Drag, drop, and automate card movements with zero latency."
            icon={KanbanSquare}
            className="md:col-span-4 min-h-[400px]"
            delay={0.1}
          >
            <AnimatedKanban />
          </BentoCard>

          {/* 2. Analytics (Span 2) */}
          <BentoCard 
            title="Real-time Analytics" 
            description="Track velocity, burnup, and cycle time automatically."
            icon={BarChart3}
            className="md:col-span-2 min-h-[400px]"
            delay={0.2}
          >
            <AnimatedAnalytics />
          </BentoCard>

          {/* 3. Automation (Span 2) */}
          <BentoCard 
            title="No-code Automation" 
            description="Create 'If-This-Then-That' rules to handle repetitive tasks."
            icon={Zap}
            className="md:col-span-2 min-h-[350px]"
            delay={0.3}
          >
            <AnimatedAutomation />
          </BentoCard>

          {/* 4. Team (Span 2) */}
          <BentoCard 
            title="Collaborative" 
            description="Multiplayer mode built-in. See cursors and comments live."
            icon={Users}
            className="md:col-span-2 min-h-[350px]"
            delay={0.4}
          >
             <AnimatedCollaboration />
          </BentoCard>

          {/* 5. CTA Card (Span 2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer shadow-[0_10px_40px_-10px_rgba(254,149,3,0.3)] hover:shadow-[0_20px_60px_-10px_rgba(254,149,3,0.5)] transition-all duration-300 min-h-[350px]"
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                 <Search className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Explore Integrations</h4>
              <p className="text-white/80 text-sm leading-relaxed">Connect GitHub, Slack, Figma and 50+ other tools.</p>
            </div>
            <div className='relative rounded-2xl bg-[#121417] border border-white/10 p-2 shadow-2xl overflow-hidden mt-3'>
              <img src={productMarketplace} className='rounded-[5px]' />
            </div>
            <div className="flex items-center gap-2 font-bold text-white mt-5 group-hover:translate-x-2 transition-transform">
              Browse Marketplace <ArrowRight size={20} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
