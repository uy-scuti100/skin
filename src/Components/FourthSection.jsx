import React from "react";

const FourthSection = () => {
  return (
    <div>
      <div className="bg-[#ECD8BD] ">
        <img
          src="images/Vector-fourth.png"
          alt="/"
          className="-translate-y-[50px] translate-x-[150px] md:translate-x-[1100px]"
        />
        <div className="hidden md:block text-center text-[40px] md:text-[70px] font-[miracle] text-[#212121">
          Ofertele lunii
        </div>
        <p className="hidden md:block text-center text-[10px] te md:text-[16px] text-[#212121] ">
          Profită de ofertele noastre!
        </p>

        {/* -----------------------------------=========------------------------------ */}
        <div className="flex justify-between gap-5 items-center pt-20 flex-col md:items-start md:flex-row md:px-12 text-[miracle] ">
          <div className="md:hidden text-center text-[40px] md:text-[70px] font-[miracle] text-[#212121]">
            Ofertele lunii
          </div>
          <p className="md:hidden text-center text-[10px] te md:text-[16px] text-[#212121] ">
            Profită de ofertele noastre!
          </p>
          <div className="flex flex-col gap-2 md:gap-2">
            <img
              src="images/fourth-woman-1.jpg"
              alt="/"
              className=" rounded-md w-[350px] md:w-[300px]"
            />
            <p className="text-[miracle] text-[16px] font-[400] leading-[45.61px] text-[#212121]">
              Rejuvenare <br /> faciala laser
            </p>
            <div className="flex space-x-8">
              <button className="bg-[#B58224] text-white text-[12px] px-6 py-1 rounded-lg">
                Ofertă
              </button>{" "}
              <p>350 Lei</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src="images/fourth-woman-2.jpg"
              alt="/"
              className=" rounded-md w-[350px] md:w-[300px]"
            />
            <p className="text-[miracle] text-[16px] font-[400] leading-[45.61px] text-[#212121]">
              Glow Peel
            </p>
            <p>400 Lei</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src="images/fourth-woman-3.jpg"
              alt="/"
              className=" rounded-md w-[350px] md:w-[300px]"
            />
            <p className="text-[miracle] text-[18px] font-[400] leading-[45.61px] text-[#212121]">
              Peeling chimic
            </p>
            <p>350 Lei</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
