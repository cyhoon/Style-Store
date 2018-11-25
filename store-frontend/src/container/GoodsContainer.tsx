import * as React from 'react';
import { connect } from 'react-redux';

import GoodsList from 'src/components/goods/list';
import { cartAddRequest } from 'src/store/modules/cart';
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
  cartAddRequest: typeof cartAddRequest;
  goods: GoodsItem[];
  addCart: {
    goodsId: number;
    status: string;
  }
}

class GoodsContainer extends React.Component<Props, {}> {
  public componentDidMount = () => {
    this.props.getGoods();
  };

  public handleCartAddRequest = (goodsId: number, optionsId: number, quantity: number) => {
    this.props.cartAddRequest({ goodsId, optionsId, quantity });
  }

  public render = () => {
    return (
      <GoodsList
        goods={this.props.goods}
        handleCartAddRequest={this.handleCartAddRequest}
        addCart={this.props.addCart}
      />
    );
  }
};

const mapStateToProps = ({ goods: goodsReducer, cart: cartReducer }: any) => {
  const { goods } = goodsReducer;
  const { addCart } = cartReducer;

  return {
    goods,
    addCart,
  };
};

const mapDispatchToProps = {
  getGoods,
  cartAddRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsContainer);
