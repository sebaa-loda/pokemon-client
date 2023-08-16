import './card.styles.css';
import { useNavigate } from 'react-router-dom';

export default function Card({id,name,image,types}) {
  const navigate = useNavigate()

  return (
    <div className="card" onClick={() => {navigate(`/detail/${id}`)}}>
      <h2>{name}</h2>
      <h3>Types: {types.map(type => type.name).join(" - ")}</h3>
      <img src={image} alt={name} height="200px" width="200px"/>
    </div>
  );
}

