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
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {},
   },
   plugins: [],
 }
export default AppRoutes