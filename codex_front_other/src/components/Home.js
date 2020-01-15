import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import GamesView from './GamesView';
import UserHeader from './UserHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends React.Component {

  render() {
    console.log("trying to render lobby 5");

    console.log("home props are ", this.props);
    if (this.props.user !== undefined) {
      console.log("i have a user ", this.props.user)
    }
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

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.error
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
