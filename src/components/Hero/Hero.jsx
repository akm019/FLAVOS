import React from 'react';
import Lottie from "lottie-react";
import ani from "../../assets/MpAni.json";

const Hero = () => {
  const style ={
    width:"500px"
  };

  return (
    <div>
      <div className='flex bg-slate-800'>
        <div className='ml-10'>
          <div className='font-bold text-6xl mt-20 text-white'>
            Food Delivery Made 
            <span className='text-red-500'> Easy!!!!</span>
            <div className='text-4xl mt-6 '>
              Your Food Just few clicks away
            </div>
            <div className='text-2xl'>
              Explore the menu , find your taste 

            </div>
          </div>
          <button className='bg-slate-800 border border-slate-400 border-2 w- h-24 mt-20 ml-10 rounded-2xl text-white font-bold text-xl hover:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105 px-4'>
            Get Started
          </button>
        </div>
        <div className='float-end pl-28 mt-10'>
          <Lottie style={style} animationData={ani}/>
        </div>
      </div>

      {/* Add rounded white borders to the bottom of the page */}
      {/* <div className="bg-white h-16 rounded-t-lg"></div> */}
    </div>
  );
};

export default Hero;
