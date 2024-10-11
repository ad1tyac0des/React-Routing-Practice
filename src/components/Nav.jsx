import { NavLink } from "react-router-dom"
const Nav = () => {
  return (
    <nav className="flex gap-5 p-10">
      <NavLink className={e => e.isActive ? ['text-red-500'].join(" ") : null} to="/">Home</NavLink>
      <NavLink className={e => e.isActive ? ['text-red-500'].join(" ") : null} to="/about">About</NavLink>
      <NavLink className={e => e.isActive ? ['text-red-500'].join(" ") : null} to="/users">Users</NavLink>
    </nav>
  )
}

export default Nav