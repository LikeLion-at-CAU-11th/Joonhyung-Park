import logo from './logo.svg';
import './App.css';
import ThumbsUp from './ThumbsUp';
import { Home } from './Pages/Home';
import { Routes, Route} from 'react-router-dom';
import Profile from './Pages/Profile';
import { Book } from './Pages/Book';
import { Books } from './Pages/Books';

function App() {
  return (
    <div>
      {/* <ThumbsUp></ThumbsUp> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:username' element={<Profile/>}></Route>
        <Route path='/books' element={<Books/>}>
          {/* 하위 컴포넌트라 / 없이 적어야 오류 없이 작동됨 */}
          <Route path=':id' element={<Book/>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
