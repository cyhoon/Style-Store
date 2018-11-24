import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './GoodsItem.scss';

const cx = classNames.bind(styles);

interface State {
  size: string;
}

class GoodsItem extends React.Component<{}, State> {
  public state:State = {
    size: '',
  }

  public render() {
    return (
      <div className={cx('goods-item-wrap')}>
        <div className={cx('goods-image')} />
        <div className={cx('goods-description')}>
          <span className={cx('company')}>StyleShare</span>
          <span className={cx('name')}>Python Hood T-Shirts</span>
          <span className={cx('price')}>20000원</span>
          <div className={cx('size')}>
            <select>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <button className={cx('cart-add-btn')}>장바구니 추가</button>
        </div>
      </div>
    );
  }
}

export default GoodsItem;
