import { Routes,Route } from 'react-router-dom';
import './App.css';
import Todo from './page/Todo';
import Restful from './page/Restful';
import React1 from './page/React1';
import Head from './component/Head';
import RestfulDetail from './page/RestfulDetail';

function App() {
  return (
    <>
    <Head/>
    <Routes>
      <Route path='/' element={<React1/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path="/restful" element={<Restful/>}/>
      <Route path="/restful/:id" element={<RestfulDetail/>}/>
    </Routes>
    </>
  );
}
export default App;