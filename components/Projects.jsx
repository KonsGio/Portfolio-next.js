
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
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-20 mt-16'>
            <p className='uppercase text-xl tracking-widest text-[#6f3d01]'>Projects</p>
            <h2>Take a look at the projects I have built.</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
                title='My portfolio in React'
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
                title='Admin UI-Dashboard'
                backgroundImg={devapp}
                projectUrl='../projects/devapp'
                tech='React | Typescript | TailWind'
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
                title='Portfolio in html'
                backgroundImg={portfolio}
                projectUrl='../projects/myportfolio'
                tech='HTML5 | Javascript | Css3'
            />
            <ProjectItem
                title='Griekse Gemeenschaap van Amsterdam'
                backgroundImg={ellines}
                projectUrl='../projects/gemenschaap'
                tech='Wordrpress | PHP | CSS'
            />
            <ProjectItem
                title='A simple to-do list'
                backgroundImg={todo}
                projectUrl='../projects/todo'
                tech='React | Firebase | Css3'
            />
            <ProjectItem
                title='Bageri delivery application'
                backgroundImg={bageri}
                projectUrl='../projects/todo'
                tech='React | Firebase | TailWind'
            />
            </div>
        </div>
    </div>
  )
}

export default Projects