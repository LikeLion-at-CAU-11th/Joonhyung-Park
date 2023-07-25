import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { ThemeContext } from '../../context/Context';
import { Button, Title } from '../layout/common';
import { emailAtom , passwordAtom, userNameAtom } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';

export const Modal = ({handleModalClick,setIsModalOpen}) => {


    const mode = useContext(ThemeContext)  
    const name = useRecoilValue(userNameAtom);
    const pw = useRecoilValue(passwordAtom)
    const email = useRecoilValue(emailAtom)

    const closeModal= ()=>{
        setIsModalOpen(false);
    }

    return (
  
    <ModalWrapper mode = {mode.sub}>
        <Title>{`정보 기입 사항`}</Title>
        <Title>{`이름 : ${name}`}</Title>
        <Title>{`이메일 : ${email}`}</Title>
        <Title>{`비밀번호 :${pw}`}</Title>
        <ButtonDiv>
            <Button style={{margin:'0 5px'}}mode={mode.main} onClick={handleModalClick} >확인</Button>
            <Button mode={mode.main} onClick={closeModal} >취소</Button>
        </ButtonDiv>
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

const ButtonDiv = styled.div`
    display : flex;
    flext=direction : row; 
    align-items: center;
    justify-content: center;
`;