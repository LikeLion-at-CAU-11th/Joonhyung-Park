import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { ThemeContext } from '../../context/Context';
import { Button, Title } from '../layout/common';
import { emailAtom , passwordAtom, userNameAtom } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';

export const Modal = ({handleModalClick}) => {


    const mode = useContext(ThemeContext)  
    const name = useRecoilValue(userNameAtom);
    const pw = useRecoilValue(passwordAtom)
    const email = useRecoilValue(emailAtom)
    return (
  
    <ModalWrapper mode = {mode.sub}>
        <Title>{`이름 : ${name}`}</Title>
        <Title>{`이메일 : ${email}`}</Title>
        <Title>{`비밀번호 :${pw}`}</Title>
        <Button mode={mode.main} onClick={handleModalClick} >버튼</Button>

    </ModalWrapper>
    
)


}

const ModalWrapper = styled.div`
position: absolute;
margin: 0;
padding: 0;
width: 500px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${(props) => props.mode};
z-index: 10;

`;