import React from 'react'
import {  AiOutlineMail  } from 'react-icons/ai';
import { FaFileDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
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
                        <a onClick={() => setNav(false)} href='https://www.linkedin.com/in/konstantinos-giovanitsas-10b511150/' target='_blank' className='text-[#6f3d01]'><FaLinkedinIn  /></a>
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                        <a onClick={() => setNav(false)} href='https://github.com/KonsGio' target='_blank' className='text-[#6f3d01]'><FaGithub /></a>
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                        <a onClick={() => setNav(false)} href='/#contact' className='text-[#6f3d01]'><AiOutlineMail /></a>
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                        <a onClick={() => setNav(false)} href='https://mega.nz/file/xYNlnSCI#B8-UZI987dsWx41SDiqhOHc9Sg0EBqUZKvHOe7P65Ig' target='_blank' className='text-[#6f3d01]'><FaFileDownload /></a>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main