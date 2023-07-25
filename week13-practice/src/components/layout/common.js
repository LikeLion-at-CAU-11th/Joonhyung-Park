// src/components/layout/common.js

import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ColorButton = styled.button`
all: unset;
background-color: ${props=>props.mode};
color : white;
padding: 10px;
border-radius: 24px;
transition: 0.2s;
opacity: 1.0; 
font-size : 100%;

&:hover {
    transform: scale(1.5,1.5);

  }
  ${({ active }) =>
  active &&
  `
  opacity: 1.3; 
  font-size : 150%;
`}
`

export const Button = styled.button`
all: unset;
background-color: ${props=>props.mode};
color : white;
padding: 10px;
border-radius: 24px;

`


export const Title = styled.div`
font-size: 30px;
margin: 20px;
`