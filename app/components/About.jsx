import React from "react";
import aboutbg from "./assets/aboutbg.png";
import aboutshoe from "./assets/aboutshoe.png";
import Image from 'next/image';

export default function About() {
  return (
    <>

    <section
      id="about"
      className="flex flex-col sm:flex-row justify-between items-center mt-48 sm:mt-32 p-6 sm:p-0 mb-16 relative text-white"
    >
      <div className=" w-full sm:w-1/2 ">
      <Image src={aboutbg} alt="" className="h-[350px] sm:h-[550px] w-[600px]"/>
      <Image src={aboutshoe} alt="" className=" h-[390px] sm:h-[600px] w-[300px] sm:w-[400px] absolute top-6 sm:top-0 left-12"data-aos="fade-left" />
      </div>
      <div className="w-full sm:w-1/2 inter mr-0 mt-12 sm:mt-0  sm:mr-[50px]">
        <h2 className="text-3xl sm:text-[50px] font-bold sm:w-[300px] sm:static absolute top-[-30px] left-32 ">About Us!</h2>
        <p className="px-2 sm:px-0 font-bold">
          For each one of those shoe sweethearts out there, THE SHOE COMPANY
          offer the one-stop goal to pick the correct match of footwear. </p>
          <br />
          <p className="hidden sm:block"> Gone are the days when you needed to go from store to store to locate the
          correct style and size for yourself.</p>
          <br />
          <p className="px-4 sm:px-0 font-bold">  At THE SHOE COMPANY, you can
          locate a vast accumulation of dashing footwear in all sizes and
          styles, all inside a couple of snaps.</p>
          <br />
          <p className="hidden sm:block"> Simple right? Not just we are
          here to spare your time, we are putting forth you the most dazzling
          footwear alternatives from all the first-rate brands like DAVINCHI,
          PRINCESS, and SIGNATURE. At ‘Organization Name’, we offer men, ladies,
          and child’s shoes perfect for any and each event.</p>
      </div>
    </section>
    </>
  );
}
