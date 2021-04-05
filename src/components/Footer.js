import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='Footer'>
        <Link to='/'>
          <span className='Footer--title'>PelisTendencia</span>
        </Link>
      </div>
    );
  }
}

export default Footer;
