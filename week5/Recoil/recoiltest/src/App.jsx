import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:"flex", justifyContent:"center"}}>
        <h5>Welcome</h5>
        <div></div>
      </div>
    </>
  )
}

export default App
