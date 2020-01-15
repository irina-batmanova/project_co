import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fetchTurn from '../fetchApi/fetchTurn';

class GamesList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {games: props.games}
      console.log(props.games)
  }

  render() {
    console.log("trying to render lobby 2");
    console.log("gameSSSSSS");
    console.log(this.state.games);
    console.log(typeof this.state.games);
    const lobbyItems = this.state.games.map((game, index) =>
        <Row key={game.id}>
          <Button variant="outline-primary" lg="2"
              onClick={
                () => {
                  this.state.turn_id = 1;
                  console.log("take an gameid", game.gameid);
                  this.props.fetchTurn(game.gameid);
                }
              }
            >{game.name}</Button>
        </Row>
    );
    return (
      <div>
        <ul>
          {lobbyItems}
        </ul>
      </div>
  );
}
}

const mapStateToProps = state => ({
  // error: getGamesError(state),
  games: state.games.games,
  turns: state.turns,
  // pending: getGamesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTurn: fetchTurn
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesList );
