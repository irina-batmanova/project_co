import React from 'react';
import {Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class GamesList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {games: props.games}
      console.log(props.games)
  }

  render() {
    console.log("gameSSSSSS");
    console.log(this.state.games);
    console.log(typeof this.state.games);
    const lobbyItems = this.state.games.map((game, index) =>
        <Row key={index}>
          <Button variant="outline-primary" lg="2"
              // onClick={
              //   () => this.props.fetchGames(game.game_id);
              // }
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

export default GamesList;
