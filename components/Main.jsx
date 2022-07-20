import React from 'react'
import {  AiOutlineMail  } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div> 
                <p className='uppercase text-sm tracking-widest text-gray-600'>Thank you for visiting!</p>
                <h1 className='py-4 text-gray-700'>
                  Hello, I am <span className='text-[#6f3d01]'>Konstantinos.</span>
                </h1>
                <h2 className='py-4 text-gray-700'>
                  A Front-End Web Developer
                </h2>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                  I am a front-end developer specializing in designing and building web applications. Currently, I am focused on building responsive web applications, while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                         <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                         <FaGithub />
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                         <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                         <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main