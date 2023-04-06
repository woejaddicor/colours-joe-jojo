import { NavLink, Outlet } from "react-router-dom"

function Nav() {
  let activeStyle = {textDecoration: "none", color: "black"}
  return (
    <>
    <nav>
      <ul className="nav-links">
        <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        <NavLink to="/colours" style={({isActive}) => (isActive ? activeStyle : undefined)}>Colours</NavLink>
      </ul>
    </nav>
<Outlet />
</>
  )
}

export default Nav
