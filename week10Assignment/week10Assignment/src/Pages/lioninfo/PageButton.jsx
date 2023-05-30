import React from 'react';
import styled from 'styled-components';
import { getUserPerPage } from '../../apis/lioninfo';


let a = 0;

export const PageButton = ({ setUserData }) => {

  const handleClick = async (t) => {
    a=t-1;
    const response = await getUserPerPage(t)
    console.log(response.data.data)
    setUserData(response.data.data);
    // const response = await getUserPerPage(0)
    // setUserData(response.data.data.slice((pageNum)*4,((pageNum
  };



  return (
    <PaginationDom>
      {
        Array(7).fill().map((_, t) => 
        <PageNum
          clicked={t===a}
          //콜백함수의 형태로 넣었을때 이벤트 내의 인자를 할당 가능 
          onClick={()=>handleClick(t+1)}
        >{t+1}
        </PageNum>)
    }
    </PaginationDom>
  );
};

const PaginationDom = styled.div`
  display: flex;
  gap: 20px;
`;

const PageNum = styled.div`
  color: ${(props) => (props.clicked ? "black" : "gray")};
  font-size: 25px;
  cursor: pointer;
`;