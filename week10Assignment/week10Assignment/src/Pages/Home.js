import React,{useState} from 'react'
import styled from 'styled-components';

export const Home = () => {
    const [modal,setModal] = useState(0);

    return (
    <div>
        
        <MenuDom>
          <MenuButton clicked={modal===0} onClick={()=>setModal(0)}>아기사자 정보</MenuButton>
          <MenuButton clicked={modal===1} onClick={()=>setModal(1)}> 멋사인 테스트</MenuButton>
        </MenuDom>

    </div>
  )
}


const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MenuButton = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? "orange" : "gray")};
  color: white;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuDom = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;