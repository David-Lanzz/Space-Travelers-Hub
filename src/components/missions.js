import '../styles/missions.css'
import Missionsection from './missionsection'

const MissionsComponent = () => {

    return (
        <ul  className='missionsTable'>
            <li className='grid tablerow tabletop align'>
                <h3>Mission</h3>
                <h3>Description</h3>
                <h3>Status</h3>
                <h3 />
            </li>
            <Missionsection />
        </ul>
    )
}

export default MissionsComponent