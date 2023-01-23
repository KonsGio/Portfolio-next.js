
import React from 'react';
import devapp from '/public/assets/projects/dev-app.png';
import devchat from '/public/assets/projects/dev-chat.png';
import mapapp from '/public/assets/projects/map-app.png';
import portfolio from '/public/assets/projects/My-portfolio.png';
import portnext from '/public/assets/projects/portfolio-next.png';
import tikataka from '/public/assets/projects/tikataka.png';
import ProjectItem from './ProjectItem';
import ellines from '/public/assets/projects/ellines.png';
import todo from '/public/assets/projects/todolist.png';
import bageri from '/public/assets/projects/bageri.png';
import delta from '/public/assets/projects/delta.png';
import gptimg from '/public/assets/projects/gpt.png';
import imagegenimg from '/public/assets/projects/imagegen.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-20 mt-16'>
            <p className='uppercase text-xl tracking-widest text-[#6f3d01]'>Projects</p>
            <h2>Some of my latest work.</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
                title='A Gpt-ai chat assistant'
                backgroundImg={imagegenimg}
                projectUrl='../projects/imageai'
                tech='React Js | OpenAi | Vite'
            />
            <ProjectItem
                title='A Gpt-ai chat assistant'
                backgroundImg={gptimg}
                projectUrl='../projects/gpt'
                tech='Vanilla Js | OpenAi | Vite'
            />
            <ProjectItem
                title='My portfolio in Next.js'
                backgroundImg={portnext}
                projectUrl='../projects/portfolionext'
                tech='React | Next.js | TailWind'
            />
            <ProjectItem
                title='Tika Taka'
                backgroundImg={tikataka}
                projectUrl='../projects/tikataka'
                tech='Next.js | Typescript | TailWind'
            />
            <ProjectItem
                title='Griekse Gemeenschaap van Amsterdam'
                backgroundImg={ellines}
                projectUrl='../projects/gemenschaap'
                tech='Wordrpress | PHP | CSS'
            />
            <ProjectItem
                title='Delta Security Group'
                backgroundImg={delta}
                projectUrl='../projects/delta'
                tech='React | Vite | TailWind'
            />
            <ProjectItem
                title='Bageri delivery application'
                backgroundImg={bageri}
                projectUrl='../projects/bageri'
                tech='React | Firebase | TailWind'
            />
            <ProjectItem
                title='Travel Companion'
                backgroundImg={mapapp}
                projectUrl='../projects/mapapp'
                tech='React | Google-API | Rapid-API'
            />
            <ProjectItem
                title='Chat application'
                backgroundImg={devchat}
                projectUrl='../projects/devchat'
                tech='React | Typescript | Stream.io'
            />
            <ProjectItem
                title='Admin UI-Dashboard'
                backgroundImg={devapp}
                projectUrl='../projects/devapp'
                tech='React | Typescript | TailWind'
            />
            <ProjectItem
                title='Portfolio in html'
                backgroundImg={portfolio}
                projectUrl='../projects/myportfolio'
                tech='HTML5 | Javascript | Css3'
            />
            <ProjectItem
                title='A simple to-do list'
                backgroundImg={todo}
                projectUrl='../projects/todo'
                tech='React | Firebase | Css3'
            />
            </div>
        </div>
    </div>
  )
}

export default Projects