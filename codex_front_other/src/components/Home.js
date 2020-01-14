import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import GamesView from './GamesView';
import UserHeader from './UserHeader';

class Home extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col><UserHeader /></Col>
        </Row>
        <Row>
          <Col><GamesView/></Col>

        </Row>
      </Container>

  );
}
}

export default Home;
