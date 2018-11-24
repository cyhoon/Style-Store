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
}

class GoodsList extends React.Component<Props, {}> {
  public render() {
    return (
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
            />
          );
        })}
      </div>
    );
  };
};

export default GoodsList;
