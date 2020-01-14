import React from 'react';

class GamesList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {games: props.games}
      console.log("XUY")
      console.log(props.games)
  }

  render() {
    console.log("gameSSSSSS");
    console.log(this.state.games);
    console.log(typeof this.state.games);
    const listItems = this.state.games.map((game, index) =>
      <React.Fragment key={index}>
          <li>{game.name}</li>
      </React.Fragment>
    );
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
  );
}
}

export default GamesList;
