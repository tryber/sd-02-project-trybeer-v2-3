import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Products from './pages/Products';
import MyOrders from './pages/MyOrders';
import adminOrders from './pages/adminOrders';
import adminOrderDetail from './pages/adminOrderDetail';
import ClientOrderDetail from './pages/ClientOrderDetail';
import checkout from './pages/checkout';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/admin/profile" component={Profile} />
      <Route exact path="/orders" component={MyOrders} />
      <Route exact path="/orders/:id" component={ClientOrderDetail} />
      <Route exact path="/admin/orders" component={adminOrders} />
      <Route exact path="/admin/orders/:id" component={adminOrderDetail} />
      <Route exact path="/checkout" component={checkout} />
    </Switch>
  </Router>
);

export default App;
