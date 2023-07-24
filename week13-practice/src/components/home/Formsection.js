import React, { useContext } from 'react'
import { Button } from '../layout/common'
import Form from './Form';
import { ThemeContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

import { isSubmittedAtom } from '../../recoil/atoms';
import { useSetRecoilState } from 'recoil';

const Formsection = () => {

    const mode = useContext(ThemeContext);
    const navigate = useNavigate();

    const isSubmited = useSetRecoilState(isSubmittedAtom)

    const handleClick=()=>{
      isSubmited(true);
      navigate('/mypage');
    }

  return (
    <>
        <Form type='text' inputType='이름'></Form>
        <Form type='email' inputType='이메일'></Form>
        <Form type='pw' inputType='비밀번호'></Form>

        <Button mode={mode.main} onClick={handleClick}>버튼</Button>
    </>
    )
}

export default Formsection