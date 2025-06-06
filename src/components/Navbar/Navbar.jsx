import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav>
      <div>
        <h2>Mealdb</h2>
      </div>
      <div>
        <NavLink to="/">Categories</NavLink>
        <NavLink to="/images">Images</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
