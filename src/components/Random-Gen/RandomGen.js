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
      <div className='border-2 border-white w-60 pb-20 mt-96 bg-black text-center'>
        <h1 className='text-white  mt-4 font-bold text-xl'>
          Click Button To Get Number
        </h1>
        <div className='center'>
          <p className='text w-16 text-center'>{sampleNumber}</p>
        </div>
        <div className='center mt-5'>
          <button onClick={() => getRandomNumber()} className='text'>
            Click Here
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(sampleNumber)}
            className='text'
          >
            Copy Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomGen;
