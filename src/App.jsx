import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CatList from './components/CatList'
import CatForm from './components/CatForm'
import CatGallery from './components/CatGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Cat Clicker</h1>
    <div className="flex space-x-8">
      <CatList/>
      <CatForm/>
     
    </div>
    <CatGallery/>
    </div>
  )
}

export default App
