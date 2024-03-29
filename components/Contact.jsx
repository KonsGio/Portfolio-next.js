import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFileDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import contactpic from '../public/assets/contact.jpg';

const Contact = () => {


  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-20 w-full mt-16 '>
            <p className='text-xl tracking-widest uppercase text-[#6f3d01]'>
                Contact
            </p>
            <h2 className='py-4'>
                Get In Touch 
            </h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/* Left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#6f3d01a5] rounded-xl p-4  hover:shadow-xxl hover:shadow-[#ad7e44]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                <div className='lg:p-4'>
                    <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactpic}  alt='/'/>
                </div>
                <div>
                    <h2 className='py-2'>Giovanitsas Konstantinos</h2>
                    <p>Front-End Developer</p>
                    <p className='py-4'>I am available for full-time positions. Contact me.</p>
                </div>
                <div>
                    <p className='uppercase pt-8'>Connect With Me</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                                <div className='rounded-full shadow-[#6f3d01a5] hover:shadow-[#ad7e44] shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='https://www.linkedin.com/in/konstantinos-giovanitsas-10b511150/' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaLinkedinIn  /></a>
                                </div>
                                <div className='rounded-full shadow-[#6f3d01a5] hover:shadow-[#ad7e44] shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='https://github.com/KonsGio' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaGithub /></a>
                                </div>
                                <div className='rounded-full shadow-[#6f3d01a5] hover:shadow-[#ad7e44] shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='https://mega.nz/file/EA1AHBCS#vC9NaguLb-eyJrEI1znGi8PBFFTEa20h_Q5BLmM4KuM' rel="noreferrer" target='_blank' className='text-[#6f3d01]'><FaFileDownload /></a>
                            </div>
                      </div>
                </div>
            </div>
 
 {/* Right */}

            <div className='col-span-3 w-full h-auto rounded-xl lg:p-4 shadow-xl shadow-[#6f3d01a5] hover:shadow-xxl hover:shadow-[#ad7e44] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                <div className='p-4'>
                    <form 
                          action={process.env.GET_FORM}
                          method="POST"
                          id="form">
                         <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                            <div className='flex flex-col text-[#6f3d01] hover:ease-in '>
                                <label className='uppercase text-sm py-2'>
                                    Name
                                </label>
                                <input type='text' name='name' className='border-2 rounded-lg p-3 flex border-[#6f3d019f]' /> 
                            </div>
                            <div className='flex flex-col text-[#6f3d01] hover:ease-in '>
                                <label className='uppercase text-sm py-2'>
                                    Phone Number
                                </label>
                                <input type='text' name='phone' className='border-2 rounded-lg p-3 flex border-[#6f3d019f]'/> 
                            </div>
                        </div>
                        <div className='flex flex-col py-2 text-[#6f3d01] hover:ease-in '>
                            <label className='uppercase text-sm py-2'>
                                Email
                            </label>
                            <input type='email' name='email' className='border-2 rounded-lg p-3 flex border-[#6f3d019f]' /> 
                        </div>
                        <div className='flex flex-col py-2 text-[#6f3d01] hover:ease-in '>
                            <label className='uppercase text-sm py-2'>
                                Subject
                            </label>
                            <input type='text' name='subject' className='border-2 rounded-lg p-3 flex border-[#6f3d019f]' /> 
                        </div>
                        <div className='flex flex-col py-2 text-[#6f3d01] hover:ease-in '>
                            <label className='uppercase text-sm py-2'>
                                Message
                            </label>
                            <textarea type='text' name='message' className='border-2 rounded-lg p-3 border-[#6f3d019f] ' rows='10'></textarea> 
                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4'>
                            Send Message
                        </button>
                    </form>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                     <div className='rounded-full shadow-[#6f3d01a5] hover:shadow-[#ad7e44] shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 animate-bounce'>
                        <HiOutlineChevronDoubleUp size={30} className='m-auto text-[#6f3d01]'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact
