import { Profile, Rocketprofile } from '../components/profile';
import '../styles/profile.css';

const MyProfile = () => (
  <div className="profile">
    <section>
      <li><h2>My Missions</h2></li>
      <ul className="profileparent">
        <Profile />
      </ul>
    </section>
    <section>
      <li><h2>My Rockets</h2></li>
      <ul className="profileparent">
        <Rocketprofile />
      </ul>
    </section>
  </div>
);

export default MyProfile;
