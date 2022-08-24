import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RiMenuFoldLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import logo from "../assets/glassPlusLogo.jpg";
import { AiOutlineDown } from "react-icons/ai";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [bar, setBar] = useState(false);

  return (
    <>
      <div className="">
        <nav className="shadow fixed px-4 bg-white py-1 w-full h-14 flex justify-between item-center z-10 ">
          <div className="flex justify-between item-center w-full ">
            <div className={show ? "flex xs:-ml-2" : "flex xs:ml-6 "}>
              <img src={logo} alt="Logo" className="w-24 h-10" />
            </div>

            <div className="xs:flex  hidden ">
              {!bar ? (
                <BsSearch
                 onClick={()=>setBar(!bar)}
                  className={show? "mt-3 text-xl cursor-pointer  top-1 xs:right-3": "mt-3 text-xl cursor-pointer  top-1 xs:right-3"}
                />
              ) : (
                <div>
                  <input
                    type="search"
                    name="search"
                    className=" sm:flex border w-full px-2 py-[2px] mt-[5px] flex  rounded-md focus:outline-none focus:bg-blue-100"
                  />
                  {/* <CgClose className="mt-3 text-xl cursor-pointer absolute top-1 xs:right-3" /> */}
                </div>
              )}
            </div>

            <div className="md:w-1/3 py-1 flex xs:hidden ">
              <BsSearch className="mt-3 text-xl cursor-pointer absolute top-2 xs:right-3" />

              <input
                type="search"
                name="search"
                className=" md:flex border w-full pl-10 mt-1 pr-2 h-8 items-center justify-center -ml-2 rounded-md focus:outline-none focus:bg-blue-100"
              />
            </div>

            <div className="xs:hidden sm:flex px-4 flex place-content-center pt-2">
              <Link
                to={"/services"}
                className="pr-8 font-semibold text-lg text-blue-800"
              >
                Services
              </Link>
             
              <Link
                to={"/contact"}
                className=" font-semibold text-lg text-blue-800"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}

          <div
            className="menu"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <CgClose className="hidden xs:block absolute top-3 right-4 text-2xl -ml-2 text-black z-50" />
            ) : (
              <RiMenuFoldLine className="hidden xs:block absolute top-3 left-4 text-2xl -ml-2" />
            )}

            <div
              onClick={() => setShow(!show)}
              className={
                show
                  ? "w-[50%] h-screen absolute right-0 top-0 flex flex-col  pt-12 px-4 gap-6 z bg-white duration-300 italic"
                  : "hidden"
              }
            >
              <div>
                <Link
                  to={"/services"}
                  className="pr-8 font-semibold text-lg text-blue-800 "
                >
                  Services
                </Link>
              </div>
            
              <Link
                to={"/contact"}
                className=" font-semibold text-lg text-blue-800  "
              >
                Contact
              </Link>
            </div>
          </div>
          {/* sm:w-[20%] h-screen bg-white z-10 duration-300 */}
        </nav>
      </div>
    </>
  );
};

export default Nav;
