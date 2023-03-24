import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* dekstop nav */}
      <div className="bg-[#161616] h-[70px] md:h-[aut0] md:bg-transparent md:px-12 px-6 mx-auto pt-3  flex justify-between items-center text-white">
        <img src="images/nav-logo.png" alt="/" className="hidden md:flex" />
        <img src="images/nav-logo.png" alt="/" className="md:hidden w-[30px]" />
        <ul className="hidden md:flex space-x-16">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Prices</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="cursor-pointer">
          <span className="px-2 text-[14px] py-1 md:text-[16px] md:px-4 md:py-2 rounded-lg border border-white">
            Appointment
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
