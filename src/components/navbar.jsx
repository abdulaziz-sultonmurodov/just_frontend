import { useState } from "react";
import "../styles/navbar.css";
import { IoSearch } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

import Logo from "../img/logo.jpg";

function NavBar() {
  const [icon, setIcon] = useState(<IoChevronDown />);

  return (
    <div className="flex navbar justify-between align-center">
      <img src={Logo} alt="logo" className="logo"></img>
      <ul className="flex">
        <li className="flex align-center mr-20">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
            одежда
          </p>
          <IoChevronDown />
        </li>
        <li className="flex align-center mr-20">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
            ОБУВЬ
          </p>
          <IoChevronDown />
        </li>
        <li className="flex align-center mr-20">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
            НОВИНКИ
          </p>
          <IoChevronDown />
        </li>
        <li className="flex align-center mr-20">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
            АКСЕССУАРЫ
          </p>
          <IoChevronDown />
        </li>
        <li className="flex align-center mr-20">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
            РАСПРОДАЖА
          </p>
          <IoChevronDown />
        </li>
      </ul>
      <div>
        <IoSearch className="font-17 pointer" />
        <IoPersonCircleOutline className="font-17 ml-15 pointer" />
        <IoBag className="font-17 ml-15 pointer" />
      </div>
    </div>
  );
}

export default NavBar;
