import { Link } from "react-router-dom"
import "./navbar.css"
function Navbar() {
  return (
    //<div className="flex item-center justify-between w-full text-white font-semibold p-10">
    <div className="navbar">
    <div><img src="vi.export.jpeg" alt="Logo" className="w-10" /></div>
      <div>
      <Link to="/">User</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/bid">Bid</Link>
    
      </div>
    </div>
  
  )
}

export default Navbar;
