
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Building2, ArrowRight, MessageSquare } from 'lucide-react';
import { BillingCycle, PlanType } from '../types';
import { SMALL_BUSINESS_PLANS, ENTERPRISE_PLANS } from '../constants';
import { Particles } from './Particles';
import { Link } from 'react-router-dom';

interface PricingProps {
  showParticles?: boolean;
}

export const Pricing: React.FC<PricingProps> = ({ showParticles = true }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');
  const [planType, setPlanType] = useState<PlanType>('small_business');

  const getDiscount = (cycle: BillingCycle) => {
    if (cycle === 'monthly') return 0;
    return 0.18; // Flat 18% off for annual
  };

  const calculatePrice = (base: number, cycle: BillingCycle) => {
    const discount = getDiscount(cycle);
    return Math.floor(base * (1 - discount));
  };

  const activePlans = planType === 'small_business' ? SMALL_BUSINESS_PLANS : ENTERPRISE_PLANS;

  return (
    <section className="py-24 md:py-32 bg-[#0A0B0C] relative overflow-hidden border-t border-white/5">
      {showParticles && <Particles />}
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[800px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Simple, transparent pricing <br />
            <span className="text-gray-500">for every stage.</span>
          </h3>
          <p className="text-gray-400 text-lg md:text-xl font-light">
             Predictable monthly costs. No hidden per-user fees. Scale as you grow.
          </p>
        </div>

        {/* Toggles Container */}
        <div className="flex flex-col items-center gap-8 mb-16">
           {/* Plan Type Toggle */}
          <div className="bg-[#141619] p-1.5 rounded-[.50rem] border border-white/10 inline-flex relative z-10 backdrop-blur-md">
            <button 
              onClick={() => setPlanType('small_business')}
              className={`px-6 py-2.5 rounded-[.50rem] text-sm font-bold transition-all duration-300 ${planType === 'small_business' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Business
            </button>
            <button 
              onClick={() => setPlanType('enterprise')}
              className={`px-6 py-2.5 rounded-[.50rem] text-sm font-bold transition-all duration-300 ${planType === 'enterprise' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Enterprise
            </button>
          </div>

          {/* Billing Cycle Toggle */}
          <div 
            className="flex items-center justify-center gap-3 cursor-pointer select-none group" 
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          >
            <span className={`text-sm font-medium transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500 group-hover:text-gray-400'}`}>
              Monthly
            </span>
            
            <div className="relative w-12 h-7 bg-[#1A1D21] rounded-full border border-white/10 transition-colors group-hover:border-white/20">
              <motion.div 
                className="absolute top-[3px] left-[3px] w-5 h-5 bg-primary rounded-full shadow-lg"
                animate={{ x: billingCycle === 'annual' ? 17 : 0 }}
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>

            <span className={`text-sm font-medium flex items-center gap-2 transition-colors duration-300 ${billingCycle === 'annual' ? 'text-white' : 'text-gray-500 group-hover:text-gray-400'}`}>
              Yearly 
              <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Save 18%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-center mb-20">
          <AnimatePresence mode="wait">
            {activePlans.map((plan, idx) => {
              const isPopular = plan.isPopular;
              return (
                <motion.div
                  key={`${planType}-${plan.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`
                    relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 group overflow-hidden
                    ${isPopular 
                      ? 'bg-[#121417] border-primary/50 shadow-[0_0_40px_-10px_rgba(254,149,3,0.15)] z-10 md:-my-4 md:py-12' 
                      : 'bg-[#0E1012] border-white/5 hover:border-white/10 opacity-80 hover:opacity-100'}
                  `}
                >
                  {/* Inner Glow for Popular */}
                  {isPopular && (
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                  )}

                  {isPopular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-b-lg uppercase tracking-widest shadow-lg flex items-center gap-1">
                      <Sparkles size={10} className="fill-white" /> Most Popular
                    </div>
                  )}

                  <div className="mb-8 relative z-10">
                    <h4 className={`text-lg font-bold mb-4 ${isPopular ? 'text-white' : 'text-gray-400'}`}>{plan.name}</h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-white tracking-tighter">
                        ₹{calculatePrice(plan.priceBase, billingCycle).toLocaleString()}
                      </span>
                      <span className="text-gray-500 font-medium text-sm">/mo</span>
                    </div>
                    {billingCycle === 'annual' && (
                       <p className="text-xs text-green-500 mt-3 font-bold bg-green-500/10 inline-block px-2 py-1 rounded-md">
                         Billed ₹{(calculatePrice(plan.priceBase, 'annual') * 12).toLocaleString()} yearly
                       </p>
                    )}
                    {billingCycle === 'monthly' && (
                       <p className="text-xs text-gray-600 mt-3 font-medium px-2 py-1">
                         Billed monthly
                       </p>
                    )}
                  </div>

                  <div className="flex-grow space-y-4 mb-8 relative z-10">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${isPopular ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                          <Check size={10} strokeWidth={4} />
                        </div>
                        <span className={`text-sm font-medium ${isPopular ? 'text-gray-200' : 'text-gray-400'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className={`
                      w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 relative z-10
                      ${isPopular 
                        ? 'bg-primary text-white hover:bg-orange-500 shadow-[0_0_20px_-5px_rgba(254,149,3,0.4)] hover:shadow-[0_0_30px_-5px_rgba(254,149,3,0.6)] hover:scale-[1.02]' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/5 hover:border-white/20'}
                    `}
                  >
                    {plan.id.includes('ent') ? 'Contact Sales' : 'Start 14-day trial'}
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Enterprise / Custom Plan CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#121417] via-[#1A1D21] to-[#121417] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="w-16 h-16 rounded-2xl bg-[#0A0B0C] border border-white/10 flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
               <Building2 size={32} className="text-white" />
            </div>

            <div className="flex-1 text-center md:text-left relative z-10">
               <h4 className="text-2xl font-bold text-white mb-2">Need a custom enterprise plan?</h4>
               <p className="text-gray-400 leading-relaxed">
                 For large teams, we offer dedicated infrastructure, SSO enforcement, audit logs, and custom Service Level Agreements (SLAs).
               </p>
            </div>

            <Link to="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] shrink-0 flex items-center gap-2 relative z-10">
               Contact Sales <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="mt-8 text-center">
             <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                <MessageSquare size={14} /> Prices exclude applicable taxes. Local tax laws may apply.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
