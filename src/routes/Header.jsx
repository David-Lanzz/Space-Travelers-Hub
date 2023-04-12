import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderLinks from '../components/header';
import { getMissions } from '../redux/missions/missionSlice';
import { getRockets } from '../redux/Rockets/rocketSlice';

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  }, [dispatch]);
  const links = [{ name: 'Rockets', path: '/' }, { name: 'Missions', path: 'mission' }, { name: 'Profile', path: 'profile' }];
  return (
    <div className="header">
      <HeaderLinks links={links} />
      <Outlet />
    </div>
  );
};

export default Header;
