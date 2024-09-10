import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import "./Loader.css";

function Loader() {
  return (
    <div className='spinner'>
      <ClimbingBoxLoader loading={true} color="#FF0000" />
    </div>
  );
}

export default Loader;