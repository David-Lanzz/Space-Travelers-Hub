import { useSelector } from "react-redux";
import {changestate} from '../redux/Rockets/rocketSlice'
import '../styles/rocket.css'
const RocketSection = () => {
  const handleChange = (id)=> {
    dispatch(changestate(id))
      }
  const store = useSelector((store) => store.rocketReducer);
  const { rockets, loading } = store;
  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(rockets);
  return rockets.map((rocket) => {
    return (
      <li className="rocketgrid" key={rocket.id}>
        {" "}
        <img src={rocket.flickr_images} alt={rocket.name} className="rocketimage" />
        <div className="rocketdata">
        <h2 className="rockettitle">{rocket.name}</h2>
        <p>{rocket.reserved ? 'Reserved': ''} {rocket.description}</p>
        <button type="button" onClick={()=> handleChange(rocket.id)}>{rocket.reserved?'Cancel Reservation':'Reserve a rocket'}</button></div>
      </li>
    );
  });
};

export default RocketSection;
