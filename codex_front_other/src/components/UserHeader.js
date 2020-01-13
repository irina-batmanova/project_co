import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class UserHeader extends React.Component {
  render() {
    return (
      <Container fluid={true}>
      <Row>
        <Col>Create game</Col>
        <Col>I am John</Col>
        <Col>Logout</Col>
      </Row>
      </Container>
  );
}
}

export default UserHeader;
