import { NavLink } from "react-router-dom"
const HeaderLinks = ({links}) => {
  return (
    <header>
        <ul>
            {links.map(link => {
                return (
                    <li key={link.path}><NavLink to={link.path}>{link.name}</NavLink></li>
                )
            })}
        </ul>
    </header>
  )
}

export default HeaderLinks