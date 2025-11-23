import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Cookie, ShieldCheck, BarChart2, MessageSquare } from 'lucide-react';

const Toggle: React.FC<{ value: boolean; onChange: (val: boolean) => void; disabled?: boolean }> = ({ value, onChange, disabled }) => (
  <div 
    className={`w-12 h-7 rounded-full p-1 transition-colors relative ${value ? 'bg-primary' : 'bg-gray-700'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    onClick={() => !disabled && onChange(!value)}
  >
    <motion.div 
      className="w-5 h-5 bg-white rounded-full shadow-md"
      animate={{ x: value ? 20 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  </div>
);

const CookieSettings: React.FC = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  const handleSave = () => {
    // Logic to save to local storage or API would go here
    alert("Preferences saved!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-[#0A0B0C] text-white"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
           <div className="w-16 h-16 bg-[#1A1D21] border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
             <Cookie size={32} className="text-primary" />
           </div>
           <h1 className="text-3xl md:text-4xl font-black mb-4">Cookie Preferences</h1>
           <p className="text-gray-400">
             Manage your cookie settings. We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
           </p>
        </div>

        <div className="space-y-6">
           {/* Essential */}
           <div className="bg-[#121417] border border-white/5 p-6 rounded-2xl flex gap-6 items-start">
              <div className="mt-1">
                 <ShieldCheck className="text-green-500" size={24} />
              </div>
              <div className="flex-1">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">Essential Cookies</h3>
                    <Toggle value={preferences.essential} onChange={() => {}} disabled={true} />
                 </div>
                 <p className="text-sm text-gray-400 leading-relaxed">
                   These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                 </p>
              </div>
           </div>

           {/* Functional */}
           <div className="bg-[#121417] border border-white/5 p-6 rounded-2xl flex gap-6 items-start">
              <div className="mt-1">
                 <MessageSquare className="text-blue-500" size={24} />
              </div>
              <div className="flex-1">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">Functional Cookies</h3>
                    <Toggle 
                      value={preferences.functional} 
                      onChange={(v) => setPreferences({...preferences, functional: v})} 
                    />
                 </div>
                 <p className="text-sm text-gray-400 leading-relaxed">
                   These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.
                 </p>
              </div>
           </div>

           {/* Analytics */}
           <div className="bg-[#121417] border border-white/5 p-6 rounded-2xl flex gap-6 items-start">
              <div className="mt-1">
                 <BarChart2 className="text-purple-500" size={24} />
              </div>
              <div className="flex-1">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">Analytics Cookies</h3>
                    <Toggle 
                      value={preferences.analytics} 
                      onChange={(v) => setPreferences({...preferences, analytics: v})} 
                    />
                 </div>
                 <p className="text-sm text-gray-400 leading-relaxed">
                   These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                 </p>
              </div>
           </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
           <button 
             onClick={() => setPreferences({ essential: true, functional: true, analytics: true, marketing: true })}
             className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
           >
             Accept All
           </button>
           <button 
             onClick={handleSave}
             className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
           >
             <Save size={18} />
             Save Preferences
           </button>
        </div>

      </div>
    </motion.div>
  );
};

export default CookieSettings;