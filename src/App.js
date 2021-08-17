import React from 'react'
import './App.css';
import{
        BrowserRouter as Router,
        Switch,
        Route,
        Link
}from 'react-router-dom';
import Header from './component/Header'
import Checkout from './component/Checkout'
import Home from './component/Home';
import Menu from './component/Menu';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/checkout" component={Checkout}>
           <Header /> 
           <Checkout />
        </Route>
        <Route exact path="/menu" component={Menu}>
           <Header />
           <Menu />
        </Route>
        <Route exact path="/" component={Home}>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
