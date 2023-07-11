import React, { useEffect, useState } from 'react'
import { Title, Wrapper } from '../components/Common'
import { getMypage } from '../apis/mypage';

const Mypage = () => {

  const [data,setData] = useState({});

  useEffect(()=>{

    getMypage().then((res)=>{

      setData(res.data);

    });
  
  },[]);

  return (
    <Wrapper>
      <Title> {data?.name}</Title>
      <Title> {data?.age}</Title>
    </Wrapper>
    )
}

export default Mypage