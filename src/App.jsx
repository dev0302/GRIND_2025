import Navbar from './components/Navbar'
import Home from './pages/Home'
import U_Home from './pages/U_Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<U_Home />} />
      </Routes>
    </div>
  )
}
export default App
