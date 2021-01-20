import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Roulette } from '../components';
import { rouletteColors } from '../config';
import { getCategories } from '../actions/CategoryActions';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 15px;
    
    .container__roulette {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const Home = ({ loading, categories, getCategories }) => {

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <Container>
            <div className="container__roulette">
                <Roulette
                    data={categories.map((category, index) => {
                        return {
                            option: category.name,
                            style: {
                                backgroundColor: rouletteColors[index],
                                textColor: '#fff',
                            }
                        }
                    })}
                />
            </div>

        </Container>
    );
}

function mapStateToProps(state) {
    return state.gameReducer;
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);