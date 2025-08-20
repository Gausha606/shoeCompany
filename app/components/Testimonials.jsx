import React from 'react'
import testbg from "./assets/123bg.png";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id='testimonials'  className='text-white relative flex flex-col items-center h-full  mb-12'
    style={{ backgroundImage: `url(${testbg})` }}>
      <p className='inter text-3xl sm:text-[40px] font-bold mt-24 w-[350px] sm:w-[600px] text-center'>What People are saying about THE SHOE COMPANY ?</p>

      <div className='flex flex-col sm:flex-row justify-around items-center mt-24 mb-64 gap-40 inter'>
        <div className='w-[200px] h-[200px] flex flex-col items-center' data-aos="fade-right">
          <Image src={one} alt="" className='rounded-full mb-4'/>
          <p className='w-[250px] text-center'>“Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”</p>
        </div>
        <div className='w-[200px] h-[200px] flex flex-col items-center'data-aos="fade-right">
          <Image src={two} alt="" className='rounded-full mb-4'/>
          <p className='w-[250px] text-center'>“I love the shoes, the quality, and everyting. They are worth the investment!”</p>
        </div>
        <div className='w-[200px] h-[200px] flex flex-col items-center'data-aos="fade-right">
          <Image src={three} alt="" className='rounded-full mb-4'/>
          <p className='w-[250px] text-center'>“They make the best and forever lasting shoes. Superb fit and confort is literally the next level. Much recommended!”</p>
        </div>
        
      </div>
      
    </section>
  )
}
