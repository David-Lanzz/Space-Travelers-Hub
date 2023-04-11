import { getMissions } from '../redux/missions/missionSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Missionsection = () => {
  const dispatch = useDispatch()
  const [missionstate,changemissionstate] = useState('Not a member')
  const [buttonstate,changebuttonstate] = useState('Join mission')
  useEffect(() => {
    dispatch(getMissions())
  }, [])
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
          <span className='rightborder center'><button type='button'>{missionstate}</button></span>
          <span className='rightborder center'><button type='button'>{buttonstate}</button></span></li>
      )
    })
  )
}

export default Missionsection