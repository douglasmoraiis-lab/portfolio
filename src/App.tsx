import { Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App