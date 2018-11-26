import * as React from 'react';
import { connect } from 'react-redux';

class CartContainer extends React.Component<{}, {}> {
  public render = () => {
    return (
      <div />
    );
  };
};

const mapStateToProps = () => {
  console.log('map state to props');
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
