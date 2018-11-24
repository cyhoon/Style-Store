import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './GoodsItem.scss';

const cx = classNames.bind(styles);

interface GoodsOptionsProps {
  id: number;
  color: string;
  size: string;
  stock: number;
}

interface Props {
  id: number;
  name: string;
  provider: string;
  price: number;
  options: GoodsOptionsProps[];
  shipping: {
    id: number;
    method: string;
    price: number;
    canBundle: boolean;
  }
}

interface State {
  size: string;
}

class GoodsItem extends React.Component<Props, State> {
  public state:State = {
    size: '',
  }

  public render() {
    const {
      name,
      provider,
      price,
      options
    } = this.props;

    return (
      <div className={cx('goods-item-wrap')}>
        <div className={cx('goods-image')} />
        <div className={cx('goods-description')}>
          <span className={cx('company')}>{provider}</span>
          <span className={cx('name')}>{name}</span>
          <span className={cx('price')}>{price}원</span>
          <div className={cx('size')}>
            <select>
              <option value="" disabled={true} selected={true}>사이즈를 선택해 주세요</option>
              {
                options.map(option => {
                  return (
                    <option key={option.id} value={option.size}>{option.size}</option>
                  )
                })
              }
            </select>
          </div>
          <button className={cx('cart-add-btn')}>장바구니 추가</button>
        </div>
      </div>
    );
  }
}

export default GoodsItem;
