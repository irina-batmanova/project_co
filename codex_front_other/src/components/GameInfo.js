import React from 'react';

class Turn extends React.Component {
  render() {
    const turn = this.props.turn;
    console.log(turn);
    if (!turn) {
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
      <div>"TELÆCHKI"</div>
      // <div className="gameinfo">
      //   <div>
      //     "ХОД НОМЕР#" + {turn}
      //   </div>
      //   <div>
      //     "ПЕРВЫЙ ИГРОК" + {first_player}
      //   </div>
      //   <div>
      //     "ВТОРОЙ ИГРОК" + {second_player}
      //   </div>
      //   <div>
      //     "ПОСЛЕДНИЙ ХОД" + {last_turn_text}
      //   </div>
      // </div>
  );
}
}

export default Turn;
