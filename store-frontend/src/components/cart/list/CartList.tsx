import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './CartList.scss';

const cx = classNames.bind(styles);

const CartList: React.SFC<{}> = () => {
  return (
    <div className={cx('cart-list')}>
      Cart List
    </div>
  );
};

export default CartList;
