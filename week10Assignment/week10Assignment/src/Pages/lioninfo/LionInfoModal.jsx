import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import FilterButton from './FilterButton';
import UserDataSection from './userDataSection';
import {useSearchParams } from 'react-router-dom';
import { PageButton } from './PageButton';
import { getUserPerPage,getUserPerGender,getUserPerStack } from '../../apis/lioninfo';

const LionInfoModal =  () => {

    const [userData,setUserData] = useState([]);
  
    const [searchParams, setSearchParams] = useSearchParams();



    

  const curtitle= searchParams.get('title');
  const curtype= searchParams.get('type');

  useEffect(() => {
    const fetchData = async () => {
      if (curtype === "stack") {
        //stack api 호출
        const response = await getUserPerStack(curtitle);
        setUserData(response.data.data);
      } else if (curtype === "gender") {
        //gender api 호출, response를 받아야함 
        const response = await getUserPerGender(curtitle);
        setUserData(response.data.data);
      } else if (curtype === "page") {
        const response = await getUserPerPage(1);
        setUserData(response.data.data)
      }
    };

    fetchData();
  }, [curtitle, curtype]);

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
                category.map((c,i)=> 
                  <FilterButton  
                    key={i} 
                    title ={c.title} 
                    type ={c.type}
                    searchParams={searchParams}
                    setSearchParams = {setSearchParams}
                    setUserData = {setUserData}
                    />
                )
            }
            </ButtonDom>
            <UserDataSection userData={userData}></UserDataSection>
            {curtitle=='All'? 
            <PageButton pageNum={1} setUserData={setUserData}/>:null}

        </Dom>
    )

}

export default LionInfoModal

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


