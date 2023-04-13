import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../images/planet.png';
import '../sgtyles/header.css';

const HeaderLinks = ({ links }) => (
  <header>
    <nav>
      <div className="logo">
        <img src={image} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>

      <ul className="navlink">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
HeaderLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default HeaderLinks;
