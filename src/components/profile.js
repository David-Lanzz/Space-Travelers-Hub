import { useSelector } from 'react-redux'

const Profile = () => {
  const store = useSelector((store)=> store.missionReducer)
const {missions} = store
const filteredmissions = missions.filter((mission)=> mission.member)
  return (
         filteredmissions.map(mission => {
      return (
        <li className='profilechildren'><h4>{mission.mission_name}</h4></li>
      )
    })
  )
}

export default Profile