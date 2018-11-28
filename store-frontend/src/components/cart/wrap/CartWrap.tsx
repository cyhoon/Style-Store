import * as classNames from 'classnames/bind';
import * as React from 'react';

import CartList from '../list';
import CartResult from '../result';
import * as styles from './CartWrap.scss';

const cx = classNames.bind(styles);

const CartWrap: React.SFC<{}> = () => {
  return (
    <div className={cx('cart-wrap')}>
      <div className={cx('cart-list-wrap')}>
        <CartList />
      </div>
      <div className={cx('cart-result-wrap')}>
        <CartResult />
      </div>
    </div>
  );
};

export default CartWrap;
