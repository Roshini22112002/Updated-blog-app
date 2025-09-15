import React from 'react'
import Login from './components/Login'
import Add from './components/Add'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/log' element={<Login/>}></Route>
        <Route element={<PrivateRoutes/>}>
        <Route path='/add' element={<Add/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App