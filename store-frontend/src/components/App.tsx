import * as React from 'react';
import { Route, Switch } from 'react-router';
import Login from 'src/pages/Login';

const App: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route exact={true} path="/login" component={Login} />
    </Switch>
  );
};

export default App;
