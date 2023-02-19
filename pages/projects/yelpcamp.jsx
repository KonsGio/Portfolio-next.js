import React from 'react'
import Image from 'next/image';
import yelpcampimg from '../../public/assets/projects/yelpcamp.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import {HiOutlineChevronDoubleLeft} from 'react-icons/hi';

const yelpcamp = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={yelpcampimg}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>YelpCamp</h2>
              <h3>EJS / MongoDB / Node.js</h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <br></br>
              <p>YelpCamp is a full-stack web application that I developed using Node.js, Express, MongoDB, and Bootstrap. Inspired by the popular Yelp platform, YelpCamp allows users to browse and review campgrounds, as well as create their own campground listings.</p>
              <br></br> 
              <p>The application includes many features such as user authentication, authorization, and password encryption, which ensure the security of the users' personal information. Users can search for campgrounds by location or name, view detailed campground information, including images and reviews, and add their own reviews and ratings.</p>
              <br></br>
              <p>Additionally, the application includes a feature-rich campground creation form, which allows users to create their own campgrounds, complete with descriptions, images, and location details. The campground listings are displayed in an interactive map and can be filtered by various attributes such as price and rating.</p>
              <br></br>
              <p>Overall, YelpCamp is a robust and engaging web application that provides a complete and interactive experience for users interested in finding, reviewing, and creating campgrounds</p>
              <a
                href='https://github.com/KonsGio/YelpCamp'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8 shadow-[#6f3d01a5] hover:shadow-[#ad7e44] hover:scale-110 ease-in duration-300'>Code</button>
              </a>
              <a
                href='https://kgio-yelp-camp.herokuapp.com'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 shadow-[#6f3d01a5] hover:shadow-[#ad7e44] hover:scale-110 ease-in duration-300'>Demo</button>
              </a>
    
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#6f3d01a5] hover:shadow-[#ad7e44] hover:scale-110 ease-in duration-300 rounded-xl py-4 '>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies used</p>
                <div className='grid grid-cols-3 md:grid-cols-1 '>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Node.js
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> MongoDB
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Javascript
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Bootstrap
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> MVC architecture
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Routes
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-12'>
                    <Link href='/#projects'>
                        <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 shadow-[#6f3d01a5] hover:shadow-[#ad7e44]'>
                            <HiOutlineChevronDoubleLeft size={30} className='m-auto text-[#6f3d01]'/>
                        </div>
                    </Link>
            </div>
          </div>
        </div>
  )
}

export default yelpcamp