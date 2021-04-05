import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <Link cla to='/'>
          <span className='Navbar--title'>PelisTendencia</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;
