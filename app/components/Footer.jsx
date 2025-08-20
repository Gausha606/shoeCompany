import React from 'react'
import logo from "./assets/logo.png";
import Image from 'next/image';


export default function Footer() {
  return (
    <div className='text-white inter  font-bold relative' >
      <Image src={logo} alt="" className='w-[30px] absolute top-0 left-[44px] sm:left-[500px]' />
      <h2 className='text-center ml-8 sm:ml-0'>Made with ❤️ By Gaurav Sharma</h2>
    </div>
  )
}
