import { NavLink } from "react-router-dom";
import image from "../images/planet.png";
import "../Styles/header.css";

const HeaderLinks = ({ links }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={image} alt="logo"></img>
          <h1>Space Travelers' Hub</h1>
        </div>

        <ul>
          {links.map((link) => {
            return (
              <li key={link.path}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLinks;
