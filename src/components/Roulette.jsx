import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    outline: none;
    background-color: ${props => props.backgroundColor};
    color: #fff;
    font-size: 1.2em;
    border-radius: 10px;
    padding: 15px 20px;
`;

const Roulette = ({ spin, selectedCategory, data, onFinish }) => {
    // const [mustSpin, setMustSpin] = useState(false);
    // const [prizeNumber, setPrizeNumber] = useState(0);

    // const handleSpinClick = () => {
    //     const newPrizeNumber = Math.floor(Math.random() * data.length)
    //     setPrizeNumber(newPrizeNumber)
    //     setMustSpin(true)
    // }

    return (
        <>
            <Wheel
                mustStartSpinning={spin}
                prizeNumber={selectedCategory}
                data={data}
                onStopSpinning={onFinish}
                fontSize={20}
            />
            <Button backgroundColor={'#00C985'} onClick={handleSpinClick}>Iniciar Juego Aleatorio</Button>
            <Button backgroundColor={'#8854C0'}>Selecciona Categoria</Button>
        </>
    );
}

export default Roulette;