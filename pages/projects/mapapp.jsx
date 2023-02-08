import Image from 'next/image';
import React from 'react';
import mapapppic from '../../public/assets/projects/map-app.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import {HiOutlineChevronDoubleLeft} from 'react-icons/hi';

const mapapp = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={mapapppic}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Travel Companion</h2>
              <h3>React / Google-API / Rapid-API</h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2><br></br>
              <p>
                Travel Companion is your go-to travel companion, providing all the information you need to make the most of your trips. Whether you&apos;re looking for nearby restaurants, hotels, or attractions, Travel Companion&apos;s powerful search capabilities help you find exactly what you need. With the ability to detect your location and show the best options around you, this application is the perfect travel partner.
              </p><br></br>
              <p>
                The development of Travel Companion was powered by several APIs, including the essential Google Maps API, which leverages the vast Google database to deliver accurate, up-to-date information in real-time. 
              </p>
              <a
                href='https://github.com/KonsGio/Travel-companion'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8 shadow-[#6f3d01a5] hover:shadow-[#ad7e44] hover:scale-110 ease-in duration-300'>Code</button>
              </a>
              <a
                href='https://kgio-dev-map-app.netlify.app'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 shadow-[#6f3d01a5] hover:shadow-[#ad7e44] hover:scale-110 ease-in duration-300'>Demo</button>
              </a>
    
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#6f3d01a5] hover:shadow-[#ad7e44] hover:scale-110 ease-in duration-300 rounded-xl py-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies used</p>
                <div className='grid grid-cols-3 md:grid-cols-1 '>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> React
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Google-API
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Rapid-API
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Travel-API
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Weather-API
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Axios
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-12'>
                    <Link href='/#projects'>
                        <div className='rounded-full shadow-[#6f3d01a5] hover:shadow-[#ad7e44] shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                            <HiOutlineChevronDoubleLeft size={30} className='m-auto text-[#6f3d01]'/>
                        </div>
                    </Link>
            </div>
          </div>
        </div>
  )
}

export default mapapp