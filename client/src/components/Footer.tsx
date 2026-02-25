// Design: Clean modern — White/Purple/Slate palette
// Footer: Dark slate bg, white text, white logos, no brown

import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGES } from '@/lib/tripData';
import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand — Both logos side by side */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src={IMAGES.logoBDWhite}
                alt="Beyond Destination"
                className="h-16 md:h-24 w-auto"
              />
              <span className="text-white/30 text-2xl font-light">×</span>
              <img
                src={IMAGES.logoFTUWhite}
                alt="FTU Adventure"
                className="h-16 md:h-24 w-auto"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {t(
                'Exclusive trips organized by FTU Adventure. Website designed by Beyond Destination.',
                'رحلات حصرية من تنظيم FTU Adventure. الموقع من تصميم Beyond Destination.'
              )}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {t('Contact Us', 'تواصل معنا')}
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/96560041555"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span dir="ltr" className="inline-block">+965 6004 1555</span>
              </a>
              <a
                href="tel:+96597797782"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr" className="inline-block">+965 9779 7782</span>
              </a>
              <a
                href="mailto:ftu@ftuadventure.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>ftu@ftuadventure.com</span>
              </a>
              <a
                href="https://instagram.com/ftu_adventure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@ftu_adventure</span>
              </a>
              <a
                href="https://instagram.com/Q8BDOFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@Q8BDOFFICIAL</span>
              </a>
            </div>
          </div>

          {/* Quick Links — only BD website, removed FTU */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {t('Quick Links', 'روابط سريعة')}
            </h3>
            <div className="space-y-3">
              <a href="https://www.q8bd.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-400 hover:text-white transition-colors">
                {t('Beyond Destination Website', 'موقع Beyond Destination')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            {t(
              '© 2026 Beyond Destination. All rights reserved.',
              '© ٢٠٢٦ Beyond Destination. جميع الحقوق محفوظة.'
            )}
          </p>
          <p className="text-xs text-slate-500">
            {t('Designed for FTU Adventure', 'مصمم لـ FTU Adventure')}
          </p>
        </div>
      </div>
    </footer>
  );
}
