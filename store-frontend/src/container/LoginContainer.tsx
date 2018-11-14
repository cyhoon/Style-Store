import * as React from 'react';

interface Props {
  form: React.ReactNode,
};

class LoginContainer extends React.Component<Props, {}> {
  public render() {
    return (
      <React.Fragment>
        {this.props.form}
      </React.Fragment>
    );
  };
};

export default LoginContainer;
