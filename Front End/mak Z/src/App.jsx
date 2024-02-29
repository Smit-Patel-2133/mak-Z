import { useState } from 'react'
import Login from "./components/login/Login.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Login/>

        </div>
    </>
  )
}

export default App
