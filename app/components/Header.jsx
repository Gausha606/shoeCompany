"use client"
import React from "react";
import logo from "./assets/logo.png";
import hamicon from "./assets/hamburger1.png";
import Image from 'next/image';

export default function Header({setIsMenuOpen,isMenuOpen}) {
  return (
    <div className="flex justify-between items-center text-white px-6  w-full relative z-50" onClick={(e)=>setIsMenuOpen(false)} data-aos="fade-down">
      <Image src={logo} alt="logo" className="w-[10vw] max-w-[95px] min-w-[80px] transition-all duration-300 ease-in-out" />
      <nav className="hidden sm:flex sm:gap-6 md:flex md:gap-12 lg:flex lg:gap-20 inter font-bold">
        <a href="#home">Home</a>
        <a href="#howitworks">How It Works?</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
        <button className="block sm:hidden">
        <Image src={hamicon} onClick={(e)=>{
          e.stopPropagation();
          setIsMenuOpen(!isMenuOpen)}} alt="" />
         {isMenuOpen && <nav className={` inter font-semibold text-xl absolute w-full md:hidden flex flex-col bg-[#CACACB] text-black z-50 left-0  ${
            isMenuOpen
              ? 'max-h-screen opacity-100 top-18'
              : 'max-h-0 opacity-50 top-0 overflow-hidden pointer-events-none' 
          } `} data-aos="fade-down" data-aos-duration="600">
        <a href="#home" className="border-b-1 border-black py-2">Home</a>
        <a href="#howitworks" className="border-b-1 border-black py-2">How It Works?</a>
        <a href="#about" className="border-b-1 border-black py-2">About</a>
        <a href="#testimonials" className="border-b-1 border-black py-2">Testimonials</a>
        <a href="#contact" className="border-b-1 border-black py-2">Contact</a>
      </nav>
      }
      </button>
    </div>
  );
}
