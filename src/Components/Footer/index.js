import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
   <footer className='footer'>
    <div className='inner'>
        <div className="footer-links">
            <nav>
                <a href="https://www.realme.govt.nz/help/" rel="noopener noreferrer" target="_blank">Help &amp; contact us</a>
                <a href="https://www.realme.govt.nz/terms-use/" rel="noopener noreferrer" target="_blank">Terms of use</a>
                <a href="https://www.realme.govt.nz/privacy/" rel="noopener noreferrer"  target="_blank">Privacy</a>
                <a href="https://www.realme.govt.nz/about-us-new/" rel="noopener noreferrer" target="_blank">About this site</a>
            </nav>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-copyright">
        <p>© New Zealand Government.</p>
    </div>
    </div>
    
   </footer>
  );
}

export default Footer;