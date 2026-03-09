import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './EliteHeader.css';

const MENU_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
];

function EliteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="elite-header" role="banner">
        <div className="elite-header__left">
          <Logo />
        </div>
        <div className="elite-header__right">
          <a href="#fact-sheet" className="elite-header__btn elite-header__btn--download">
            <span>Download Fact Sheet</span>
            <svg className="elite-header__btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <a href="#join" className="elite-header__btn elite-header__btn--join">
            Join Now
          </a>
          <button
            type="button"
            className="elite-header__menu-btn"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="elite-header__menu-icon" aria-hidden="true">
              <span className="elite-header__menu-line" />
              <span className="elite-header__menu-line" />
              <span className="elite-header__menu-line" />
            </span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div
            className="menu-overlay__panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menu-overlay__top">
              <div className="menu-overlay__logo-wrap">
                <Logo />
              </div>
              <button
                type="button"
                className="menu-overlay__close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="menu-overlay__nav">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="menu-overlay__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                className="menu-overlay__contact-btn"
                onClick={() => { setIsMenuOpen(false); navigate('/contact'); }}
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default EliteHeader;
