import React, { useEffect, useState } from 'react'
import { getMypage } from '../apis/mypage';

const Mypage = () => {
  const [data,setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    getMypage().then((res)=>{

      setData(res.data);
      setLoading(false);

    });
  },[]);

  if(loading){
    //내부에 애니매이션을 넣는 식으로 로딩창을 만들 수 도 있음
    return<div>로딩중...</div>
  }

  return (
    //딱 한번만 할거라, useEffect로 씀, 그럼 단 한번만 함
    <div>
      <div>{data?.name}</div>
      <div>{data?.age}</div>
    </div>
  )
}

export default Mypage