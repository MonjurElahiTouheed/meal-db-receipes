import { NavLink } from "react-router"
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div>
        <h2>Mealdb</h2>
      </div>
      <div>
        <NavLink to="/">Categories</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
