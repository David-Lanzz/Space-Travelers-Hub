import { useSelector } from 'react-redux';
import '../styles/rocket.css';

const RocketSection = () => {
  const store = useSelector((store) => store.rocketReducer);
  const { rockets, loading } = store;
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return rockets.map((rocket) => (
    <li className="rocketgrid" key={rocket.id}>
      {' '}
      <img src={rocket.flickr_images} alt={rocket.name} className="rocketimage" />
      <div className="rocketdata">
        <h2 className="rockettitle">{rocket.name}</h2>
        <p>{rocket.description}</p>
        <button type="button"> Reserve Rocket</button>
      </div>
    </li>
  ));
};

export default RocketSection;
