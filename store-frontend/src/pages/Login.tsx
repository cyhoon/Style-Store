import * as React from 'react';
import LoginForm from 'src/components/login/form';
import LoginTemplate from 'src/components/login/template';
import LoginContainer from 'src/container/LoginContainer';

const Login: React.SFC<null> = () => {
  return (
    <LoginTemplate
      loginFormContainer={<LoginContainer form={<LoginForm />} />}
    />
  );
};

export default Login;
