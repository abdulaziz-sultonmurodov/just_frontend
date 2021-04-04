import { useState } from "react";
import "../styles/navbar.css";
import { IoSearch } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { Link } from "react-router-dom"

import Logo from "../img/logo.jpg";

function NavBar() {
  const [icon, setIcon] = useState(<IoChevronDown />);

  return (
    <div className="flex navbar justify-between align-center">
      {/* <img src={Logo} alt="logo" className="logo"></img> */}
      <h1>JUST</h1>
      <ul className="flex">
      <li className="flex align-center mr-20">
        <Link className='text-decoration-none' to="/">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
          Главный
          </p>
        </Link>
          {/* <IoChevronDown /> */}
        </li>
        <li className="flex align-center mr-20">
          <Link className='text-decoration-none' to="/product">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
            Oдежда
          </p>
          </Link>
          <IoChevronDown />
        </li>
        <li className="flex align-center mr-20">
        <Link className='text-decoration-none' to="/about">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
          О нас
          </p>
        </Link>
          {/* <IoChevronDown /> */}
        </li>
        <li className="flex align-center mr-20">
        <Link className='text-decoration-none' to="/contact">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
          Контакт
          </p>
        </Link>
          {/* <IoChevronDown /> */}
        </li>
        <li className="flex align-center mr-20">
        <Link className='text-decoration-none' to="/locations">
          <p className="font-15 font-secondary uppercase  darkGrey pointer text-spacing hover-black">
          Локации
          </p>
        </Link>
          {/* <IoChevronDown /> */}
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
