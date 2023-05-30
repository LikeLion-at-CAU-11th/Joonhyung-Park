import React from 'react'
import styled from 'styled-components';
import { getUserPerGender, getUserPerPage,getUserPerStack } from '../../apis/lioninfo';

export const FilterButton = ({title,type,setUserData,clickFilter,setCilckedFilter}) => {
    
    const handleClickButton = async () =>{
        //type에 다라 어떤 api를 호출할건지 결정해주는 함수 
        if(type==="page"){
            //page api 호출
            const response = await getUserPerPage(0)
            console.log(response)
            setUserData(response.data.data)
            setCilckedFilter(title)
        }
        else if(type==="stack"){
            //stack api 호출
            const response = await getUserPerStack(title);
            setUserData(response.data.data);
            setCilckedFilter(title)

        }
        else if(type ==="gender"){
            //gender api 호출, response를 받아야함 
            const response = await getUserPerGender(title);
            setUserData(response.data.data);
            setCilckedFilter(title)

        }
    }

  return (
    <Button 
        clickFilter={clickFilter===title}
        onClick={handleClickButton}
        
    >{title}</Button>    
)}

const Button = styled.div`
  flex-basis: 13%;
  height: 70px;
  background-color: ${(props) => (props.clickFilter ? "orange" : "beige")};
  color: gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`;