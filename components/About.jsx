import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/dev-kgio.jpg';

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#6f3d01]'>
                    INFORMATION ABOUT ME
                </p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// A passionate developer</p>
                <p className='py-2 text-gray-600'>
                    My name is Konstantinos Giovanitsas or simply Kostas, and I am from Greece. I am a holder of an Sc.B in Computer, Informatics and Telecommunications Engineering. I am living both in Greece and Netherlands, 
                    if only i could describe the positive aspects of that. 
                </p>
                <p className='py-2 text-gray-600'>
                    I have always been mingling with computers. It is a fun thing for me to search new things and develop my skills. 
                    In my free time I never let it go to waste. I enjoy playing music as well as going on hikes with my dog Caesar, a black labrador.
                    Having a cold one with friends is also one of my...hobbies, and I could say, the most interesting one.  
                </p>
                <Link href='/#projects'>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects.
                    </p>
               </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
             <Image src={AboutImg} className='rounded-xl' alt='/' />
           </div>
        </div>
    </div>
  )
}

export default About