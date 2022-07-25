import Image from 'next/image';
import React from 'react';
import mapapppic from '../../public/assets/projects/map-app.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

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
              <h2>Overview</h2>
              <p>
                Travel Companion is an application that does exactly what its name says. You can bring Travel Companion wherever you are. The application is 
                capable of fetching data for Restaurants, Hotels and Attractions nearby. It has the ability to discover user's location and bring the 
                suitable options around. 
              </p>
              Several APIs were used in this project, with the most important of them, the Google-maps-API which enables as to build a map application
              capable of fetching real data from the google database.
              <p>
                
              </p>
              <a
                href='https://github.com/KonsGio/Travel-companion'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
              <a
                href='https://kgio-dev-map-app.netlify.app'
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
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
          </div>
        </div>
  )
}

export default mapapp