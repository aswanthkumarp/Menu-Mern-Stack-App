import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import MenuBar from './components/MenuBar'
import MenuDisplay from './components/MenuDisplay'
import ToggleButtons from './components/ToggleButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <MenuBar/>
  <ToggleButtons/>
    </>
  )
}

export default App
