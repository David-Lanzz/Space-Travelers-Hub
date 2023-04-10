import { Outlet } from "react-router-dom"
import HeaderLinks from "../components/header"
const Header = () => {
    const links = [{name: 'Rockets',path: '/'},{name: 'Missions',path: 'mission'},{name: 'Profile',path: 'profile'},]
  return (
    <div>
        <HeaderLinks links={links}/>
        <Outlet />
    </div>
  )
}

export default Header