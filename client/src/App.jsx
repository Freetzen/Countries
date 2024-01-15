import { Route, Routes, useLocation } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import {useState } from "react"
import Home from "./components/Home/Home"
import Detail from "./components/Detail/Detail"
import NavBar from "./components/NavBar/NavBar"
import Form from "./components/Form/Form"
import { searchCountry } from "./redux/actions"
import { useDispatch } from "react-redux"

function App() {

  const location = useLocation()
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const onSearch = (newname) => {
    try{
      dispatch(searchCountry(newname))
      setPage(1)
    } catch{
      throw Error(error.message);
    }
  }

  return (
    <div className='App'>

      {
        location.pathname !== '/' &&  <NavBar/> //Si se cumple los primero, muestra el componente
      }

      <Routes>
        <Route  path='/' element={<LandingPage />} />
        <Route  path='/home' element={<Home page={page} setPage={setPage} onSearch={onSearch}/>} />
        <Route  path="/detail/:id" element={<Detail />} />
        <Route  path="/create-activity" element={<Form />} />
        <Route />
      </Routes>
    </div>
  )
}

export default App
