import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from './Sketch.js';
import "./P5.css";
const P5 = () => {
    return (
    <div className='P5'>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default P5;
