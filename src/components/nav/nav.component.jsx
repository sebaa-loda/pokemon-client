import "./nav.styles.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation()
  const showCreate = location.pathname !== "/create"
  const showHome  = location.pathname !== "/home"
  return (
    <div className="Nav">
        {showHome && <button>
        <NavLink to="/home" className="link">Home</NavLink>
        </button>
      }
      {showCreate && <button>
        <NavLink to="/create" className="link">Create</NavLink>
      </button>
      }
    </div>
  );
}
