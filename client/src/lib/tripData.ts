// ============================================================
// Design: Wanderlust Folio — Warm Luxury Travel Portfolio
// Colors: Ivory, Espresso, Terracotta, Brand Purple
// Typography: Cormorant Garamond (headings), Outfit (body), Tajawal (Arabic)
// ============================================================

export interface DayItinerary {
  day: number;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  image: string;
  isFreeDay?: boolean;
  freeTimeNote?: { en: string; ar: string };
}

export interface Accommodation {
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  image: string;
  daysEn: string;
  daysAr: string;
}

export interface Recommendation {
  nameEn: string;
  nameAr: string;
  typeEn: string;
  typeAr: string;
  descEn: string;
  descAr: string;
  image: string;
}

export interface TripData {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  heroImage: string;
  cardImage: string;
  durationEn: string;
  durationAr: string;
  dateEn: string;
  dateAr: string;
  itinerary: DayItinerary[];
  accommodations: Accommodation[];
  includedEn: string[];
  includedAr: string[];
  notIncludedEn: string[];
  notIncludedAr: string[];
  termsEn: string[];
  termsAr: string[];
  recommendations: Recommendation[];
  checklistEn?: string[];
  checklistAr?: string[];
}

export const IMAGES = {
  logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/UuZPZMwvBwULWaAe.png',
  logoBDPurple: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/jpViiZQJiWJYEgpf.png',
  logoBDWhite: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/ItoNgHpeXRpIqeoJ.png',
  logoFTUWhite: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/rebdwVahZqqhYhwp.png',
  heroMain: 'https://private-us-east-1.manuscdn.com/sessionFile/s7jgAHXXm2bjEgRfshaSFL/sandbox/pRkTD2rkVVzoEB6xoyONzV-img-1_1771267466000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdqZ0FIWFhtMmJqRWdSZnNoYVNGTC9zYW5kYm94L3BSa1REMnJrVlZ6b0VCNnhveU9OelYtaW1nLTFfMTc3MTI2NzQ2NjAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PUNzgkBGLEslKW~fboPlAUdC2pppwqwBj-xOsM7C2ti2hu112D8SNblbmlcfGcoVn1PRds3ZE8ol2jUnG9XLxr305lfLNbCdDNfCLKD6jFb1wCJwOg~kcDYjcjRja0I2YLmjfyHCT1-MOnIAeZ7A4qh4EmmYZmhisr7mzr6SRj5U1cfLoqi6bL9A7ldPVA2jK~r8HeTeM1W0HoptIHFdw-ULdV3iWMo8YShTFRcGW2v-Xqs2Ja6RzMpVjnnN5LphvSWYpRuzLqcQK1km3DcwTtNvmvR4l02vFYBao~p7rqK-VosAUqHsKUeNDoK5m~nF1zXjJMuvfJDc1BUZBHOMKw__',
  heroScotland: 'https://private-us-east-1.manuscdn.com/sessionFile/s7jgAHXXm2bjEgRfshaSFL/sandbox/pRkTD2rkVVzoEB6xoyONzV-img-2_1771267455000_na1fn_aGVyby1zY290bGFuZA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdqZ0FIWFhtMmJqRWdSZnNoYVNGTC9zYW5kYm94L3BSa1REMnJrVlZ6b0VCNnhveU9OelYtaW1nLTJfMTc3MTI2NzQ1NTAwMF9uYTFmbl9hR1Z5YnkxelkyOTBiR0Z1WkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KTjbMEHL9gWyropPaeBdzIIfuxG8IYfDXoDPDluB~dNdHwwPygWf9E14nDg~PQI9F3JKYQSby1MkHGuNiOU3TrR0sR0nfFC4Fs~X0oYvHLi0HoOCt5C2bIVI9d-z6ewXpAkDNKMJl~Kqw9fdx0EPLK4GgwJs-shU7yOnWxpyz5jrWY7rcZ3xT~4g49NxZqPwjctDk6~eo2bYIMsSsotIu3yxItWnqX51ULHZJ~0FwiEVtxoXaCDLL19eRicCwu59HG4gJOKBG3~5llktivAeW7P4L~XOmGIjFXtTw~LrdE12J3rtv3IIl7iUfJ2Zx1Cnk3tK4tPDHB3TZAD5gyhHKw__',
  heroSouthAfrica: 'https://private-us-east-1.manuscdn.com/sessionFile/s7jgAHXXm2bjEgRfshaSFL/sandbox/pRkTD2rkVVzoEB6xoyONzV-img-3_1771267459000_na1fn_aGVyby1zb3V0aGFmcmljYQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvczdqZ0FIWFhtMmJqRWdSZnNoYVNGTC9zYW5kYm94L3BSa1REMnJrVlZ6b0VCNnhveU9OelYtaW1nLTNfMTc3MTI2NzQ1OTAwMF9uYTFmbl9hR1Z5YnkxemIzVjBhR0ZtY21sallRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ghos8Uko94RUBEUEY4BF8hzb-wTJtkvSUr02IUv6zrFf8fWs81JgdRmWs2SO7CfHzA4O9h27zJDYvFoKwNjeKqeTiH2TP3PsDs8mYem0385YnODDJtbLNFwmp5pArjyLOXrHXnNUw1OtTfnDjTBP2Tyg1Lc9igBn1jKKPpxLWUPKRggPgzpHRXUXy~wMLJwCdHc12cjLoOxgh4WrbiF8W7BO-Cwy4n6X4mRdIoEfDgx3X1qtfdOd0YfDFi4IQALpg-lCs8y0WhJ2pq~PKgk2NbiCsBTWe4yyxJL3h-gqLXs--HPZJdbvXBhDHcc1BModHmnZf1HJLKY5tLqut76lrg__',
  // Scotland images
  lochLomond: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/kXMImBAwojxmatdk.jpg',
  cameronHouse: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/AwyOaxtnhCVRoDWH.jpg',
  glencoe: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/ATlerlSjaogCJiTl.jpg',
  jacobiteTrain: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/mFTVSeMlWvatyFEa.jpeg',
  oban: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/HpewWyZNNVgSADaQ.jpg',
  glasgow: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/bNoSJWPTsulIRySu.jpg',
  lochLomondTrossachs: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/vSmNZMBsCHRzlFmO.jpg',
  benNevis: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/usiIrzifoaMEBpSx.jpg',
  harryPotterViaduct: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/iPDkbfrgxhKYMSvM.jpg',
  luss: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/wuWzWDSBaPAYStmO.jpg',
  // South Africa images
  tableMountain: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/mbcIUjLxlGaCwqbY.jpg',
  boKaap: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/VxsLvoKcFQjFLgUN.jpg',
  bouldersBeach: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/SdCWRkSKHNSSumZJ.jpg',
  capePoint: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/ZPurETqivvBohYgr.jpg',
  tsitsikamma: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/NGsySjZnJKEktSuR.jpg',
  paragliding: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/iIZJWGAHYIHrKxdc.jpg',
  elephant: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/YRcxIdxddsMQZxwr.jpg',
  capeCanopy: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/FwAHUVtOENGeVDOt.jpg',
  kirstenbosch: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/cxxRrSijrLFMgjrI.jpg',
  botlierskop: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/LRIvcYsZquhSgBje.jpg',
  tsitsikammaCoast: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/EPYBtqUHhTizEJrA.jpg',
  tsitsikammaForest: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/fzhHmrLNqGWCTdVY.jpg',
  boKaapHouses: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/sVrVVwxgvZCmzDqV.jpg',
  capeCanopyTour: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/DNziKDtWhqFGeIDL.jpg',
  paraglidingCT: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/xcclsOBOsLdQQnhd.jpg',
};

