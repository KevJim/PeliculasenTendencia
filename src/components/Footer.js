import React from 'react';
import './styles/Footer.css';

import logoGithub from '../img/github_logo.png';
import logoTwitter from '../img/twitter_logo.png';
import logoInstagram from '../img/instagram_logo.png';

class Footer extends React.Component {
  render() {
    return (
      <div className='Footer'>
        <div className='Footer-container'>
          <a href='https://github.com/KevJim' className='footer-social-github'>
            <img src={logoGithub} className='footer--logo'></img>
            <span>Github</span>
          </a>
          <a href='https://twitter.com/Jiokso' className='footer-social'>
            <img src={logoTwitter} className='footer--logo'></img>
            <span>Twitter</span>
          </a>
          <a
            href='https://www.instagram.com/kevjimoso/'
            className='footer-social'>
            <img src={logoInstagram} className='footer--logo'></img>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
