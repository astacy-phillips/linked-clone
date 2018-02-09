import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 80px;
    height: 50px;
    margin: 8px;

    &:hover {
        background-color: white;
        border: 1px solid white;
        font-weight: bold;
        font-size: 1.2rem;
    }
`;

function Button(props) {
    return<StyledButton>
        {props.text}
        </StyledButton>;
}

export default Button;