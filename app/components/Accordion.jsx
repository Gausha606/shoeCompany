import React, { useState } from "react";
import arrow from "./assets/arrow.png";
import Image from 'next/image';

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div
      className=" mt-[700px] h-[520px] sm:h-[400px] max-h-[600px]"
      data-aos="fade-up"
    >
      <p className="inter text-lg sm:text-2xl font-semibold text-center text-white mb-4">
        FAQ (Frequently Asked Questions)
      </p>
      <div className="px-1 sm:px-0 py-2 block justify-start sm:flex sm:justify-center items-center">
        <div className="">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="item pl-4 sm:pl-8 bg-white text-black mb-2 w-[380px] sm:w-[1200px] rounded-2xl "
              >
                <div
                  className="question inter text-sm  sm:text-lg  py-2 font-medium  flex justify-between  items-start w-[380px] sm:w-full cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  {item.question}
                  {/* + - icon  */}
                  {/* <span className='pr-8 text-xl sm:text-4xl  cursor-pointer' onClick={()=>toggle(index)}>{selected===index ?"-" :"+"} </span>  */}

                  {/* up down icon  */}

                  {/* <span
                    className="pr-7 sm:pr-8 text-lg sm:text-2xl  cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    {selected === index ? (
                      <i class="fa-solid fa-circle-arrow-down"></i>
                    ) : (
                      <i class="fa-solid fa-circle-arrow-up"></i>
                    )}{" "}
                  </span> */}

                  {/* up down image icon  */}

                  <span
                    className="pr-7 sm:pr-8 text-lg sm:text-2xl   transition-[image] duration-500 ease-in-out"
                    onClick={() => toggle(index)}
                  >
                    <Image
                      src={arrow}
                      alt=""
                      className={`${
                        selected === index ? "rotate-[-180deg]" : "rotate-0"
                      } w-5 max-w-[24px] s transition-transform duration-300 ease-in-out`}
                    />
                  </span>
                </div>
                <div
                  className={`
                  answer inter  text-sm 
                  overflow-hidden transition-[max-height,padding] duration-500 ease-in-out
                  ${selected === index ? "max-h-[200px] pb-4" : "max-h-0 pb-0"}
                `}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "What makes The Shoe Company shoes different from other brands?",
    answer:
      "At The Shoe Company Name, we focus on the perfect blend of innovative design, advanced comfort technology, and sustainable manufacturing. Our unique sole technology provides superior arch support and cushioning, while our commitment to eco-friendly materials sets us apart.",
  },
  {
    question: "How do I find the right size for my shoes?",
    answer:
      "We recommend using our comprehensive size guide available on each product page. You can measure your foot length and compare it to our chart for the most accurate fit. We also offer a 30-day free return policy if the size isn't quite right.",
  },
  {
    question: "What materials are used in The Shoe Company footwear?",
    answer:
      "We prioritize high-quality and sustainable materials. Depending on the style, our shoes feature a range of materials including ethically sourced leather, recycled plastics, organic cotton, and our proprietary breathable mesh fabric. You can find specific material details on each product's description.",
  },
  {
    question: "How do I care for my shoes to ensure their longevity?",
    answer:
      "To maximize the lifespan of your shoes, we recommend regular cleaning with a soft brush and mild soap. Avoid machine washing. For leather products, use a suitable leather conditioner. Detailed care instructions are also provided with each purchase.",
  },
  {
    question: "Does The Shoe Company offer a warranty on its products?",
    answer:
      "Yes, we stand behind the quality of our craftsmanship. All footwear comes with a [e.g., one-year] warranty against manufacturing defects. Please refer to our warranty policy on our website for full details and how to make a claim.",
  },
];
