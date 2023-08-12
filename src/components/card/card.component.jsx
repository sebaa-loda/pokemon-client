import './card.styles.css';
import { NavLink } from 'react-router-dom';

export default function Card({id,name,image,types}) {
  return (
    <div className="card">
      <h2><NavLink to={`/detail/${id}`}>{name}</NavLink></h2>
      <h3>Types: {types.map(type => type.name).join(" - ")}</h3>
      <img src={image} alt={name} height="200px" width="200px"/>
    </div>
  );
}

