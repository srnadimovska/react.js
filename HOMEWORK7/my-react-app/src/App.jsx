import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CountryDetail from './pages/countryDetail'
import NotFound from './pages/notFound'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/country/:name" element={<CountryDetail />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
