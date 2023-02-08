import Image from 'next/image';
import React from 'react';
import devchatpic from '../../public/assets/projects/dev-chat.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import {HiOutlineChevronDoubleLeft} from 'react-icons/hi';

const devchat = () => {
    return (
        <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={devchatpic}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Chat Application</h2>
              <h3>React JS / Typescript / Stream.io</h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2><br></br>
              <p>
                Experience seamless communication with this cutting-edge chat application, built using React.js and equipped with sign-up and login features. User data is securely stored in a database powered by <strong><a href="https://getstream.io/chat/">stream.io</a></strong>, allowing for easy management and manipulation of users and privileges. The application is also integrated with <strong><a href="https://www.twilio.com">Twilio</a></strong>, delivering SMS notifications to users as soon as they receive a new message. 
              </p><br></br>
              <p>
                To learn more about these powerful tools, simply visit their websites or explore examples and tutorials.
              </p>
              <a
                href='https://github.com/KonsGio/Dev-chat'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8 shadow-[#6f3d01a5] hover:shadow-[#ad7e44] hover:scale-110 ease-in duration-300'>Code</button>
              </a>
              <a
                href='https://kgio-dev-chat-app.netlify.app'
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
                    <RiRadioButtonFill className='pr-1' /> Typescript
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> PostCSS
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Stream.io
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Twilio
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
      );
}

export default devchat