export const scotlandTrip: TripData = {
  id: 'scotland',
  titleEn: 'Trip to Scotland',
  titleAr: 'رحلة إلى اسكتلندا',
  subtitleEn: 'Explore the majestic Highlands, ancient castles, and breathtaking lochs',
  subtitleAr: 'استكشف المرتفعات المهيبة والقلاع العريقة والبحيرات الخلابة',
  heroImage: IMAGES.heroScotland,
  cardImage: IMAGES.glencoe,
  durationEn: '10 Days',
  durationAr: '١٠ أيام',
  dateEn: 'Coming Soon',
  dateAr: 'قريباً',
  itinerary: [
    {
      day: 0,
      titleEn: 'Arrival Day',
      titleAr: 'يوم الوصول',
      descEn: 'Arrival at Glasgow Airport, transfer to Cameron House Hotel, Loch Lomond. Breakfast included with limited use of the spa facilities.',
      descAr: 'الوصول إلى مطار غلاسكو، والانتقال إلى فندق كاميرون هاوس، بحيرة لوموند. الإفطار مشمول مع استخدام محدود لمرافق السبا.',
      image: IMAGES.cameronHouse,
    },
    {
      day: 1,
      titleEn: 'Secret Island Experience',
      titleAr: 'تجربة الجزيرة السرية',
      descEn: 'Retreat Scotland, Secret Island Experience. Collection and return by boat from either Cameron House or Balloch Pier.',
      descAr: 'ملاذ اسكتلندا، تجربة الجزيرة السرية. التجميع والعودة بالقارب من كاميرون هاوس أو رصيف بالوخ.',
      image: IMAGES.lochLomond,
    },
    {
      day: 2,
      titleEn: 'Canyon Experience',
      titleAr: 'تجربة الوادي',
      descEn: 'Canyon Experience at Lettermay Lochgoilhead. Full day canyon adventure, followed by dinner at The Shorehouse Lochgoilhead.',
      descAr: 'تجربة الوادي في ليترماي لوخغويلهيد. مغامرة وادي ليوم كامل، يليها عشاء في ذا شورهاوس لوخغويلهيد.',
      image: IMAGES.lochLomondTrossachs,
    },
    {
      day: 3,
      titleEn: 'Loch Lomond Cruise & Tree Top',
      titleAr: 'رحلة بحيرة لوموند وقمم الأشجار',
      descEn: 'Half day Cruise Loch Lomond Experience with a visit to Luss village. 2 Hour Tree Top Experience with Go Wild Loch Lomond.',
      descAr: 'رحلة نصف يوم في بحيرة لوموند مع زيارة قرية لوس. تجربة قمم الأشجار لمدة ساعتين مع Go Wild Loch Lomond.',
      image: IMAGES.luss,
    },
    {
      day: 4,
      titleEn: 'Off Road Driving Adventure',
      titleAr: 'مغامرة القيادة على الطرق الوعرة',
      descEn: 'Half Day Off Road Driving Adventure. The remainder of the day can be used to enjoy the hotel facilities or transfer via Glencoe to Fort William.',
      descAr: 'مغامرة القيادة على الطرق الوعرة لنصف يوم. يمكن استخدام بقية اليوم للاستمتاع بمرافق الفندق أو الانتقال عبر غلينكو إلى فورت ويليام.',
      image: IMAGES.glencoe,
      isFreeDay: true,
      freeTimeNote: { en: 'Half day free — enjoy hotel spa or explore Glencoe', ar: 'نصف يوم حر — استمتع بسبا الفندق أو استكشف غلينكو' },
    },
    {
      day: 5,
      titleEn: 'Transfer to The Highlands',
      titleAr: 'الانتقال إلى المرتفعات',
      descEn: 'Transfer to Glencoe/Fort William region for multiple days. Beautiful region of The Highlands — you must at least spend a day there!',
      descAr: 'الانتقال إلى منطقة غلينكو/فورت ويليام لعدة أيام. منطقة جميلة من المرتفعات — يجب أن تقضي يوماً واحداً على الأقل هناك!',
      image: IMAGES.glencoe,
    },
    {
      day: 6,
      titleEn: 'Day Trip to Oban',
      titleAr: 'رحلة يومية إلى أوبان',
      descEn: 'Oban, day trip from Glencoe/Fort William. A large fishing port with the ability to go to many islands for the day or half day.',
      descAr: 'أوبان، رحلة يومية من غلينكو/فورت ويليام. ميناء صيد كبير مع إمكانية الذهاب إلى العديد من الجزر ليوم كامل أو نصف يوم.',
      image: IMAGES.oban,
    },
    {
      day: 7,
      titleEn: 'Hike Ben Nevis',
      titleAr: 'تسلق بن نيفيس',
      descEn: 'Hike Ben Nevis, the largest mountain in the UK. Approximately 6-7 hours of hiking through stunning Highland scenery.',
      descAr: 'تسلق بن نيفيس، أكبر جبل في المملكة المتحدة. حوالي ٦-٧ ساعات من المشي عبر مناظر المرتفعات الخلابة.',
      image: IMAGES.benNevis,
    },
    {
      day: 8,
      titleEn: 'Harry Potter Train & Coastal Towns',
      titleAr: 'قطار هاري بوتر والمدن الساحلية',
      descEn: 'Harry Potter Train experience. Mallaig and Arisaig are lovely coastal towns with beautiful beaches. Depending on timings there may be an opportunity to take a boat to Skye or Knoydart.',
      descAr: 'تجربة قطار هاري بوتر. مالايغ وأريسايغ مدن ساحلية جميلة بشواطئ رائعة. حسب التوقيت قد تتاح فرصة لأخذ قارب إلى سكاي أو نويدارت.',
      image: IMAGES.harryPotterViaduct,
    },
    {
      day: 9,
      titleEn: 'Glasgow City Day',
      titleAr: 'يوم مدينة غلاسكو',
      descEn: 'Return to Glasgow area. Opportunity to spend some time in Glasgow City — sightseeing, shopping, and exploring the vibrant city.',
      descAr: 'العودة إلى منطقة غلاسكو. فرصة لقضاء بعض الوقت في مدينة غلاسكو — مشاهدة المعالم والتسوق واستكشاف المدينة النابضة بالحياة.',
      image: IMAGES.glasgow,
      isFreeDay: true,
      freeTimeNote: { en: 'Free day to explore Glasgow at your own pace', ar: 'يوم حر لاستكشاف غلاسكو على راحتك' },
    },
    {
      day: 10,
      titleEn: 'Departure',
      titleAr: 'المغادرة',
      descEn: 'Flight from Glasgow or Edinburgh. End of an unforgettable Scottish adventure!',
      descAr: 'الرحلة من غلاسكو أو إدنبرة. نهاية مغامرة اسكتلندية لا تُنسى!',
      image: IMAGES.glasgow,
    },
  ],
  accommodations: [
    {
      nameEn: 'Cameron House Hotel',
      nameAr: 'فندق كاميرون هاوس',
      descEn: 'A luxury 5-star hotel on the banks of Loch Lomond with spa facilities, fine dining, and stunning views of the Scottish countryside.',
      descAr: 'فندق فاخر ٥ نجوم على ضفاف بحيرة لوموند مع مرافق سبا ومطاعم راقية وإطلالات خلابة على الريف الاسكتلندي.',
      image: IMAGES.cameronHouse,
      daysEn: 'Arrival — Day 4',
      daysAr: 'الوصول — اليوم ٤',
    },
    {
      nameEn: 'Glencoe / Fort William Region',
      nameAr: 'منطقة غلينكو / فورت ويليام',
      descEn: 'Accommodation in the heart of the Scottish Highlands, surrounded by dramatic mountain scenery and close to Ben Nevis.',
      descAr: 'إقامة في قلب المرتفعات الاسكتلندية، محاطة بمناظر جبلية مذهلة وقريبة من بن نيفيس.',
      image: IMAGES.glencoe,
      daysEn: 'Day 5 — Day 8',
      daysAr: 'اليوم ٥ — اليوم ٨',
    },
  ],
  includedEn: [
    'Airport transfers and transportation throughout the trip',
    'Hotel accommodation with breakfast',
    'All scheduled activities and experiences',
    'Professional guide services',
    'Limited spa access at Cameron House',
  ],
  includedAr: [
    'التوصيل من وإلى المطار والمواصلات طوال الرحلة',
    'إقامة فندقية مع إفطار',
    'جميع الأنشطة والتجارب المجدولة',
    'خدمات مرشد محترف',
    'وصول محدود للسبا في كاميرون هاوس',
  ],
  notIncludedEn: [
    'International flights',
    'Dinners and meals outside of inclusion parameters',
    'Activities not stipulated on the agreed schedule',
    'Personal shopping and souvenirs',
    'Travel insurance',
  ],
  notIncludedAr: [
    'الرحلات الدولية',
    'العشاء والوجبات خارج نطاق الشمول',
    'الأنشطة غير المنصوص عليها في الجدول المتفق عليه',
    'التسوق الشخصي والهدايا التذكارية',
    'تأمين السفر',
  ],
  termsEn: [
    'Full payment is required to confirm your booking.',
    'Cancellation policy: Cancellations made 30 days or more before departure will receive a full refund minus administrative fees. Cancellations within 30 days of departure are non-refundable.',
    'The trip organizer reserves the right to modify the itinerary due to weather conditions, safety concerns, or unforeseen circumstances.',
    'Participants must have a valid passport with at least 6 months validity from the travel date.',
    'Travel insurance is strongly recommended for all participants.',
    'The organizer is not liable for any personal injury, loss, or damage during the trip.',
    'Participants are expected to follow the guide\'s instructions at all times for safety purposes.',
    'Any additional activities not included in the itinerary are at the participant\'s own expense and risk.',
  ],
  termsAr: [
    'يجب الدفع الكامل لتأكيد الحجز.',
    'سياسة الإلغاء: الإلغاء قبل ٣٠ يوماً أو أكثر من المغادرة سيحصل على استرداد كامل مع خصم الرسوم الإدارية. الإلغاء خلال ٣٠ يوماً من المغادرة غير قابل للاسترداد.',
    'يحتفظ منظم الرحلة بالحق في تعديل البرنامج بسبب الظروف الجوية أو مخاوف السلامة أو ظروف غير متوقعة.',
    'يجب أن يكون لدى المشاركين جواز سفر ساري المفعول لمدة ٦ أشهر على الأقل من تاريخ السفر.',
    'يُنصح بشدة بتأمين السفر لجميع المشاركين.',
    'المنظم غير مسؤول عن أي إصابة شخصية أو خسارة أو ضرر أثناء الرحلة.',
    'يُتوقع من المشاركين اتباع تعليمات المرشد في جميع الأوقات لأغراض السلامة.',
    'أي أنشطة إضافية غير مشمولة في البرنامج تكون على نفقة ومسؤولية المشارك.',
  ],
  recommendations: [
    {
      nameEn: 'The Shorehouse Restaurant',
      nameAr: 'مطعم ذا شورهاوس',
      typeEn: 'Restaurant',
      typeAr: 'مطعم',
      descEn: 'Fresh seafood restaurant in Lochgoilhead with stunning waterfront views. Perfect for a relaxing dinner after a day of adventure.',
      descAr: 'مطعم مأكولات بحرية طازجة في لوخغويلهيد مع إطلالات خلابة على الواجهة البحرية. مثالي لعشاء هادئ بعد يوم من المغامرة.',
      image: IMAGES.lochLomondTrossachs,
    },
    {
      nameEn: 'Luss Village',
      nameAr: 'قرية لوس',
      typeEn: 'Village Walk',
      typeAr: 'جولة في القرية',
      descEn: 'A charming conservation village on the banks of Loch Lomond with beautiful cottages, craft shops, and a sandy beach.',
      descAr: 'قرية محمية ساحرة على ضفاف بحيرة لوموند مع أكواخ جميلة ومحلات حرف يدوية وشاطئ رملي.',
      image: IMAGES.luss,
    },
    {
      nameEn: 'Glasgow City Centre',
      nameAr: 'وسط مدينة غلاسكو',
      typeEn: 'Shopping & Sightseeing',
      typeAr: 'تسوق ومشاهدة معالم',
      descEn: 'Buchanan Street and the Style Mile offer world-class shopping. Visit the Kelvingrove Art Gallery and George Square for culture and history.',
      descAr: 'شارع بوكانان وميل الأناقة يقدمان تسوقاً عالمياً. زر معرض كيلفينغروف للفنون وساحة جورج للثقافة والتاريخ.',
      image: IMAGES.glasgow,
    },
    {
      nameEn: 'Oban Seafood Hut',
      nameAr: 'كوخ المأكولات البحرية في أوبان',
      typeEn: 'Street Food',
      typeAr: 'طعام شارع',
      descEn: 'Famous green seafood shack on the pier. Try the fresh langoustines, oysters, and smoked salmon — a must-visit in Oban!',
      descAr: 'كوخ المأكولات البحرية الأخضر الشهير على الرصيف. جرب اللانغوستين الطازج والمحار والسلمون المدخن — زيارة لا بد منها في أوبان!',
      image: IMAGES.oban,
    },
    {
      nameEn: 'Fort William High Street',
      nameAr: 'شارع فورت ويليام الرئيسي',
      typeEn: 'Shopping & Cafés',
      typeAr: 'تسوق ومقاهي',
      descEn: 'Explore the charming high street with outdoor gear shops, cozy cafés, and traditional Scottish pubs. Great for picking up hiking essentials.',
      descAr: 'استكشف الشارع الرئيسي الساحر مع محلات معدات الهواء الطلق والمقاهي المريحة والحانات الاسكتلندية التقليدية. رائع لشراء مستلزمات المشي.',
      image: IMAGES.glencoe,
    },
  ],
};

