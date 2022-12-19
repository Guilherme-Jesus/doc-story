import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CustomOrigin from './components/CustomOrigin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <CustomOrigin/>
    </div>
  )
}

export default App
