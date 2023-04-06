import Nav from './Nav'
import './App.css'
import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, Colours, Colour} from './pages'

function App() {
  const [myColours, setMyColours] = useState([])

  useEffect(() => {
    addToMyColours()
  }, [])

  const addToMyColours = (element) => {
    const colourToAdd = element
    setMyColours([...myColours, colourToAdd]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path="/colours">
          <Route index element={<Colours/>}/>
          <Route path=":id" element={<Colour />}/>
        </Route>
        <Route path="*" element={<h1>404 not found</h1>}/> //known as wildcard route for incorrect urls
        </Route>
      </Routes>
    </div>
  )
}

export default App
