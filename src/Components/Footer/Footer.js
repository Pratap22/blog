import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="page-footer">
      <div className="flexrow">
        <div className="col-lg-4 col-lg-4 col-xs-12 end-lg margin-separator">
          <p>Signup for more newsletter</p>
        </div>
        <form className="col-lg-4 col-xs-12">
          <input className="margin-separator" type="email" placeholder="Your email address" required name="email" />
          <input type="submit" value="Sign-up" />
        </form>
        <div className="col-lg-4 col-lg-4 col-xs-12 flexrow center-xs ">
          <a href="http://www.facebook.com/prataps22" target="_blank" rel="noopener noreferrer">
            <img className="social-font" alt="facebook" src="/img/facebook.png" />
          </a>
          <a href="https://twitter.com/Pratap2210" target="_blank" rel="noopener noreferrer">
            <img className="social-font" alt="twitter" src="/img/twitter.png" />
          </a>
          <a href="https://www.linkedin.com/in/prataps22/" target="_blank" rel="noopener noreferrer">
            <img className="social-font" alt="linkedin" src="/img/linkedin.png" />
          </a>
          <a href="https://www.linkedin.com/in/prataps22/" target="_blank" rel="noopener noreferrer">
            <img className="social-font" alt="youtube" src="/img/youtube.png" />
          </a>
          <a href="https://www.linkedin.com/in/prataps22/" target="_blank" rel="noopener noreferrer">
            <img className="social-font" alt="google" src="/img/googleplus.png" />
          </a>
          <a href="https://www.linkedin.com/in/prataps22/" target="_blank" rel="noopener noreferrer">
            <img className="social-font" alt="instagram" src="/img/instagram.png" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-xs-12 flexrow privacy center">
        <a className="policy">Privacy Policy</a>

        <a className="policy1">Terms of use</a>
      </div>
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
