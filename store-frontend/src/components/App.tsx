import * as React from 'react';
import { Route, Switch } from 'react-router';
import Login from 'src/pages/Login';

const App: React.SFC<{}> = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
