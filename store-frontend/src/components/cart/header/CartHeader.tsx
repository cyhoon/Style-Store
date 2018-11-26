import * as classNames from 'classnames';
import * as React from 'react';

import * as styles from './CartHeader.scss';

const cx = classNames.bind(styles);

const CartHeader: React.SFC<{}> = () => {
  return (
    <div className={cx('cart-header')}>
      <span className={cx('title')}>장바구니</span>
      <span className={cx('description')}>개발자라면 스타일스토어 옷을 구입하는건 필수!</span>
    </div>
  );
};

export default CartHeader;
