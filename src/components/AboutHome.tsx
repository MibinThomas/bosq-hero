'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutHome() {
  const { t } = useLanguage();

  return (
    <section className="about-home">
      <div className="about-home-bg">
        <div className="container">
          <div className="about-home-grid">
            <div className="about-home-image-wrapper">
              <img src="/images/home/about/image.png" alt="BOSQ Ergonomic Chair" className="about-home-chair" />
            </div>
            <div className="about-home-content">
              <h2 className="heading-dot" style={{ fontSize: '2.5rem', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                {t('homeAboutHeading')}
              </h2>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '600px' }}>
                {t('homeAboutText')}
              </p>
              <div className="about-home-buttons">
                <a href="#about" className="btn-about" style={{ backgroundColor: '#2b2b2b' }}>
                  {t('readMore')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
