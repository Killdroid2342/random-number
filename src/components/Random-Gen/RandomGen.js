import React, { useState } from 'react';

const RandomGen = () => {
  const [sampleNumber, setSampleNumber] = useState();
  const getRandomNumber = () => {
    let min = 1;
    let max = 9999;
    setSampleNumber(Math.round(Math.random() * (max - min) + min));
  };
  return (
    <div className='border-2 border-white w-60 h-40 ml-80 mt-96 bg-black'>
      <h1 className='text-white ml-7 mt-4'>Click Button To Get Number</h1>
      <p className='text-white border-2 border-white w-16 ml-20 mt-4'>
        {sampleNumber}
      </p>
      <button
        onClick={() => getRandomNumber()}
        className='border-2 border-white text-white mt-4 ml-20'
      >
        Click Me
      </button>
    </div>
  );
};

export default RandomGen;
