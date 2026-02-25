// Design: Clean modern — White/Purple/Slate palette
// Navbar: Sticky, white bg, high-res BD purple logo + language toggle

import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/lib/tripData';
import { Link } from 'wouter';
import { Globe, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo — high-res BD purple logo, bigger */}
        <Link href="/" className="flex items-center">
          <img
            src={IMAGES.logoBDPurple}
            alt="Beyond Destination"
            className="h-10 md:h-14 w-auto"
          />
        </Link>

        {/* Right side: Language toggle + WhatsApp */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-slate-700 border border-gray-200"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </motion.button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/96560041555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] transition-colors text-white text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">{t('WhatsApp', 'واتساب')}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
