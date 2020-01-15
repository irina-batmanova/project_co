import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'react-bootstrap';
import fetchGames from '../fetchApi/fetchGames';
import {getGamesError, getGames, getGamesPending} from '../reducer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
//import LoadingSpinner from './SomeLoadingSpinner';
import GamesList from './GamesList';
import Turn from'./GameInfo';

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
        const {games} = this.props;
        console.log("AHAHAH", games);
        if(games.length !== 0) {
            return true;
        }
        return false;
    }

    render() {
        console.log("trying to render lobby 1");
        const {games, turns} = this.props;
        console.log("trying to render lobby");
        console.log(games);

        if(!this.shouldComponentRender()) {
            console.log("HE-HE");
            return <div></div>;
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <div className='product-list-wrapper'>
                            <GamesList games={games} />
                        </div>
                    </Col>
                    <Col>
                        <div className='game-info-wrapper'>
                            <Turn turns={turns} />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = state => ({
    // error: getGamesError(state),
    games: state.games.games,
    turns: state.turns,
    // pending: getGamesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchGames: fetchGames
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamesView );
