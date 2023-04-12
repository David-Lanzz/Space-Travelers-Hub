import Profile from '../components/profile';
import '../styles/profile.css';

const MyProfile = () => (
  <div className="profile">
    <section>
      <li><h2>My Missions</h2></li>
      <ul className="profileparent">
        <Profile />
      </ul>
    </section>
    <ul>
      <li>Rockets</li>
    </ul>
  </div>
);

export default MyProfile;
