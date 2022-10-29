import React, { useState } from 'react';

const RandomGen = () => {
  const [sampleNumber, setSampleNumber] = useState();
  const getRandomNumber = () => {
    let min = 1;
    let max = 9999;
    setSampleNumber(Math.round(Math.random() * (max - min) + min));
  };
  return (
    <div className='center'>
      <div className='border-2 border-white w-60 h-40 mt-96 bg-black'>
        <h1 className='text-white ml-7 mt-4'>Click Button To Get Number</h1>
        <p className='text w-16 text-center'>{sampleNumber}</p>
        <button onClick={() => getRandomNumber()} className='text'>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default RandomGen;
