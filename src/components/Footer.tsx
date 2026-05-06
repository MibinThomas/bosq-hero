'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 className="heading-dot" style={{ color: 'white', marginBottom: '1.5rem' }}>BOSQ</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              {t('footerDesc')}
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>{t('quickLinks')}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
              <li><a href="/">{t('home')}</a></li>
              <li><a href="#about">{t('about')}</a></li>
              <li><a href="#products">{t('products')}</a></li>
              <li><a href="#contact">{t('contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>{t('contactUs')}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
              <li>Email: info@bosq.demo</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Tech Street, Digital City</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
