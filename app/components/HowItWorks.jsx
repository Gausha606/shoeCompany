import React from "react";
import hero2 from "./assets/hero2.png";
import arrow1 from "./assets/arrow1.png";
import arrow2 from "./assets/arrow2.png";
import arrow3 from "./assets/arrow3.png";
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <>
    <section id="howitworks" className="text-white mt-4 mb-12 relative">
      <p className="mx-auto text-center text-[28px] px-4 sm:px-0 sm:text-5xl archivo max-w-[750px] font-bold">
        Have they finally made the perfect workout shoe?
      </p>
      <div className="absolute left-4 sm:left-32 top-40 sm:top-50 ">
        <h2 className=" inter w-[200px] text-2xl sm:text-[32px] font-bold">THE HEEL</h2>
        <p className="text-[12px] inter font-normal w-[200px] ">
          The heel is well-built, has appropriate elevation and is not too
          rigid.
        </p>
      </div>
      <div className="absolute right-3 top-42 sm:right-48 sm:top-50 ">
        <h2 className=" inter w-[140px] sm:w-[200px] text-2xl sm:text-[32px] font-bold">THE FRONT</h2>
        <p className="text-[12px] inter font-normal w-[140px] sm:w-[200px] ">
          The front is comfortable and adjusts well to the shape of your foot.
        </p>
      </div>

      <div className="flex justify-center items-center mt-48 text-white">
        <Image src={hero2} alt="" className="w-[250px] sm:w-[500px] sm:p-0 p-2"  data-aos="fade-right" />
        <Image
          src={arrow1}
          alt=""
          className="w-[70px] sm:w-[200px] absolute top-60 sm:top-80 left-10 sm:left-60 rotate-45 sm:rotate-0"
        />
        <Image
          src={arrow2}
          alt=""
          className="w-[80px] sm:w-[180px] absolute top-70 sm:top-70 right-16 sm:right-100 rotate-120 sm:rotate-0"
        />
        <Image
          src={arrow3}
          alt=""
          className="w-[90px] sm:w-[180px] absolute top-[450px] sm:top-[620px] sm:right-[620px]"
        />
      </div>

      <div className="absolute left-12 sm:left-104 top-[510px] sm:top-[720px] ">
        <h2 className=" inter w-[200px] text-2xl sm:text-[32px] font-bold">TRACTION</h2>
        <p className="text-[12px] inter font-normal w-[160px] leading- ">
          The shoe has good traction and doesn't slip easily.
        </p>
      </div>
        <div className="block sm:hidden w-full h-0.5 bg-gray-600 absolute top-[620px] z-50"></div>

    </section>

    </>
  );
}
