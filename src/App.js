
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Form from './Component/File/Form';

function App() {
  return (
   <BrowserRouter>

   <Routes>

    <Route path='/' element={<Form />}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
