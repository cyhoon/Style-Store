import * as classNames from 'classnames/bind';
import * as React from 'react';

import GoodsItem from '../item';
import * as styles from './GoodsList.scss';

const cx = classNames.bind(styles);

interface GoodsOptionsProps {
  id: number;
  color: string;
  size: string;
  stock: number;
}

interface GoodsItemProps {
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
};

interface Props {
  goods: GoodsItemProps[];
  addCart: {
    goodsId: number;
    status: string;
  };
  handleCartAddRequest(goodsId: number, optionsId: number, quantity: number): void;
}

class GoodsList extends React.Component<Props, {}> {
  public render() {
    return (
      <React.Fragment>
        <div className={cx('goods-list-header')}>
          <h3 className={cx('title')}>스타일스토어에 자랑스러운 상품</h3>
          <span>개발자만 입을 수 있는건 안비밀😝</span>
        </div>
        <div className={cx('goods-list')}>
          {this.props.goods.map(goodsData => {
            const {
              id,
              name,
              provider,
              price,
              options,
              shipping
            } = goodsData

            return (
              <GoodsItem
                key={goodsData.id}
                id={id}
                name={name}
                provider={provider}
                price={price}
                options={options}
                shipping={shipping}
                handleCartAddRequest={this.props.handleCartAddRequest}
                addCart={this.props.addCart}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  };
};

export default GoodsList;
