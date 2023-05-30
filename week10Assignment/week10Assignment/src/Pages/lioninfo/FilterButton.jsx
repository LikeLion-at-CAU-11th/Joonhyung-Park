import React,{useState} from 'react'
import styled from 'styled-components';
import { useNavigate,Link } from 'react-router-dom';


var a = 0;

const FilterButton = ({title,type,searchParams,setSearchParams}) => {

    const handleClickButton = async () =>{
        a = title
        searchParams.set('title', title);
        searchParams.set('type', type);
        //type에 다라 어떤 api를 호출할건지 결정해주는 함수 
        if(type==="page"){
            //page api 호출
            searchParams.set('num', 1);

        }
        else{
            searchParams.delete('num');

        }
        



        setSearchParams(searchParams);


        <Link to="type"></Link>
    }

  return (
    <Button 
        clickFilter = {title==a}
        onClick={handleClickButton}
    >{title}</Button>    
    
)}

export default FilterButton




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