import * as classNames from 'classnames/bind';
import * as React from 'react';

import HeaderContainer from 'src/container/HeaderContainer';

import * as styles from './CartTemplate.scss';

const cx = classNames.bind(styles);

const CartTemplate: React.SFC<{}> = () => {
  return (
    <div className={cx('cart-template')}>
      <HeaderContainer />
      <div className={cx('main-wrap')}>
        Main wrap
      </div>
    </div>
  );
};

export default CartTemplate;
