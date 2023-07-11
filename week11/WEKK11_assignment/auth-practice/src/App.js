import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Mypage from "./pages/Mypage";

function App() {
  return( 
  <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/mypage" element={<Mypage></Mypage>}></Route>
    </Routes>
  
  </BrowserRouter>
  )
}

export default App;
