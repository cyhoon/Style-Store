import * as classNames from 'classnames/bind';
import * as React from 'react';

import GoodsItem from '../item';
import * as styles from './GoodsList.scss';

const cx = classNames.bind(styles);


class GoodsList extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={cx('goods-list')}>
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
      </div>
    );
  };
};

export default GoodsList;
