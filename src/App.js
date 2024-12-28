import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyButton from './components/MyButton';
import Faq from './components/Faq';
import MenuIcon from './components/MenuIcon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/button' element={<MyButton/>} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/menu' element={<MenuIcon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
