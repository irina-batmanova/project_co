import React from 'react';
import Fragment from 'react';
import logo from './logo.svg';
import './App.css';
// import GamesList from './GamesList';
import UserHeader from './UserHeader';
// import GameInfo from './GameInfo';
import {Navbar, NavbarBrand, Container, Col, Row} from 'react-bootstrap';
import GamesView from './GamesView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import LoginForm from './Auth';


function App() {
  return (
    <Router>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div></div>
          <div className="toolbar__logo"><a href="/">The codex games archive</a></div>
          <div className="spacer"></div>
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <Link to='/'>Home</Link >
              </li>
              <li>
                <Link to='login/'>Login</Link >
              </li>
            </ul>
          </div>  
        </nav>
      </header>
      <main style={{marginTop: '64px'}}>
        <Switch>
          <Route path='/login/'> <LoginForm /> </Route >
          <Route path='/'><Home /> </Route >
        </Switch>
      </main>
    </Router>
  );
}

export default App;
