import { Routes,Route } from 'react-router-dom';
import './App.css';
import Todo from './page/Todo';
import Restful from './page/RestAPI/Restful';
import React1 from './page/React1';
import Head from './component/Head';
import RestfulDetail from './page/RestAPI/RestfulDetail';
import RestAPI from './page/RestAPI/RestAPI';

function App() {
  return (
    <>
    <Head/>
    <Routes>
      <Route path='/' element={<React1/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path="/restapi" element={<RestAPI/>}/>
      <Route path="/restful" element={<Restful/>}/>
      <Route path="/restful/:id" element={<RestfulDetail/>}/>
    </Routes>
    </>
  );
}
export default App;