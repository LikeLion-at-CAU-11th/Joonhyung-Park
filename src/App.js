import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
