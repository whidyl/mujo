import { Routes, Route } from "react-router-dom"

// import the Home.tsx component
import Home from "../pages/Home"

function AppRoutes (){
   return(
     <Routes>
        <Route path="/"  element={<Home/>}></Route>
     </Routes>
  )
}

export default AppRoutes