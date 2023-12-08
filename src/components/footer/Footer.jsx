import React from 'react'
import './footer.css'

import Icon1 from '../../img/Linkedin-icon.png';
import Icon2 from '../../img/github-icon.png';
import Icon3 from '../../img/twitter-icon.png';
import Icon4 from '../../img/whatsapp-icon.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icons'>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={Icon1} alt="linkedin-icon"  />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={Icon2} alt="github-icon"  />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={Icon3} alt="twitter-icon"  />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src={Icon4} alt="whatsapp-icon"  />
          </a>   
        </div>
        <p className='footer-copyright'>Created By Nitish Kumar</p>
    </div>
  )
}

export default Footer;