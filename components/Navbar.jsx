import React, {useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {

    // Use State for navbar menu
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

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
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ' : 'fixed w-full h-20 z-[100] '}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            {/* Lazy loading images */}

            <Link href='/'>
                <Image src='/../public/assets/icon.png'  width='120' height='70' />
            </Link>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
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
                        <Image src='/../public/assets/icon.png' width='130' height='70'/>
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
                            <li className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='py-4 text-sm  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#6f3d01]'>Contact me</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-gray-600'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-gray-600'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-gray-600'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-gray-600'>
                                <BsFillPersonLinesFill />
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