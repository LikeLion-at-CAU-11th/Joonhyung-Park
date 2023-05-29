import React,{useState} from 'react'
import { Route,Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './Pages/Home';

function App() {

  return (
    <div>

    <Routes>
      <AppDom>
        <Route path='/' element={<Home/>}>

        </Route>
      </AppDom>
    </Routes>

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