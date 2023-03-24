import React from "react";
import { MdWork, MdContactPhone } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";

const MobileNav = () => {
  return (
    <div>
      {" "}
      {/* mobile nav */}
      <div className="md:hidden fixed w-full bottom-0 left-0 right-0 text-white">
        <ul className="flex justify-between  items-center px-3 py-2 text-[24px] bg-[#ECD8BD] text-[#000000] z-50">
          <li>
            <a href="#">
              <FaQuestion />
            </a>
          </li>
          <li>
            <a href="#">
              <MdWork />
            </a>
          </li>
          <li>
            <a href="#">
              <GiPriceTag />
            </a>
          </li>
          <li>
            <a href="#">
              <MdContactPhone />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
