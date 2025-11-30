// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Detail from './pages/Detail'
import NoMatch from './pages/NoMatch'
import { dishesData } from "./data/mockData"
import Canteen from "./pages/Canteen"
import Floor from './pages/Floor'
import { canteens } from "./types/menu"
import DishCard from './components/DishCard'

function App() {  

  const dishes = dishesData;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          {
            canteens.map(canteen => <Route path={`canteens/${canteen.id}`} element={<Canteen {...canteen}></Canteen>}></Route>)
          }
          {
            canteens.map(canteen => (canteen.floors.map(
              floor => <Route path={`canteens/${canteen.id}/floors/${floor.id}`} element={<Floor {...floor} canteenId={canteen.id}/>}></Route>
                )))
          }

          {
            canteens.map(canteen => canteen.floors.map(floor => floor.windows.map(
                w => w.dishes.map(dish => <Route path={`/canteens/${canteen.id}/floors/${floor.id}/${dish.name}`}
                                           element={<DishCard {...dish}/>}>
                </Route>)))
            ) 
          }

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
