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
              <h2>Overview</h2>
              <p>
              This is a chat application built in React.js, with sign up and log in features. A database in <strong><a href="https://getstream.io/chat/">stream.io</a></strong> is responsible for hosting the user data. 
              From there someone can add, remove update users, but also give privileges on database manipulation.
               Also the application is going to be set up with <strong><a href="https://www.twilio.com">Twilio</a></strong>, an app which sends sms notifications to the user when they have a new message.
              </p>
              <p>
              For more information about these tools, you can either visit their websites or search for some examples.
              </p>
              <a
                href='https://github.com/KonsGio/Dev-chat'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
              <a
                href='https://kgio-dev-chat-app.netlify.app'
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
                        <div className='rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-600'>
                            <HiOutlineChevronDoubleLeft size={30} className='m-auto text-[#6f3d01]'/>
                        </div>
                    </Link>
            </div>
          </div>
        </div>
      );
}

export default devchat