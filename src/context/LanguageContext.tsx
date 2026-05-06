'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    products: 'Products',
    projects: 'Projects',
    about: 'About Us',
    contact: 'Contact Us',
    search: 'Search',
    cart: 'Cart',
    user: 'User',
    langName: 'العربية',
    slide1Title: 'Transform Your Workspace with Custom - Made Office Furniture in Dubai',
    slide1Desc: 'Explore the latest high-performance workstations from a variety of workstation desks designed to boost productivity.',
    slide1Btn: 'Shop Now',
    slide2Title: 'Experience Perfect Comfort With BOSQ Office Chairs',
    slide2Desc: 'Choose your favourite Ergonomic office chairs designed for comfort, style, and productivity from BOSQ\'s full range of chairs that suit every purpose.',
    slide2Btn: 'Explore All Chairs',
    slide3Title: 'Premium Workstations for Modern Workspaces',
    slide3Desc: 'Explore the latest high-performance workstations from a variety of workstation desks designed to boost productivity.',
    slide3Btn: 'Explore Workspace',
    viewMore: 'View More',
    footerDesc: 'Transforming businesses with innovative solutions. We build digital experiences that matter.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    rights: 'BOSQ. All rights reserved.',
    aboutTitle: 'About BOSQ',
    aboutDesc1: 'We are a team of passionate creators, developers, and strategists dedicated to delivering exceptional results for our clients.',
    homeAboutHeading: 'Crafting Innovative Workspace Solutions Since 2012',
    homeAboutText: 'BOSQ started in India in 2012, specializing in ergonomic seating for top corporations. Known for design, innovation, and quality, we\'ve earned the trust of clients like BMW, Audi, and Siemens. Now a leading brand in the UAE, we\'re poised for expansion across the GCC.',
    readMore: 'Read More',
    enquiryNow: 'Enquiry Now',
    whoWeAre: 'Who We Are',
    whoWeAreDesc: 'Founded with a vision to revolutionize the digital landscape, BOSQ combines cutting-edge technology with stunning design to create solutions that drive real business value.',
    expertTeam: 'Expert Team',
    provenTrackRecord: 'Proven Track Record',
    innovativeApproach: 'Innovative Approach',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive digital solutions tailored to your specific needs.',
    service1Title: 'Web Development',
    service1Desc: 'Custom, responsive websites built with modern technologies.',
    service2Title: 'UI/UX Design',
    service2Desc: 'Intuitive and engaging user interfaces that delight your customers.',
    service3Title: 'Digital Marketing',
    service3Desc: 'Data-driven strategies to grow your online presence and reach.',
    service4Title: 'Brand Strategy',
    service4Desc: 'Cohesive branding that communicates your core values effectively.',
    ctaTitle: 'Ready to start your project?',
    ctaSubtitle: 'Let\'s create something amazing together.',
    ctaBtn: 'Get In Touch',
  },
  ar: {
    home: 'الرئيسية',
    products: 'المنتجات',
    projects: 'المشاريع',
    about: 'من نحن',
    contact: 'اتصل بنا',
    search: 'بحث',
    cart: 'عربة التسوق',
    user: 'المستخدم',
    langName: 'English',
    slide1Title: 'حول مساحة عملك مع أثاث مكتبي مصنوع خصيصاً في دبي',
    slide1Desc: 'اكتشف أحدث محطات العمل عالية الأداء المصممة لزيادة الإنتاجية.',
    slide1Btn: 'تسوق الآن',
    slide2Title: 'استمتع براحة مثالية مع كراسي المكتب من BOSQ',
    slide2Desc: 'اختر كراسي المكتب المريحة المفضلة لديك المصممة للراحة والأناقة والإنتاجية من مجموعة BOSQ الكاملة التي تناسب جميع الاستخدامات.',
    slide2Btn: 'استكشف جميع الكراسي',
    slide3Title: 'محطات عمل متميزة لمساحات العمل الحديثة',
    slide3Desc: 'اكتشف أحدث محطات العمل عالية الأداء المصممة لزيادة الإنتاجية.',
    slide3Btn: 'استكشف محطة العمل',
    viewMore: 'عرض المزيد',
    footerDesc: 'نحول الأعمال من خلال حلول مبتكرة. نبني تجارب رقمية تهمك.',
    quickLinks: 'روابط سريعة',
    contactUs: 'اتصل بنا',
    rights: 'BOSQ. جميع الحقوق محفوظة.',
    aboutTitle: 'عن BOSQ',
    aboutDesc1: 'نحن فريق من المبدعين والمطورين والاستراتيجيين الشغوفين المكرسين لتقديم نتائج استثنائية لعملائنا.',
    homeAboutHeading: 'ابتكار حلول مساحات العمل منذ عام 2012',
    homeAboutText: 'بدأت BOSQ في الهند في عام 2012 ، متخصصة في الجلوس المريح للشركات الكبرى. اشتهرنا بالتصميم والابتكار والجودة ، وقد كسبنا ثقة عملاء مثل BMW و Audi و Siemens. الآن كعلامة تجارية رائدة في الإمارات العربية المتحدة ، نحن مستعدون للتوسع عبر دول مجلس التعاون الخليجي.',
    readMore: 'اقرأ المزيد',
    enquiryNow: 'استفسر الآن',
    whoWeAre: 'من نحن',
    whoWeAreDesc: 'تأسست BOSQ برؤية لإحداث ثورة في المشهد الرقمي، حيث تجمع بين التكنولوجيا المتطورة والتصميم المذهل لإنشاء حلول تحقق قيمة تجارية حقيقية.',
    expertTeam: 'فريق خبير',
    provenTrackRecord: 'سجل حافل',
    innovativeApproach: 'نهج مبتكر',
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول رقمية شاملة مصممة خصيصًا لاحتياجاتك.',
    service1Title: 'تطوير الويب',
    service1Desc: 'مواقع ويب مخصصة ومتجاوبة مبنية بأحدث التقنيات.',
    service2Title: 'تصميم واجهة وتجربة المستخدم',
    service2Desc: 'واجهات مستخدم بديهية وجذابة تسعد عملائك.',
    service3Title: 'التسويق الرقمي',
    service3Desc: 'استراتيجيات تعتمد على البيانات لتنمية تواجدك والوصول عبر الإنترنت.',
    service4Title: 'استراتيجية العلامة التجارية',
    service4Desc: 'هوية متماسكة تنقل قيمك الأساسية بفعالية.',
    ctaTitle: 'جاهز لبدء مشروعك؟',
    ctaSubtitle: 'دعنا نصنع شيئًا رائعًا معًا.',
    ctaBtn: 'تواصل معنا',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
