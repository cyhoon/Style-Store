import * as React from 'react';
import RegisterTemplate from 'src/components/register/template';
import RegisterContainer from 'src/container/RegisterContainer';

const Register: React.SFC<{}> = () => {
  return (
    <RegisterTemplate
      registerFormContainer={<RegisterContainer />}
    />
  );
};

export default Register;
