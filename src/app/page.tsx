'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import AboutHome from '@/components/AboutHome';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSlider />
        
        {/* About Home Section */}
        <AboutHome />
      </main>
      <Footer />
    </>
  );
}
