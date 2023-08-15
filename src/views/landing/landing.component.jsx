import { NavLink } from "react-router-dom";
import "./landing.styles.css";

function Landing() {
  return (
    <div className="landing">
      <div className="blur">
        <button className="buttonLanding">
          <NavLink to="/home" className="navLink">Start</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Landing;
