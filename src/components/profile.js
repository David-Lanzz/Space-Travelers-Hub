import { useSelector } from 'react-redux'

const Profile = () => {
  const store = useSelector((store)=> store.missionReducer)
const {missions} = store
const filteredmissions = missions.filter((mission)=> mission.member)
  return (
         filteredmissions.map(mission => {
      return (
        <li className='grid tablerow' style={{background: mission.background}} key={mission.mission_id}><h3 className='rightborder'>{mission.mission_name}</h3>
          <p className='rightborder'>{mission.description}</p>
          <span className='rightborder center'><button type='button'>{mission.member?'Active Member':'NOT A MEMBER'}</button></span>
          <span className='rightborder center'><button type='button'>{mission.member?'Leave Mission':'Join Mission'}</button></span></li>
      )
    })
  )
}

export default Profile