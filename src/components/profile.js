import { useSelector } from 'react-redux';

export const Profile = () => {
  const store = useSelector((store) => store.missionReducer);
  const { missions } = store;
  const filteredmissions = missions.filter((mission) => mission.member);
  if (!filteredmissions.length) {
    return (
      <li>You have no registered missions yet...</li>
    );
  }
  return (
    filteredmissions.map((mission) => (
      <li className="profilechildren" key={mission.mission_id}><h4>{mission.mission_name}</h4></li>
    ))
  );
};

export const Rocketprofile = () => {
  const store = useSelector((store) => store.rocketReducer);
  const { rockets } = store;
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  if (!reservedRockets.length) {
    return (
      <li>Reserve a Rocket</li>
    );
  }
  return (
    reservedRockets.map((rocket) => (
      <li className="profilechildren" key={rocket.id}><h4>{rocket.name}</h4></li>
    ))
  );
};
