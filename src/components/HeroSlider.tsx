'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      title: t('slide1Title'),
      desc: t('slide1Desc'),
      image: '/images/home/hero/1200 x 625 px ws.webp',
      link: '#shop',
      linkText: t('slide1Btn')
    },
    {
      title: t('slide2Title'),
      desc: t('slide2Desc'),
      image: '/images/home/hero/1400 x 600 px ZenX (1).webp',
      link: '#chairs',
      linkText: t('slide2Btn')
    },
    {
      title: t('slide3Title'),
      desc: t('slide3Desc'),
      image: '/images/home/hero/1400 x 600 px conference (2).webp',
      link: '#workstations',
      linkText: t('slide3Btn')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const splitText = (text: string) => {
    let charCount = 0;
    return text.split(' ').map((word, wordIdx) => (
      <span key={wordIdx} style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
        {word.split('').map((char, charIdx) => {
          const delay = 0.2 + charCount++ * 0.03;
          return (
            <span key={charIdx} className="hero-char" style={{ animationDelay: `${delay}s` }}>
              {char}
            </span>
          );
        })}
        {/* Space between words */}
        {'\u00A0'}
      </span>
    ));
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className="slide-overlay"></div>
          <div className="slide-content-container">
            <div className="hero-text-box">
              <h1 className="hero-title heading-dot">
                {splitText(slide.title)}
              </h1>
              <p className="hero-desc">{slide.desc}</p>
              <div className="hero-buttons">
                <a href={slide.link} className="btn-hero">{slide.linkText}</a>
                <a href="#more" className="btn-hero outline">{t('viewMore')}</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="slider-arrow left" onClick={prevSlide} aria-label="Previous slide">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="slider-arrow right" onClick={nextSlide} aria-label="Next slide">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </section>
  );
}
