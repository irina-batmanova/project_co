import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchGamesAction from '../fetchGames';
import {getGamesError, getGames, getGamesPending} from '../reducer';
// import fetchGames from '../fetchGames';
//import LoadingSpinner from './SomeLoadingSpinner';
import GamesList from './GamesList';

class GamesView extends Component {
    

    // componentWillMount() {
    //     const {fetchGames} = this.props;
    //     fetchGames();
    // }
    //
    // shouldComponentRender() {
    //     const {pending} = this.props;
    //     if(this.pending === false) return false;
    //     // more tests
    //     return true;
    // }

    componentDidMount() {
      //prevent default;
      this.props.fetchGames();
      // this.setState({games: this.fetchGames()});
    }

    render() {
        const {games, error, pending} = this.props;
        console.log("trying to render games list");
        // console.log(this.state.games);

      //  if(!this.shouldComponentRender()) return <LoadingSpinner />

        return (
            <div className='product-list-wrapper'>
                <GamesList games={games} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getGamesError(state),
    games: getGames(state),
    pending: getGamesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchGames: fetchGamesAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamesView );
