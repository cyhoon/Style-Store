import * as classNames from 'classnames/bind'
import * as React from 'react';

import * as styles from './CartResult.scss';

const cx = classNames.bind(styles);

const CartResult: React.SFC<{}> = () => {
  return (
      <div className={cx('cart-result')}>
        Cart Result
      </div>
  );
};

export default CartResult;
