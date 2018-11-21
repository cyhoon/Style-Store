import * as React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import Profile from '../profile/Profile';
import './Header.scss';

const Header: React.SFC<{}> = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">StyleStore</Link>
        </div>
        <div className="nav-wrap">
          <nav className="cart-wrap">
            <Link to='/cart'>
              <TiShoppingCart size="100%" className="shopping-cart" />
              <span className="cart-count">5</span>
            </Link>
          </nav>
          <nav className="profile-wrap">
            <Profile />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
