import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Detail from './pages/Detail'
import NoMatch from './pages/NoMatch'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          
          <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
