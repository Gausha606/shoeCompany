import React from "react";
import map from "./assets/map.png";
import fb from "./assets/fb.png";
import youtube from "./assets/youtube.png";
import ig from "./assets/ig.png";
import disc from "./assets/disc.png";
import Image from 'next/image';


export default function Contact() {
  return (
    <section id="contact" className="text-white inter relative mb-[800px] sm:mb-[620px]">
      <div className="flex flex-col  sm:flex-row">
      {/* text section */}
      <div className="w-full sm:w-1/2 flex justify-center flex-col absolute top-2 left-2 sm:top-80 sm:left-20">
        <h2 className="text-[48px] font-bold mb-2">Contact Us</h2>
        <p className="w-[200px] ml-2">THE SHOE COMPANY, Dallas, Texas, USA <br />+1 5590 1120 9910</p>

        <div className="mt-8 sm:mt-4 ml-2 flex gap-4 items-center">
          <Image src={fb} alt="" className=" h-[24px]"/>
          <Image src={ig} alt="" className=" h-[24px]"/>
          <Image src={disc} alt="" className=" h-[24px]"/>
          <Image src={youtube} alt="" className=" h-[22px]"/>
        </div>
      </div>

      {/* map section  */}
      <div className="w-full sm:w-1/2 px-4 sm:px-0 absolute top-70 sm:top-0 sm:right-0" data-aos="fade-right">
        <Image src={map} alt="" className="h-[500px] sm:h-[600px] w-full" />
      </div>
      </div>

    </section>
  );
}
