import React from 'react';
import './about.css';
import { useSelector } from 'react-redux';
const About = () => {
  const data = useSelector(state => {
    return state.typeReducer.text;
  });
  const count = useSelector(state => {
    return state.typeReducer.count;
  });

  return (
    <div className="about">
      <h1>This is about page</h1>
      <br />
      <br />
      <br />
      <h1>{data}</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default About;
