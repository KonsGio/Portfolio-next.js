
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import devapp from '../public/assets/projects/dev-app.png';
import devchat from '../public/assets/projects/dev-chat.png';
import mapapp from '../public/assets/projects/map-app.png';
import portfolio from '../public/assets/projects/My-portfolio.png';
import portnext from '../public/assets/projects/portfolio-next.png';
import tikataka from '../public/assets/projects/tikataka.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='#projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-[#6f3d01]'>Projects</p>
            <h2>Take a look at the projects I have built.</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
                title='My portfolio in React'
                backgroundImg={portnext}
                projectUrl='/property'
                tech='React | Next.js | TailWind'
            />
            <ProjectItem
                title='Tika Taka'
                backgroundImg={tikataka}
                projectUrl='/property'
                tech='Next.js | Typescript | TailWind'
            />
            <ProjectItem
                title='Admin UI-Dashboard'
                backgroundImg={devapp}
                projectUrl='/property'
                tech='React | Typescript | TailWind'
            />
            <ProjectItem
                title='Travel Companion'
                backgroundImg={mapapp}
                projectUrl='/property'
                tech='React | Google-API | Rapid-API'
            />
            <ProjectItem
                title='Chat application'
                backgroundImg={devchat}
                projectUrl='/property'
                tech='React | Typescript | Stream.io'
            />
            <ProjectItem
                title='Portfolio in html'
                backgroundImg={portfolio}
                projectUrl='/property'
                tech='HTML5 | Javascript | Css3'
            />
            </div>
        </div>
    </div>
  )
}

export default Projects