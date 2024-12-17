import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomButton from './view/CustomButton';
import MyFaq from './view/MyFaq';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/button' element={<CustomButton/>} />
        <Route path='/faq' element={<MyFaq/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
