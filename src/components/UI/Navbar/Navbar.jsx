import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='navbar__item'>
          <Link to='/about'> О сайте</Link>
        </div>
        <div className='navbar__item'>
          <Link to='/posts'>Посты</Link>
        </div>
      </div>
    );
}

export default Navbar;
