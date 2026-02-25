// Design: Clean modern — White/Purple/Slate with light earthy accents
// TripDetail: Hero + tabbed content (Itinerary, Accommodation, Included/T&C, Recommendations)
// Branding: Trips by FTU Adventure, Website by Beyond Destination

import { useLanguage } from '@/contexts/LanguageContext';
import { trips, IMAGES } from '@/lib/tripData';
import type { TripData, DayItinerary, Accommodation, Recommendation } from '@/lib/tripData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams, Link } from 'wouter';
import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Check, X,
  Shield, Coffee, UtensilsCrossed, ShoppingBag, TreePine,
  ChevronDown, ChevronUp, Backpack, Star
} from 'lucide-react';

const TAB_KEYS = ['itinerary', 'accommodation', 'included', 'recommendations'] as const;
type TabKey = typeof TAB_KEYS[number];

function TabButton({ active, label, onClick, icon }: { active: boolean; label: string; onClick: () => void; icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
        active
          ? 'bg-[#7B52B4] text-white shadow-md'
          : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
      }`}
    >
      <span className="hidden md:inline">{icon}</span>
      {label}
    </button>
  );
}

function DayCard({ day, lang, isRTL, index }: { day: DayItinerary; lang: string; isRTL: boolean; index: number }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div
        className={`bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-all duration-300 ${day.isFreeDay ? 'ring-2 ring-amber-300/50' : ''}`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-56 h-48 md:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={day.image}
              alt={lang === 'en' ? day.titleEn : day.titleAr}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <div className="bg-slate-800/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                {day.day === 0 ? t('Arrival', 'الوصول') : `${t('Day', 'اليوم')} ${day.day}`}
              </div>
            </div>
            {day.isFreeDay && (
              <div className="absolute top-3 right-3">
                <div className="bg-amber-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {t('Free Time', 'وقت حر')}
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
              {lang === 'en' ? day.titleEn : day.titleAr}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'en' ? day.descEn : day.descAr}
            </p>
            {day.isFreeDay && day.freeTimeNote && (
              <div className="mt-3 flex items-center gap-2 text-amber-700 text-sm">
                <Star className="w-4 h-4" />
                <span className="font-medium">{lang === 'en' ? day.freeTimeNote.en : day.freeTimeNote.ar}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AccommodationCard({ acc, lang, isRTL, index }: { acc: Accommodation; lang: string; isRTL: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={acc.image}
          alt={lang === 'en' ? acc.nameEn : acc.nameAr}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
            {lang === 'en' ? acc.nameEn : acc.nameAr}
          </h3>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? acc.daysEn : acc.daysAr}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 text-sm leading-relaxed">
          {lang === 'en' ? acc.descEn : acc.descAr}
        </p>
      </div>
    </motion.div>
  );
}

function RecommendationCard({ rec, lang, isRTL, index }: { rec: Recommendation; lang: string; isRTL: boolean; index: number }) {
  const typeIcons: Record<string, React.ReactNode> = {
    'Restaurant': <UtensilsCrossed className="w-4 h-4" />,
    'مطعم': <UtensilsCrossed className="w-4 h-4" />,
    'Village Walk': <TreePine className="w-4 h-4" />,
    'جولة في القرية': <TreePine className="w-4 h-4" />,
    'Shopping & Sightseeing': <ShoppingBag className="w-4 h-4" />,
    'تسوق ومشاهدة معالم': <ShoppingBag className="w-4 h-4" />,
    'Street Food': <Coffee className="w-4 h-4" />,
    'طعام شارع': <Coffee className="w-4 h-4" />,
    'Shopping & Cafés': <Coffee className="w-4 h-4" />,
    'تسوق ومقاهي': <Coffee className="w-4 h-4" />,
    'Shopping & Dining': <ShoppingBag className="w-4 h-4" />,
    'تسوق ومطاعم': <ShoppingBag className="w-4 h-4" />,
    'Cultural Walk': <MapPin className="w-4 h-4" />,
    'جولة ثقافية': <MapPin className="w-4 h-4" />,
    'Beach & Cafés': <Coffee className="w-4 h-4" />,
    'شاطئ ومقاهي': <Coffee className="w-4 h-4" />,
    'Market': <ShoppingBag className="w-4 h-4" />,
    'سوق': <ShoppingBag className="w-4 h-4" />,
    'Dining & Sightseeing': <UtensilsCrossed className="w-4 h-4" />,
    'مطاعم ومشاهدة معالم': <UtensilsCrossed className="w-4 h-4" />,
  };

  const typeName = lang === 'en' ? rec.typeEn : rec.typeAr;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={rec.image}
          alt={lang === 'en' ? rec.nameEn : rec.nameAr}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
            {typeIcons[typeName] || <MapPin className="w-4 h-4" />}
            <span>{typeName}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-base font-bold text-slate-800 mb-2" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
          {lang === 'en' ? rec.nameEn : rec.nameAr}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed">
          {lang === 'en' ? rec.descEn : rec.descAr}
        </p>
      </div>
    </motion.div>
  );
}

export default function TripDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('itinerary');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback((tab: TabKey) => {
    setActiveTab(tab);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, []);

  const trip = trips.find(tr => tr.id === id);
  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">{t('Trip not found', 'الرحلة غير موجودة')}</h1>
          <Link href="/" className="text-[#7B52B4] underline">{t('Go back home', 'العودة للرئيسية')}</Link>
        </div>
      </div>
    );
  }

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  const tabLabels: Record<TabKey, string> = {
    itinerary: t('Itinerary', 'البرنامج اليومي'),
    accommodation: t('Accommodation', 'السكن'),
    included: t('Included & Terms', 'ملاحظات هامه'),
    recommendations: t('Recommendations', 'توصيات'),
  };

  const tabIcons: Record<TabKey, React.ReactNode> = {
    itinerary: <Calendar className="w-4 h-4" />,
    accommodation: <MapPin className="w-4 h-4" />,
    included: <Shield className="w-4 h-4" />,
    recommendations: <Star className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={trip.heroImage}
            alt={lang === 'en' ? trip.titleEn : trip.titleAr}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Back button */}
          <div className="container pt-4">
            <Link href="/">
              <motion.div
                whileHover={{ x: isRTL ? 4 : -4 }}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full transition-colors"
              >
                <BackArrow className="w-4 h-4" />
                {t('Back to Trips', 'العودة للرحلات')}
              </motion.div>
            </Link>
          </div>
          {/* Title */}
          <div className="container pb-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                {lang === 'en' ? trip.titleEn : trip.titleAr}
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl">
                {lang === 'en' ? trip.subtitleEn : trip.subtitleAr}
              </p>
              <div className="flex items-center gap-4 mt-4 text-white/70 text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {lang === 'en' ? trip.durationEn : trip.durationAr}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {lang === 'en' ? trip.dateEn : trip.dateAr}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {TAB_KEYS.map(key => (
              <TabButton
                key={key}
                active={activeTab === key}
                label={tabLabels[key]}
                icon={tabIcons[key]}
                onClick={() => handleTabChange(key)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section ref={contentRef} className="py-10 md:py-16 flex-1 scroll-mt-32">
        <div className="container">
          <AnimatePresence mode="wait">
            {activeTab === 'itinerary' && (
              <motion.div
                key="itinerary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                    {t('Day by Day Itinerary', 'البرنامج اليومي')}
                  </h2>
                  <p className="text-slate-500 text-sm mt-2">
                    {t(`${trip.itinerary.length} days of adventure`, `${trip.itinerary.length} يوم من المغامرة`)}
                  </p>
                </div>
                <div className="space-y-4">
                  {trip.itinerary.map((day, i) => (
                    <DayCard key={i} day={day} lang={lang} isRTL={isRTL} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'accommodation' && (
              <motion.div
                key="accommodation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                    {t('Where You\'ll Stay', 'أماكن الإقامة')}
                  </h2>
                  <p className="text-slate-500 text-sm mt-2">
                    {t('Carefully selected accommodations for your comfort', 'أماكن إقامة مختارة بعناية لراحتك')}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trip.accommodations.map((acc, i) => (
                    <AccommodationCard key={i} acc={acc} lang={lang} isRTL={isRTL} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'included' && (
              <motion.div
                key="included"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  {/* Included */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                        {t('What\'s Included', 'ما هو مشمول')}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {(lang === 'en' ? trip.includedEn : trip.includedAr).map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                        {t('Not Included', 'غير مشمول')}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {(lang === 'en' ? trip.notIncludedEn : trip.notIncludedAr).map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#7B52B4]/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#7B52B4]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                      {t('Terms & Conditions', 'الشروط والأحكام')}
                    </h3>
                  </div>
                  <ol className="space-y-3">
                    {(lang === 'en' ? trip.termsEn : trip.termsAr).map((term, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-[#7B52B4] text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <span>{term}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Checklist (South Africa only) */}
                {trip.checklistEn && trip.checklistAr && (
                  <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                        <Backpack className="w-5 h-5 text-amber-700" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                        {t('Packing Checklist', 'قائمة التحضير')}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {(lang === 'en' ? trip.checklistEn : trip.checklistAr).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600 py-1.5">
                          <div className="w-4 h-4 rounded border-2 border-amber-400/50 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'recommendations' && (
              <motion.div
                key="recommendations"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
                    {t('Recommendations Beyond the Trip', 'توصيات ما وراء الرحلة')}
                  </h2>
                  <p className="text-slate-500 text-sm mt-2">
                    {t(
                      'Restaurants, cafés, markets, and walks to explore during your free time',
                      'مطاعم ومقاهي وأسواق وأماكن تمشية لاستكشافها في أوقات فراغك'
                    )}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trip.recommendations.map((rec, i) => (
                    <RecommendationCard key={i} rec={rec} lang={lang} isRTL={isRTL} index={i} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
            {t('Interested in this trip?', 'مهتم بهذه الرحلة؟')}
          </h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">
            {t(
              'Contact us on WhatsApp to book your spot or learn more.',
              'تواصل معنا عبر الواتساب لحجز مكانك أو لمعرفة المزيد.'
            )}
          </p>
          <a
            href="https://wa.me/96560041555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t('Chat on WhatsApp', 'تواصل عبر الواتساب')}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
