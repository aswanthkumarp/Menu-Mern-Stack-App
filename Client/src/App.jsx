import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuBar from './components/MenuBar'
import MenuDisplay from './components/MenuDisplay'
import ToggleButtons from './components/ToggleButtons'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <MenuBar/>
  <ToggleButtons/>
  <Footer/>
  <ToastContainer />
    </>
  )
}

export default App
