'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="header-left">
        <button className="mobile-menu-btn icon-btn" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <div className="logo-container">
          <Link href="/">
            <img 
              src="/logo/BOSQ LOGO-02 (4).png" 
              alt="BOSQ ergonomic living" 
              className="logo-img"
              style={{ height: '50px', width: 'auto', display: 'block' }}
            />
          </Link>
        </div>
      </div>
      
      <nav className="nav-links">
        <Link href="/">{t('home')}</Link>
        <div className="nav-dropdown">
          <Link href="#products">{t('products')}</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginInlineStart: '4px' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <div className="nav-dropdown">
          <Link href="#projects">{t('projects')}</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginInlineStart: '4px' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <Link href="#about">{t('about')}</Link>
        <Link href="#contact">{t('contact')}</Link>
      </nav>

      <div className="header-actions">
        {/* Search Icon */}
        <button className="icon-btn" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        {/* Cart Icon */}
        <button className="icon-btn" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </button>
        {/* User Icon */}
        <button className="icon-btn" aria-label="User Account">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
        {/* Language Selector */}
        <div className="language-selector" onClick={toggleLanguage} style={{ userSelect: 'none' }}>
          {language === 'ar' ? (
            <svg width="18" height="18" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', border: '1px solid currentColor', flexShrink: 0 }}>
              <clipPath id="circle-clip">
                <circle cx="30" cy="30" r="30" />
              </clipPath>
              <g clipPath="url(#circle-clip)">
                <rect width="60" height="60" fill="#012169"/>
                <path d="M0 0L60 60M60 0L0 60" stroke="#FFF" strokeWidth="8"/>
                <path d="M0 0L60 60M60 0L0 60" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30 0V60M0 30H60" stroke="#FFF" strokeWidth="12"/>
                <path d="M30 0V60M0 30H60" stroke="#C8102E" strokeWidth="8"/>
              </g>
            </svg>
          ) : (
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', overflow: 'hidden', display: 'flex', border: '1px solid currentColor', flexShrink: 0 }}>
              <div style={{ width: '33%', backgroundColor: 'red' }}></div>
              <div style={{ width: '67%', display: 'flex', flexDirection: 'column' }}>
                 <div style={{ flex: 1, backgroundColor: 'green' }}></div>
                 <div style={{ flex: 1, backgroundColor: 'white' }}></div>
                 <div style={{ flex: 1, backgroundColor: 'black' }}></div>
              </div>
            </div>
          )}
          <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{t('langName')}</span>
        </div>
      </div>
    </header>
  );
}
