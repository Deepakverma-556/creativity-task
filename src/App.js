import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyButton from './components/MyButton';
import Faq from './components/Faq';
import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/button' element={<MyButton/>} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
