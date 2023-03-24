import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const Hero = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-col space-y-8 md:px-12 px-6">
          <p className="md:text-[50px] pt-16 font-[miracle] font-[400] text-[#ECD8BD]">
            Investește <br /> în pielea ta cu <br /> Aestethic Lab
          </p>
          <p className="text-[13px] text-[#FFFFFF] leading-[17.68px]">
            Oferim servicii de înfrumusețare și tratamente, de cea mai bună
            calitate.
          </p>
          <div className="flex space-x-3">
            <img src="images/ofbadge 1.png" alt="/" width="80px" />
            <div className="flex flex-col space-y-2 text-white text-[14px]">
              <p>Surprinde Persoana Iubită cu un Voucher Cadou!</p>
              <p className="text-[#afafaf] text-[12px]">
                Alege cel mai frumos si ​inspirat cadou!
              </p>
              <div className="flex items-center space-x-4">
                <p className="text-[#ECD8BD]">Rezervă acum</p>
                <CgArrowLongRight
                  style={{ color: "#ECD8BD", fontSize: "24px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <div className=" bg-[#ecd8bd] w-full mt-10 flex items-center space-x-20 md:px-12  mb-10 px-6">
            <div className="flex flex-col py-5 items-center">
              <img src="images/hero-diamond.png" alt="/" />
              <p className="text-[14px] font-[miracle] font-[800] leading-[17.68px] text-[#212121]">
                Produse de calitate
              </p>
            </div>
            <div className="flex flex-col py-5 items-center">
              <img src="images/hero-receipt.png" alt="/" />
              <p className="text-[14px] font-[miracle] font-[800] leading-[17.68px] text-[#212121]">
                Personal calificat
              </p>
            </div>
            <div className="flex flex-col py-5 items-center">
              <img src="images/hero-cert.png" alt="/" />
              <p className="text-[14px] font-[miracle] font-[800] leading-[17.68px] text-[#212121]">
                Standarde înalte
              </p>
            </div>
          </div>
          <div className="absolute -right-20 bottom-0 z-20">
            <div className="relative overflow-x-visible">
              <img
                src="images/beautiful woman.png"
                alt="/"
                className="w-[600px] h-[650px] z-10"
              />
              <img
                src="images/Group.png"
                alt=""
                className="absolute top-24 left-6"
              />
              <img
                src="images/beautiful-Ellipse.png"
                alt=""
                className="absolute -z-10 top-16 left-219 w-[500px] h-[550px]"
              />
              <img
                src="images/Ellipse 2.png"
                alt="/"
                className="absolute top-[70%] -left-[0%] -translate-x-[50%] -translate-y-[50%] blur-3xl -z-10 rotate-180"
              />
              <img
                src="images/Ellipse 3.png"
                alt="/"
                className="absolute top-[70%] -right-[80%] -translate-x-[50%] -translate-y-[50%] blur-3xl -z-10 rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
      {/* mobile hero */}
      <div className="md:hidden ">
        <div className="hero relative -z-30">
          <div className="absolute top-[30%] right-[2%]">
            <p className="text-[40px] tracking-wide font-[miracle] font-[400] text-[#ECD8BD] text-right pb-10 ">
              Investește <br /> în pielea ta cu <br /> Aestethic Lab
            </p>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                paddingBlock: "20px",
                borderRadius: "25px",
                marginInline: "2px",
              }}
            >
              <div className="flex space-x-3 pb-10 px-4">
                <img src="images/ofbadge 1.png" alt="/" width="80px" />
                <div className="flex flex-col space-y-2 text-white text-[14px]">
                  <p>Surprinde Persoana Iubită cu un Voucher Cadou!</p>
                  <p className="text-[#afafaf] text-[12px]">
                    Alege cel mai frumos si ​inspirat cadou!
                  </p>
                  <div className="flex items-center space-x-4">
                    <p className="text-[#ECD8BD]">Rezervă acum</p>
                    <CgArrowLongRight
                      style={{ color: "#ECD8BD", fontSize: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-[10px] px-4 text-[#FFFFFF]">
                Oferim servicii de înfrumusețare și tratamente, de cea mai bună
                calitate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
