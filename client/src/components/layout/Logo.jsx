import React from 'react';

function Logo() {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/logo.png`}
      alt="Elite Wealth Club"
      className="elite-header__logo"
    />
  );
}

export default Logo;
