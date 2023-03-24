import React from "react";
import { BsClock } from "react-icons/bs";

const MainSection = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#212121] px-6 py-20 md:flex-row items-center md:px-12 md:gap-8">
        <div className="md:basis-1/3 md:self-start md:relative">
          <img
            src="images/beautiful-woman-getting-cosmetic-treatment 1.png"
            alt="/"
            // style={{ height: "300px", width: "450px", objectFit: "cover" }}
            className="h-[300px] w-[450px] md:h-auto md:w-auto "
          />
          <img
            src="images/Ellipse 2.png"
            alt="/"
            className="absolute top-120%] left-0 -translate-x-[50%] -translate-y-[50%] blur-[100px] hidden md:flex"
          />
          <img
            src="images/Ellipse 2.png"
            alt="/"
            className="md:absolute md:top-120%] md:left-0 md:-translate-x-[50%] md:-translate-y-[50%] md:blur-[100px] hidden md:flex"
          />
        </div>
        <div className="md:basis-2/3">
          <p className="font-[400] text-[20px] pt-5 md:text-[60px] font-[miracle] text-white pb-5">
            Produse profesionale de <br /> îngrijire și ​frumusețe a pielii
            <br /> de nivel premium
          </p>
          <p className="text-[10px] font-[400] text-white pb-10">
            Expertiză, combinată cu calitate: Esența frumuseții. La Aesthetc Lab
            avem produse <br /> profesionale de îngrijire și frumusețe a pielii
            excepționale.
          </p>
          <span
            className=" text-[16px] px-4 py-2 rounded-lg w-[180px] border flex items-center gap-2 mb-10 border-white bg-[#ECD8BD]"
            style={{ zIndex: -100 }}
          >
            <BsClock /> Appointment
          </span>
          <div>
            <img
              src="images/woman-visiting-cosmetologist-making-rejuvenation-procedures 1.png"
              alt="/"
            />
            <img
              src="images/Frame.png"
              alt="/"
              width="200px"
              className="absolute top-[-120px] right-[-60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