export const southAfricaTrip: TripData = {
  id: 'south-africa',
  titleEn: 'Trip to South Africa',
  titleAr: 'رحلة إلى جنوب أفريقيا',
  subtitleEn: 'Discover the wild beauty of Cape Town, safaris, and coastal adventures',
  subtitleAr: 'اكتشف الجمال البري لكيب تاون والسفاري والمغامرات الساحلية',
  heroImage: IMAGES.heroSouthAfrica,
  cardImage: IMAGES.tableMountain,
  durationEn: '12 Days',
  durationAr: '١٢ يوم',
  dateEn: 'March 20 — 31, 2026',
  dateAr: '٢٠ — ٣١ مارس ٢٠٢٦',
  itinerary: [
    {
      day: 0,
      titleEn: 'Arrival Day — March 20',
      titleAr: 'يوم الوصول — ٢٠ مارس',
      descEn: 'Collection from Cape Town International Airport. Check into the hotel, relax and refresh. Group briefing at hotel.',
      descAr: 'الاستقبال من مطار كيب تاون الدولي. تسجيل الدخول في الفندق، الاسترخاء والانتعاش. إحاطة المجموعة في الفندق.',
      image: IMAGES.tableMountain,
    },
    {
      day: 1,
      titleEn: 'Table Mountain & Bo-Kaap — March 21',
      titleAr: 'جبل الطاولة وبو كاب — ٢١ مارس',
      descEn: 'Table Mountain aerial cableway experience. Kirstenbosch Botanical Gardens walk. Tour through the Bo-Kaap Muslim community.',
      descAr: 'تجربة التلفريك الجوي لجبل الطاولة. جولة في حدائق كيرستنبوش النباتية. جولة في حي بو كاب المسلم.',
      image: IMAGES.boKaap,
    },
    {
      day: 2,
      titleEn: 'Boulders Beach & Cape Point — March 22',
      titleAr: 'شاطئ بولدرز وكيب بوينت — ٢٢ مارس',
      descEn: 'Boulders Beach penguin colony visit. Cape of Good Hope (Cape Point) — the southwestern tip of Africa.',
      descAr: 'زيارة مستعمرة البطريق في شاطئ بولدرز. رأس الرجاء الصالح (كيب بوينت) — الطرف الجنوبي الغربي لأفريقيا.',
      image: IMAGES.bouldersBeach,
    },
    {
      day: 3,
      titleEn: 'Driving Day to George — March 23',
      titleAr: 'يوم القيادة إلى جورج — ٢٣ مارس',
      descEn: 'Depart from Cape Town and drive to George along the scenic Garden Route. Check into hotel. Briefing at hotel.',
      descAr: 'المغادرة من كيب تاون والقيادة إلى جورج عبر طريق الحديقة الخلاب. تسجيل الدخول في الفندق. إحاطة في الفندق.',
      image: IMAGES.tsitsikamma,
      isFreeDay: true,
      freeTimeNote: { en: 'Scenic drive day — enjoy the Garden Route views', ar: 'يوم قيادة خلاب — استمتع بمناظر طريق الحديقة' },
    },
    {
      day: 4,
      titleEn: 'Canyon Experience — March 24',
      titleAr: 'تجربة الوادي — ٢٤ مارس',
      descEn: 'Guided Canyon experience in George. An adrenaline-pumping adventure through stunning natural gorges.',
      descAr: 'تجربة الوادي بإرشاد في جورج. مغامرة مليئة بالأدرينالين عبر الأخاديد الطبيعية المذهلة.',
      image: IMAGES.tsitsikammaCoast,
    },
    {
      day: 5,
      titleEn: 'Safari at Botlierskop — March 25',
      titleAr: 'سفاري في بوتليرسكوب — ٢٥ مارس',
      descEn: 'Botlierskop South African Safari experience with horseback ride through the private game reserve.',
      descAr: 'تجربة سفاري جنوب أفريقيا في بوتليرسكوب مع ركوب الخيل عبر المحمية الخاصة.',
      image: IMAGES.botlierskop,
    },
    {
      day: 6,
      titleEn: 'Tsitsikamma Kayaking — March 26',
      titleAr: 'التجديف في تسيتسيكاما — ٢٦ مارس',
      descEn: 'Tsitsikamma National Park kayaking in the Storms River Mouth. Paddle through dramatic coastal scenery.',
      descAr: 'التجديف في حديقة تسيتسيكاما الوطنية في مصب نهر ستورمز. التجديف عبر مناظر ساحلية مذهلة.',
      image: IMAGES.tsitsikammaForest,
    },
    {
      day: 7,
      titleEn: 'Forest Zipline — March 27',
      titleAr: 'الانزلاق في الغابة — ٢٧ مارس',
      descEn: 'Cape Canopy Tour forest zipline. Soar through the treetops of an ancient forest on an exhilarating zipline adventure.',
      descAr: 'جولة انزلاق غابة كيب كانوبي. حلّق عبر قمم أشجار غابة قديمة في مغامرة انزلاق مثيرة.',
      image: IMAGES.capeCanopy,
    },
    {
      day: 8,
      titleEn: 'Elephant Sanctuary — March 28',
      titleAr: 'محمية الفيلة — ٢٨ مارس',
      descEn: 'Elephant sanctuary visit — walk with elephants and learn about conservation efforts in South Africa.',
      descAr: 'زيارة محمية الفيلة — المشي مع الفيلة والتعرف على جهود الحفاظ على البيئة في جنوب أفريقيا.',
      image: IMAGES.elephant,
    },
    {
      day: 9,
      titleEn: 'Return to Cape Town — March 29',
      titleAr: 'العودة إلى كيب تاون — ٢٩ مارس',
      descEn: 'Depart back to Cape Town. Check into hotel in Cape Town. Free evening to explore the city.',
      descAr: 'المغادرة والعودة إلى كيب تاون. تسجيل الدخول في الفندق في كيب تاون. مساء حر لاستكشاف المدينة.',
      image: IMAGES.tableMountain,
      isFreeDay: true,
      freeTimeNote: { en: 'Free evening in Cape Town', ar: 'مساء حر في كيب تاون' },
    },
    {
      day: 10,
      titleEn: 'Paragliding — March 30',
      titleAr: 'الطيران الشراعي — ٣٠ مارس',
      descEn: 'Paragliding in Cape Town from Signal Hill. Soar above the city with breathtaking views of Table Mountain and the Atlantic Ocean.',
      descAr: 'الطيران الشراعي في كيب تاون من تل سيغنال. حلّق فوق المدينة مع إطلالات خلابة على جبل الطاولة والمحيط الأطلسي.',
      image: IMAGES.paragliding,
    },
    {
      day: 11,
      titleEn: 'Departure — March 31',
      titleAr: 'المغادرة — ٣١ مارس',
      descEn: 'Departure to airport and back home. Trip complete — see you on the next adventure!',
      descAr: 'المغادرة إلى المطار والعودة للوطن. انتهت الرحلة — نراكم في المغامرة القادمة!',
      image: IMAGES.tableMountain,
    },
  ],
  accommodations: [
    {
      nameEn: 'Rockefeller Hotel & Residence — Cape Town',
      nameAr: 'فندق روكفلر آند ريزيدنس — كيب تاون',
      descEn: '4-star luxury hotel in Cape Town\'s Foreshore district by Newmark Hotels. 194 guestrooms with free Wi-Fi, free breakfast, indoor & outdoor pool, air conditioning, and laundry service. Located at 12 Christiaan Barnard St, just 2 km from Zeitz MOCAA and 3 km from V&A Waterfront.',
      descAr: 'فندق ٤ نجوم فاخر في منطقة فورشور بكيب تاون من نيومارك هوتيلز. ١٩٤ غرفة مع واي فاي مجاني، إفطار مجاني، مسبح داخلي وخارجي، تكييف، وخدمة غسيل. يقع في ١٢ شارع كريستيان بارنارد، على بعد ٢ كم من متحف زايتز و٣ كم من واجهة V&A البحرية.',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/wUfoJEFCknXvxDwF.jpg',
      daysEn: 'March 20–23 & March 29–31',
      daysAr: '٢٠–٢٣ مارس و ٢٩–٣١ مارس',
    },
    {
      nameEn: 'Bayview Hotel — George',
      nameAr: 'فندق بايفيو — جورج',
      descEn: 'Bayview Hotel is a 4-star property in Plettenberg Bay on South Africa\'s iconic Garden Route. It offers comfortable en-suite rooms, free Wi-Fi, an onsite restaurant, outdoor pool, and easy access to beaches, shops and local attractions. The hotel is a short drive from George Airport and surrounded by scenic river and ocean views.',
      descAr: 'فندق بايفيو هو فندق ٤ نجوم في خليج بليتنبرغ على طريق الحديقة الشهير في جنوب أفريقيا. يوفر غرف مريحة مع حمامات خاصة، واي فاي مجاني، مطعم داخلي، مسبح خارجي، وسهولة الوصول إلى الشواطئ والمحلات والمعالم المحلية. الفندق على بعد مسافة قصيرة بالسيارة من مطار جورج ومحاط بإطلالات خلابة على النهر والمحيط.',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/112626483/PjYkTdFxmpsoOehi.jpg',
      daysEn: 'March 23–29',
      daysAr: '٢٣–٢٩ مارس',
    },
  ],
  includedEn: [
    'Shuttle, driver and guide services throughout the trip',
    'Hotels and accommodation',
    'Breakfasts and lunches (special dietary requirements catered for)',
    'All activities costs on the schedule',
  ],
  includedAr: [
    'خدمات النقل والسائق والمرشد طوال الرحلة',
    'الفنادق والإقامة',
    'وجبات الإفطار والغداء (يتم تلبية المتطلبات الغذائية الخاصة)',
    'جميع تكاليف الأنشطة في الجدول',
  ],
  notIncludedEn: [
    'International flights',
    'Dinners and meals outside of inclusion parameters',
    'Activities not stipulated on agreed schedule',
    'Personal shopping',
    'Travel insurance',
  ],
  notIncludedAr: [
    'الرحلات الدولية',
    'العشاء والوجبات خارج نطاق الشمول',
    'الأنشطة غير المنصوص عليها في الجدول المتفق عليه',
    'التسوق الشخصي',
    'تأمين السفر',
  ],
  termsEn: [
    'Full payment is required to confirm your booking.',
    'Cancellation policy: Cancellations made 30 days or more before departure will receive a full refund minus administrative fees. Cancellations within 30 days of departure are non-refundable.',
    'Client should be able to swim. If you are not confident in the water, bring it to the guide\'s attention.',
    'Client should have a basic level of fitness and physical ability as we will be hiking and canyoning, as well as doing other physically demanding activities throughout the trip.',
    'The trip organizer reserves the right to modify the itinerary due to weather conditions, safety concerns, or unforeseen circumstances.',
    'Participants must have a valid passport with at least 6 months validity from the travel date.',
    'Should you have specific dietary constraints and requirements, please bring it to our attention and we will cater for you accordingly.',
    'We will encourage you to step outside of your comfort zone and experience as many new things as possible, but we will never force you to do anything you are not comfortable with.',
    'The organizer is not liable for any personal injury, loss, or damage during the trip.',
  ],
  termsAr: [
    'يجب الدفع الكامل لتأكيد الحجز.',
    'سياسة الإلغاء: الإلغاء قبل ٣٠ يوماً أو أكثر من المغادرة سيحصل على استرداد كامل مع خصم الرسوم الإدارية. الإلغاء خلال ٣٠ يوماً من المغادرة غير قابل للاسترداد.',
    'يجب أن يكون العميل قادراً على السباحة. إذا لم تكن واثقاً في الماء، أبلغ المرشد.',
    'يجب أن يتمتع العميل بمستوى أساسي من اللياقة البدنية والقدرة الجسدية حيث سنقوم بالمشي والتسلق في الأودية، بالإضافة إلى أنشطة بدنية أخرى طوال الرحلة.',
    'يحتفظ منظم الرحلة بالحق في تعديل البرنامج بسبب الظروف الجوية أو مخاوف السلامة أو ظروف غير متوقعة.',
    'يجب أن يكون لدى المشاركين جواز سفر ساري المفعول لمدة ٦ أشهر على الأقل من تاريخ السفر.',
    'إذا كانت لديك قيود أو متطلبات غذائية محددة، يرجى إبلاغنا وسنلبي احتياجاتك وفقاً لذلك.',
    'سنشجعك على الخروج من منطقة راحتك وتجربة أكبر عدد ممكن من الأشياء الجديدة، لكننا لن نجبرك أبداً على فعل أي شيء لا ترتاح له.',
    'المنظم غير مسؤول عن أي إصابة شخصية أو خسارة أو ضرر أثناء الرحلة.',
  ],
  recommendations: [
    {
      nameEn: 'V&A Waterfront',
      nameAr: 'واجهة V&A البحرية',
      typeEn: 'Shopping & Dining',
      typeAr: 'تسوق ومطاعم',
      descEn: 'Cape Town\'s premier shopping and dining destination with over 450 retail stores, restaurants, and entertainment venues overlooking the harbour.',
      descAr: 'وجهة التسوق والمطاعم الأولى في كيب تاون مع أكثر من ٤٥٠ متجراً ومطعماً ومكاناً ترفيهياً مطلاً على الميناء.',
      image: IMAGES.tableMountain,
    },
    {
      nameEn: 'Bo-Kaap Neighborhood',
      nameAr: 'حي بو كاب',
      typeEn: 'Cultural Walk',
      typeAr: 'جولة ثقافية',
      descEn: 'The colorful Muslim quarter of Cape Town with vibrant houses, spice shops, and authentic Cape Malay cuisine. Try traditional bobotie and koeksisters.',
      descAr: 'الحي المسلم الملون في كيب تاون مع منازل نابضة بالحياة ومحلات التوابل والمطبخ الماليزي الكيبي الأصيل. جرب البوبوتي والكويكسيسترز التقليدية.',
      image: IMAGES.boKaapHouses,
    },
    {
      nameEn: 'Camps Bay Beach',
      nameAr: 'شاطئ كامبس باي',
      typeEn: 'Beach & Cafés',
      typeAr: 'شاطئ ومقاهي',
      descEn: 'A stunning white sand beach backed by the Twelve Apostles mountain range. Lined with trendy restaurants and cocktail bars — perfect for sunset.',
      descAr: 'شاطئ رملي أبيض مذهل مع سلسلة جبال الاثني عشر رسولاً في الخلفية. مصطف بالمطاعم العصرية وبارات الكوكتيل — مثالي لغروب الشمس.',
      image: IMAGES.capePoint,
    },
    {
      nameEn: 'Old Biscuit Mill Market',
      nameAr: 'سوق أولد بسكت ميل',
      typeEn: 'Market',
      typeAr: 'سوق',
      descEn: 'The famous Neighbourgoods Market in Woodstock (Saturdays). Artisan food stalls, craft vendors, and live music in a converted factory.',
      descAr: 'سوق نيبورغودز الشهير في وودستوك (أيام السبت). أكشاك طعام حرفية وباعة حرف يدوية وموسيقى حية في مصنع محول.',
      image: IMAGES.kirstenbosch,
    },
    {
      nameEn: 'Knysna Waterfront',
      nameAr: 'واجهة نيسنا البحرية',
      typeEn: 'Dining & Sightseeing',
      typeAr: 'مطاعم ومشاهدة معالم',
      descEn: 'A charming waterfront town on the Garden Route. Famous for fresh oysters, the Knysna Heads, and beautiful lagoon views.',
      descAr: 'مدينة واجهة بحرية ساحرة على طريق الحديقة. مشهورة بالمحار الطازج ورؤوس نيسنا وإطلالات البحيرة الجميلة.',
      image: IMAGES.tsitsikammaCoast,
    },
  ],
  checklistEn: [
    'Hiking boots', 'Trainers / walking shoes', 'Sandals / slippers', 'Casual shoes',
    'Swimming attire', 'Dry fit / practical active wear', 'Casual wear', 'Hiking wear',
    'Hats / Caps (wide brimmed for hot days)', 'Wind breaker', 'Light raincoat',
    'Sunglasses', 'Day backpack', 'Camera / GoPro', 'Quick dry towel',
    'Power bank / chargers', 'Universal plug adaptors',
    'Sunscreen (SPF 50+)', 'Bug spray / mosquito spray', 'Personal toiletries / medications', 'Personal first aid kit',
  ],
  checklistAr: [
    'أحذية مشي', 'أحذية رياضية', 'صنادل / شباشب', 'أحذية كاجوال',
    'ملابس سباحة', 'ملابس رياضية عملية', 'ملابس كاجوال', 'ملابس مشي',
    'قبعات (واسعة الحواف للأيام الحارة)', 'جاكيت مقاوم للرياح', 'معطف مطر خفيف',
    'نظارات شمسية', 'حقيبة ظهر يومية', 'كاميرا / GoPro', 'منشفة سريعة الجفاف',
    'شاحن متنقل', 'محولات كهربائية عالمية',
    'واقي شمس (SPF 50+)', 'بخاخ حشرات', 'أدوات تجميل / أدوية شخصية', 'حقيبة إسعافات أولية',
  ],
};

export const trips = [scotlandTrip, southAfricaTrip];
