import * as React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import Profile from '../profile/Profile';
import UserMenu from '../userMenu';
import './Header.scss';

interface Props {
  isLogin: boolean;
  cartCount: number;
  isMenu: boolean;
  handleLogOut(): void;
  handleMenuClick(): void;
};

const Header: React.SFC<Props> = ({
  isLogin,
  cartCount,
  isMenu,
  handleLogOut,
  handleMenuClick
}) => {

  const navRender = () => {
    if (isLogin) {
      return (
        <React.Fragment>
          <nav className="cart-wrap">
            <Link to='/cart'>
              <TiShoppingCart size="100%" className="shopping-cart" />
              { cartCount !== 0 ? <span className="cart-count">{cartCount}</span> : null }
            </Link>
          </nav>
          <nav className="profile-wrap" onClick={handleMenuClick}>
            <Profile />
            {
              isMenu ? 
                <div className="user-menu-wrap">
                  <UserMenu handleLogOut={handleLogOut}/>
                </div> : null
            }
          </nav>
        </React.Fragment>
      );
    } else {
      return (
        <div className="auth-btn">
          <Link to="/login">로그인</Link>
          /
          <Link to="/register">가입</Link>
        </div>
      )
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">StyleStore</Link>
        </div>
        <div className="nav-wrap">
          { navRender() }
        </div>
      </div>
    </header>
  );
};

export default Header;
