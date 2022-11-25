import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectItem = ({title, backgroundImg, projectUrl,tech}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl mt-5 shadow-[#6f3d01a5] hover:shadow-[#ad7e44] rounded-xl p-4 group hover:bg-gradient-to-r from-[#dab890] to-[#e9dccd] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rtf '>
        <h3 className='text-2xl text-[#875921] tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-[#875921] text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-[white] text-[#875921] font-bold text-lg cursor-pointer shadow-lg shadow-[#ffa73c] hover:shadow-xxl hover:shadow-[#6f3d01] ease-linear duration-300'>More info</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItem