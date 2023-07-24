import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Mypage from './pages/Mypage'
import Layout from './components/layout/Layout'
const App = () => {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/mypage' element={<Mypage/>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App