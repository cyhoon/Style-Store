import * as React from 'react';
import { Route, Switch } from 'react-router';
import Cart from 'src/pages/Cart';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';

const App: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/register" component={Register} />
      <Route exact={true} path="/me/cart" component={Cart} />
    </Switch>
  );
};

export default App;
