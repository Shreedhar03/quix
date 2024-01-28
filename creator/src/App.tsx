import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Creation from './pages/Creation'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/creation" element={<Creation/>} />  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App