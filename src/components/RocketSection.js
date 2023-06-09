import { useDispatch, useSelector } from 'react-redux';
import { changestate } from '../redux/Rockets/rocketSlice';
import '../Styles/rocket.css';

const RocketSection = () => {
  const dispatch = useDispatch();
  const handleChange = (id) => {
    dispatch(changestate(id));
  };
  const store = useSelector((store) => store.rocketReducer);
  const { rockets, loading } = store;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return rockets.map((rocket) => (
    <li className="rocketgrid" key={rocket.id}>
      <img src={rocket.flickrImg} alt={rocket.name} className="rocketimage" />
      <div className="rocketdata">
        <h2 className="rockettitle">{rocket.name}</h2>
        <p>
          <span>{rocket.reserved ? 'Reserved' : ''}</span>
          {' '}
          {rocket.description}
        </p>
        <button
          type="button"
          className={`reservationbtn ${rocket.reserved ? 'reserved' : ''}`}
          onClick={() => handleChange(rocket.id)}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve a rocket'}
        </button>
      </div>
    </li>
  ));
};

export default RocketSection;
