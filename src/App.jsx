import React from 'react'
import{Routes, Route} from "react-router"
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
