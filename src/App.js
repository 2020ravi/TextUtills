import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TextForm from './components/TextForm'
import About from './components/About'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
        <Navbar title='TextUtils' />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<TextForm />} />
            <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
