import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    margin: 0 15px;
`;

const Container = ({ props }) => {
    return (
        <ContainerDiv>
            {props}
        </ContainerDiv>
    );
}

export default Container;