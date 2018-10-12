import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="center-aligned" style={{ color: '#889097' }}>
        &copy;copyright {new Date().getFullYear()} World Destinations By{' '}
        <strong>
          <a href="https://www.facebook.com/prataps22">Pratap Sharma </a>
        </strong>
      </div>
    </div>
  );
};
export default Footer;
