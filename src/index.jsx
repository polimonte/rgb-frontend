import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../src/Components/pages/Home/Home';
import Destino from './Components/pages/Destinos/Destinos';
import Promocoes from './Components/pages/Promocoes/Promocoes';
import Contato from './Components/pages/Contato/Contato';
import Header from './Components/Header/Header';
import MeuCarrinho from './Components/pages/MeuCarrinho/MeuCarrinho';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/Destinos' element={<Destino/>}></Route>
        <Route path='/Promocoes' element={<Promocoes/>}></Route>
        <Route path='/Contato' element={<Contato/>}></Route>
        <Route path='/MeuCarrinho' element={<MeuCarrinho/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);