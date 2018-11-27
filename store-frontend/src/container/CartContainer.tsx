import * as React from 'react';
import { connect } from 'react-redux';

import CartList from 'src/components/cart/list';

class CartContainer extends React.Component<{}, {}> {
  public render = () => {
    return (
      <div>
        <CartList />
      </div>
    );
  };
};

const mapStateToProps = () => {
  console.log('map state to props');
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
