import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
    width: 100%;
    border: 1px solid #fff;
    border-radius: 10px;
    background-color: #282A32;

    .question__text {
        width: 100%;
        height: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            color: #fff;
            font-size: 1.5em;
            text-align: center;
        }
    }

    .question__options {
        padding: 10px;
        
        .options-list {
            padding: 0;
            margin: 0;
            list-style: none;

            .option-item {
                margin-bottom: 5px;
            }
        }
    }
`;

const BtnOption = styled.button`
    border: none;
    outline: none;
    color: #fff;
    background-color: ${props => props.color};
    font-size: 1.5em;
    border-radius: 5px;
    padding: 20px 0;
    display: block;
    width: 100%;
`;
const Question = ({ question, options }) => {
    return (
        <QuestionContainer>
            <div className="question__text">
                <p>{question}</p>
            </div>
            <div className="question__options">
                <ul className="options-list">
                    {options.map(option => (
                        <li className="option-item">
                            <BtnOption color={option.color}>
                                {option.name}
                            </BtnOption>
                        </li>
                    ))}
                </ul>
            </div>
        </QuestionContainer>
    );
}

export default Question;