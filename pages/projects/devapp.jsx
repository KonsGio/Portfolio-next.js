import React from 'react'
import Image from 'next/image';
import devapppic from '../../public/assets/projects/dev-app.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import {HiOutlineChevronDoubleLeft} from 'react-icons/hi';

const devapp = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={devapppic}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Admin UI Dashboard</h2>
              <h3>React JS / Typescript / TailWind</h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>
                This UI Dashboard application features a number of visual representations for income and outcome values and also general tools for simulating chart data. 
                This project was built, to explore the ready components that <a href="https://www.syncfusion.com"><strong>Syncfusion </strong></a>provides.

              </p>
              <a
                href='https://github.com/KonsGio/Admin-UI-Dashboard'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
              <a
                href='https://kgio-dev-dashboard.netlify.app'
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
                    <RiRadioButtonFill className='pr-1' /> React
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Typescript
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> PostCSS
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> TailWind
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Syncfusion
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Routes
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-12'>
                    <Link href='/#projects'>
                        <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                            <HiOutlineChevronDoubleLeft size={30} className='m-auto text-[#6f3d01]'/>
                        </div>
                    </Link>
            </div>
          </div>
        </div>
  )
}

export default devapp