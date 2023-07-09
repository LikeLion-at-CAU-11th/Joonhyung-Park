import React from 'react'
import { Wrapper,Input,Inputs,Form,Title } from '../components/Common'
import { Link } from 'react-router-dom'

const Login = () => {
  return (

    <Wrapper>
        <Title>로그인하기</Title>
        <Form>
            <Inputs>
                <Input placeholder="아이디" ></Input>
                <Input placeholder="비밀번호" type="password"></Input>
            </Inputs>
            <button>Login</button>       
        </Form>
        <Link to="/signup">화원가입하기</Link>

    </Wrapper>

    )
}

export default Login