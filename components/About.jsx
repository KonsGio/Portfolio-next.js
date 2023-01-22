import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/dev-kgio.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 mt-5'>
                <p className='uppercase text-xl tracking-widest text-[#6f3d01]'>
                    INFORMATION ABOUT ME
                </p>
                <h2 className='py-4'>Who I Am</h2>
                <h3 className='py-2 text-gray-600'>I am a Software Engineer</h3>
                <p className='py-2 text-gray-600'>
                Welcome to my portfolio website! My name is Konstantinos and I am a web developer with a passion for creating beautiful, functional websites.
                </p>
                <p className='py-2 text-gray-600'>
                 I have been working in the web development industry for over 2 years and have had the opportunity to work on a variety of projects. On this website, 
                you will find examples of my work, as well as information about me and my skills. Feel free to explore and contact me if you have any questions or would like to discuss a project. Thank you for visiting!
                </p>
                {/* <Link href='/#contact'>
                    <p className='py-2 text-[#6f3d01] underline cursor-pointer hover:scale-105 hover:ease-in duration-500'>
                    Don&apos;t hesitate to contact me.
                    </p>
               </Link> */}
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-[#6f3d01a5] hover:shadow-[#ad7e44] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
             <Image src={AboutImg} className='rounded-xl' alt='/' />
           </div>
        </div>
    </div>
  )
}

export default About