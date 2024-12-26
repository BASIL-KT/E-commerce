import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import View from './pages/View'
import Wish from './pages/Wish'
import { Routes,Route } from 'react-router-dom'
import Header from './compo/Header'

function App() {

  return (
    <>
      <Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/view/:id' element={<View/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/wish' element={<Wish/>} />

</Routes>
      
    </>
  )
}

export default App
