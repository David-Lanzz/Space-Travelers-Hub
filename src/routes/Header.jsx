import { Outlet } from "react-router-dom"
import HeaderLinks from "../components/header"
import { getMissions } from '../redux/missions/missionSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
const Header = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMissions())
  }, [])
    const links = [{name: 'Rockets',path: '/'},{name: 'Missions',path: 'mission'},{name: 'Profile',path: 'profile'},]
  return (
    <div className="header">
        <HeaderLinks links={links}/>
        <Outlet />
    </div>
  )
}

export default Header