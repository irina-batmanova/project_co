import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchGames from '../fetchApi/fetchGames';
import {getGamesError, getGames, getGamesPending} from '../reducer';
// import fetchGames from '../fetchGames';
//import LoadingSpinner from './SomeLoadingSpinner';
import GamesList from './GamesList';

class GamesView extends Component {

    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {

        // const {fetchGames} = this.props;
        // console.log("my props", this.props, fetchGames);
        // let res = fetchGames();
        // console.log(res);
        // console.log("after fetching games ", this.props)
        this.props.fetchGames();
        console.log(this.props);
    }

    shouldComponentRender() {
        const {games, error, pending} = this.props;
        console.log("AHAHAH", games);
        if(games.length !== 0) {
            return true;
        }
        return false;
    }

    render() {
        const {propps} = this.props;
        console.log("trying to render games list");
        console.log(typeof propps);
        console.log(propps);
        // console.log(this.state.games);

        if(!this.shouldComponentRender()) {
            console.log("HE-HE");
            return <div></div>;
        }
        return (
            <Container>
                <Row>
                    <div className='product-list-wrapper'>
                        <GamesList games={propps.games} />
                    </div>
                </Row>
                <Row>
                    <div className='game-info-wrapper'>
                        <GameInfo game_info={propps.game_info} />
                    </div>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = state => ({
    // error: getGamesError(state),
    games: state.games,
    // pending: getGamesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchGames: fetchGames
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamesView );
