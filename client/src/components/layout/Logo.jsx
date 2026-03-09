import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  return (
    <img
      src={`${process.env.PUBLIC_URL}/logo.png`}
      alt="Elite Wealth Club"
      className="elite-header__logo"
      onClick={() => navigate('/')}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default Logo;
