import React from 'react'
import hero from "./assets/hero.png"
import bg from "./assets/bg.png"
import Image from 'next/image';

export default function Hero() {
  return (
    <section id='home' className='text-white mt-8 mb-32 sm:mb-0 flex flex-col sm:flex-row items-start sm:items-center justify-around transition-all duration-300 ease-in-out'>
      <p className='text-[40px] sm:text-[80px] w-[96px] leading-12 sm:leading-24 archivo font-bold z-40 ml-4 sm:ml-0 ' data-aos="fade-right">THE SHOE COMPANY</p>

      <Image src={hero} alt="" className='w-[550px] z-40 p-2 sm:p-16' data-aos="fade-right" />
      <Image src={bg} alt="" className='absolute top-80 sm:top-0 right-0 z-30 h-[420px] sm:h-[640px] w-[550px]' data-aos="fade-right" />
    </section>
  )
}
