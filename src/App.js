import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyButton from './components/MyButton';
import Faq from './components/Faq';
import MenuIcon from './components/MenuIcon';
import Moon from './components/Moon';
import Dummy from './components/Dummy';
import Cards from './components/Cards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/button' element={<MyButton/>} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/menu' element={<MenuIcon />} />
        <Route path='/moon' element={<Moon />} />
        <Route path='/dummy' element={<Dummy />} />
        <Route path='/card' element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
