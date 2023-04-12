import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missionsection from '../components/missionsection';
import RocketSection from '../components/RocketSection';
import { Profile } from '../components/profile';

afterEach(cleanup);
describe('tests for components', () => {
  test('Snapshot test for Missions', () => {
    const mission = render(<Provider store={store}><Missionsection /></Provider>);
    expect(mission).toMatchSnapshot();
  });
  test('Snapshot test for Missions', () => {
    const rockets = render(<Provider store={store}><RocketSection /></Provider>);
    expect(rockets).toMatchSnapshot();
  });
  test('Snapshot test for Missions', () => {
    const profile = render(<Provider store={store}><Profile /></Provider>);
    expect(profile).toMatchSnapshot();
  });
});
