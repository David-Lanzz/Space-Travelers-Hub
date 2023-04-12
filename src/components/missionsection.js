import { useSelector } from 'react-redux'
import { changestate } from '../redux/missions/missionSlice'
import { useDispatch } from 'react-redux'

const Missionsection = () => {
  const dispatch = useDispatch()


 




  const handleChange = (id)=> {
dispatch(changestate(id))
  }
  const store = useSelector((store) => store.missionReducer)
  const { missions, loading } = store
  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    missions.map(mission => {
      return (
        <li className='grid tablerow' style={{background: mission.background}} key={mission.mission_id}><h3 className='rightborder'>{mission.mission_name}</h3>
          <p className='rightborder'>{mission.description}</p>
          <span className='rightborder center'><button type='button'>{mission.member?'Active Member':'NOT A MEMBER'}</button></span>
          <span className='rightborder center'><button type='button' onClick={()=> handleChange(mission.mission_id)}>{mission.member?'Leave Mission':'Join Mission'}</button></span></li>
      )
    })
  )
}

export default Missionsection