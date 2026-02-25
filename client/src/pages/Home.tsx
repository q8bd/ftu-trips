// Design: Clean modern — White/Purple/Slate palette
// Home: Hero with main image, trip cards, about section
// Branding: Trips by FTU Adventure, Website by Beyond Destination

import { useLanguage } from '@/contexts/LanguageContext';
import { trips, IMAGES } from '@/lib/tripData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Home() {
  const { t, isRTL, lang } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroMain}
            alt="FTU Trips"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 md:pb-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              {/* Logos side by side */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={IMAGES.logoBDWhite}
                  alt="Beyond Destination"
                  className="h-20 md:h-28 w-auto drop-shadow-lg"
                />
                <span className="text-white/50 text-3xl font-light">×</span>
                <img
                  src={IMAGES.logoFTUWhite}
                  alt="FTU Adventure"
                  className="h-20 md:h-28 w-auto drop-shadow-lg"
                />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                {t('Curated Adventures', 'مغامرات مختارة')}
                <br />
                <span className="text-purple-300">{t('Beyond Borders', 'ما وراء الحدود')}</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-lg leading-relaxed">
                {t(
                  'Exclusive travel experiences by FTU Adventure. Explore Scotland\'s majestic highlands and South Africa\'s wild beauty.',
                  'تجارب سفر حصرية من FTU Adventure. استكشف مرتفعات اسكتلندا المهيبة وجمال جنوب أفريقيا البري.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trips Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#7B52B4] text-sm font-medium tracking-widest uppercase">
              {t('Our Trips', 'رحلاتنا')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-3" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
              {t('Choose Your Adventure', 'اختر مغامرتك')}
            </h2>
            <div className="w-16 h-0.5 bg-[#7B52B4] mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {trips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link href={`/trip/${trip.id}`}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={trip.heroImage}
                        alt={lang === 'en' ? trip.titleEn : trip.titleAr}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                          {lang === 'en' ? trip.titleEn : trip.titleAr}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {lang === 'en' ? trip.subtitleEn : trip.subtitleAr}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-5">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {lang === 'en' ? trip.durationEn : trip.durationAr}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {lang === 'en' ? trip.dateEn : trip.dateAr}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#7B52B4] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                        <span>{t('View Details', 'عرض التفاصيل')}</span>
                        <Arrow className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Awaits — Full-width image with text overlay and white logos */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/s7jgAHXXm2bjEgRfshaSFL/sandbox/pRkTD2rkVVzoEB6xoyONzV-img-4_1771267460000_na1fn_aGVyby1hZHZlbnR1cmU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdqZ0FIWFhtMmJqRWdSZnNoYVNGTC9zYW5kYm94L3BSa1REMnJrVlZ6b0VCNnhveU9OelYtaW1nLTRfMTc3MTI2NzQ2MDAwMF9uYTFmbl9hR1Z5YnkxaFpIWmxiblIxY21VLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=olSFVMcSidtdQKBToUSuo7yGLkRgqYc4wUsbcuS5FljNZ~BFxtd~mYrGFr~wPM2ajGLr49~UN3hsR5Por~h8oa6~GOjiLMeoLN9D~kgMULXAsuyHp12qzKvlRWhs9xFH9NKHu6WgQUDq3lnGwhVuaItB6A-bGUPW1~JtnT8pPIbX6qMx2OO43mNUuXDe6-tyayudkxtm6q3~FTBacM0oJba4DOsZg0jeYatEUEzuI6Pb6Y5s9T8wW0E~YI097mwIQLEKxcnHchf8O2p8znWko7lmIXjXb4kcvivTYBUp9TqiTsLd4t1QR3WDhZ2830Lti-Y0mtsa6upQwVlkky7nww__"
            alt="Adventure Awaits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* White logos */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <img
                src={IMAGES.logoBDWhite}
                alt="Beyond Destination"
                className="h-24 md:h-32 w-auto drop-shadow-lg"
              />
              <span className="text-white/40 text-3xl font-light">×</span>
              <img
                src={IMAGES.logoFTUWhite}
                alt="FTU Adventure"
                className="h-24 md:h-32 w-auto drop-shadow-lg"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
              {t('Adventure Awaits', 'المغامرة بانتظارك')}
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-lg mx-auto mb-8">
              {t(
                'Trips organized by FTU Adventure. Get in touch to book your spot.',
                'رحلات من تنظيم FTU Adventure. تواصل معنا لحجز مكانك.'
              )}
            </p>
            <a
              href="https://wa.me/96560041555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('Chat on WhatsApp', 'تواصل عبر الواتساب')}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
