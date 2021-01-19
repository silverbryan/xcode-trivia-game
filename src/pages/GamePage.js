import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { newGame, nextQuestion, wrongOption, correctOption } from '../actions/GameActions';
import { Question } from '../components';

const Game = ({ loading, errors, points, time, currentQuestion, startNewGame, correctOption, wrongOption, nextQuestion }) => {

    const checkOptionIsCorrect = (event) => {
        const option = event.target.dataset.option;
        if (currentQuestion.answer === option) {
            correctOption();
        } else {
            wrongOption();
        }
        nextQuestion();
    }

    useEffect(() => {
        startNewGame();
    }, []);

    if (loading) {
        return <div style={{ color: '#fff' }}>Esta cargando xD</div>
    } else {
        return (
            <Question
                name={currentQuestion.name}
                options={currentQuestion.options.map(option => {
                    return {
                        color: 'transparent',
                        name: option,
                    }
                })}
                checkIsCorrect={checkOptionIsCorrect}
            />
        );
    }

}

function mapStateToProps(state) {
    return state.gameReducer;
}

function mapDispatchToProps(dispatch) {
    return {
        startNewGame: () => dispatch(newGame()),
        correctOption: () => dispatch(correctOption()),
        wrongOption: () => dispatch(wrongOption()),
        nextQuestion: () => dispatch(nextQuestion()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);