
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[210] pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121417] border border-white/10 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              <div className="flex justify-end p-4">
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="px-8 pb-10 flex flex-col items-center text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Subscribed!</h3>
                <p className="text-gray-400 mb-6">
                  You have successfully subscribed to our newsletter.
                </p>
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
