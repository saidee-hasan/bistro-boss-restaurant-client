import React from 'react';

function SectionTitle({ heading, subHeading }) {
  return (
    <div className='text-center'>
      <p className='text-orange-400'> { subHeading} </p>
      {/* Using w-[70%] for 70% width */}
      <hr className='w-[50%] mx-auto' />
      <h3 className='md:text-3xl text-gray-400 font-bold'>{heading}</h3>
    </div>
  );
}

export default SectionTitle;
