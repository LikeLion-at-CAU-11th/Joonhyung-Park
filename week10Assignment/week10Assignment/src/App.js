import React,{useState} from 'react'
import { Route,Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './Pages/Home';
import LionInfoModal from './Pages/lioninfo/LionInfoModal';
import LiontestModal from './Pages/liontest/LiontestModal';

function App() {


  return (
    <div>
      <AppDom>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='info' element={<LionInfoModal/>} />
            <Route path='test' element={<LiontestModal/>} />
          </Route>
        </Routes>
      </AppDom>
    </div>
  );
}

export default App;



const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;