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
import { dishesData,  } from "./data/mockData"

function App() {  

  const dishes = dishesData;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/menu' element={<Menu dishes={dishes} />}></Route>
          {
              dishes.map(dish => <Route path={`detail/${dish.name}` + `-${dish.id}`} 
                        element={<Detail {...dish}></Detail>}></Route>)
          }
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
