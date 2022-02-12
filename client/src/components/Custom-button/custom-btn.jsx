import React from 'react';
import './custom-btn.style.scss';

const Button = ({ children, issigninWithGoogle, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''}${
      issigninWithGoogle ? 'sign-in-with-ggle' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default Button;
