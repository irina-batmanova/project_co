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
        <div>
        <nav>
          <Link to="/">Home</Link >
          <Link to='login/'>Login</Link >
        </nav>
        </div>
        <Switch>
          <Route path='/login/'> <LoginForm /> </Route >
          <Route path='/'><Home /> </Route >
        </Switch>
        </Router>
  );
}

export default App;
