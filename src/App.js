import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import Header from './components/header/header.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/signin' component={ SignInAndSignUp } />
      </Switch>
    </div>
  );
}

export default App;
