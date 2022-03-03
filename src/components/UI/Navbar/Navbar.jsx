import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import Unibutton from '../UniButton';

const Navbar = () => {
    const {isAuth, setisAuth} = useContext(AuthContext);
    const logout = () => {
      setisAuth(false);
      localStorage.removeItem('auth');
    }

    return (
        <div className='navbar'>
          {
            isAuth ? 
            <div className='navbar__item'>
              <Unibutton onClick={logout} style={{marginBottom: 10}}>Выйти</Unibutton>
            </div>
            : null
          }
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
