import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

export default function App() {
  return (
   <>
   <Navbar/>
     <Outlet/>
  <div className="mt-10 p-5">
  <Footer/>
  </div> 
   </>
  )
}