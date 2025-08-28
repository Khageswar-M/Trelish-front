import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Todos from './Components/Todos';
import Header from './Components/Header';
import Login from './Components/Login';
import About from './Components/About';
import Home from './Components/Home';

function App() {

  return (  
    <>
      <BrowserRouter>
        <Header/>
        {/* <TodoHomePage/> */}
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/todos' element = {<Todos/>}/>   
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signin' element = {<Login/>}/>
          <Route path='/about' element = {<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
