import React, { useContext, useState } from 'react'
import { Button } from '../layout/common'
import Form from './Form';
import { ThemeContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

import { isSubmittedAtom } from '../../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import { Modal } from '../modal/modal';

const Formsection = () => {

    const mode = useContext(ThemeContext);

    const setSubmit = useSetRecoilState(isSubmittedAtom)
    const navigate = useNavigate();

    const [isModalOpen,setIsModalOpen] = useState(false)


    const handleModal=()=>{
      isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
    }

    const handleClick=()=>{
      setSubmit(true);
      navigate('/mypage');
    }


  return (
    <>
        
        {isModalOpen ? <Modal handleModalClick={handleClick}/> : null}

        <Form type='text' inputType='이름'></Form>
        <Form type='email' inputType='이메일'></Form>
        <Form type='pw' inputType='비밀번호'></Form>

        <Button mode={mode.main} onClick={handleModal} >버튼</Button>


    </>
    )
}

export default Formsection