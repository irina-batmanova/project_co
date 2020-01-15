import React from 'react';

class Turn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("trying to render lobby 3");

    const turns = this.props.turns;
    console.log('Пытаемся отрендерить turn', turns);
    if (turns.length === 0) {
      return (
        <div>
          "ВЫБЕРИ ИГРУ ЧТОБЫ ПОСМОТРЕТЬ ЕЕ ИНФУ"
        </div>
      );
    }
    console.log("GETTING GAME INFO FOR LULZ");
    // const turn = turn.turn;
    // const first_player = gameinfo.first_player;
    // const second_player = gameinfo.second_player;
    // const last_turn_text = gameinfo.last_turn_text;
    return (
      <div>{turns[0].turn_text}</div>
  );
}
}

export default Turn;
