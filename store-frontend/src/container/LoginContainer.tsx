import * as React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from 'src/store/modules/auth';

interface Props {
  form: React.ReactNode,
  pending: boolean;
  token: string;
  loginRequest: typeof loginRequest;
};

class LoginContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.props.loginRequest('ihello0720@gmail.com', '1234');
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.form}
      </React.Fragment>
    );
  };
};

const mapStateToProps = ({ auth }: any) => {
  const { pending, token } = auth;

  return {
    pending,
    token
  };
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

