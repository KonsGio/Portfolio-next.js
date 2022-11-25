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
                    My name is Konstantinos Giovanitsas or simply Kostas, and I am from Greece. I have a Sc.B in Computer, Informatics and Telecommunications Engineering.
                </p>
                <p className='py-2 text-gray-600'>
                    I have always been mingling with computers. It is a fun thing for me to search new things and develop my skills. 
                    In my free time I never let it go to waste. I enjoy playing and creating my own music with my favorite guitar ESP-1000QM, as well as going on hikes with my dog Caesar, a black labrador.
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