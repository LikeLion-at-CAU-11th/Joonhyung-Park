import React from 'react'
import { Form, Input, Inputs, Title, Wrapper } from '../components/Common'
import axios from 'axios';

const Home = () => {
  const [id,setId] = useState('');
  const [pw,setPW] = useState('');

  
  const onChangeID = (e) =>{
    console.log(id);
    setId(e.target.value);
  };

  const onChagePw = (e) =>{
    setPW(e.target.value)
  }

  const onClick = async() =>{
    const result = axios.post=await axios.post('http://front.cau-likelion.org/login',{
      id,
      pw,
    });
    const {accessToken,refreshToken} = result.data.data;
    localStorage.setItem('access',accessToken);
    localStorage.setItem('refresh',refreshToken);
    Router('/mypage');
  }
  
  return (
    <Wrapper>
        <Title>로그인하기</Title>
        <Form>
            <Inputs>
                <Input placeholder="아이디" value={id} onChange={onChangeID}></Input>
                <Input placeholder="비밀번호" type="password" onChange={onChagePw}></Input>
            </Inputs>
              <button>Login</button>       
        </Form>
        <Link path="/signup">화원가입하기</Link>
    </Wrapper>
  )
}

export default Home

