import React, { useState } from 'react'
import { Input, Inputs, Title, Wrapper } from '../components/Common'
import { createaccount } from '../apis/createaccont';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [ID,setID] = useState('');
  const [Password,setPassword] = useState('');
  const [name ,setName] = useState('');
  //number로 변환 필요
  const [age, setAge] = useState('');


  const router = useNavigate();

  const onChagneID= (e) =>{
    setID(e.target.value);

  }

  const onChagnePassword= (e)=>{
      setPassword(e.target.value);
  }

  const onChagneName=(e)=>{
    setName(e.target.value);
  }

  const onChangeAge=(e)=>{
    setAge(e.target.value);
  }

  const onClick = async ()=>{


    if((ID==="")||(Password==="")||(name==="")||(age==="")){
      console.log("빈값있음");
    }
    else{
      const result = await createaccount(ID,Password,name,age);
      console.log(result);
      router("/");
    }

  
  }

  return (

    <Wrapper>

      <Title>회원가입 하기</Title>
      
      <Inputs>

        <Input placeholder="아이디" value={ID} onChange={onChagneID}></Input>
        <Input placeholder="비밀번호" type='password' value={Password} onChange={onChagnePassword}></Input>
        <Input placeholder="이름" value={name} onChange={onChagneName}></Input>
        <Input placeholder="나이" value={age} onChange={onChangeAge}></Input>
        <button onClick={onClick}>Sign Up</button>
      
      </Inputs>

    </Wrapper>

  )
}

export default Signup