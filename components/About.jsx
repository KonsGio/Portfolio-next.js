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
                <h3 className='py-2 text-gray-600'>I am a Front End Developer</h3>
                <p>I'm Konstantinos and I'm a passionate front-end developer with a love for creating beautiful and functional websites. Over the years, I've honed my skills in HTML, CSS, JavaScript, and various front-end frameworks to bring my clients' visions to life.</p>
                <br></br>
                <p>I believe in creating a great user experience for visitors to websites, and always strive to make my projects as intuitive and accessible as possible. When I'm not coding, you can find me experimenting with my guitar, reading a mystery book, or taking on a new adventure.</p>
                <br></br>
                <p>I'm excited to be showcasing my work on this website and can't wait for you to take a look. Thanks for stopping by!</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-[#6f3d01a5] hover:shadow-[#ad7e44] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
             <Image src={AboutImg} className='rounded-xl' alt='/' />
           </div>
        </div>
    </div>
  )
}

export default About