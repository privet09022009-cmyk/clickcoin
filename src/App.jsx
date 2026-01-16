import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Click Coin</h1>
      <p>Кликай по монете!</p>

      <button className="coin" onClick={() => setCount(count + 1)}>
        🪙 {count}
      </button>
    </div>
  )
}
