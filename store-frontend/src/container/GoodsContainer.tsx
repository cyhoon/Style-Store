import * as React from 'react';
import { connect } from 'react-redux';

import GoodsList from 'src/components/goods/list';

class GoodsContainer extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <GoodsList />
      </div>
    );
  }
};

const mapStateToProps = () => {
  console.log('Map To State');
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsContainer);
