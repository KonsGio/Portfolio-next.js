import Image from 'next/image';
import React from 'react';
import portfolio from '../../public/assets/projects/My-portfolio.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const myportfolio = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={portfolio}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>My portfolio in HTML</h2>
              <h3>HTML5 / Javascript / Css3</h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>
                This project is the first attempt of building my own website portfolio. It is a simple HTML page spiced up with css and javascript. 
              </p>
              <a
                href='https://github.com/KonsGio/My-portfolio'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
              <a
                href='https://kgio-html-portfolio.netlify.app'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4'>Demo</button>
              </a>
    
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies used</p>
                <div className='grid grid-cols-3 md:grid-cols-1 '>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> HTML5
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> CSS3
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Javasript
                  </p>
                </div>
              </div>
            </div>
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
          </div>
        </div>
  )
}

export default myportfolio