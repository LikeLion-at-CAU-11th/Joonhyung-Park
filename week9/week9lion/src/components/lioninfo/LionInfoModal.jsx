import React, {useState} from 'react';
import styled from 'styled-components';
import { FilterButton } from './FilterButton';
import { UserDataSection } from './UserDataSection';
import { PageButton } from './PageButton';


export const LionInfoModal = () => {
  const [userData,setUserData] = useState([]);
  const [clicked, setClicked] = useState(-1);
  const [clickFilter,setCilckedFilter] = useState("1");

  const category = [
    {
      type:"page",
      title:"All"
    },
    {
      type:"gender",
      title:"male"
    },
    {
      //어떤 API를 사용할지에 대한 선택 or 설정 
      type:"gender",
      title:"female"
    },
    {
      type:"stack",
      title:"frontend"
    },
    {
      type:"stack",
      title:"backend"
    },
    {
      type:"stack",
      title:"design"
    },
    {
      type:"stack",
      title:"pm"
    }
  ];

  return (
    <Dom>
      <Title> LikeLion 11th </Title>
      <ButtonDom>
        {
          category.map((c,i)=> <FilterButton  
            key={i} 
            title ={c.title} 
            type ={c.type}
            setUserData = {setUserData}
            clickFilter = {clickFilter}
            setCilckedFilter = {setCilckedFilter}
            />
          )
        }
      </ButtonDom>

      <UserDataSection userData={userData}></UserDataSection>
      <PaginationDom>
        {
          Array(7).fill().map((_, t) => 
          <PageButton
            key = {t}
            pageNum={t}
            clicked= {clicked}
            setUserData = {setUserData}
            setClicked = {setClicked}
          />
          )
        }
      </PaginationDom>


    </Dom>
  )
}

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;


const PaginationDom = styled.div`
  display: flex;
  gap: 20px;
`;