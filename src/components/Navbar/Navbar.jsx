import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav>
      <div>
        <h2>Mealdb</h2>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/receipes">Receipes</NavLink>
        <NavLink to="/images">Images</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
