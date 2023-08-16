import { NavLink } from "react-router-dom";
import "./landing.styles.css";
import { useDispatch } from "react-redux";
import {
  getPokemons,
  getTypes,
} from "../../redux/actions";
import { useEffect } from "react";


function Landing() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, [dispatch]);
  return (
    <div className="landing">
      <div className="blur">
        <button className="buttonLanding">
          <NavLink to="/home" className="navLink">
            Start
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Landing;
