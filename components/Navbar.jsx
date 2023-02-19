import React, {useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaFileDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {useRouter} from 'next/router';
import icon from '../public/assets/icon.png';
const Navbar = () => {

    // Use State for navbar menu
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#e4e0da');
    const [linkColor, setLinkColor] = useState('#6f3d01');
    const router = useRouter()

    useEffect(() => {
        
        if (
            router.asPath === '/projects/devapp' ||
            router.asPath === '/projects/devchat' ||
            router.asPath === '/projects/gemenschaap' ||
            router.asPath === '/projects/mapapp' ||
            router.asPath === '/projects/portfolionext' ||
            router.asPath === '/projects/tikataka' ||
            router.asPath === '/projects/todo'||
            router.asPath === '/projects/bageri' ||
            router.asPath === '/projects/myportfolio' ||
            router.asPath === '/projects/delta' || 
            router.asPath === '/projects/gpt' ||
            router.asPath === '/projects/imageai' ||
            router.asPath === '/projects/yelpcamp'

        ) {
            setNavBg('transparent')
            setLinkColor('#e4e0da')
        } else {
            setNavBg('#e4e0da')
            setLinkColor('#6f3d01')
        }
      
    }, [router])
    


    useEffect(() => {
      const handleShadow = () => {
        if(window.scrollY >= 90) {
            setShadow(true)
        }else{
            setShadow(false)
        }
      } 
       window.addEventListener('scroll', handleShadow);
    }, [])
    

    const handleNav = () => {
        setNav(!nav)
    }

  return (

    <div 
        style={{backgroundColor: `${navBg}`}}
        className={shadow ? 'fixed w-full h-20 shadow-xl shadow-[#ad7e446b] z-[100] ' : 'fixed w-full h-20 z-[100] '}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            {/* Lazy loading images */}

            <Link href='/'>
                <Image className='hover:cursor-pointer' src={icon} alt='/' width='120' height='70' />
            </Link>
            <div>
                <ul style = {{color: `${linkColor}`}} className='hidden md:flex text-[#6f3d01]'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:text-[#b17225] hover:scale-125 ease-in duration-300'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:text-[#b17225] hover:scale-125 ease-in duration-300'>About</li>
                    </Link>
                    <Link href='https://mega.nz/file/EA1AHBCS#vC9NaguLb-eyJrEI1znGi8PBFFTEa20h_Q5BLmM4KuM' rel="noreferrer" target='_blank' >
                        <li className='ml-10 text-sm uppercase hover:text-[#b17225] hover:scale-125 ease-in duration-300'>Resume</li>
                    </Link>
                    <Link href='/#tools'>
                        <li className='ml-10 text-sm uppercase hover:text-[#b17225] hover:scale-125 ease-in duration-300'>Tools</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:text-[#b17225] hover:scale-125 ease-in duration-300'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:text-[#b17225] hover:scale-125 ease-in duration-300'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden' onClick={handleNav}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50' : ''}>
            <div 
                className={
                    nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src={icon} width='130' height='70' alt='/'/>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer duration-300 hover:shadow-gray-600'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Welcome to my digital portfolio!</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>About</li>
                        </Link>
                        <Link href='https://mega.nz/file/EA1AHBCS#vC9NaguLb-eyJrEI1znGi8PBFFTEa20h_Q5BLmM4KuM' rel="noreferrer" target='_blank' >
                            <li onClick={() => setNav(false)} className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>Resume</li>
                        </Link>
                        <Link href='/#tools'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>Tools</li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-20'>
                        <p className='uppercase tracking-widest text-[#2f1f0b]'>Contact me</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-gray-600'>
                                <a onClick={() => setNav(false)} href='https://www.linkedin.com/in/konstantinos-giovanitsas-10b511150/' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaLinkedinIn  /></a>
                            </div>
                            <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-gray-600'>
                                <a onClick={() => setNav(false)} href='https://github.com/KonsGio' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaGithub /></a>
                            </div>
                            <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-gray-600'>
                                <a onClick={() => setNav(false)} href='mailto:konstantinos.giovanitsas@yahoo.com' className='text-[#6f3d01]'><AiOutlineMail /></a>
                            </div>
                            <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-gray-600'>
                                <a onClick={() => setNav(false)} href='https://mega.nz/file/EA1AHBCS#vC9NaguLb-eyJrEI1znGi8PBFFTEa20h_Q5BLmM4KuM' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaFileDownload /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
