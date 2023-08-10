import { useDispatch } from 'react-redux';
import './landing.styles.css';
import { getTypes } from '../../redux/actions';
import { useEffect } from 'react';


function Landing() {
  const dispatch = useDispatch();

  useEffect(() =>{
    console.log(dispatch(getTypes()))
  },[dispatch])

  return (
    <div className="">
      <h1>WELCOME</h1>
      
    </div>
  );
}

export default Landing;
