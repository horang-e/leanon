import { Routes,Route } from 'react-router-dom';
import './App.css';
import Todo from './page/Todo';
import Restful from './page/Restful';
import React1 from './page/React1';

function App() {
  return (
    <Routes>
      <Route path='/' element={<React1/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path="/restful" element={<Restful/>}/>
    </Routes>
  );
}
export default App;