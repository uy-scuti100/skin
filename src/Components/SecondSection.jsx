import React from "react";

const SecondSection = () => {
  return (
    <div>
      <div className="bg-[#ECD8BD]">
        <img
          src="images/Vector-mid.png"
          alt="/"
          className="-translate-y-[60px] -translate-x-[150px] md:translate-x-[10px]"
        />
        <div className=" hidden md:block text-center text-[40px] md:text-[70px] font-[miracle] text-[#212121]">
          Serviciile noastre
        </div>
        <p className=" hidden md:block text-center text-[14px] md:text-[16px] text-[#212121] ">
          Răsfață-te cu serviciile noastre <br /> pentru toate vârstele
        </p>
        {/* --------------------------------------------------------------------------------- */}
        <div className="flex justify-between gap-5 items-center pt-20 flex-col md:items-start md:flex-row md:px-12 bg-[#ECD8BD] text-[miracle] ">
          <div className="md:hidden text-center text-[40px] md:text-[70px] font-[miracle] text-[#212121]">
            Serviciile noastre
          </div>
          <p className="md:hidden text-center text-[14px] md:text-[16px] text-[#212121] ">
            Răsfață-te cu serviciile noastre <br /> pentru toate vârstele
          </p>

          <div className="flex flex-col gap-2 md:gap-2">
            <img
              src="images/young-woman-lying-cosmetologist-s-table-during-rejuvenation-procedure-cosmetologist-take-care-about-neck-face-skin-youthfull-wellness-hardware-face-cleaning-procedure 1.png"
              alt="/"
              className=" rounded-md w-[350px] md:w-[300px]"
            />
            <p className="text-[miracle] text-[16px] font-[400] leading-[45.61px] text-[#212121]">
              Rejuvenare <br /> faciala laser
            </p>
            <p className="bg-[#B58224] text-white w-[100px] text-[12px] px-6 py-1  rounded-lg">
              Ofertă
            </p>
            <p>350 Lei</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src="images/cute-woman-lying-procedure-rejuvenation-skin 1.png"
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
              src="images/woman-having-facial-treatment 11.png"
              alt="/"
              className=" rounded-md w-[350px] md:w-[300px]"
            />
            <p className="text-[miracle] text-[18px] font-[400] leading-[45.61px] text-[#212121]">
              Peeling chimic
            </p>
            <p>350 Lei</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src="images/person-getting-micro-needling-beauty-treatment 1.png"
              alt="/"
              className=" rounded-md w-[350px] md:w-[300px]"
            />
            <p className="text-[miracle] text-[16px] font-[400] leading-[45.61px] text-[#212121]">
              Microneedling
            </p>
            <p>350 Lei</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src="images/person-getting-micro-needling-beauty-treatment 2.png"
              alt="/"
              className=" rounded-md w-[350px] md:w-[300px]"
            />
            <p className="text-[miracle] text-[16px] font-[400] leading-[45.61px] md:text-[#212121]">
              Microneedling <br /> cu Botox
            </p>
            <p>1150 Lei</p>
          </div>
        </div>
      </div>
      <div className=" bg-[#ECD8BD] text-center py-10 ">
        <button className="bg-transparent text-[#212121] font-[poppins] text-[16px] px-8 py-1 rounded-lg border border-[#212121] self-center">
          VEZI PAGINA SERVICII
        </button>
      </div>
    </div>
  );
};

export default SecondSection;
