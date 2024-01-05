import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className='nav-navbar'>
          <Navbar />
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
