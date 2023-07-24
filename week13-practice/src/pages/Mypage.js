import React, { useContext } from 'react'
import { ThemeContext } from '../context/Context'
import { Button,Title, Wrapper } from '../components/layout/common'

import { userNameAtom, emailAtom,isSubmittedAtom, passwordAtom } from '../recoil/atoms'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'


const Mypage = () => {

  const mode = useContext(ThemeContext)

    //reset 하면 default 값으로 바뀌게 됨
    const resetName=useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const reset = useResetRecoilState(isSubmittedAtom);

    const userName = useRecoilValue(userNameAtom);
    const password = useRecoilValue(passwordAtom)

    const navigate= useNavigate();

    const handleDelete=()=>{

      console.log(password)
      if(password===null){

      
      reset();
      resetEmail();
      resetName();
      navigate('/');

      }

      


    }

    return (
    <Wrapper>
        <Title>welcome {userName}</Title>
        <Button mode={mode.main} onClick={handleDelete}>리셋</Button>

    </Wrapper>
  )
}

export default Mypage