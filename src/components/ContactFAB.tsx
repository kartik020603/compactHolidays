import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function ContactFAB() {
  const phoneNumber = "918410617268";
  const whatsappUrl = getWhatsAppUrl("Hi Compact Holidays, I need a quick quote for your premium services.");
  const callUrl = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Call Button - Blue */}
      <motion.a
        href={callUrl}
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-[0_15px_35px_-5px_rgba(37,99,235,0.4)] border-2 border-white/20 backdrop-blur-sm"
        aria-label="Call Us"
      >
        <Phone className="w-8 h-8" />
      </motion.a>

      {/* WhatsApp Button - Green */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_15px_35px_-5px_rgba(37,211,102,0.4)] border-2 border-white/20 backdrop-blur-sm"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
