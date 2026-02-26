import React from 'react'
import{Routes, Route} from "react-router"
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Create from './pages/Create'
import DiscoverPage from './pages/DiscoverPage'
import MenuPage from './pages/MenuPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create' element={<Create />} />
        <Route path='/discover' element={<DiscoverPage />} />
        <Route path='/menu' element={<MenuPage/>}/>
      </Routes>
    </div>
  )
}

export default App
