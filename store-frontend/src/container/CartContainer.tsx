import * as React from 'react';
import { connect } from 'react-redux';

import * as _ from 'lodash';

import CartWrap from 'src/components/cart/wrap';
import { cartListRequest } from 'src/store/modules/cart';

interface CartObject {
  id: number;
  quantity: number;
  goods: {
    id: number;
    name: string;
    provider: string;
    price: number;
  },
  options: {
    id: number;
    color: string;
    size: string;
    stock: number;
  },
  shipping: {
    id: number;
    method: string;
    price: number;
    canBundle: boolean;
  }
}

interface Props {
  cartList: {
    status: string;
    data: CartObject[];
  };
  cartListRequest: typeof cartListRequest;
}

interface State {
  cartList: CartObject[];
}

class CartContainer extends React.Component<Props, State> {

  public static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    if (nextProps.cartList.data !== prevState.cartList) {
      // return { value: nextProps.value };

      const processing = _.chain(nextProps.cartList.data)
        .groupBy('goods.provider')
        .map((value: any) => (value))
        .value();

        console.log('processing: ', processing);

      return {
        cartList: nextProps.cartList.data
      };
    }

    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      cartList: []
    };

    // 입점사 별로 배열을 나눠줘 볼까?
  }  
  public componentDidMount = () => {
    this.props.cartListRequest();
  };

  public render = () => {
    console.log('cartList: ', this.props.cartList.data);
    console.log('this.state.cartList: ', this.state.cartList);

    return (
      <div>
        <CartWrap />
      </div>
    );
  };
};

const mapStateToProps = ({ cart }: any) => {
  const { cartList } = cart;

  return {
    cartList,
  };
};

const mapDispatchToProps = {
  cartListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
