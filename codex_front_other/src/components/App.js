import React from 'react';
import Fragment from 'react';
import logo from './logo.svg';
import './App.css';
// import GamesList from './GamesList';
import UserHeader from './UserHeader';
// import GameInfo from './GameInfo';
import {Navbar, NavbarBrand, Container, Col, Row} from 'react-bootstrap';
import GamesView from './GamesView';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import thunk from "redux-thunk";
const initialState = {
  error: null,
  pending: false
}
const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    // <Fragment>
    // <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">reactstrap</NavbarBrand>
    //   </Navbar>
    <Provider store={store}>
    <div className="app_component">
    <Container fluid={true}>
      <Row>
        <Col><UserHeader /></Col>
      </Row>
      <Row>
        <Col><GamesView/></Col>

      </Row>
    </Container>
    </div>
    </Provider>
    // </Fragment>
  );
}

export default App;
