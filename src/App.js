import React from 'react';
import Home from './main/home/Home';
import Nova from './main/nova/Nova';
import Toolbar from './components/toolbar/Toolbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Toolbar />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/nova" component={Nova} />
            </Switch>
        </ BrowserRouter>
    </div>
  );
}

export default App;
