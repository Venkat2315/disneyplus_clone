import React from 'react';
//import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='detail'  element={<Detail/>}/>
          <Route path='login'  element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
