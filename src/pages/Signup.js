import React from 'react'
import { Input, Inputs, Title, Wrapper } from '../components/Common'

const Signup = () => {
  return (

    <Wrapper>

      <Title>회원가입 하기</Title>
      
      <Inputs>

        <Input placeholder="아이디"></Input>
        <Input placeholder="비밀번호"></Input>
        <Input placeholder="이름"></Input>
        <Input placeholder="나이"></Input>
        <button>Sign Up</button>
      
      </Inputs>

    </Wrapper>

  )
}

export default Signup