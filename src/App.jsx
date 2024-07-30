import { useState } from 'react'
import './styles/App.scss'
import Button from 'react-bootstrap/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Button class="btn">bootstrapped button</Button>
    </>
  )
}

export default App
