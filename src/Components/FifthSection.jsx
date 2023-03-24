import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const FifthSection = () => {
  return (
    <div>
      <div className="bg-[#212121] py-20 ">
        <div className="md:px-12 px-6">
          <div className="w-full bg-[#ECD8BD] md:h-[400px] h-[200px] flex flex-col items-center pb-20 ">
            <p className="text-[20px] text-[#212121] md:text-[40px] text-center font-[miracle] py-10">
              Abonează-te pentru a primi cele <br /> mai noi oferte de la
              Aesthetic Lab
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email ...."
                required
                className="bg-white px-4 pr-20 py-2 md:w-[300px] w-[200px] border-none outline-none focus:outline-none focus:border-none invalid:text-red-300 valid:text-[#000000] font-[500] rounded-l-full text-[#777777]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#212121] text-[12px] md:text-[16px] text-white px-4 translate-x-[-20px] "
              >
                ABONEAZĂ-TE
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "#9E9E9E" }} />
      <div className="bg-[#212121] py-20 ">
        <div className="md:px-12 px-6 flex flex-col md:flex-row">
          <div className="md:basis-1/2 flex gap-3 flex-col">
            <img src="images/logo.png" alt="/" width="50px" />
            <div className="pb-10 text-white text-[14px]">
              <p>Beauty & More</p>
              <p>Investește în pielea ta!</p>
            </div>
            <div className="flex gap-5 text-white text-[24px] pb-16">
              <BsFacebook />
              <BsInstagram />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-10 font-[poppins]">
            <div className="flex flex-col text-[14px] md:text-[16px]">
              <p className="mb-2 font-[500] text-white">Pagini</p>
              <p className="text-[#9e9e9e]">Despre</p>
              <p className="text-[#9e9e9e]">Servicii</p>
              <p className="text-[#9e9e9e]">Prețuri</p>
              <p className="text-[#9e9e9e]">Contact</p>
            </div>
            <div className="flex flex-col text-[14px] md:text-[16px]">
              <p className="mb-2 font-[500] text-white">Contact</p>
              <p className="text-[#9e9e9e]">0752 232 113</p>
              <p className="text-[#9e9e9e]">aestheticlabbrasov@gmail.com</p>
              <p className="text-[#9e9e9e]">Str. Carpaților 93, Brașov</p>
            </div>
            <div className="flex flex-col text-[14px] md:text-[16px]">
              <p className="font-[500] mb-2 text-white">Program</p>
              <p className="text-[#9e9e9e]">L-V: 09:00-19:00</p>
              <p className="text-[#9e9e9e]">S: 09:00-17:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-12 px-6">
        <hr style={{ backgroundColor: "#9E9E9E" }} />
      </div>
      <div className="text-center text-[14px] font-[poppins] font-normal text-[#9E9E9E] py-5 bg-[#212121]">
        Toate drepturile rezervate © Aesthetic Lab{" "}
      </div>
    </div>
  );
};

export default FifthSection;
