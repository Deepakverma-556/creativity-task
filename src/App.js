import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyButton from './components/MyButton';
import Faq from './components/Faq';
import MenuIcon from './components/MenuIcon';
import Moon from './components/Moon';
import Dummy from './components/Dummy';
import ReflectIcons from './components/ReflectIcons';
import Book from './components/Book';
import Cards from './components/Cards';
import { TextAnimation } from './components/TextAnimation';
import IncreaseCards from './components/IncreaseCards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/button' element={<MyButton/>} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/menu' element={<MenuIcon />} />
        <Route path='/moon' element={<Moon />} />
        <Route path='/dummy' element={<Dummy />} />
        <Route path='/reflection' element={<ReflectIcons />} />
        <Route path='/book' element={<Book />} />
        <Route path='/card' element={<Cards />} />
        <Route path='/text' element={<TextAnimation />} />
        <Route path='/increase-card' element={<IncreaseCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
