import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeText, increment, decrement } from '../../redux/typeSlice';
const Home = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(changeText(e.target.value));
  };

  const onPlusClick = () => {
    dispatch(increment());
  };
  const onMinusClick = () => {
    dispatch(decrement());
  };
  return (
    <div className="home">
      <h1>This is home page</h1>
      <br />
      <br />
      <Link to="/about">About</Link>
      <br />
      <br />
      <input type="text" onChange={onChange} />
      <br />
      <br />
      <button onClick={onPlusClick}>+</button>
      <button onClick={onMinusClick}>-</button>
    </div>
  );
};

export default Home;
