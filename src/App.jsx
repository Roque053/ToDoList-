import { useState } from 'react'
import AppProvider from "./Provider"
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <AppProvider>
      <h1>Todo lo que esta aca adentro comparte un contexto o pertenece al mismo contexto</h1>
    </AppProvider>
  )
}

export default App
