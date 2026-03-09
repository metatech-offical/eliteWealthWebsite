import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Elite Wealth Club"
            className="header__logo-img"
          />
        </div>
        <nav className="header__nav">
          <a href="#fact-sheet" className="header__btn header__btn--secondary">
            Download Fact Sheet
          </a>
          <a href="#join" className="header__btn header__btn--primary">
            Join Now
          </a>
          <button
            type="button"
            className="header__menu-btn"
            aria-label="Open menu"
          >
            <span className="header__menu-icon" aria-hidden="true">
              <span className="header__menu-line" />
              <span className="header__menu-line" />
              <span className="header__menu-line" />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
