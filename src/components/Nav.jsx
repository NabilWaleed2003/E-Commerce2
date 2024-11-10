import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { ShopContexts } from '../context/ShopContext';

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const { setShowSearch, cartCounts } = useContext(ShopContexts)

  return (
    <div className=" flex items-center justify-between py-4 font-medium">
      <Link to="/">
        <img src="imges/logo.png" alt="" className=" w-36" />
      </Link>

      <ul className=" hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/colliection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className=" flex items-center gap-3">
        <Link to="/colliection" >
          <CiSearch onClick={() => setShowSearch(true)} className="  text-xl font-semibold cursor-pointer w-5 " />
        </Link>


        <div className="group relative">
          <Link to='/login'>
            <IoPersonAddOutline className="  text-xl font-semibold cursor-pointer w-5 " /></Link>
          {/* <div className="absolute top-0 right-0 hidden group-hover:block pt-4">
            <div className="bg-white shadow-md rounded-md p-4 flex flex-col gap-2 w-36">
              <p className=" text-xs cursor-pointer">Create Account</p>
              <p className=" text-xs cursor-pointer">Login</p>
              <p className=" text-xs cursor-pointer">Login</p>
            </div>
          </div> */}

        </div>

        <Link className=" relative" to="/cart">
          <IoCartOutline className="  text-xl font-semibold cursor-pointer min-w-5 " />

          <p className=" absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {cartCounts}
          </p>

        </Link>

        <TbMenuDeep
          onClick={() => setOpen(true)}
          className="  text-xl font-semibold cursor-pointer w-5  sm:hidden"
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${open ? "w-full" : "w-0"
          }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setOpen(false)}
            className=" flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className=" h-4 rotate-180"
              src="imges/dropdown_icon.png"
              alt=""
            />
            <p>Black</p>
          </div>

          <NavLink
            to="/"
            className=" py-2 pl-6 border"
            onClick={() => setOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/colliection"
            className=" py-2 pl-6 border"
            onClick={() => setOpen(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            className=" py-2 pl-6 border"
            onClick={() => setOpen(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className=" py-2 pl-6 border"
            onClick={() => setOpen(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
