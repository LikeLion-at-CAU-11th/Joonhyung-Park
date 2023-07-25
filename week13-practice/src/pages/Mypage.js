import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/Context'
import { Button,Title, Wrapper } from '../components/layout/common'

import { userNameAtom, emailAtom,isSubmittedAtom, passwordAtom } from '../recoil/atoms'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import Form from '../components/home/Form'


const Mypage = () => {



  const mode = useContext(ThemeContext)
  const [isOpen,setIsOpen] = useState(false)
  //reset 하면 default 값으로 바뀌게 됨
    const resetName=useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const reset = useResetRecoilState(isSubmittedAtom);
    const resetPassword = useResetRecoilState(passwordAtom);

    const userName = useRecoilValue(userNameAtom);
    const password = useRecoilValue(passwordAtom)

    const[pw,setPw] = useState("");
    const navigate= useNavigate();


    const handleInputChange = (e) => {
      setPw(e.target.value); // Update the state with the input password
      console.log(pw)

    };


    const handleDelete=()=>{

      if(pw===password){

      
      reset();
      resetEmail();
      resetName();
      resetPassword();
      navigate('/');


      }

      else{
          setIsOpen(true);
      }
    }

    return (
    <Wrapper>
        <Title>welcome {userName}</Title>
       {isOpen ? <input type={pw} onChange={handleInputChange}/> : null } 
        <Button mode={mode.main} onClick={handleDelete}>리셋</Button>

    </Wrapper>
  )
}

export default Mypage