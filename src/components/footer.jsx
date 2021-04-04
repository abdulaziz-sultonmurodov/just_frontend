import "../styles/footer.css";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import Logo from "../img/logo.jpg";

function Footer() {
  return (
    <>
      <footer className=" flex-col justify-center align-center my-50 lighterGrey">
        <div className="footerContainer flex-wrap flex justify-center align-start">

          <div className='w-percent-20'>
            <ul className="uppercase font-11 text-spacing">
              <li className="mb-15 font-15 text-weight-900 black">Just</li>
              <li className="pointer hover-darkGrey mb-15">About</li>
              <li className="pointer hover-darkGrey mb-15">Careers</li>
              <li className="pointer hover-darkGrey mb-15">Collections</li>
              <li className="pointer hover-darkGrey mb-15">Delivery</li>
            </ul>
          </div>
          <div className='w-percent-20'>
            <ul className="uppercase font-11 text-spacing">
              <li className="mb-15 font-15 text-weight-900 black">Commerce</li>
              <li className="pointer hover-darkGrey mb-15">Contact</li>
              <li className="pointer hover-darkGrey mb-15">Location</li>
              <li className="pointer hover-darkGrey mb-15">Privacy Policy</li>
              <li className="pointer hover-darkGrey mb-15">News</li>
            </ul>
          </div>
          <div className='w-percent-20'>
            <ul className="uppercase font-11 text-spacing">
              <li className="mb-15 font-15 text-weight-900 black">Help</li>
              <li className="pointer hover-darkGrey mb-15">Account</li>
              <li className="pointer hover-darkGrey mb-15">Delivery</li>
            </ul>
          </div>
          <div className='w-percent-20'>
            <ul className="uppercase font-11 text-spacing ">
              <li  className='mb-15 font-15 text-weight-900 black'>Social Media</li>
              <a className="pointer hover-darkGrey mb-20 flex align-center">Telegram <FaTelegramPlane className='font-19 ml-10' /> </a>
              <a className="pointer hover-darkGrey mb-20 flex align-center">Instagram  <FaInstagram className='font-19 ml-10' /></a>
              <a className="pointer hover-darkGrey mb-20 flex align-center">Facebook    <FaFacebookF className='font-19 ml-10' /></a>
            </ul>
          </div>
          <div className='pointer flex justify-center'>
            <a href="#">
            <img
              className='w-percent-70 ml-50'
              src={Logo}
              alt=""
            />
            </a>
          </div>
        </div>
        
        <div className='flex justify-center align-center mt-50 uppercase'>
          <p className="m-0 font-11 text-weight-900 text-spacing">&copy;2021 Just LLC. All rights reserved</p>
        </div>
        
      </footer>
    </>
  );
}

export default Footer;
