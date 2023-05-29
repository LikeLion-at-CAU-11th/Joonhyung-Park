import React, { useState } from 'react';
import styled from 'styled-components';
import { getUserPerPage } from '../../apis/lioninfo';

const PageNum = styled.div`
  color: ${(props) => (props.clicked ? "black" : "gray")};
  font-size: 25px;
  cursor: pointer;
`;

let a = -1;

export const PageButton = ({ pageNum, setUserData,setClicked,clicked }) => {

  const handleClick = async () => {
    
    console.log(pageNum)
    
    setClicked(pageNum);

    console.log(clicked)


    const response = await getUserPerPage(pageNum+1)

    console.log(response.data.data)
    setUserData(response.data.data);
    // const response = await getUserPerPage(0)
    // setUserData(response.data.data.slice((pageNum)*4,((pageNum
  };



  return (
    <PageNum
      clicked = {clicked===pageNum}
      //콜백함수의 형태로 넣었을때 이벤트 내의 인자를 할당 가능 
      onClick={handleClick}
    >
      {pageNum + 1}
    </PageNum>
  );
};
