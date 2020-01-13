import React from 'react';

class GamesList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {games: props.games}
  }

  render() {
    console.log("games");
    console.log(this.state.games);
    // const listItems = this.state.games.map((game) =>
    //   <li>{game.name}</li>
    // );
    return (
      <div>
      </div>
  );
}
}

export default GamesList;
