import { Link } from "react-router-dom";
import search from "../assets/Icons/searchIcon.svg";
import cart from "../assets/Icons/cartIcon.svg";
import notification from "../assets/Icons/notificationIcon.svg";
import close from "../assets/Icons/closeIcon.svg";
import { useState } from "react";
import {useSelector} from 'react-redux'
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const {cartItems} = useSelector(state => state.product)
  return (
    <>
      <header className="w-full py-8 px-4 md:px-24">
        <div className="flex items-center justify-between">
          {/* hamburger img */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <div className="bg-[#333333] w-8 h-1" />
            <div className="bg-[#333333] my-1 w-8 h-1" />
            <div className="bg-[#333333] w-8 h-1" />
          </div>
          {/* Logo */}
          <h2 className=" font-stix font-bold text-2xl">ARTSY.</h2>
          {/* Nav container */}
          <ul className="hidden md:flex space-x-8 font-satoshi">
            <li>
              <Link to={'/'} className="relative group ">
                <span className="bg-[#333333] h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0  " />
                Home
              </Link>
            </li>
            <li>
              <Link to={'/marketplace'} className="relative group ">
                <span className="bg-[#333333] h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
                Marketplace
              </Link>
            </li>
            <li>
              <Link to={'/auction'} className="relative group ">
                <span className="bg-[#333333] h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
                Auction
              </Link>
            </li>
            <li>
              <Link to={'/drops'} className="relative group ">
                <span className="bg-[#333333] h-[0.1px] w-0 group-hover:w-full duration-500 absolute bottom-0" />
                Drops
              </Link>
            </li>
          </ul>
          <div className="flex  md:space-x-4">
            <img className="cursor-pointer w-8" src={search} />
            <Link to={"/cart"} className='relative'>

            <img className="cursor-pointer w-8" src={cart} />
            <span className='absolute -top-2 -right-2 text-white w-5 h-5 flex justify-center items-center rounded-full bg-red-400'>{cartItems.length}</span>
            </Link>
            <img
              className="hidden md:block cursor-pointer w-8"
              src={notification}
            />
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 h-screen ${
          toggleMenu ? "left-0" : "left-full"
        } w-screen p-6 bg-white z-[4000] duration-300 md:hidden`}
      >
        {/* header */}
        <div className="flex justify-between">
          <h2 className=" font-stix font-bold text-2xl">ARTSY.</h2>
          <div
            className="cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <img src={close} />
          </div>
        </div>
        {/* mobile nav item */}
        <ul className="space-y-8 mt-10 font-satoshi">
          <li>
            <Link onClick={() => {
              setToggleMenu(!toggleMenu);
            }}  className="text-2xl" to={'/'}>
              Home
            </Link>
          </li>
          <li>
          <Link onClick={() => {
              setToggleMenu(!toggleMenu);
            }} className="text-2xl" to={'/marketplace'}>
              Marketplace
            </Link>
          </li>
          <li>
          <Link onClick={() => {
              setToggleMenu(!toggleMenu);
            }} className="text-2xl" to={'/auction'}>
              Auction
            </Link>
          </li>
          <li>
          <Link onClick={() => {
              setToggleMenu(!toggleMenu);
            }} className="text-2xl" to={'/drops'}>
              Drop
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
