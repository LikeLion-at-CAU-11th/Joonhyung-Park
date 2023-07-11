import React, { useState } from 'react'
import { Wrapper,Input,Inputs,Form,Title } from '../components/Common'
import { Link, useNavigate } from 'react-router-dom'
import { Signin } from '../apis/signin';

const Login = () => {
  
    const router = useNavigate();

    const [ID,setID] = useState('');
    const [Password,setPassword] = useState('');
    
    const onChagneID= (e) =>{
        setID(e.target.value);

    }
    
    const onChagnePassword= (e)=>{
        setPassword(e.target.value);
    }
    
    const onClick = async ()=>{


        const result = await Signin(ID,Password);

        if(result!==null){

        const {accessToken,refreshToken} = result;

        localStorage.setItem('access',accessToken);
        localStorage.setItem('refresh',refreshToken);
        
        console.log(accessToken);
        console.log(refreshToken);


        router("/mypage");

        }
    }

    return (


    <Wrapper>
        <Title>로그인하기</Title>
        <Form>
            <Inputs>
                <Input placeholder="아이디"  value={ID} onChange={onChagneID} ></Input>
                <Input placeholder="비밀번호" type="password" value={Password} onChange={onChagnePassword}></Input>
            </Inputs>
            <button onClick={onClick}>Login</button>
        </Form>
        <Link to="/signup">화원가입하기</Link>
    </Wrapper>

    )
}

export default Login