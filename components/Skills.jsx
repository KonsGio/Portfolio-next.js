import Image from 'next/image';
import React from 'react';
import css from '../public/assets/skills/css.png';
import firebase from '../public/assets/skills/firebase.png';
import github1 from '../public/assets/skills/github1.png';
import html from '../public/assets/skills/html.png';
import javascript from '../public/assets/skills/javascript.png';
import mongo from '../public/assets/skills/mongo.png';
import nextjs from '../public/assets/skills/nextjs.png';
import node from '../public/assets/skills/NODE.png';
import react from '../public/assets/skills/react.png';
import redux from '../public/assets/skills/redux.png';
import sanity from '../public/assets/skills/sanity.png';
import tailwind from '../public/assets/skills/tailwind.png';

const Skills = () => {

    return (
    <div id='skills' className='w-full lg:h-screen p-2 '>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-20'>
      <p className='uppercase text-xl tracking-widest text-[#6f3d01] '>
        Skills
      </p>
      <h2 className='py-4'>What I Can Do</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={html} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>HTML5</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={css} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>CSS3</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={javascript} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={react} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>React.js</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={tailwind} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Tailwind</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={firebase} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Firebase</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={sanity} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Sanity</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={redux} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Redux</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={node} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Node.js</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={github1} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Github</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={mongo} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>MongoDB</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={nextjs} alt='/' width='64px' height='64px' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Next.js</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
)
}

export default Skills