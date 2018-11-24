import * as React from 'react';
import { connect } from 'react-redux';

import GoodsList from 'src/components/goods/list';
import { getGoods } from 'src/store/modules/goods';

interface GoodsOptions {
  id: number;
  color: string;
  size: string;
  stock: number;
}

interface GoodsItem {
  id: number;
  name: string;
  provider: string;
  price: number;
  options: GoodsOptions[];
  shipping: {
    id: number;
    method: string;
    price: number;
    canBundle: boolean;
  }
};

interface Props {
  getGoods: typeof getGoods;
  goods: GoodsItem[];
}

class GoodsContainer extends React.Component<Props, {}> {
  public componentDidMount = () => {
    this.props.getGoods();
  };

  public render() {
    return (
      <div>
        <GoodsList goods={this.props.goods} />
      </div>
    );
  }
};

const mapStateToProps = ({ goods: goodsReducer }: any) => {
  const { goods } = goodsReducer;

  return {
    goods,
  };
};

const mapDispatchToProps = {
  getGoods,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsContainer);
