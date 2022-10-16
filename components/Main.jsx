import Link from 'next/link';
import React from 'react'
import {  AiOutlineMail  } from 'react-icons/ai';
import { FaFileDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineChevronDoubleDown} from 'react-icons/hi';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='mt-20'> 
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
                        <a href='https://www.linkedin.com/in/konstantinos-giovanitsas-10b511150/' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaLinkedinIn  /></a>
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                        <a href='https://github.com/KonsGio' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaGithub /></a>
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                        <a href='mailto:konstantinos.giovanitsas@yahoo.com' className='text-[#6f3d01]'><AiOutlineMail /></a>
                    </div>
                    <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                        <a href='https://mega.nz/file/tN1ijTbb#Cy6-jmWSKQn_rbgcOq19FrvSJ_M98avaXaju55J_vYM' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaFileDownload /></a>
                   </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/#skills'>
                        <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                            <HiOutlineChevronDoubleDown size={30} className='m-auto text-[#6f3d01]'/>
                        </div>
                    </Link>
            </div>
            </div>
        </div>
       
    </div>
  )
}

export default Main