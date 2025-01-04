import React from 'react';
import Chef from '../assets/home/chef-service.jpg';

function ChefService() {
  return (
    <div
      className='h-96 bg-cover bg-center'
      style={{
        backgroundImage: `url(${Chef})`,
      }}
    >
      <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-20 p-4">
        <div className="w-full max-w-3xl text-center bg-white p-6 rounded-lg shadow-lg">
          <h1 className='text-2xl text-orange-400'>Bistro Boss</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChefService;
